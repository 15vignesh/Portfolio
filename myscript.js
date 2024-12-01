document.querySelectorAll('.toggle-button').forEach(function (button) {
    button.addEventListener('click', function () {
        var educationItem = this.parentElement;
        educationItem.classList.toggle('open');
    });
});
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}
