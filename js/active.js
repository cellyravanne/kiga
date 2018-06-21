(function ($) {

    // plugin Js no rodapé - referencia salva no pocket
     
    if ($.fn.footerReveal) {
        $('footer').footerReveal({
            shadow: true,
            shadowOpacity: 0.3,
            zIndex: -101
        });
    }

//    wow biblioteca Js (animações acontecem de acordo com o scroll do usuario na pag)
// vc salvou referencia do stackoverflor no pocket 

    var $window = $(window);

    if ($window.width() > 100) {
        new WOW().init();
    }

    // se o scrolltop for maior que 48, adicionar a barra, senão remover. 

    $window.on('scroll', function () {
        if ($window.scrollTop() > 48) {
            $('.header_area').addClass('sticky slideInDown');
        } else {
            $('.header_area').removeClass('sticky slideInDown');
        }
    });

    
 

})(jQuery);