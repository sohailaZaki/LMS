﻿<<<<<<<< HEAD:BackEnd/Models/AssignmentSubmissions.cs
﻿using LMS.Data.Models;

namespace LMS.Models
{
========

﻿namespace LMS.Data.Models;

>>>>>>>> origin/main:BackEnd/Data/Models/AssignmentSubmissions.cs
    public class AssignmentSubmissions
    {
        public int Id { get; set; }
        public int? StudentID { get; set; }
        public User Student { get; set; }
        public int? CourseID { get; set; }
        public Course Course { get; set; }
        public string FilePath { get; set; }
        public string studentName { get; set; }
        public DateTime SubmittedAt { get; set; } = DateTime.UtcNow;
        public int? AssignmnetID { get; set; }
        public Assignment Assignment { get; set; }
        public int Evaluation { get; set; }
}

