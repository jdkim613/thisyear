gsap.registerPlugin(ScrollTrigger);

// Set width of .people-content-container to parent div
$('.people-content-container').each(function() {
    var thisWidth = $(this).closest('div.people-content-container').width();
    $(this).closest('div.people-content-container').parent().width(thisWidth);
})

// Declare variable for grabbing ID
var thisCaseID;
var thisCaseTitleID;

$('.highlighted-case-wrapper').on('mouseover', function(e) {

    // grab ID of the case
    thisCaseID = this.id;
    thisCaseTitleID = '#' + this.id + ' .highlighted-case-title';

    // append the child ID to manipulate
    thisCaseID = '#' + thisCaseID + ' .highlighted-case-cover-img';

    TweenMax.to(thisCaseID, 0.25, {scaleX: 1.25, scaleY: 1.25});
    // TweenMax.to(thisCaseTitleID, 0.25, {opacity: '100%'});
}).on('mouseleave', function() {
    TweenMax.to(thisCaseID, 0.25, {scaleX: 1, scaleY: 1})
    // TweenMax.to(thisCaseTitleID, 0.25, {opacity: '50%'});
})

// Hover effect for additional cases
var thisAdditionalCaseID;

$('.additional-achievement-container').on('mouseover', function() {
    thisAdditionalCaseID = '#' + this.id + ' .additional-achievement-title';
    gsap.to(thisAdditionalCaseID, 0.25, {opacity: '1.0'});
}).on('mouseleave', function() {
    gsap.to(thisAdditionalCaseID, 0.25, {opacity: '0.5'});
})


// People Content Animation
var peopleNameID;

$('.people-content').on('mouseover', function() {
    peopleNameID = '#' + this.id + ' .people-name'; 

    // console.log('peopleNameID: ' + peopleNameID);

    gsap.to('#' + this.id, 0.25, {backgroundColor: '#FFFFFF'});
    gsap.to(peopleNameID, 0.25, {color: '#2A2A2A'});

}).on('mouseleave', function() {
    gsap.to('#' + this.id, 0.25, {backgroundColor: '#2A2A2A'});
    gsap.to(peopleNameID, 0.25, {color: '#FFFFFF'});
})

// Glitch Page Title Effect
const pageTitleText = baffle('#page-title');
pageTitleText.set({
    characters: '░▓░ █▒█ ▓▒▒░ █▓█ ▒██▒ ██▓ █▒▓ ▒▒░ ░▒',
    speed: 70,
});

pageTitleText.start();
pageTitleText.reveal(3500);

// Slide up animation
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