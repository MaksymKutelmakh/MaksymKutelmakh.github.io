var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open');  
})


function hideLoader(){
  setTimeout(
    function(){
      $('.loader').hide("drop", { direction: "down" }, "slow");
    }
  ,5000)
  
}

setTimeout(
  function(){
    $( ".nav" ).show("drop",  { direction: "up" }, "slow", flex);
    setInterval(
      flex()
    ,1);
    $(".greet").show("drop", { direction: "down" }, "slow");
    setTimeout(
      $('.i').show()
    ,1)
  }
,6500);




function flex(){
  $('.nav').css('display','flex');
}