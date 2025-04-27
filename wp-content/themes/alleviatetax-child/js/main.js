jQuery(document).ready(function($) {
    
    setTimeout(function(){
	if(jQuery('.client-say-slider .client-slide').length >= 1){
		var maxheight = 0;
		jQuery('.client-slide').each(function(){
			if(jQuery(this).height() > maxheight){
 				maxheight = jQuery(this).height();
			}
		});
		jQuery('.client-slide').height(maxheight);
		}
	}, 500);
    
    new Swiper('.client-say-slider .swiper-container', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            1920: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1028: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 8
            }
        }
    });

    /*************** Fixed Header Start ****************/
    var Height = $('.main-header').outerHeight();
    $(window).on('scroll',function(){
        if ($(this).scrollTop() >= Height) {
        $('.elementor-location-header').addClass('is-fixed');
        }
        else{
            $('.elementor-location-header').removeClass('is-fixed');
        }
    });
    /*************** Fixed Header End ****************/
    
    /*************** Service Tabs Start ****************/
    $('.tab-header .tab').click(function(){
            $('.tab-header li').removeClass('active');
            $(this).parent("li").addClass('active');
            var tagid = $(this).data('tag');
            $('.tab-container .tab-content').removeClass('active').hide();
            $('#'+tagid).addClass('active').show();
    });
    /* Slider */    
    (function() {
      'use strict';
      const breakpoint = window.matchMedia( '(min-width:768px)' );
      let mySwiper;
      const breakpointChecker = function() {
        if ( breakpoint.matches === true ) {
          if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
          return;
          } else if ( breakpoint.matches === false ) {
            return enableSwiper();

          }

      };
      const enableSwiper = function() {
        mySwiper = new Swiper ('.tab-swiper-container', {  
            autoHeight: false,
            slidesPerView: 3,
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
            breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
            allowTouchMove: true,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
              allowTouchMove: true,
            },        
            1025: {
              allowTouchMove: false,  
            },
          }

        });

      };      
      breakpoint.addListener(breakpointChecker);      
      breakpointChecker();
    })(); 
    /*************** Service Tabs End ****************/
    
    /*************** Our Team Slider Start ****************/
    

$(".team-section").each(function(index, element){
  
    var $this = $(this).find('.team-listing');  
    $this.addClass("swiper-container-" + index)
    $this.parents(".team-section").find(".swiper-button-prev").addClass("btn-prev-" + index);
    $this.parents(".team-section").find(".swiper-button-next").addClass("btn-next-" + index);
    const breakpoint = window.matchMedia( '(min-width:1025  px)' );
      let teamSwiper;
      const breakpointChecker = function() {
        if ( breakpoint.matches === true ) {teamSwiper
          if ( teamSwiper !== undefined ) teamSwiper.destroy( true, true );
          return;
          } else if ( breakpoint.matches === false ) {
            return enableSwiper();

          }

      };
      const enableSwiper = function() {
        teamSwiper = new Swiper ('.swiper-container-' + index, {         
            navigation: {
            nextEl: '.btn-next-' + index ,
            prevEl: '.btn-prev-' + index 
            },
            allowTouchMove: false,
            loop: false,
            lazy: true,
            breakpoints: {
              320: {
                slidesPerView: 1,
                spaceBetween:0,
              }, 
              415: {
                slidesPerView: 2,
                spaceBetween:10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween:20,
              },
              1025: {
                slidesPerView: 4,
                spaceBetween:20,
              },
            },

        });

      };      
      breakpoint.addListener(breakpointChecker);      
      breakpointChecker();
});

   /*************** Mobile Service list ajax start ****************/

    
    jQuery('.load-more-wrap .load-more-service').on('click', function($){
        $.preventDefault();
         var offset = jQuery('.service-list-container-inner .service-single').length;

        jQuery.ajax({
            method: 'POST',
            url: ajax.url,
            type: 'JSON',
            data: {
                offset: offset,
                action: 'services_list_mobile'
            },
             /*beforeSend: function(){
               jQuery("#loader").show();
             },
             complete: function(){
               jQuery("#loader").hide();
             },*/
            success:function(response){

               if(response != ''){
                  jQuery('.service-list-container-inner').append(response);  
                }else if(response == ''){
                  jQuery(".load-more-wrap .load-more-service").hide();
                  
                  jQuery(".load-more-wrap.nomore").css('display','block');
                  jQuery(".load-more-wrap .load-more-service").text('No More');
                    jQuery('.load-more-wrap *').addClass("disable-load-more");               
                }

                /*if(response == ''){
                	jQuery(".load-more-wrap .load-more-service").text('No More');
                    jQuery('.load-more-wrap *').addClass("disable-load-more");
                }else{
                  jQuery('.service-list-container-inner').append(response);                 
                }*/
            }
            
        }); 
    });

   /*************** Mobile Service list ajax end ****************/

	
    
    /*************** Get Started Start ****************/
    
    var rangePercent = $('.amount-slider').val();
	$('[type="range"]').on('change input', function() {
		rangePercent = $('.amount-slider').val();
		$('h4').html(rangePercent);	
        var Position = rangePercent/1000;
        if(Position >= 90){
            $('h4').css({'right': 0 , 'left' : 'auto'});    
        }
        else{
        $('h4').css({'left': Position+'%' , 'right': 'auto'});    
        }
		
	});
    
    
    //var mySlider = $("custom-slider input").slider();	
	
	$('.form-containter .steps .wpcf7-list-item input').addClass('late-payments');
	$('.form-containter .steps .wpcf7-list-item').addClass('radio-button');
	
	$('.step-c').on('click', function() {
		if ($(this).hasClass('active')) {
			$(this).nextAll().removeClass('active');
			$('.steps').not('#' + $(this).data('form-element')).hide();
			$('#' + $(this).data('form-element')).show();			
		}
	});
	
	$('.step-c.active').trigger('click');
	
	$('.late-payments + label').click(function () {
    	nextStep(this);
    });
	
	$('.csselectpicker').change(function () {
    	nextStep(this);
    });	
    

    /*************** Get Started end ****************/
    

    $('.custom-client-counter .elementor-image-box-title').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        }
    });
  });
var swiper = new Swiper(".slider-list-wrapper", {
    slidesPerView: 3.5,
    spaceBetween: 30,
    //mousewheel: true,
    freeMode: true,
    mousewheelForceToAxis: true,
    speed: 600,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: {
      releaseOnEdges: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween:0,
      }, 
      480: {
        slidesPerView: 1,
        spaceBetween:0,
      }, 
      767: {
        slidesPerView: 1,
        spaceBetween:10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween:20,
      },
      991: {
        slidesPerView: 2.5,
        spaceBetween:20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween:20,
      },
      1366: {
        slidesPerView: 3.5,
        spaceBetween:20,
      },
    }
    
  });


    
    
});

    
    function nextStep(self) {
	var next_step = jQuery(self).parents('.steps').next().attr('id');
	jQuery('.step-c[data-form-element="' + next_step + '"]').addClass('active');
    jQuery('.step-c[data-form-element="' + next_step + '"]').trigger('click');
    
}

// counter js
// jQuery(document).ready(function() {


//   jQuery('.custom-client-counter .elementor-image-box-title').each(function () {
//     jQuery(this).prop('Counter',0).animate({
//         Counter: jQuery(this).text()
//     }, {
//         duration: 3300,
//         easing: 'swing',
//         step: function (now) {
//             jQuery(this).text(Math.ceil(now));
//         }
//     });
// });


// });



