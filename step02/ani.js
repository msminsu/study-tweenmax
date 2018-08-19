(function($){
    var img = $('img'),
    h2 = $('h2');

    TweenMax.from(img, 1, {x:-200});
    TweenMax.from(h2, 1, {autoAlpa: 0 , delay: 1});
    
})(jQuery);