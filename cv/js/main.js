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

function flexForWrapper(){
  $('.wrapper').css('display','flex');
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

    if(this.pageYOffset > '600'){
      $('.wrapper').show("drop", { direction: "right" }, "slow");
      setInterval(
        flexForWrapper()
      ,1);
    }
   
});
