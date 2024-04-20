document.addEventListener('DOMContentLoaded', function () {
    var artistsButton = document.getElementById('artists-button');
    var artistsNavList = document.querySelector('.artists-nav-list-container');

    artistsButton.addEventListener('click', function () {
        event.preventDefault();
        toggleNavListVisibility(artistsNavList);
    });

    function toggleNavListVisibility(navList) {
        if(navList.style.display === 'none' ){
            navList.style.display = 'flex';
            localStorage.setItem('topBarArtistsOpen', 'true');
        } else{
            navList.style.display = 'none';
            localStorage.removeItem('topBarArtistsOpen');
        }
    }
});

