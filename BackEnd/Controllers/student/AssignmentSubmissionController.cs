using LMS.Data;
using LMS.Data.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.IO;
using System.Threading.Tasks;

namespace LMS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssignmentSubmissionController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly string _fileUploadPath = Path.Combine(Directory.GetCurrentDirectory(), "UploadedFiles");

        public AssignmentSubmissionController(AppDbContext context)
        {
            _context = context;

            if (!Directory.Exists(_fileUploadPath))
            {
                Directory.CreateDirectory(_fileUploadPath);
            }
        }

        [HttpPost("student-submit")]
        public async Task<IActionResult> SubmitAssignment([FromForm] int studentId, [FromForm] int courseId, [FromForm] int assignmentId, [FromForm] IFormFile file)
        {
            // التحقق من وجود الملف
            if (file == null || file.Length == 0)
            {
                return BadRequest(new { Message = "No file uploaded." });
            }

            try
            {
                // تحديد مسار حفظ الملف
                var filePath = Path.Combine(_fileUploadPath, file.FileName);

                // حفظ الملف على الخادم
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }

                // إضافة البيانات إلى قاعدة البيانات
                var submission = new AssignmentSubmissions
                {
                    StudentID = studentId,
                    AssignmnetID = assignmentId,
                    FilePath = filePath,
                    studentName = (await _context.Users.FirstOrDefaultAsync(u => u.Id == studentId))?.UserName,
                    SubmittedAt = DateTime.UtcNow,
                };

                _context.AssignmentSubmissions.Add(submission);
                await _context.SaveChangesAsync();

                return Ok(new { Message = "Assignment submitted successfully!" });
            }
            catch (Exception ex)
            {
                // التعامل مع الأخطاء
                return StatusCode(500, new { Message = "An error occurred while processing the file.", Error = ex.Message });
            }
        }

    }
}
