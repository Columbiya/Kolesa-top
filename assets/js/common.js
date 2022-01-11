'use strict';

const popup = document.querySelector('#pick-city-popup');
const pick_city = document.querySelector('#pick-city');
const dropdowns = document.querySelectorAll('.popup-list__item.drop-down');
const blocksDropDowns = document.querySelectorAll('.catalog__pop-up-drop-down');

popup.addEventListener('click', function() {
    pick_city.style.zIndex = 100000;
    pick_city.style.opacity = 1;
});

pick_city.addEventListener('click', function(e) {
    if(!e.target.classList.contains('pick-city__container')) return;

    pick_city.style.opacity = 0;

    setTimeout(() => pick_city.style.zIndex = -50, 500);
});



if (window.innerWidth <= 1200) {
    $('#nav').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
        dots: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    arrows: true,
                    dots: false,
                    infinite: false,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    arrows: true,
                    dots: false,
                    infinite: false,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true,
                    dots: false,
                    infinite: false,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    infinite: false,
                }
            }
            

        ]
    });
}
const bars = document.querySelector('#catalog__bars');
const catalogOpen = document.querySelector('#catalog__open');
const catalogButton = document.querySelector('#catalog__button');
const catalogPopup = document.querySelector('#catalog-popup');
const bottomHeaderIcons = document.querySelector('.bottom-header__icons');

if (window.innerWidth <= 505) {
    const sandwichPanel = document.querySelector('#sandwich-panel');

    sandwichPanel.addEventListener('click', function(e) {
        bottomHeaderIcons.classList.toggle('active');
    });
}
else {
    catalogButton.addEventListener('click', function() {
        if (!catalogOpen.classList.contains('hidden')) {
            let blocks = document.querySelectorAll('.twice-in');

            for (let i = 0; i < blocks.length; i++) {
                blocks[i].style.display = 'none';
            }

            document.querySelector('.drop-down__block').style.display = 'none';
        }
        bars.classList.toggle("hidden");
        catalogOpen.classList.toggle("hidden");
    
        catalogPopup.classList.toggle('hidden');
    });
    
    for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].addEventListener('click', function(e) {
            const dropdown = e.target.querySelector('.twice-in');
    
            if(dropdown) {
                dropdown.style.display = "block";
            }
            else {
                e.target.querySelector('.drop-down__block').style.display = "block";
            }
        });
    }
}

$(document).ready(function() {
    if (window.innerWidth <= 700) {
        const catalogsList = document.querySelectorAll('.catalogs__list');
        const catalogsTitle = document.querySelectorAll('.catalogs__title');
        let heights = [];

        for (let i = 0; i < catalogsTitle.length; i++) {
            heights.push(catalogsList[i].clientHeight);
            catalogsList[i].style.height = '0';


            catalogsTitle[i].addEventListener('click', function(e) {
                e.target.classList.toggle('open');
                catalogsList[i].style.height = catalogsList[i].style.height == '0px' ? `${heights[i]}px` : 0;
            });
        }
    }
});