// Set width of .people-content-container to parent div
$('.people-content-container').each(function() {
    var thisWidth = $(this).closest('div.people-content-container').width();
    $(this).closest('div.people-content-container').parent().width(thisWidth);
})


// Case highlight hover state
// $('#credena-highlight').on('mouseover', function() {
//     TweenMax.to('#credena-highlight', 0.25, {
//         // padding: '0 0 24px',
//         // boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.75)',
//         boxSizing: 'border-box',
//         border: '2px black solid',
//     })
// }).on('mouseleave', function() {
//     TweenMax.to('#credena-highlight', 0.25, {
//         // padding: '0px',
//         // boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
//         border: 'none',
//     })
// })


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