function show(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
// show();
// gsap.to("#main>img",{
//   rotate:-15,
//   scrollTrigger:{
//       trigger:"#main>img",
//       scroller:"#main",
//       // markers:true,
//       start:"top 5%",
//       end:"top -280%",

//       scrub:true,
//       pin:true
//   }
// })

show();

gsap.to("#main>img",{
   scale: 0.5,
   rotate:-15,
  scrollTrigger:{
      trigger:"#main>img",
      scroller:"#main",
      // markers:true,
      start:"top 5%",
      end:"top -300%" ,
    
    pin:true
  }
})
// gsap.to("#main>img",{
//   // rotate:-15,
//   opacity:0,
//   y:100,
//   scrollTrigger:{
//       trigger:"#main>img",
//       scroller:"#main",
//       // markers:true, 
//       // start:"top 5%",
//       // end:"top -360%" ,
    
    
//   }
// })
