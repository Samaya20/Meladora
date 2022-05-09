// ---- Navbar Scroll----

$(document).ready(function(){
    window.addEventListener('scroll',function(){
        $('.header-2').toggleClass('sticky', window.scrollY > 25);
    })
})

// ---- Mobile Menu ----

$(document).ready(function(){
    $('.bar').click(function(){
        $('#mobile-menu').toggleClass('active');
    })
})

// ---- Carousel ----

$('.owl-carousel').owlCarousel({
    loop:true,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        700:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

