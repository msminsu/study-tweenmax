/* var controller = new ScrollMagic.Controller({
   globalSceneOptions: {
     duration: $('.scen').height(),
     triggerHook: .025,
     reverse: true1
   }
 }); */


 $(function() {
   // Init Controller
   var controller = new ScrollMagic.Controller();

   var ourScene = new ScrollMagic.Scene({

   })
   .setClassToggle('.box2', 'fade-in')
   .addIndicators()
   .addTo(controller);


});