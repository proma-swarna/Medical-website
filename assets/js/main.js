$(".testimonials").owlCarousel({
    margin: 30,
    loop: 'true',
    autoplay: 'true',
    autoplayTimeout: 5000,
    center: 'true',
    items: 1,
    dots: 'true',
});
$(".specialists").owlCarousel({
    margin: 40,
    items: 4,
    loop: 'true',
    nav: 'true',
    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    responsive:{
        0:{
            items: 1,
            nav: true
        },
        320:{
            items: 2,
            nav: true
        },
        750:{
            items: 2,
            nav: true
        },
        970:{
            items: 3,
            nav: true
        },
        1200:{
            items:4,
            nav: true
        }
    }
});
$(".sponsor").owlCarousel({
    margin: 30,
    loop: 'true',
    items: 5,
    autoplay: 'true',
    autoplayTimeout: 5000,
    nav: 'true',
    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    responsive:{
        0:{
            items: 2,
            nav: true
        },
        320:{
            items: 3,
            nav: true
        },
        750:{
            items: 4,
            nav: true
        },
        970:{
            items: 5,
            nav: true
        },
        1200:{
            items:5,
            nav: true
        }
    }
});

