jQuery(document).ready(function () {  
  $(".lan_select").change(function () {  
    loadProperties($(".lan_select").val());  
  });
});

loadProperties(jQuery.i18n.normaliseLanguageCode());
  
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
            console.badgelog("i18n",type);
        }  
    }); 
}