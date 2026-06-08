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
    const overlay = document.getElementById("overlay");

    menu.classList.toggle("active");
    overlay.classList.toggle("active");

    if (menu.classList.contains("active")) {
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
    }
}

function closeMenu() {
    document.getElementById("navMenu").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");

    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
}
