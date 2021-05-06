// Pre-loader Animation Start
// document.querySelector('.wrapper').style.display = 'none';
// document.getElementById('load').classList.add("loader");

// setTimeout(()=>{
//     document.getElementById('load').classList.remove("loader");
//     document.querySelector('.wrapper').style.display = 'block';
// }, 4000)
// Pre-loader Animation End




//Sticky Header Start
window.addEventListener("scroll", function () {
    var header = document.querySelector("#header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
//Sticky Header End






// Smooth Scrolling Animation Start
$(document).ready(function () {

    var scrollLink = $('.scroll');

    // Smooth scrolling
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }

        })

    })

})
// Smooth Scrolling Animation End







// Background Ellips Animation Start
document.addEventListener("mousemove", parallax);

function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed) / 100
        const y = (window.innerHeight - e.pageY * speed) / 100

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}
// Background Ellips Animation End






// Choose Us Accordion JS Start

$(document).ready(function () {

    $('#accordion .item').hover(function () {
        $(this).find('.accordion-content').slideDown()
    }, function () {
        $(this).find('.accordion-content').slideUp()
    }).find('.accordion-content').hide()

});

// Choose Us Accordion JS End







