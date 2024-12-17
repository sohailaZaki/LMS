using System.IO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic.FileIO;

namespace LMS.Handelrs
{
    public class UploadHandelr
    {
        public string Uploadfile(IFormFile file,int fileType) {
            string path;
            List<string> vaildExtenstions = [".pdf", ".pptx", ".txt", ".docx", ".xlsx", ".csv"];
            var extenstion = Path.GetExtension(file.FileName);
            if (vaildExtenstions.Contains(extenstion))
            {
               
                string fileName = Path.GetFileName(file.FileName) ;
                if (fileType == 1)
                {
                     path = Path.Combine(Directory.GetCurrentDirectory(), "Uploads\\Lectures\\");
                }
                else if (fileType == 2)
                {
                     path = Path.Combine(Directory.GetCurrentDirectory(), "Uploads\\Labs\\");

                }
                else if (fileType == 3)
                {
                     path = Path.Combine(Directory.GetCurrentDirectory(), "Uploads\\Videos\\");
                }
                else if (fileType == 4)
                {
                    path = Path.Combine(Directory.GetCurrentDirectory(), "Uploads\\Assesment\\");
                }
                else
                   path = Path.Combine(Directory.GetCurrentDirectory(), "Uploads\\");
                if (!Directory.Exists(path))
                {
                    Directory.CreateDirectory(path);
                }
                using FileStream stream = new FileStream(path + fileName,FileMode.Create);
                file.CopyTo(stream);
                return path+fileName;

            }
            else return ($"not vaild extension{extenstion} you can only upload these extenstions ({string.Join(',', vaildExtenstions)})");
    

        }
    
        public string[] getUploadedfiles(int filetype)
        {
            string path;
            string[] LecturesFiles;
            if(filetype == 1)
            {
                List<string> Lectures = new List<string>();
                path = Path.Combine(Directory.GetCurrentDirectory(), "Uploads\\Lectures\\");
                if (Directory.Exists(path))
                {
                LecturesFiles = Directory.GetFiles(path);

                return LecturesFiles;
                }
            }
            else if(filetype == 2)
            {
                string[] LabsFiles;
                path = Path.Combine(Directory.GetCurrentDirectory(), "Uploads\\Labs\\");
                if (Directory.Exists(path))
                {
                    LabsFiles = Directory.GetFiles(path);
                    return LabsFiles;
                }
            }
            else if (filetype == 3)
            {
                string[] VideosFiles;
                path = Path.Combine(Directory.GetCurrentDirectory(), "Uploads\\Videos\\");
                if (Directory.Exists(path))
                {
                    VideosFiles = Directory.GetFiles(path);
                    return VideosFiles;
                }
            }
            else if (filetype == 4)
            {
                string[] AssesmentsFiles;
                path = Path.Combine(Directory.GetCurrentDirectory(), "Uploads\\Assesment\\");
                if (Directory.Exists(path))
                {
                    AssesmentsFiles = Directory.GetFiles(path);
                    return AssesmentsFiles;
                }
    
            }
            return ["There isn't files to get"];
        }

        //public IActionResult openfile(string fileName,int fileType)
        //{
        //    string path;
        //    if (fileType == 1)
        //    {
        //        path = Path.Combine(Directory.GetCurrentDirectory(), "Uploads\\Lectures\\", fileName);
        //    }
        //    else if (fileType == 2)
        //    {
        //        path = Path.Combine(Directory.GetCurrentDirectory(), "Uploads\\Labs\\", fileName);
        //    }
        //    else if (fileType == 3)
        //    {
        //        path = Path.Combine(Directory.GetCurrentDirectory(), "Uploads\\Videos\\", fileName);
        //    }
        //    else
        //    {
        //        path = Path.Combine(Directory.GetCurrentDirectory(), "Uploads\\Assesment\\", fileName);
        //    }
        //    if (System.IO.File.Exists(path))
        //    {
        //    var fileBytes = System.IO.File.ReadAllBytes(path);
                
        //        return File(fileBytes, "application/octet-stream", fileName);

        //    }
        //    else
        //    {
        //        return NotFound($"The file {fileName} was not found.");
        //    }
        //}
    }
}
