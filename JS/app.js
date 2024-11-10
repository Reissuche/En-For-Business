(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });

})(jQuery);
document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    let autoSlideTimer; // Variable to hold the interval ID
    const slides = document.querySelectorAll(".testimonial-slide");
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active", "animated", "fadeIn"); // Remove WOW.js-specific classes
            if (i === index) {
                slide.classList.add("active", "animated", "fadeIn"); // Add animation classes directly
            }
        });
        canSlideAuto = false;
        setTimeout(() => canSlideAuto = true, 5000);
    }


    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
        resetAutoSlide(); // Reset timer on manual slide change
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
        resetAutoSlide(); // Reset timer on manual slide change
    }

    // Function to start or restart the automatic slide timer
    function startAutoSlide() {
        autoSlideTimer = setInterval(nextSlide, 5000); // Auto-change every 5 seconds
    }

    // Function to reset the automatic slide timer
    function resetAutoSlide() {
        clearInterval(autoSlideTimer); // Clear the current timer
        startAutoSlide(); // Start a new timer
    }

    // Set up button event listeners
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    // Show the initial slide
    showSlide(currentSlide);

    // Start the automatic slide change
    startAutoSlide();
});


document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", function () {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            // User is scrolling down - hide the navbar
            navbar.classList.add("hide");
        } else {
            // User is scrolling up - show the navbar
            navbar.classList.remove("hide");
        }

        // Update last scroll position
        lastScrollY = currentScrollY;
    });
});

document.getElementById('dropdown-icon').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.navbar-collapse').classList.toggle('show');
});