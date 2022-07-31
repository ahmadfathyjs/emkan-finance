
$( document ).ready(function() {
  $(function() {
    $('.skitter-large').skitter({
      fullscreen: true,
      // focus: true,
      dots: false,
      theme: 'clean',
      interval: 4000
    });
  });
    // $('.loader-container').hide();
    // $('body').css({overflow: 'auto'});

    $('.owl-carousel').owlCarousel({
      loop: true,
      nav: true,
      rtl: true,
      lazyLoad: true,
      autoplayTimeout: 4000,
      animateOut: 'linear',
      autoplay: true,
      autoplayHoverPause: true,
      responsiveClass:true,
      items: 1
  })
  $('#close-popup').on('click', ()=>{
    $('.pop-up').hide();
    setTimeout(() => {
     $('.pop-up').show();
    }, 6000);
  })
});
