using Microsoft.AspNetCore.Http;
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
                string fileName = Guid.NewGuid().ToString() + extenstion;
                if (fileType == 1)
                {
                     path = Path.Combine(Directory.GetCurrentDirectory(), "Uploads\\Lectures");
                }
                else if (fileType == 2)
                {
                     path = Path.Combine(Directory.GetCurrentDirectory(), "Uploads\\Labs");

                }
                else if (fileType == 3)
                {
                     path = Path.Combine(Directory.GetCurrentDirectory(), "Uploads\\Videos");
                }
                else if (fileType == 4)
                {
                    path = Path.Combine(Directory.GetCurrentDirectory(), "Uploads\\Assesment");
                }
                else
                   path = Path.Combine(Directory.GetCurrentDirectory(), "Uploads");
                    using FileStream stream = new FileStream(path + fileName,FileMode.Create);
                file.CopyTo(stream);
                return path+fileName;

            }
            else return ($"not vaild extension{extenstion} you can only upload these extenstions ({string.Join(',', vaildExtenstions)})");
    

        }
    }
}
