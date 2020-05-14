
let lastScroll = 0;

window.onscroll = function () {
    if (window.scrollY < 50) {
        document.getElementById("navbar").classList.remove('header-off');
        return;
    }

    if (lastScroll > window.scrollY) {
        // appears
        document.getElementById("navbar").classList.remove('header-off');
        lastScroll = window.scrollY;
    } else if (lastScroll < window.scrollY) {
        // disappears
        document.getElementById("navbar").classList.add('header-off');
        lastScroll = window.scrollY;
    }
};