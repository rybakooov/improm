$(document).ready(function(){
  //! MOBILE FIX 100VH

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

//! MOBILE FIX 100VH END
  if($('.slider-wrap').length) {
    $('.slider-wrap').slick({
      infinite: false,
      prevArrow: $('.slider-control-arrows__arrow_left'),
      nextArrow: $('.slider-control-arrows__arrow_right'),
    });
  }
  

   /* EVENTS */

  $(document).on('click', '.service-description-tabs-items__item:not(.active)', function(e) {
    e.preventDefault();
    var selector = $(this).attr('data-tab');

    $('.service-description-tabs-items__item').removeClass('active');
    $(this).addClass('active');

    $('.service-description-tabs-tab').removeClass('active');
    $('.tab-' + selector).addClass('active');
  });
  
  let isMenuOpen = false;

  function openMenu() {
    $('.header-burger').addClass('active');
    $('.header-menu').addClass('active');
    $('.header-phone').addClass('active');
    compensateBody()
    isMenuOpen = true;
  }
  function closeMenu() {
    $('.header-burger').removeClass('active');
    $('.header-menu').removeClass('active');
    $('.header-phone').removeClass('active');
    unCompensateBody();
    isMenuOpen = false;
  }

  $(document).on('click', '.header-burger', function() {
    isMenuOpen ? closeMenu() : openMenu()
  });

  $(document).on('click', '.header__overlay', closeMenu);

  $(window).on('resize', function() {
    if(isMenuOpen){
      closeMenu();
    }
  })

  $(document).on('click', '.media-filter-item:not(.active)', function () {
    $('.media-filter-item.active').removeClass('active');
    $(this).addClass('active');
  });

  $(document).on('click', '.contacts__button', function() {
    $('.contacts__button').toggleClass('active');
    $('.contacts__button .contacts-right').toggleClass('active');
  })
  
  
  if($('#map').length){
    mapboxgl.accessToken = 'pk.eyJ1Ijoic25pY2t0ZW4iLCJhIjoiY2txMWNjYjRoMDE1ODJwbnh4N3pyNTZkZyJ9.l54EJ1K66rJbRk-GgaVj1Q';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10'
    });
  }

});