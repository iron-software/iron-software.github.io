
/*js inlcudes */

$(document).ready(function () {

    $("a[href='#helpscout-support']").attr("onclick", "return window.HubSpotConversations.widget.open()");

})

function fixTopNav() {

    var topnav = document.querySelectorAll('#navbar > ul > li > a');

    if (!topnav.length) {
        return;
    }
    clearInterval(window.__ifixTopNav);
    for (var i = topnav.length - 1; i >= 0; i--) {

        if (topnav[i].getAttribute('href').indexOf('https:') === 0) {
            topnav[i].setAttribute("target", "_blank");
        }
    }
}

window.__ifixTopNav = setInterval(fixTopNav, 500);
