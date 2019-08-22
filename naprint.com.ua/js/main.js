$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.comments .owl-dots').addClass('position-comment-nav');
$('.galary-for-mobile .owl-dots').addClass('position-mobile-nav');
$('.comment-for-mobile .owl-stage-outer').addClass('height');
$('.comment-for-mobile .owl-stage').addClass('height');
$('.comment-for-mobile .owl-item').addClass('height');
$('.comment-for-mobile .item').addClass('height');
$('.comment-for-mobile .owl-theme').addClass('height');

function myFunction(){
    var slider_two = ['1','2','3','4'];
    for(var i = 0 ; i<6 ; i++){
        console.log(document.getElementsByClassName('number-for-slider'));
        document.getElementsByClassName('number-for-slider')[i].innerHTML = '0'+(i+1);
    }
    document.getElementsByClassName('number-for-slider')[6].innerHTML = '01';
    document.getElementsByClassName('number-for-slider')[7].innerHTML = '02';
    document.getElementsByClassName('number-for-slider')[8].innerHTML = '03';
    document.getElementsByClassName('number-for-slider')[9].innerHTML = '04';
    document.getElementsByClassName('number-for-slider')[10].innerHTML = '05';
    document.getElementsByClassName('number-for-slider')[11].innerHTML = '06';
    document.getElementsByClassName('number-for-slider')[12].innerHTML = '01';
    document.getElementsByClassName('number-for-slider')[13].innerHTML = '02';
    document.getElementsByClassName('number-for-slider')[14].innerHTML = '03';
    document.getElementsByClassName('number-for-slider')[15].innerHTML = '04';
}

function numPopUp(){
    $('.b-popup').show();
}

function closePopUp(){
    $('.b-popup').hide();
}

// changes
function showFilter(){
    $('.filter').addClass('showFilter');
    var hide_block = ['pagination','offer','subscribe','footer'];
    for(var i = 0; i < 4 ; i++){
        $('.' + hide_block[i]).hide();
    }
    $('.change-visible-for-close-button').show();
}

function hideFilter(){
    $('.filter').removeClass('showFilter');
    var hide_block = ['pagination','offer','subscribe','footer'];
    for(var i = 0; i < 4 ; i++){
        $('.' + hide_block[i]).show();
    }
}


// end