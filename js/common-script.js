$(document).ready(function(){
  jwplayer('menu-player').setup({
    'image': './assets/images/img_video.jpg',
    'stretching': 'fill',
    'file': 'http://www.youtube.com/v/nLky7bv3cQs',
  });

  $(document).on('click touch', function(e) {
    if (window.innerWidth <= 991) {
      if ($('.navbar-collapse').css('display') === 'block') {
        const isMenuClick = $(e.target).parents(".navbar-collapse").length == 1 
        if (!isMenuClick) {
          var menu = $("#navigationMenu");
          menu.collapse('hide');    
        }
      }
    }
  });

  $('#close-search-mobile').click(function() {
    $('#input-mobile-seach').val('');
  });

  $('#search-icon, #close-search').on('click', function() {
    if($('#search-box').css('visibility') == 'hidden') {
      $('#search-box').removeClass('not-active');
      $('#search-box').addClass('active');
    } else {
      $('#search-box').removeClass('active');
      $('#search-box').addClass('not-active');
    }
  });

  // ***** HOME PAGE ****//
  $('.owl-carousel.news-carousel').owlCarousel({
    rtl: true,
    loop: true,
    dots: true,
    items: 1,
  });

  $('.owl-carousel.next-games-carousel').owlCarousel({
    rtl: true,
    loop: true,
    dots: false,
    nav: true,
    items: 1,
  });

  $('.owl-carousel.winnings-carousel').owlCarousel({
    rtl: true,
    loop: true,
    dots: false,
    responsive: {
            0:{
              items:1,
              nav: true,
            },
            576: {
              items: 2,
              nav: true,
            },
            768:{
                items:2,
                nav: true,
            },
            991:{
                items:3,
                nav: true,
            },
            1200:{
                items:5
            },
        }
  });

  $('.owl-carousel.store-carousel').owlCarousel({
  rtl: true,
  loop: true,
  dots: false,
  responsive:{
          0:{
            items: 1,
            nav: true,
          },
          768:{
            items: 2,
            nav: true,
          },
          991: {
            items:3,
            nav: true,
            margin: 20,
          },
          1200:{
            items: 4,
            margin: 20,
          },
          1440:{
            items: 4,
            margin: 60,
          }
      }
  });

  // **** ARTICLE ****//
  $('.owl-carousel.article-carousel').owlCarousel({
    rtl: true,
    loop: true,
    nav: true,
    margin: 30,
  });
});  