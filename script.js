document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        const targetPosition = target.offsetTop - 70;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Mobile Menu
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

function closeMenu() {
    document.getElementById("navMenu").classList.remove("active");
}
