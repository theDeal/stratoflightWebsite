

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loadcontainer", {
        height: "100vh",
        duration: 1,
        ease: "Expo.easeInOut"
    });


}


function reversePageTransition() {
    var tl = gsap.timeline();
    tl.to(".loadcontainer",{
        duration: 1,
        height: "0%",
        top: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3
    });

    tl.set(".loadcontainer",{
        top: "0%",
        height: "0%"
    });
}
function firstloadinganimation() {
    var tl = gsap.timeline();
    tl.to(".firstloading",{
        duration: 1,
        y:"-100%",
        ease: "Expo.easeInOut",
        delay: 0.3
    });
}


function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animatethisonload", {duration: 1.2, y: 30, stagger: 0.4, delay: 0.1, opacity: 0})
}



function delay(n) {
    n = n | 200;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}


document.addEventListener("DOMContentLoaded", function() {



    barba.init({
        transitions: [{
          name: 'opacity-transition',
          async leave(data) {
            const done = this.async();
            pageTransition();
            await delay(1000);
            done();

          },
          async enter(data) {
            animationOpenMenuMobile.reverse();
            contentAnimation();
            
          },

          async afterEnter(){
            reversePageTransition();
            
          },
          
          async once(data) {
            firstloadinganimation();
           contentAnimation();
          },
        }]
      });
    
})