function updateSidebarStatus() {
    var isSidebarOpen = localStorage.getItem('sidebarOpen');

    if (isSidebarOpen) {
        document.querySelector('.fixed-sidebar-object').classList.add('sidebar-open');
    } else {
        document.querySelector('.fixed-sidebar-object').classList.remove('sidebar-open');
    }
}

updateSidebarStatus();
setInterval(updateSidebarStatus, 10);


