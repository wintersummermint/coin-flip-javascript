
$(window).load(function() { // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({'overflow':'visible'});
})

jQuery(document).ready(function($){

    $('#coin1').on('click', function(){
        $('.frontmain>img').attr('src','img/piratesheadcompressor.png');
        $('.backmain>img').attr('src','img/piratestailscompressor.png');
    });
    $('#coin2').on('click', function(){
        $('.frontmain>img').attr('src','img/lincolnmemorialcentheadscompressor.png');
        $('.backmain>img').attr('src','img/lincolnmemorialcenttailscompressor.png');
    });
    $('#coin3').on('click', function(){
        $('.frontmain>img').attr('src','img/PILIPINAS1PesoHeadscompressor.png');
        $('.backmain>img').attr('src','img/PILIPINAS1PesoTailscompressor.png');
    });
    $('#coin4').on('click', function(){
        $('.frontmain>img').attr('src','img/dime heads.png');
        $('.backmain>img').attr('src','img/dime tails.png');
    });
    $('h1').addClass('animated fadeInDown');
    // var spinArray = ['animation900','animation1080','animation1260','animation1440','animation1620','animation1800','animation1980','animation2160'];
    var spinArray = ['animation2160','animation1980'];

    function getSpin() {
    var spin = spinArray[Math.floor(Math.random()*spinArray.length)];
    if (spin == 'animation2160') {
        setTimeout(function(){
            $('.result').html('Result: Heads!');

        },700);
    } else {
        setTimeout(function(){
            $('.result').html('Result: Tails!');
        },700);
    }
    return spin;
    }

    $('.butts').on('click', function(){

    $('#coin').removeClass();

    setTimeout(function(){
    $('#coin').addClass(getSpin());
    }, 100);

    });

});