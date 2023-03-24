const target = document.querySelectorAll('[data-anime]');
function animeScroll() {
    const windowTop = window.innerHeight * 0.5;
    target.forEach((e) => {
        if (e.getBoundingClientRect().top - windowTop < 120) {
            e.classList.add('animate')
        } else {
            e.classList.remove('animate')
        }
    })

}
window.addEventListener('scroll', (e) => {
    animeScroll();
})

