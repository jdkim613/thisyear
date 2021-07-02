gsap.registerPlugin(ScrollTrigger);
tl = new TimelineMax ({});

tl.staggerFrom('#title-container .hidetext', 0.75, {
    scrollTrigger: {
        trigger: '#title-container',
        start: '30% center',
        end: 'center center',
        // markers: true,
        // scrub: true,
        toggleActions: 'play none reverse restart',
    },
    y: '150%', 
    ease: Power4.easeout
}, 0.25);

tl.staggerFrom('#highlighted-content-section .hidetext', 1, {
    scrollTrigger: {
    trigger: '#highlighted-content-section .hidetext',
    start: 'top 40%',
    end: 'top 40%',
    // markers: true,
    scrub: 1,
    toggleActions: 'play none reverse restart',
    }, 
    y: '150%',
    ease: Power4.easeout
}, 0.25);

tl.staggerFrom('#more-content-section .hidetext', .75, {
    scrollTrigger: {
        trigger: '#more-content-section .hidetext',
        start: 'top 40%',
        end: 'top 40%',
        // markers: true,
        scrub: 1,
        toggleActions: 'play none reverse restart',
    },
    y: '150%',
    ease: Power4.easeout
}, 0.25);

tl.staggerFrom('#people-content-section .hidetext', .75, {
    scrollTrigger: {
        trigger: '#people-content-section .hidetext',
        start: 'top 40%',
        end: 'top 40%',
        // markers: true,
        scrub: 1,
        toggleActions: 'play none reverse restart',
    },
    y: '150%',
    ease: Power4.easeout
}, 0.25);