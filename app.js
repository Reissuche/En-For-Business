document.addEventListener('DOMContentLoaded', function () {
    var dropbtn = document.querySelector('.dropbtn');
    var dropdown = document.querySelector('.dropdown-content');

    // Toggle dropdown visibility and animate the button
    dropbtn.addEventListener('click', function () {
        this.parentElement.classList.toggle('active'); // Toggle the active class for both menu and bars
    });

    // Close the dropdown if clicked outside of it
    window.addEventListener('click', function (e) {
        if (!dropbtn.contains(e.target) && !dropdown.contains(e.target)) {
            dropbtn.parentElement.classList.remove('active'); // Ensure menu closes and hamburger resets
        }
    });
});