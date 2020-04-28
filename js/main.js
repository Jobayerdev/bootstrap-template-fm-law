


// Function Activation
$(document).ready(function(){
    
    wowScrollAnimation();
    new WOW().init();
    GalleryFunction();
    OwlCarouselFunction();
    SlickMobileMenuFunction();
    isotop();


});

// Wow Animation 
function wowScrollAnimation() {
    // // Home Page
    $(".primary-title,.see-more").find("*").addClass("wow fadeInUp").attr({'data-wow-delay':'0.5s','data-wow-duration':'1s'});

    $(".achievement li:nth-child(1)").addClass("wow fadeInLeft").attr({'data-wow-delay':'0.5s','data-wow-duration':'1s'});
    $(".achievement li:nth-child(2)").addClass("wow fadeInLeft").attr({'data-wow-delay':'0.8s','data-wow-duration':'1s'});
    $(".achievement li:nth-child(3)").addClass("wow fadeInLeft").attr({'data-wow-delay':'1.2s','data-wow-duration':'1s'});
    $(".single-case").addClass("wow fadeInUp").attr({'data-wow-delay':'0.6s','data-wow-duration':'1s'});
    $(".contributor").addClass("wow fadeInUp").attr({'data-wow-delay':'0.6s','data-wow-duration':'1s'});
    $(".documents-table").addClass("wow fadeInLeft").attr({'data-wow-delay':'0.6s','data-wow-duration':'1s'});
    $(".scrolling-offices").addClass("wow fadeInRight").attr({'data-wow-delay':'0.6s','data-wow-duration':'1s'});
    $(".profile").addClass("wow fadeInUp").attr({'data-wow-delay':'0.6s','data-wow-duration':'1s'});
    $(".comment").addClass("wow fadeInUp").attr({'data-wow-delay':'0.6s','data-wow-duration':'1s'});
    $(".reply-comment").addClass("wow fadeInUp").attr({'data-wow-delay':'0.6s','data-wow-duration':'1s'});
    $(".article").addClass("wow fadeInUp").attr({'data-wow-delay':'0.6s','data-wow-duration':'1s'});
}

// Gallery Function
function GalleryFunction(){
    $('a[data-imagelightbox="imageligtbox"]').imageLightbox({
        activity: true,
        arrows: true,
        button: true,
        caption: true,
        navigation: true,
        overlay: true,
        quitOnDocClick: false,
        selector: 'a[data-imagelightbox="f"]'
    });
}



// Owl Carousel Function
function OwlCarouselFunction(){
    $('.gallery-sliders').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 3000,
        navSpeed: 4000,
        dotsSpeed: 4000,
        dragEndSpeed: 1000,
        navText : ['<img src="../img/arrow-left.png" alt="" />','<img src="../img/arrow-right.png" alt="" />'],
        // responsive:{
        //     0:{
        //         items:1
        //     },
        //     600:{
        //         items:3
        //     },
        //     1000:{
        //         items:5
        //     }
        // },
        items:1 
    });
}



// Slick Mobile Menu Function
function SlickMobileMenuFunction(){
    $('.main-menu').slicknav({
        label: '',
        duration: 500,
        prependTo:'.mobile-menu'
    });
}



// isotop
function isotop() {
    $("#filters li").on('click', function() {
        var selector = $(this).attr('data-filter');
        $('#grid').isotope({
            filter: selector
        })
    })

    ("#grid").isotope();
}