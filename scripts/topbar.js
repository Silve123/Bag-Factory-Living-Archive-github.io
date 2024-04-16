document.addEventListener('DOMContentLoaded', function () {
    var artistsButton = document.getElementById('artists-button');
    var artistsNavList = document.querySelector('.artists-nav-list-container');

    artistsButton.addEventListener('click', function () {
        event.preventDefault();
        toggleNavListVisibility(artistsNavList);
    });

    function toggleNavListVisibility(navList) {
        navList.style.display = (navList.style.display === 'none' || navList.style.display === '') ? 'flex' : 'none';
    }
});

