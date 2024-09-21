document.addEventListener('DOMContentLoaded', function () {
    var dropbtn = document.querySelector('.dropbtn');
    var dropdown = document.querySelector('.dropdown-content');
    var bars = document.querySelectorAll('.bar'); // Select the bars for animation

    // Toggle dropdown visibility when clicking on the button
    dropbtn.addEventListener('click', function () {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';

        // Toggle the active class to animate the bars
        this.parentElement.classList.toggle('active');
    });

    // Optional: Close dropdown if clicked outside
    window.addEventListener('click', function (e) {
        if (!dropbtn.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.style.display = 'none';
            dropbtn.parentElement.classList.remove('active'); // Ensure bars return to the hamburger icon
        }
    });
});
