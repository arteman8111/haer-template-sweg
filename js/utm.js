$(document).ready(function () {
    function getParameterByName(name) {
        var name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
        var results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    
    var utm_term = getParameterByName('utm_term');
    
    if(utm_term && utm_term !== ""){
        $.cookie('utm_term', utm_term, { expires: 7 });
    } else {
        if($.cookie('utm_term') && $.cookie('utm_term') !== ""){
            utm_term = $.cookie('utm_term');
        }
    }
    
    $('form').append('<input type="hidden" name="utm" value="">'); 
    
    $('form input[name="utm"]').val(utm_term);
});

