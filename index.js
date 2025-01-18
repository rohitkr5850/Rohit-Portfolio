// Dynamically update percentage for circular progress
document.querySelectorAll('.circle').forEach((circle) => {
    const percentage = circle.getAttribute('data-percentage');
    circle.style.setProperty('--percentage', percentage);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
