<<<<<<<< HEAD:BackEnd/Data/Models/AssignmentSubmissions.cs
﻿namespace LMS.Data.Models
========
﻿using LMS.Data.Models;

namespace LMS.Models
>>>>>>>> b7c2a7b6618d4884c01822398c91893cba74eefc:BackEnd/Models/AssignmentSubmissions.cs
{
    public class AssignmentSubmissions
    {
        public int Id { get; set; }
        public int? StudentID { get; set; }
        public User Student { get; set; }
        public int? CourseID { get; set; }
        public Course Course { get; set; }
        public string FilePath { get; set; }
        public DateTime SubmittedAt { get; set; } = DateTime.UtcNow;
        public int? AssignmnetID { get; set; }
        public Assignment Assignment { get; set; }
    }
}
