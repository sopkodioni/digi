$('.main-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-arrow slick-next btn-reset"><img src="img/main/arrowNext.svg" alt="next arrow"></button>',
    prevArrow: '<button type="button" class="slick-arrow slick-prev btn-reset"><img src="img/main/arrowPrev.svg" alt="prev arrow"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
            // js
        }
      },
      {
        breakpoint: 640,
        settings: {
            arrows: false
        }
      }
    ]
});