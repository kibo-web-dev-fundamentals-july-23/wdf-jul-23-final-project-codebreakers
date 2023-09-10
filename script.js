document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("back-to-top-btn"); //function to get our button by it id

    window.addEventListener("scroll", function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) { //function to detect when a user scrolls down more than 300 px. different browsers might use different properties for scroll detection so both are checked
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    });
    // Scroll to the top when the button is clicked
    btn.addEventListener("click", function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var body = document.body;
    function animateBodyOnScroll() {
        if (isElementInViewport(body)) {
            body.style.opacity = "1";
        }
    }


    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    window.addEventListener("scroll", animateBodyOnScroll);
    animateBodyOnScroll();
});

