
let lastScroll = 0;

window.onscroll = function () {
    if (window.scrollY < 10) {
        document.getElementById("navbar").style.top = "0";
        return;
    }

    if (lastScroll < window.scrollY) {
        // appears
        document.getElementById("navbar").style.top = "0";
        lastScroll = window.scrollY;
    } else if (lastScroll > window.scrollY) {
        // disappears
        document.getElementById("navbar").style.top = "-50px";
        lastScroll = window.scrollY;
    }
};