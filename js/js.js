jQuery(document).ready(function ($) {


    $(window).stellar();

    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.gotop');
    mywindow = $(window);
    htmlbody = $('html,body');
  
  /**/  
  if (mywindow.scrollTop() < 1) {
    $('.navigation li[data-slide="1"]').addClass('active');
  }
  /**/

    slide.waypoint(function (event, direction) {

        dataslide = $(this).attr('data-slide');

        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
      
      $('.navigation li[data-slide="1"]').removeClass('active');
      
        }
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });
 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    /*function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }*/
  
  function goToByScroll(dataslide) {
    if(!$('.slide[data-slide="' + dataslide + '"]').offset()) return;
    var goal = $('.slide[data-slide="' + dataslide + '"]').offset().top;
    if (mywindow.scrollTop()<goal) {
      var goalPx = goal + 5;
    } else {
      var goalPx = goal - 50;
    }
        htmlbody.animate({
            scrollTop: goalPx
        }, 2000, 'easeInOutQuint');
    }

    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });
  
  //prettyPhoto
    $("a[rel^='prettyPhoto']").prettyPhoto();

  //Image hover
    $(".hover_img").live('mouseover',function(){
        var info=$(this).find("img");
        info.stop().animate({opacity:0.43},500);
        $(".preloader").css({'background':'none'});
      }
    );
    $(".hover_img").live('mouseout',function(){
        var info=$(this).find("img");
        info.stop().animate({opacity:1},500);
        $(".preloader").css({'background':'none'});
      }
    );
  
  //Iframe transparent
     $("iframe").each(function(){
      var ifr_source = $(this).attr('src');
      var wmode = "wmode=transparent";
      if(ifr_source.indexOf('?') != -1) {
      var getQString = ifr_source.split('?');
      var oldString = getQString[1];
      var newString = getQString[0];
      $(this).attr('src',newString+'?'+wmode+'&'+oldString);
      }
      else $(this).attr('src',ifr_source+'?'+wmode);
     });
  
  
  $("#slide1, #slide3, #slide5, #slide7").each(function () {
        var slide_h = $(this).height();
    
    $(this).css('background-size', '100% '+slide_h+'px');
    
    });
  
});







