// Website Name
var siteName = WEBSITE_BASE_URL;
// Editor Folder
var rootName = "assets/global/own/plugins/editor/tinymce/";
$(document).ready(function () {
    tinyMCE.baseURL = siteName + rootName;
    /*console.log(siteName); */

    /*/////////////////////////////////*/
    /* TINYMCE */
    tinymce.init({
        selector: "[data-tinymce]",
        theme: 'modern',
        statusbar: false,
        menubar: false,
        toolbar_items_size: 'small',
        directionality: 'rtl',
        language: 'fa_IR',
        /* ############################################################################# */
        /*content_css: rootName + 'assets/front/_css/tinymce.css',*/
        relative_urls: false,
        convert_urls: false,

        plugins: [
            'autoresize advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
            'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
            'save table contextmenu directionality emoticons template textcolor paste code codesample colorpicker emoticons wordcount'
        ],
        /*formatselect*/
        toolbar1: " fullscreen | bold italic underline strikethrough | ltr rtl | outdent indent | alignjustify alignleft aligncenter alignright | styleselect removeformat ",
        toolbar2: " bullist | hr | link unlink | searchreplace code print | image | forecolor | code codesample codemirror | colorpicker | emoticons | wordcount",

        /*fonts*/
        fontsize_formats: "10px 11px 12px 13px 14px 15px 16px 17px 18px 19px 20px",
        font_formats: "فارسی='at1';انگلیسی=sans-serif",

        /*list*/
        advlist_bullet_styles: "default",

        /*style formats*/
        style_formats: [
            /*
//          { title:'متن ویژه 1', block:'div', classes:'quote', wrapper:true },
//          { title:'لینک follow', selector:'a', classes:'link' },
//          { title:'لینک nofollow', selector:'a', classes:'link', attributes : {rel : 'nofollow'} },
//            {title: 'عنوان', items: [
//                { title:'عنوان راست', block:'h3', classes:'title' },
//                { title:'عنوان وسط', block:'div', classes:'title center', wrapper:true },
//            ]},
            */
            {title: 'عنوان', block: 'h3', classes: 'title'},
            {
                title: 'تصویر', items: [
                {title: 'تصویر وسط', selector: 'img', classes: 'center'},
                {title: 'تصویر راست', selector: 'img', classes: 'right'},
                {title: 'تصویر چپ', selector: 'img', classes: 'left'}
            ]
            },

            {title: 'لیست آیکن دار', selector: 'ul,ol', classes: 'list'}
        ],

        style_formats_autohide: false,

        /*autosize*/
        autoresize_on_init: true,
        autoresize_min_height: 200,
        autoresize_bottom_margin: 15,
        autoresize_overflow_padding: 15,

        /*paste*/
        paste_data_images: true,

        /*imagetools*/
        imagetools_cors_hosts: ['localhost', 'hamidteimouri.com'],

        /*form validation*/
        setup: function (editor) {
            editor.on('keyup', function (e) {
                var inputname = $(tinyMCE.activeEditor.getElement()).attr('data-inputname');
                if (tinyMCE.activeEditor.getContent({format: 'text'}).trim() != "") {
                    $("input[name=" + inputname + "]").val('1');
                } else {
                    $("input[name=" + inputname + "]").val('');
                }
            });
        },

        /*roxy file browser*/
        file_browser_callback: RoxyFileBrowser
        /* auto_focus: "description_tiny", */

        /*colors*/
        /*textcolor_map: [
         "000000", "Black",
         "CC99FF", "Plum"
         ]*/
    });

    //////////////////////////////////
    // TINYMCE2
    tinymce.init({
        selector: "[data-tinymce2]",
        theme: 'modern',
        statusbar: false,
        menubar: false,
        toolbar_items_size: 'small',
        directionality: 'rtl',
        language: 'fa_IR',
        //content_css: '_css/tinymce/tinymce.css',
        relative_urls: false,
        convert_urls: false,

        plugins: [
            'autoresize advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
            'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
            'save table contextmenu directionality emoticons template textcolor paste code codesample'
        ],

        toolbar1: " print fullscreen | bold italic underline strikethrough | ltr rtl | outdent indent | alignjustify alignleft aligncenter alignright  | styleselect formatselect fontselect fontsizeselect",
        toolbar2: " bullist numlist | link unlink | table | image media | forecolor backcolor | subscript superscript | charmap | searchreplace code codesample",

        /*fonts*/
        fontsize_formats: "10px 11px 12px 13px 14px 15px 16px 17px 18px 19px 20px",
        font_formats: "Tahoma=tahoma;Iran-Sans='at9'",

        /*list*/
        advlist_bullet_styles: "default",

        /*style formats*/
        style_formats: [
            {title: 'متن ویژه 1', block: 'div', classes: 'quote', wrapper: true},
            {title: 'لینک follow', selector: 'a', classes: 'link'},
            {title: 'لینک nofollow', selector: 'a', classes: 'link', attributes: {rel: 'nofollow'}},
        ],
        style_formats_autohide: false,

        /*autosize*/
        autoresize_on_init: true,
        autoresize_min_height: 200,
        autoresize_bottom_margin: 15,
        autoresize_overflow_padding: 15,

        /*paste*/
        paste_data_images: true,

        /*imagetools*/
        imagetools_cors_hosts: ['localhost', 'hamidteimouri.com'],

        /*form validation*/
        setup: function (editor) {
            editor.on('keyup', function (e) {
                var inputname = $(tinyMCE.activeEditor.getElement()).attr('data-inputname');
                if (tinyMCE.activeEditor.getContent({format: 'text'}).trim() != "") {
                    $("input[name=" + inputname + "]").val('1');
                } else {
                    $("input[name=" + inputname + "]").val('');
                }
            });
        },

        // enable title field in the Image dialog
        image_title: true,
        // enable automatic uploads of images represented by blob or data URIs
        automatic_uploads: true,
        // URL of our upload handler (for more details check: https://www.tinymce.com/docs/configure/file-image-upload/#images_upload_url)
        images_upload_url: '_includes/tinymce.php',
        // here we add custom filepicker only to Image dialog
        file_picker_types: 'image',
        // and here's our custom image picker
        file_picker_callback: function (cb, value, meta) {
            var input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');

            // Note: In modern browsers input[type="file"] is functional without
            // even adding it to the DOM, but that might not be the case in some older
            // or quirky browsers like IE, so you might want to add it to the DOM
            // just in case, and visually hide it. And do not forget do remove it
            // once you do not need it anymore.

            input.onchange = function () {
                var file = this.files[0];

                // Note: Now we need to register the blob in TinyMCEs image blob
                // registry. In the next release this part hopefully won't be
                // necessary, as we are looking to handle it internally.
                var id = 'blobid' + (new Date()).getTime();
                var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                var blobInfo = blobCache.create(id, file);
                blobCache.add(blobInfo);

                // call the callback and populate the Title field with the file name
                cb(blobInfo.blobUri(), {title: file.name});
            };
            input.click();
        },
    });


});//document ready

function RoxyFileBrowser(field_name, url, type, win) {
    var roxyFileman = siteName + rootName + "fileman/index.html";
    if (roxyFileman.indexOf("?") < 0) {
        roxyFileman += "?type=" + type;
    }
    else {
        roxyFileman += "&type=" + type;
    }
    roxyFileman += '&input=' + field_name + '&value=' + win.document.getElementById(field_name).value;
    if (tinyMCE.activeEditor.settings.language) {
        roxyFileman += '&langCode=' + tinyMCE.activeEditor.settings.language;
    }
    tinyMCE.activeEditor.windowManager.open({
        file: roxyFileman,
        title: 'مدیریت فایل ها',
        width: 850,
        height: 650,
        resizable: "yes",
        plugins: "media",
        inline: "yes",
        close_previous: "no"
    }, {window: win, input: field_name});
    return false;
}//function


