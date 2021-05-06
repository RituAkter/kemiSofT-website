



// Split Scroll Start
function splitscroll() {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '78%',
        triggerElement: '.main_title',
        triggerHook: 0
    })
        .setPin('.main_title')
        .addTo(controller);
}
splitscroll();
// Split Scroll End