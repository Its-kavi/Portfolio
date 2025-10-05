// Smooth scroll effect
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Skill bar animation on scroll
window.addEventListener('scroll', () => {
    const skills = document.querySelector('.skills');
    const position = skills.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
        document.querySelectorAll('.progress').forEach(bar => {
            bar.style.transition = "width 1.5s ease-in-out";
        });
    }
});
