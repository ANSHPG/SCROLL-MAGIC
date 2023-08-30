gsap.registerPlugin(ScrollTrigger); 

gsap.to(".scrollBox", {
    scrollTrigger: {
        trigger: ".scrollBox",
        start: "center center",
        end: "+=393",
        // end -> center + 393px
        markers: true,
        scrub: 1,
        pin: "#home-page",
        pinSpacing: true
    },
    x: '92vw',
    ease: 'none'
});