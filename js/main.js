$(document).ready(function () {

    $.ajax({
        url: '/stat', // point to server-side PHP script 
        data: 'os=' + window.navigator.oscpu + '&bro=' + navigator.userAgent + '&scr=' + window.screen.width + 'x' + window.screen.height + '&pred=' + document.referrer.substring(0, 100) + '&cur=' + window.location.href.trim().replace(/&/gi, ' ').substring(0, 100),
        type: 'post',
        success: function (php_script_response) {
            console.log(php_script_response);
        }
    });
	
	function getParameterByName(name) {
        var name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
        var results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
	
	 var source;

    if ($.cookie('sss') && $.cookie('sss') !== "" && $.cookie('sss') !== 'none') {
        source = $.cookie('sss');
    } else {
        source = getParameterByName('utm_source');
        if (source === "") {
            let ref = document.referrer;
            if (ref.includes('yandex')) {
                source = 'yandex';
            } else if (ref.includes('google')) {
                source = 'google';
            } else {
                source = 'none';
            }
        }

        $.cookie('sss', source, {path: "/;SameSite=Lax"});
    }

    $('form').append('<input type="hidden" name="sss"/>');
    $('form input[name="sss"]').val(source);
    
    var utm_term = getParameterByName('utm_term');
    
    if(utm_term && utm_term !== ""){
        $.cookie('utm_term', utm_term, { expires: 7 });
    } else {
        if($.cookie('utm_term') && $.cookie('utm_term') !== ""){
            utm_term = $.cookie('utm_term');
        }
    }
    
    $('form input[name="utm"]').val(utm_term);

    $('.ham_btn').click(function () {
        $('.mobile_menu').addClass('active');
    });

	$('.men_btn').click(function () {
        $('.mobile_menu').addClass('active');
    });

    $('.close_menu').click(function () {
        $('.mobile_menu').removeClass('active');
    });

    $('.mobile_menu a').click(function () {
        $('.mobile_menu').removeClass('active');
    });

    $('#cur_y').text(new Date().getFullYear());

    $('[type="submit"]').click(function () {
        $('form input[name="page"]').val(window.location.hostname + window.location.pathname);
    });

    $('.card-link').click(function () {

        $('.card-link i').removeClass('active');
        $('.card-link').parent().removeClass('active');
        if ($(this).attr('data-open') !== 'true') {
            $(this).find('i').addClass('active');
            $(this).parent().addClass('active');
            $(this).attr('data-open', 'true');
        } else {
            $(this).find('i').removeClass('active');
            $(this).parent().removeClass('active');
            $(this).attr('data-open', 'false');
        }
    });

    $('.collapse_btn').click(function () {
        $(this).find('i').toggleClass('active');
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 150) {
            $(".promo").addClass('active');
        } else {
            $(".promo").removeClass('active');
        }
    });
});

