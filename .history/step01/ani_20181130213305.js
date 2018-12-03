(function($){
    var img = $('img'),
    h2 = $('h2'),
    h1 = $('h1'),
    intro = $('.intro'),
    listItem = $('ul li'),
    buttons = $('button'),
    dot = $('.dot'),
    loader = $('#loader'),

    tl = new TimelineMax({paused: true}) // new TimelineLite();  {paused: true} : 정지
    tlLoader = new TimelineMax({repeat: 2, onComplete: loadContent} );// repeat -1 : infinitly loop, 




/* 
    TweenMax.from(h1, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut, delay: 0.2});
    TweenMax.from(intro, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut, delay: 0.4});
    TweenMax.from(img, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut, delay: 0.6});
    TweenMax.from(h2, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut, delay: 0.8});
    TweenMax.from(listItem, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut, delay: 1}); 
 */
/* 
  tl
    .from(h1, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut })
    .from(intro, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
    .from(img, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
    .from(h2, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
    .from(listItem, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15'); 
 */

/* 
    tl
    .from(h1, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut })
    .from(intro, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut}, '+=1')
    .from(img, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut},3)
    .from(h2, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut}, 2)
    .from(listItem, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut}, 2.5); 
 */


 // add 레이블 삽입
/* tl
.from(h1, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut })
.add('intro')
.from(intro, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut})
.from(img, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut}, 'intro')
.from(h2, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut}, 'intro+=3')
.from(listItem, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut}, 'intro');  */


tl
.set(header,{autoAlpha:1})
.from(h1,0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut })
.from(intro,0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut},'-=0.15')
.from(img,0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut},'-=0.15')
.from(h2,0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut},'-=0.15')
.from(listItem,0.3, {y:-15, autoAlpha: 0, ease:Power1.easeOut},'-=0.15')

tlLoader
.staggerFromTo(dot, 0.3,
    {y:0, autoAlpha: 0},
    {y: 20, autoAlpha: 1, ease:Back.easeInOut}, 
    0.05
    )
    .fromTo(loader, 0.3,
        {autoAlpha:1, scale:1.3},
        {autoAlpha:0, scale:1, ease: Power0.easeNone},
        0.9
        );

        function loadContent(){
            var tlLoaderOut = new TimelineMax({onComplete: contentIn});
            tlLoaderOut
            .set(dot,{backgroundColor: '#2b4d66'})
            .to(loader, 0.3, {autoAlpha: 1, scale: 1.3, ease: Power0.easeNone})
            .staggerFromTo(dot, 0.3,
                {y:0, autoAlpha: 0},
                {y: 20, autoAlpha: 1, ease:Back.easeInOut}, 
                0.05, 0
                )
                .to(loader,0.3,{y: -150, autoAlpha: 0, ease:Back.easeIn}, '+= 0.3')
            ;
        }


        function contentIn(){
            tl.play();
        }

// .staggerFrom(buttons, 0.2, {x: 200, ease:Power1.easeOut}, 0.1);
// .staggerTo(buttons, 0.2, {x: -200, ease:Power1.easeOut}, 0.1);
/* .staggerFromTo(buttons, 0.2, 
    {autoAlpha: 0, x: 10},
    {x: -20, autoAlpha: 1, ease:Power1.easeOut},
     0.1); */
    /*  .staggerFrom(buttons, 1, 
        {cycle:{
            x:[50,-50],
            scale:[2,0.5]
        }, autoAlpha: 0, ease:Power1.easeOut}, 0.5); */
// tl.pause();

$('#btnPlay').on('click',  function(){
    tl.play();
});
$('#btnPause').on('click',  function(){
    tl.pause();
});

$('#btnResume').on('click',  function(){
    tl.resume();
});

$('#btnReverse').on('click',  function(){
    tl.reverse();
});

$('#btnSpeedUp').on('click',  function(){
    tl.timeScale(8);  // default = 1
});

$('#btnSlowDown').on('click',  function(){
    tl.timeScale(0.5);
});

$('#btnSeek').on('click',  function(){
    tl.seek(1);// .seek('intro'); f레이블이나, 설정 한 곳으로 보내기
});

$('#btnProgress').on('click',  function(){
    tl.progress(0.5);  // 0~1  타임라인 설정값으로 보내기
});

$('#btnRestart').on('click',  function(){
    tl.restart();
});

})(jQuery);





// step 01   select!!!
/* var header = document.getElementById('header'),
    h1= document.getElementsByTagName('h1'),
    intro = document.getElementsByClassName("intro"),
    firstItem = document.getElementsByClassName('list')[0].firstElementChild;
    secondItem = document.getElementsByClassName('list')[0].children[1];
    lastItem = document.getElementsByClassName('list')[0].lastElementChild;

    TweenMax.to(lastItem, 1, {opacity: 0, x:50}); */


// step 02
/* // TweenMax.to  = css start => tween max value
TweenMax.to(img, 1, {x:200});

// tweenMax.from = css ending position
TweenMax.from(img, 1, {x:200, delay:1});

// tweenMax start, end
TweenMax.fromTo(img, 1, {x:20}, {x:400,y:200});

//tweenMax.set = setting
TweenMax.set(img, {x: 200}); */
>>>>>>> 2cfc7f1cb1bc937b210317dc17879b7336cd9a65
