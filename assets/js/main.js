'use strict';

$(document).ready(function() {
    $('#main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplayspeed: 3000,
        responsive: [
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    autoplay: true,
                    autoplayspeed: 3000,
                }
            }
        ]
    });

    $('#special-offers__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: false,
        autoplay: true,
        infinite: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: false,
                    autoplay: true,
                    infinite: true,
                    adaptiveHeight: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    autoplay: true,
                    infinite: true,
                    adaptiveHeight: true,
                }
            }
        ]
    });

    if (window.innerWidth <= 620) {
        $('#categories').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            autoplay: false,
            infinite: false,
            responsive: [
                {
                    breakpoint: 568,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false,
                        autoplay: false,
                        infinite: false,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false,
                        autoplay: false,
                        infinite: false,
                    }
                }
            ]
        });
    }

    if (window.innerWidth <= 1100) {
        $('#vendors').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: false,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 568,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: false,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        arrows: false,
                    }
                }
            ]
        });

        $('#vendors-2').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: false,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 568,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: false,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        arrows: false,
                    }
                }
            ]
        });
    }

    if (window.innerWidth <= 1200) {
        $('#widgets').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        arrows: false,
                    }
                }

            ]
        });

        $('#categories-disks').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            autoplay: false,
            infinite: false,
            responsive: [
                {
                    breakpoint: 568,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false,
                        autoplay: false,
                        infinite: false,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false,
                        autoplay: false,
                        infinite: false,
                    }
                }
            ]
        });
    }

    const containerSearchByCar = document.querySelector('#search-by-car__container');
    const containerSearchByFeatures = document.querySelector('#search-by-features__container');
    const searchByFeaturesButton = document.querySelector('#search-by-features');
    const searchByCarButton = document.querySelector('#search-by-car');
    const showSearchingDisks = document.querySelector('#show-disks');
    const showSearchingWheels = document.querySelector('#show-wheels');
    const showSearchingByCarDisks = document.querySelector('#search-by-car__container-disks');


    searchByCarButton.addEventListener('click', function(e) {
        e.preventDefault();

        if (e.target.classList.contains('active')) return;

        document.querySelector('.search__another-option.active').classList.toggle('active');
        e.target.classList.toggle('active');

        containerSearchByFeatures.classList.toggle('hidden');
        containerSearchByCar.classList.toggle('hidden');
    });

    searchByFeaturesButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (e.target.classList.contains('active')) return;
        if (showSearchingDisks.classList.contains('active')) return;

        document.querySelector('.search__another-option.active').classList.toggle('active');
        e.target.classList.toggle('active');
        
        containerSearchByCar.classList.toggle('hidden');
        containerSearchByFeatures.classList.toggle('hidden');
    });

    showSearchingWheels.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (e.target.classList.contains('active')) return;

        document.querySelector('.search__option.active').classList.toggle('active');
        e.target.classList.toggle('active');

        document.querySelector('.search__another-option.active').classList.toggle('active');

        searchByFeaturesButton.classList.toggle('active');
        containerSearchByFeatures.classList.toggle('hidden');
        showSearchingByCarDisks.classList.toggle('hidden');
    });

    showSearchingDisks.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (e.target.classList.contains('active')) return;

        if (!containerSearchByFeatures.classList.contains('hidden')) {
            containerSearchByFeatures.classList.toggle('hidden');
        }

        else if (!containerSearchByCar.classList.contains('hidden')) {
            containerSearchByCar.classList.toggle('hidden');
        }

        document.querySelector('.search__option.active').classList.toggle('active');
        e.target.classList.toggle('active');

        document.querySelector('.search__another-option.active').classList.toggle('active');
        searchByCarButton.classList.toggle('active');

        showSearchingByCarDisks.classList.toggle('hidden');


        
    });
});