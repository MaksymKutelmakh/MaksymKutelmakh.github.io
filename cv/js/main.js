var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open');  
})


function hideLoader(){
  setTimeout(
    function(){
      $('.loader').hide("drop", { direction: "down" }, "slow");
    }
  ,2500)
}

setTimeout(
  function(){
    $( ".nav" ).show("drop",  { direction: "up" }, "slow", flex);
    togglePlay();
    setInterval(
      flex()
    ,1);
    $(".greet").show("drop", { direction: "down" }, "slow");
    setTimeout(
      $('.hero').show()
    ,1)
  }
,4000);


function flex(){
  $('.nav').css('display','flex');
  $('.i').css('display','flex');
}



function getCoords(elem) { // кроме IE8-
  var box = elem.getBoundingClientRect();
  console.log(box);
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };

}

window.addEventListener('scroll', function(elem) {
 
    console.log(pageYOffset);
    if(this.pageYOffset > '392'){
      $('.hero__content h2').show("drop", { direction: "left" }, "slow");
    }

    if(this.pageYOffset > '700' && this.pageYOffset < '744'){
      $('.wrapper').addClass('span');
      
    }
   
});

var music = document.getElementById("music");
var isPlaying = false;
music.volume = 0.2;
function togglePlay() {
  if (isPlaying) {
    music.pause()
  } else {
    music.play();
  }
};
music.onplaying = function() {
  isPlaying = true;
  document.getElementById("music-animation").classList.add('on')
};
music.onpause = function() {
  isPlaying = false;
  document.getElementById("music-animation").classList.remove('on')
};

var button = document.getElementById("toggle");
button.addEventListener('click', function() {
  if (button.getAttribute("data-text-swap") == button.innerHTML) {
    button.innerHTML = button.getAttribute("data-text-original");
  } else {
    button.setAttribute("data-text-original", button.innerHTML);
    button.innerHTML = button.getAttribute("data-text-swap");
  }
}, false);

var swiper = new Swiper('.product-slider', {
  spaceBetween: 30,
  effect: 'fade',
  // initialSlide: 2,
  loop: false,
  navigation: {
      nextEl: '.next',
      prevEl: '.prev'
  },
  // mousewheel: {
  //     // invert: false
  // },
  on: {
      init: function(){
          var index = this.activeIndex;

          var target = $('.product-slider__item').eq(index).data('target');

          console.log(target);

          $('.product-img__item').removeClass('active');
          $('.product-img__item#'+ target).addClass('active');
      }
  }

});

swiper.on('slideChange', function () {
  var index = this.activeIndex;

  var target = $('.product-slider__item').eq(index).data('target');

  console.log(target);

  $('.product-img__item').removeClass('active');
  $('.product-img__item#'+ target).addClass('active');

  if(swiper.isEnd) {
      $('.prev').removeClass('disabled');
      $('.next').addClass('disabled');
  } else {
      $('.next').removeClass('disabled');
  }

  if(swiper.isBeginning) {
      $('.prev').addClass('disabled');
  } else {
      $('.prev').removeClass('disabled');
  }
});

$(".js-fav").on("click", function() {
  $(this).find('.heart').toggleClass("is-active");
});