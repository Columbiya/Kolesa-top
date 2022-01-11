'use strict';

$(document).ready(function() {
    $('#products__nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    autoplay: false,
                    infinite: false,
                }
            },
            {
                breakpoint: 615,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    autoplay: false,
                    infinite: false,
                }
            },
            {
                breakpoint: 515,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    autoplay: false,
                    infinite: false,
                }
            },
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    autoplay: false,
                    infinite: false,
                }
            }
        ]
    });

    const filters = document.querySelector('#filters');
    const showFilters = document.querySelector('#show-filters');
    const closeFilters = document.querySelector('#close-filters');
    const types = document.querySelectorAll('.catalog__type');
    const circlesImges = document.querySelectorAll('.circle-preview');
    const headerTabs = document.querySelectorAll('.header__tab');

    let hoverCard = document.createElement('div');
    hoverCard.classList.add('hover-type');
    hoverCard.id = 'hover-card';
    document.body.appendChild(hoverCard);

    types.forEach(type => {
        type.addEventListener('mouseenter', function(e) {
            hoverCard.innerHTML = e.target.dataset.hover;
            hoverCard.style.opacity = 1;
            hoverCard.style.zIndex = 10000;
            hoverCard.style.left = e.clientX + "px";
            hoverCard.style.top = e.clientY + "px";

            function mouseleave() {   
                hoverCard.style.opacity = 0;
                hoverCard.style.zIndex = -5;

                e.target.removeEventListener('mouseleave', mouseleave);
            }

            e.target.addEventListener('mouseleave', mouseleave);
        });
    });

    circlesImges.forEach(element => {
        
        function leave() {
            element.parentElement.parentElement.querySelector('.wheel-image').src = './assets/images/wheel.png';
        } 

        element.addEventListener('mouseenter', function(e) {
            const src = element.dataset.src;

            element.parentElement.parentElement.querySelector('.wheel-image').src = src;

            element.addEventListener('mouseleave', leave);
        });



        element.addEventListener('click', function(e) {
            e.target.parentElement.querySelector('.active').classList.remove('active');
            e.target.classList.add('active');


            const src = element.dataset.src;
            element.parentElement.parentElement.querySelector('.wheel-image').src = src;

            
            element.removeEventListener('mouseleave', leave);
            
        });
    });


    showFilters.addEventListener('click', function(e) {
        e.preventDefault();

        filters.classList.toggle('open');
        document.body.style.overflowY = 'hidden';
    });

    closeFilters.addEventListener('click', function(e) {
        e.preventDefault();

        filters.classList.toggle('open');
        
        document.body.style.overflowY = 'scroll';
    });

    headerTabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });
;});