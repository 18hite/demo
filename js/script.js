$(document).ready(function () {
    $("#slider1").owlCarousel({
        items: 1,
        loop: true,
        // center: true,
        nav: false,
        // dotsData:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            800: {
                items: 4,
                nav: false
            },
            1000: {
                items: 1,
                nav: true,
                // loop: false
            }
        }
    });

    new WOW().init();

    var owl = $('#slider1');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function (event) {
        new WOW().init();
    })

    $('#slider2').owlCarousel({
        loop:true,
        margin:10,
        // nav:true,
        autoplay:true,
        items:2
    })

    $('#slider3').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        items:3 ,
        dots:false
    })

    $('#scroll_top').fadeOut()

    $(window).scroll(function(){
        var x = $(window).scrollTop()
        // console.log(x)

        if(x>200){
            $('.head').addClass('sticky')
            $('#scroll_top').fadeIn()
        }
        else{
            $('.head').removeClass('sticky')
            $('#scroll_top').fadeOut()
        }
    })
    $('#scroll_top').click(function () {
        $(window).scrollTop(0)
    })
    $('#loader').delay(3000).fadeOut()
});



   