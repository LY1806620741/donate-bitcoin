var LANGUAGE_Index = "zh_CN"; //标识语言  
  
jQuery(document).ready(function () {  
  LANGUAGE_Index = jQuery.i18n.normaliseLanguageCode();
  loadProperties(LANGUAGE_Index);  
});  
  
  
$(".lan_select").change(function () {  
    LANGUAGE_Index=$(".lan_select").val()
    loadProperties(LANGUAGE_Index);  
});
  
  
function loadProperties(type) {  
    jQuery.i18n.properties({  
        name: 'index',
        path: 'asset/i18n/', 
        mode: 'map',  
        language: type,
        cache: false,  
        encoding: 'UTF-8',  
        callback: function () {
            $("title").html($.i18n.prop('title'));
        }  
    });  
}