$(document).ready(function(){
  //! MOBILE FIX 100VH

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  //! MOBILE FIX 100VH END

  /* SLIDER */

  
  if($('.slider-wrap').length) {
    $('.slider-wrap').on('init', function(event, slick){
      const val = String(slick.$slides.length).padStart(2, 0)
      if ($('.slider-control__total').length) {
        $('.slider-control__total').html(val)
      }
    })
    $('.slider-wrap').slick({
      infinite: false,
      swipe: false,
      prevArrow: $('.slider-control-arrows__arrow_left'),
      nextArrow: $('.slider-control-arrows__arrow_right'),
    });
  }

  
  $('.slider-wrap').on('afterChange', function(event, slick, currentSlide){
    const val = String(currentSlide + 1).padStart(2, 0)
  
    if ($('.slider-control__current').length) {
      $('.slider-control__current').html(val)
    }
  });
  

  /* EVENTS */
  /* TABS */
  $(document).on('click', '.service-description-tabs-items__item:not(.active)', function(e) {
    e.preventDefault();
    var selector = $(this).attr('data-tab');

    $('.service-description-tabs-items__item').removeClass('active');
    $(this).addClass('active');

    $('.service-description-tabs-tab').removeClass('active');
    $('.tab-' + selector).addClass('active');
  });
  
  /* HEADER-OVERLAY */

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

  /* REQS ACTION */

  // $(window).on('resize', function() {
  //   $('.contacts-right').removeClass('active')
  // })

  /* MEDIA FILTER */

  $(document).on('click', '.media-filter-item:not(.active)', function () {
    $('.media-filter-item.active').removeClass('active');
    $(this).addClass('active');
  });

  $(document).on('click', '.contacts__button', function() {
    $('.contacts__button').toggleClass('active');
    $('.contacts-right').toggleClass('active');
  })
  

  /* POP-UP */
  if($('.popup__order').length || $('.banner-video__btn').length) {
    isPopUpOpen = false

    function openPopUp() {
      $('.popup').addClass('active');
      compensateBody();
      isPopUpOpen = true;
    };

    function closePopUp() {
      $('.popup').removeClass('active');
      unCompensateBody();
      isPopUpOpen = false;
    }

    $(document).on('click', '.popup__order', function(e) {
      e.preventDefault()
      isPopUpOpen ? closePopUp() : openPopUp()
    });

    $(document).on('click', '.body__overlay', closePopUp);
    $(document).on('click', '.form__close', closePopUp);
    $(document).on('click', '.popup-body__close', closePopUp)

    $(document).on('click', '.banner-video__btn', function() {
      const src = $(this).attr('data-video')
      $('.popup-body').find('video').prop('src', src);
      isPopUpOpen ? closePopUp() : openPopUp()
    })

  }

  /* VIDEO-POPUP */

  /* MAP */
  
  if($('#map').length){
    mapboxgl.accessToken = 'pk.eyJ1Ijoic25pY2t0ZW4iLCJhIjoiY2txMWNjYjRoMDE1ODJwbnh4N3pyNTZkZyJ9.l54EJ1K66rJbRk-GgaVj1Q';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [37.914933, 51.309382],
      zoom: 6
    });


    // Set options
    // map.getStyle().layers.forEach(function(thisLayer){
    //   console.log(thisLayer);
    //   if(thisLayer.id.indexOf('-label')>0){
    //     console.log('change '+thisLayer.id);
    //     map.setLayoutProperty(thisLayer.id, 'text-field', ['get','name_ru'])
    //   }
    // });

    var marker = new mapboxgl.Marker({
      color: "#FFFFFF",
      draggable: false
      }).setLngLat([37.914933, 51.309382])
      .addTo(map);
  }

});