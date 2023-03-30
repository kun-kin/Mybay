$(window).scroll(function() {
    var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > headerHeight) {
        $('.header').addClass('header-fixed');
    } else {
        $('.header').removeClass('header-fixed');
    }

    //scroll to div
    // if ($(this).scrollTop() >= $('.navigator').offset().top) {
    //     $('.navigator-container').addClass('fixed');
    //     $('.navigator-logo').show();
    // } else {
    //     $('.navigator-container').removeClass('fixed');
    //     $('.navigator-logo').hide();
    // }
});


/* back to top */
var btn = $('#backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});




$(document).ready(function() {


    $('.counter-value').counterUp({
        delay: 10,
        time: 1000
    });

    // $('#check-in').datepicker();
    // $('#check-out').datepicker();
    // $("#checkIn").flatpickr({
    //     dateFormat: "d/m/Y"
    // });
    // $("#checkOut").flatpickr({
    //     dateFormat: "d/m/Y"
    // });
    $(".hasDatepicker").flatpickr({
        dateFormat: "d/m/Y"
    });

    $(".js-menu-toggle").click(function() {
        $('.menu').slideToggle();
    });

    // $(".bar_group").click(function() {
    //     if ($(window).width() < 1023) {
    //         $('.main_nav').slideToggle();
    //     }
    // });


    // $('.header_navhover').hover(function() {
    //     if ($(window).width() > 1024) {
    //         $('.navContent').stop().slideDown("600");
    //     }
    // }, function() {
    //     if ($(window).width() > 1024) {
    //         $('.navContent').stop().slideUp("600");
    //     }
    // })

    // $(".header-burger").click(function() {
    //     $('.menu').addClass('active');
    // });
    // $(".menu-btn").click(function() {
    //     $('.menu').removeClass('active');
    // });







    //hover function
    // $(".menu-left .menu-left__link").mouseover(function() {
    //     $(this).addClass('open').removeClass('unhovered');
    //     $('.menu-left__link').not($(this)).addClass('unhovered');
    // });
    // $(".menu-left .menu-left__link").mouseout(function() {
    //     $(this).removeClass('open');
    // });

    // $(document).mouseup(function(e) {
    //     if ($(e.target).closest(".paxCount-dropmain").length ===
    //         0) {
    //         $('.paxCount-dropmain').removeClass('active');
    //     }
    // });

    $('input[name=groupway]').each(function() {
        var select_id = $('input[name=groupway]:checked').attr('id');
        if (select_id == 'oneway') {
            $('#boxReturndate').addClass('f');
        }
    });





});