jQuery(document).ready(function () {  
  $(".lan_select").change(function () {  
    loadProperties($(".lan_select").val(),true);
  });
  i18nreload();
});

loadProperties(jQuery.i18n.normaliseLanguageCode());
  
function loadProperties(type,reload=false) {  
    jQuery.i18n.properties({  
        name: 'index',
        path: 'asset/i18n/', 
        mode: 'map',  
        language: type,
        cache: false,  
        encoding: 'UTF-8',
        callback: function(){
          console.badgelog("i18n",type);
          if (reload)i18nreload()
        }
    }); 
}

function i18nreload() {
  $("title").html($.i18n.prop('title'));
  organization=$.i18n.prop('people_name');
  $("#donatemessage").html($.i18n.prop('donate_message',organization));
  donate();
}  