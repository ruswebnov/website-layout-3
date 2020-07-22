$(function(){

  $('.header__slider').slick({
    infinite:true,
    fade:true,
    speed: 900,
    prevArrow: '<img class="slider-arrows slider-arrows-prev"  src="img/header/arrow-prev.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows-next" src="img/header/arrow-next.svg" alt="">',
    asNavFor: '.slider-dotshead',
  });


  $('.slider-dotshead').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
    
  });



  $('.surf-slider').slick({
    slidesToShow: 4,
    slideToScrool: 1,
    speed: 500,
    prevArrow: '<img class="slider-arrows slider-arrows-prev"  src="img/header/arrow-prev.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows-next" src="img/header/arrow-next.svg" alt="">',
    focusOnSelect: true,
    lazyLoad: 'ondemand',
    asNavFor: '.slider-map',
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      },
      
    ]
  });


  $('.slider-map').slick({
    slidesToShow: 8,
    slideToScrool: 1,
    arrows: false,
    speed: 500,
    asNavFor: '.surf-slider',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });


  $('.holder__slider, .shop__slider').slick({
    slidesToShow:1,
    slideToScrool:1,
    speed: 1000,
    prevArrow: '<img class="slider-arrows slider-arrows-prev"  src="img/header/arrow-prev.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows-next" src="img/header/arrow-next.svg" alt="">',
  });


  // Calculater
  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/sleep/plus.svg"></div><div class="quantity-button quantity-down"><img src="img/sleep/minus.svg"></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function() {
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

   $('.quantity-button').on('click', function(){
    let sum = $('.nights').val() * $('.sum').data('nights')
    + ($('.guests').val() - 1) * $('.sum').data('guests');
    $('.sum').html('$' + sum);
  }); 

  
$('.quantity-button').on('click', function(){
let parents = $(this).parents('.holder-slider__info');
 let sum = $('.sum', parents).data('nights') * $('.nights', parents).val() + $('.sum', parents).data('guests') * $('.guests', parents).val();
 $('.sum', parents).html('$' + sum);
});

$('.quantity').each(function() {
let parents = $(this).parents('.holder-slider__info');
let sum = $('.sum', parents).data('nights') * $('.nights', parents).val() + $('.sum', parents).data('guests') * $('.guests', parents).val();
 $('.sum', parents).html('$' + sum);
});
  

  $('.surfboard-box__circle').on('click', function(){
    $(this).toggleClass('active');
  });


  
 $('.menu-btn').on('click', function(){
   $(this).toggleClass('active');
   $('.menu').toggleClass('active');
 });

new WOW().init();

 });