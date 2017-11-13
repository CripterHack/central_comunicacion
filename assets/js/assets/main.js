// RESETS

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Responsive layer
    $(function () {
      var nua = navigator.userAgent
      var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit')   > -1 && nua.indexOf('Chrome') === -1)
      if (isAndroid) {
        $('select.form-control').removeClass('form-control').css('width', '100%')
      }
    })
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
        msViewportStyle.appendChild(
                        document.createTextNode(
                            '@-ms-viewport{width:auto!important}'
                                    )
    )
  document.querySelector('head').appendChild(msViewportStyle)
    }

// LINK ANIMATION CLASS ;)
$(function(){
      $('.internal').on('click',function(e){
        e.preventDefault();
        var strAncla=$(this).attr('href');
        $('body,html').stop(true,true).animate({
        scrollTop: $(strAncla).offset().top
        },5000);
      });
    });

// LOADER ANIMATION & PARALLAX EFECT

var mediaquery = window.matchMedia("(min-width: 980px)");
if (mediaquery.matches) {
    $(document).ready(function() {

        $(window).scroll(function(){
            var barra = $(window).scrollTop();
            var posicion =  (barra * 0.15);
        
            $('.back-parallax').css({
                'background-position': '50% -' + posicion + 'px'
            });
        });

        $(window).scroll(function(){
            var barra = $(window).scrollTop();
            var posicion =  (barra * 0.05);
        
            $('.back-parallaxB').css({
                'background-position': '50% -' + posicion + 'px'
            });
        });

        $(window).scroll(function(){
            var barra = $(window).scrollTop();
            var posicion =  (barra * 0.35);
        
            $('.back-parallaxC').css({
                'background-position': '50% -' + posicion + 'px'
            });
        });

        $(window).scroll(function(){
            var barra = $(window).scrollTop();
            var posicion =  (barra * 0.50);
        
            $('.parallax').css({
                'transform': 'translateY( +' + posicion + 'px)'
            });

        });
    });
} else {
    $(document).ready(function() {

        $(window).scroll(function(){
            var barra = $(window).scrollTop();
            var posicion =  (barra * 0.025);
        
            $('.back-parallax').css({
                'background-position': '50% -' + posicion + 'px'
            });
        });

        $(window).scroll(function(){
            var barra = $(window).scrollTop();
            var posicion =  (barra * 0.025);
        
            $('.back-parallaxB').css({
                'background-position': '50% -' + posicion + 'px'
            });
        });

        $(window).scroll(function(){
            var barra = $(window).scrollTop();
            var posicion =  (barra * 0.025);
        
            $('.back-parallaxC').css({
                'background-position': '50% -' + posicion + 'px'
            });
        });

        $(window).scroll(function(){
            var barra = $(window).scrollTop();
            var posicion =  (barra * 0.05);
        
            $('.parallax').css({
                'transform': 'translateY( +' + posicion + 'px)'
            });

        });
    });
}

$(document).ready(function() {
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 850);

    var offset = 700,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');
    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out')
        }
    });
    $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 700,
        }, scroll_top_duration)
    })

});

// HEADER
jQuery(document).ready(function($){
    var MQL = 1170;

    if($(window).width() > MQL) {
        var headerHeight = $('.cd-header').height();
        $(window).on('scroll',
        {
            previousTop: 0
        }, 
        function () {
            var currentTop = $(window).scrollTop();
            if (currentTop < this.previousTop ) {
                if (currentTop > 0 && $('.cd-header').hasClass('is-fixed')) {
                    $('.cd-header').addClass('is-visible');
                } else {
                    $('.cd-header').removeClass('is-visible is-fixed');
                }
            } else {
                $('.cd-header').removeClass('is-visible');
                if( currentTop > headerHeight && !$('.cd-header').hasClass('is-fixed')) $('.cd-header').addClass('is-fixed');
            }
            this.previousTop = currentTop;
        });
    }

    $('.cd-primary-nav-trigger').on('click', function(){
        $('.cd-menu-icon').toggleClass('is-clicked'); 
        $('.responsive-menu').toggleClass('menu-is-open');
        
        if( $('.cd-primary-nav').hasClass('is-visible') ) {
            $('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
                $('body').removeClass('overflow-hidden');
            });
        } else {
            $('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
                $('body').addClass('overflow-hidden');
            }); 
        }
    });
});

// PDF
PDFJS.getPdf('Identidad.pdf', function getPdfHelloWorld(data) {
  //
  // Instantiate PDFDoc with PDF data
  //
  var pdf = new PDFJS.PDFDoc(data);
  var page = pdf.getPage(1);
  var scale = 1.5;
 
  //
  // Prepare canvas using PDF page dimensions
  //
  var canvas = document.getElementById('the-canvas');
  var context = canvas.getContext('2d');
  canvas.height = page.height * scale;
  canvas.width = page.width * scale;
 
  //
  // Render PDF page into canvas context
  //
  page.startRendering(context);
});