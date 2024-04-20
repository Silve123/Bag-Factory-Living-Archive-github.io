function updateSidebarStatusAndTopBar() {
    var isSidebarOpen = localStorage.getItem('sidebarOpen');
    var isTopbarArtistsOpen = localStorage.getItem('topBarArtistsOpen');

    if (isSidebarOpen) {
        document.querySelector('.fixed-sidebar-object').classList.add('sidebar-open');
    } else {
        document.querySelector('.fixed-sidebar-object').classList.remove('sidebar-open');
    }

    if (isTopbarArtistsOpen) {
        document.querySelector('.fixed-topbar-object').classList.add('topbar-artists-open');
    } else {
        document.querySelector('.fixed-topbar-object').classList.remove('topbar-artists-open');
    }
}

updateSidebarStatusAndTopBar();
setInterval(updateSidebarStatusAndTopBar, 10);


