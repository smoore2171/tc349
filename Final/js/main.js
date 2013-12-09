$(document).ready(function () {
    if (window.location.href.indexOf("#") <= -1) {
        // add it
        window.location.hash = '#home';
    }
});