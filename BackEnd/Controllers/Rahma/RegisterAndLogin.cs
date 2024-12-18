using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
//using LMS.Models;
using LMS.Data;
using System.Data;
using LMS.Data.Models;

namespace LMS.Controllers.Rahma
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterAndLogin : ControllerBase
    {
        private readonly AppDbContext _context;
        public RegisterAndLogin(AppDbContext context)
        {
            _context = context;
        }
        [HttpPost("Register")]
        public async Task<IActionResult> Register(User user)
        {
            if (user == null) { return BadRequest(); }

            // Set default status to 'pending' for new users
            //user.Status = "pending";
            // Assign default status to 'pending' if user.Status is null or empty
            user.Status = string.IsNullOrWhiteSpace(user.Status) ? "pending" : user.Status;

            // Check if the email already exists in the database
            var existingUserWithEmail = await _context.Users
                                                       .FirstOrDefaultAsync(u => u.Email == user.Email);

            if (existingUserWithEmail != null)
            {
                return BadRequest(new { Message = "Email is already taken." });
            }

            // Check if the username already exists in the database
            var existingUserWithUsername = await _context.Users
                                                         .FirstOrDefaultAsync(u => u.UserName == user.UserName);

            if (existingUserWithUsername != null)
            {
                return BadRequest(new { Message = "Username is already taken." });
            }
            // Ensure role exists (case-insensitive comparison)
            var role = await _context.Roles
                                     .Where(r => r.Name.ToLower() == user.RoleName.ToLower())
                                     .FirstOrDefaultAsync();

            if (role == null)
            {
                // If the role doesn't exist, return an error
                return BadRequest("Invalid role");
            }


            //return Ok("User registered successfully");
            user.RoleID = role.Id; // Assign the correct RoleId to the user
            _context.Users.Add(user); // Add the user to the User table
            role.Users.Add(user);
            await _context.SaveChangesAsync(); // Save changes

            // Verify that the user was added to the Role's Users list (for debugging)
            var roleWithUsers = await _context.Roles
                                              .Include(r => r.Users)
                                              .FirstOrDefaultAsync(r => r.Id == role.Id);

            return Ok(new
            {
                Message = "User registered successfully",
                RoleName = roleWithUsers.Name,
                Users = roleWithUsers.Users.Select(u => new { u.Id, u.FirstName, u.LastName })
            });
        }

        public class LoginRequest
        {
            public string Email { get; set; }
            public string Password { get; set; }

        }


        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            // Validate if both email and password are provided
            if (string.IsNullOrEmpty(request.Email) || string.IsNullOrEmpty(request.Password))
            {
                return BadRequest("Email and password are required.");
            }
            //var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email);
            var user = await _context.Users
            .FirstOrDefaultAsync(u => EF.Functions.Collate(u.Email, "SQL_Latin1_General_CP1_CS_AS") == request.Email);

            // Check if the user exists
            if (user == null)
            {
                return Unauthorized(new { message = "Invalid email or password." });
            }

            // Compare entered password with stored password (no encryption)
            if (user.Password != request.Password)  // This compares plain text passwords (not recommended)
            {
                return Unauthorized(new { message = "Invalid email or password." });
            }

            // Check if the user's status is pending or deactivated
            if (user.Status.ToLower() == "pending" || user.Status.ToLower() == "deactivated")
            {
                return Unauthorized(new { message = $"Account status '{user.Status}' does not allow login." });
            }

            // If valid, return success message
            return Ok(new
            {
                Message = "Login successful",
                UserId = user.Id,
                Email = user.Email,
                UserName = user.UserName,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Status = user.Status,
                RoleName = user.RoleName
            });
        }
    }
}
