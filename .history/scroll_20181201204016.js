/* var controller = new ScrollMagic.Controller({
   globalSceneOptions: {
     duration: $('.scen').height(),
     triggerHook: .025,
     reverse: true1
   }
 }); */


 $(function() {

   var tomato = document.getElementsByClassName('tomato'),
    banana = document.getElementsByClassName('banana');

    tl = new TimelineMax({paused: true});

    tl.to(tomato,1 ,{left:200, ease:Back.easeOut})
    .add('up',"-=0.5")
    .to(tomato,1,{top:70}, "up")
    .to(banana, 1,{top:167}, "up")
    .to(tomato, 1,{left:300}, "+=1")
    .to(banana, 1,{top:350}, '-=1.5')


   // Init Controller
   var controller = new ScrollMagic.Controller();

/*    var ourScene = new ScrollMagic.Scene({
   triggerElement:'#nav-1',
   triggerHook:.5,   // 브라우저 크기 영역 비율, 훅위치
   reverse: false

   })
   .setClassToggle('.box2', 'fade-in')
   .addIndicators({
      name:'fade scene',
      colorTrigger:'black',
      indent: 100,
      colorStart: 'red'
   })
   .addTo(controller); */

$('nav ul li').each(function(i){
   var ourScen = new ScrollMagic.Scene({
      triggerElement : this.children[0],
      triggerHook: 0.8
   })
   .setTween(tl)
   .setClassToggle('.box2', 'fade-in')
   /* .addIndicators({
      name:'fade scene',
      colorTrigger:'black',
      indent: 100,
      colorStart: 'red'
   }) */
   .addTo(controller);
});



  
      
var _nav = document.querySelector('nav');

_nav.addEventListener('click', function(e) {
  var target = e.target,
      id     = target.getAttribute('href');

      console.log( target, id);


  if(id !== null) {
    if(id.length > 0) {
      e.preventDefault();
      controller.scrollTo(id);

      if(window.history && window.history.pushState) {
        history.pushState("", document.title, id);
      }
    }
  }
});


});


