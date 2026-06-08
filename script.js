document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
// Mobile Menu
function toggleMenu() {
    const menu = document.getElementById("navMenu");

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }
}

function closeMenu() {
    document.getElementById("navMenu").classList.remove("active");
    document.body.style.overflow = "";
}
