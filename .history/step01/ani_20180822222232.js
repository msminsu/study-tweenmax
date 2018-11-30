(function($){
    var header = $('#header');
    TweenMax.to(header, 1, {x:400, y:300});
    //TweenMax.to(header, 1, {opacity: 0, y:40});
    

    
    var vertical  = true;
    var target = {
        height: 200,
        width: 500
    }
 var unit = vertical ? target.height: target.width;

 console.log(unit);
 
})(jQuery);