<%@ Page Title="主页" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true"
    CodeBehind="Default.aspx.cs" Inherits="CKEditorDemo._Default" %>

<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
    <!--CKEditor主文件-->
    <script src="Editors/ckeditor/ckeditor.js" type="text/javascript"></script>
    <!--修正图片弹出框中的Tab按钮-->
    <script src="Editors/ckeditor/extensions/dialogSetting.js" type="text/javascript"></script>
</asp:Content>
<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">
    <textarea cols="80" id="editor1" name="editor1" rows="10">&lt;html&gt;&lt;head&gt;&lt;title&gt;CKEditor Sample&lt;/title&gt;&lt;/head&gt;&lt;body&gt;&lt;p&gt;This is some &lt;strong&gt;sample text&lt;/strong&gt;. You are using &lt;a href="http://ckeditor.com/"&gt;CKEditor&lt;/a&gt;.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</textarea>
    <br />
    <br />
    <input id="btnGetValue" type="button" value="获取数据测试" onclick="btnGetValue_onclick()" />
    <br />
    <br />
    <textarea cols="80" id="Textarea2" name="editor2" rows="10">&lt;html&gt;&lt;head&gt;&lt;title&gt;CKEditor Sample&lt;/title&gt;&lt;/head&gt;&lt;body&gt;&lt;p&gt;This is some &lt;strong&gt;sample text&lt;/strong&gt;. You are using &lt;a href="http://ckeditor.com/"&gt;CKEditor&lt;/a&gt;.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</textarea>
    <script type="text/javascript">

        //创建CKEDITOR 1
        CKEDITOR.replace('editor1');
        //获取数据测试
        function btnGetValue_onclick() {
            alert(CKEDITOR.instances.editor1.getData() //获取数据
            );
        }

        //创建CKEDITOR 2
        CKEDITOR.replace('editor2', {
            toolbar: 'Full' //指定toolbar
        });         
    </script>
</asp:Content>
