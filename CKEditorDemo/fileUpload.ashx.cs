using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CKEditorDemo
{
    /// <summary>
    /// 文件上传
    /// </summary>
    public class fileUpload : IHttpHandler
    {
        public void ProcessRequest(HttpContext context)
        {
            //清空之前的输出
            context.Response.Clear();

            //是否有文件上传
            if (HttpContext.Current.Request.Files.Count <= 0) return;

            string errorString = string.Empty;
            HttpPostedFile file = HttpContext.Current.Request.Files[0];
            string extension = GetFileExt(file.FileName.Trim());
            string webPath = "upload/" + GetNewFileName(extension);
            string absolutePath = HttpContext.Current.Request.MapPath(webPath);

            #region 合法性判断
            //大小、类型、权限等等判断        
            #endregion

            try
            {
                file.SaveAs(absolutePath);
            }
            catch
            {
                errorString = "上传失败!";
            }

            //输出            
            string outPut = string.Format(@"<script type=""text/javascript"">window.parent.CKEDITOR.tools.callFunction(4, '{0}', '{1}');</script>",
                errorString.Length > 0 ? string.Empty : webPath,
                errorString);
            context.Response.Write(outPut);
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }

        #region 工具方法
        /// <summary>
        /// 取路径中的文件扩展名
        /// </summary>
        /// <param name="path">路径</param>
        /// <returns></returns>
        public static string GetFileExt(string path)
        {
            return path.Substring(path.LastIndexOf('.') + 1);
        }

        /// <summary>
        /// 获取一个新的文件名(时间+随机数字)
        /// </summary>
        /// <param name="extension">扩展名(如：jpg)</param>
        /// <returns>新文件名称</returns>
        public static string GetNewFileName(string extension)
        {
            Random random = new Random(DateTime.Now.Millisecond);
            return string.Format("{0}{1}.{2}", 
                DateTime.Now.ToString("yyyyMMddHHmmssfff"), 
                random.Next(0, 9999).ToString("0000"), 
                extension.Replace(".", string.Empty).Trim()
            );
        }
        #endregion
    }
}