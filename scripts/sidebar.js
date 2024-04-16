function navigateTo(url) {
    console.log('in navigate to');
    window.location.href = url;
}

function openNav() {
    if (document.getElementById("mySidenav").style.width !== "0px" && document.getElementById("main").style.marginRight !== "0px") {
        closeNav();
    } else {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginRight = "250px";
        localStorage.setItem('sidebarOpen', 'true');
        console.log(localStorage.getItem('sidebarOpen'));
    }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
    localStorage.removeItem('sidebarOpen');
}
localStorage.removeItem('sidebarOpen');
