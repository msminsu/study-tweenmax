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
   .addIndicators({
      name:'fade scene',
      colorTrigger:'black',
      indent: 100,
      colorStart: 'red'
   })
   .addTo(controller);




   var _nav = document.querySelector('aside');

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



