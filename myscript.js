document.querySelectorAll('.toggle-button').forEach(function (button) {
    button.addEventListener('click', function () {
        var educationItem = this.parentElement;
        educationItem.classList.toggle('open');
    });
});
