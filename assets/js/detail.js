'use strict';


$(document).ready(function() {
    const tableInStockButton = document.querySelector("#in-stock-table-button");
    const tableInStockMobile = document.querySelector('#table-mobile');
    const googleMapButton = document.querySelector('#maps-button');
    const tableInStock = document.querySelector('#in-stock-table');
    const googleMaps = document.querySelector('#google-maps');

    tableInStockButton.addEventListener('click', function(e) {
        if (window.innerWidth <= 767) {
            if (!tableInStockMobile.classList.contains('hidden')) return;
        }
        else if (window.innerWidth >= 768) {
            if (!tableInStock.classList.contains('hidden')) return;
        }

        googleMapButton.classList.toggle('active');
        e.target.classList.toggle('active');

        googleMaps.classList.toggle('hidden');

        if (window.innerWidth <= 767) {
            tableInStockMobile.classList.toggle('hidden');

            return;
        }

        tableInStock.classList.toggle('hidden');
    });

    googleMapButton.addEventListener('click', function(e) {
        if (!googleMaps.classList.contains('hidden')) return;

        tableInStockButton.classList.toggle('active');
        e.target.classList.toggle('active');

        googleMaps.classList.toggle('hidden');

        if (window.innerWidth <= 767) {
            tableInStockMobile.classList.toggle('hidden');

            return;
        }
    
        tableInStock.classList.toggle('hidden');

    });

    $('#comments-slider').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    infinite: false,
                }
            }
        ]
    });

    const chooseCarModelElements = document.querySelectorAll('.product__info-text .table__additional');

    chooseCarModelElements.forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            e.target.classList.toggle('active');
        });
    });

    $('#similar-products').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1101,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    infinite: true,
                    autoplay: true,
                }
            },
            {
                breakpoint: 986,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    infinite: true,
                    autoplay: true,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    infinite: true,
                    autoplay: true,
                }
            },
            {
                breakpoint: 606,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    infinite: true,
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    infinite: true,
                }
            },

        ]
    });

    $('#you-already-seen').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1101,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    infinite: true,
                    autoplay: true,
                }
            },
            {
                breakpoint: 986,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    infinite: true,
                    autoplay: true,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    infinite: true,
                    autoplay: true,
                }
            },
            {
                breakpoint: 606,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    infinite: true,
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    infinite: true,
                }
            },

        ]
    });

});


