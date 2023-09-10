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



