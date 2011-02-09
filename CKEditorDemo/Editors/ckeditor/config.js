/*
    配置文件
*/

CKEDITOR.editorConfig = function (config) {

    config.toolbar = 'Basic';
    //config.skin = 'v2';
    config.startupFocus = false;

    //文件路劲
    config.filebrowserUploadUrl = 'fileUpload.ashx?Type=File';
    config.filebrowserImageUploadUrl = 'fileUpload.ashx?Type=Image';
    config.filebrowserFlashUploadUrl = 'fileUpload.ashx?Type=Flash';

    //smiley
    config.smiley_images = [
//    'regular_smile.gif', 'sad_smile.gif', 'wink_smile.gif', 'teeth_smile.gif', 'confused_smile.gif', 'tounge_smile.gif',
//    'embaressed_smile.gif', 'omg_smile.gif', 'whatchutalkingabout_smile.gif', 'angry_smile.gif', 'angel_smile.gif', 'shades_smile.gif',
//    'devil_smile.gif', 'cry_smile.gif', 'lightbulb.gif', 'thumbs_down.gif', 'thumbs_up.gif', 'heart.gif',
//    'broken_heart.gif', 'kiss.gif',    
     'envelope.gif'    
    ];
    //config.smiley_path = 'http://www.example.com/images/smileys/';


    //toolbar
    config.toolbar_Full =
    [
        ['Preview', '-'],
        ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Print', 'SpellChecker'], //, 'Scayt' 
        ['Undo', 'Redo', '-', 'Find', 'Replace', '-', 'SelectAll', 'RemoveFormat'],
        '/',
        ['Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript'],
        ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'Blockquote'],
        ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
        ['Link', 'Unlink', 'Anchor'],
        ['Image', 'Flash', 'Smiley', 'Table', 'HorizontalRule', 'SpecialChar'],
        '/',
        ['Styles', 'Format', 'Templates'],
        ['Maximize', 'ShowBlocks']
       
    ];   
    config.toolbar_Basic =
    [
        ['Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink']
    ];
   
};

