// (function($){
//     var header = $('#header');
//     TweenMax.to(header, 1, {x:400, y:300});
//     //TweenMax.to(header, 1, {opacity: 0, y:40});

//     var red =0xFF0000;

//     console.log(red);
 
// })(jQuery);

for(var i = 0; i < 3; i++){
    console.log(i);
    setTimeout(function(){
        console.log('숫자 출력 하기 '+i);
    }, 1000);
};

for( let k = 0; k < 3; k++){
    console.log(k);
    setTimeout(function(){
        console.log('숫자 출력 하기 '+k);
    }, 1000);
}