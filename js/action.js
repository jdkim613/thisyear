gsap.registerPlugin(ScrollTrigger);
tl = new TimelineMax ({});

TweenMax.from('#page-title-trigger', .75, {y: '150%', ease: Power4.easeout})
tl.staggerFrom('#highlighted-content-section .hidetext', 1, {scrollTrigger: {
    trigger: '#highlighted-content-section .hidetext',
    start: 'top center',
    markers: true,
    toggleActions: 'play none none none',
}, 
y: '150%',
ease: Power4.easeout
}, 0.25);