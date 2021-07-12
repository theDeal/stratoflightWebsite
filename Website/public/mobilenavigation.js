var buttonopennavigationmobile = document.getElementById("openbutton");
var closebuttonnavigationMobile = document.getElementById('closeButton')

// Adding the Animation Timeline from GSAP
var animationOpenMenuMobile = gsap.timeline()
.to("#overlaywrapper", {duration: .5, x: 0, opacity: 1})
.to("#closeButton", {duration: .5, y: 0, opacity: 1})
.to("#overlaywrapper div ul li", {duration: .3, stagger:0.1, y: 0, ease:"back", opacity: 1});

// Stopping the Timeline from starting automaticaly
animationOpenMenuMobile.pause();

// Adding Event Listener for Case of Click
buttonopennavigationmobile.addEventListener("click", ()=> {
    animationOpenMenuMobile.play();
})

closebuttonnavigationMobile.addEventListener('click', () => {
    animationOpenMenuMobile.reverse();
})


