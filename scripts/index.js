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

document.addEventListener('DOMContentLoaded', function () {
    magnify("myimage", 2);
    addClickHandlers();

    // banner management
    var banner = document.querySelector('.banner');
    var bannerCaptionDiv = document.querySelector('.banner-captions');

    function toggleBannerCaption() {
        var bannerCaptions = document.querySelector('.banner-captions');
        bannerCaptions.style.display = 'flex';
        banner.style.display = 'none';
    }

    function toggleBanner() {
        var bannerCaptions = document.querySelector('.banner-captions');
        bannerCaptions.style.display = 'none';
        banner.style.display = 'flex';
    }

    banner.addEventListener('click', function () {
        toggleBannerCaption();
    });
    bannerCaptionDiv.addEventListener('click', function () {
        toggleBanner();
    });

    // mobile images clicking management
    function addClickHandlers() {
        var images = document.getElementsByTagName("img");
        var bannerImage = document.querySelector('.banner-logo-image');
        var bannerLogoImage = document.querySelector('.banner-image');

        for (var i = 0; i < images.length; i++) {
            var image = images[i];
            
            if (image !== bannerImage && image !== bannerLogoImage) {
                image.addEventListener("click", function () {
                    var altText = this.alt;
                    if (altText) {
                        window.location.href = "/" + altText;
                    }
                });
            }
        }
    }
});

// magnify management
if (typeof magnify !== 'function') {
    
    
    function magnify(imgID, zoom) {
        var img, glass, w, h, tooltip;

        img = document.getElementById(imgID);
        imgmap = document.getElementById('image-map');
        imgmap.addEventListener("mousemove", moveMagnifier);
        imgmap.addEventListener("touchmove", moveMagnifier);

        glass = document.createElement("DIV");
        tooltip = document.createElement("DIV");

        img.parentElement.insertBefore(glass, img);
        img.parentElement.insertBefore(tooltip, img);

        glass.className = "img-magnifier-glass";
        tooltip.className = "area-tooltip";

        w = glass.offsetWidth / 2;
        h = glass.offsetHeight / 2;

        glass.style.backgroundImage = "url('" + img.src + "')";
        glass.style.backgroundRepeat = "no-repeat";
        glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";

        img.addEventListener("mousemove", moveMagnifier);
        img.addEventListener("touchmove", moveMagnifier);

        function moveMagnifier(e) {
            e.preventDefault();
            var pos = getCursorPos(e),
                x = pos.x,
                y = pos.y;

            if (x > img.width - (w / zoom)) { x = img.width - (w / zoom); }
            if (x < w / zoom) { x = w / zoom; }
            if (y > img.height - (h / zoom)) { y = img.height - (h / zoom); }
            if (y < h / zoom) { y = h / zoom; }

            /* Check if the cursor is over an area and update the magnifier's border color */
            const isOverArea = e.target.tagName === 'AREA' || e.target.closest('area');
            glass.style.borderColor = isOverArea ? 'orange' : 'black';

            glass.style.left = (x - w) + "px";
            glass.style.top = (y - h) + "px";
            glass.style.backgroundPosition = "-" + ((x * zoom) - w) + "px -" + ((y * zoom) - h) + "px";

            // Show the tooltip at the cursor position:
            tooltip.style.display = 'block';
            tooltip.innerHTML = getAreaAlt(x, y);
            tooltip.style.top = e.pageY + 10 + 'px';
            tooltip.style.left = e.pageX + 10 + 'px';
        }

        function getAreaAlt(x, y) {
            var areas = document.querySelectorAll('map[name="workmap"] area');
            for (var i = 0; i < areas.length; i++) {
                var coords = areas[i].coords.split(",");
                if (x >= coords[0] && x <= coords[2] && y >= coords[1] && y <= coords[3]) {
                    return areas[i].alt;
                }
            }
            return '';
        }

        function getCursorPos(e) {
            var a, x = 0, y = 0;
            e = e || window.event;
            a = img.getBoundingClientRect();
            x = e.pageX - a.left;
            y = e.pageY - a.top;
            x = x - window.pageXOffset;
            y = y - window.pageYOffset;
            return { x: x, y: y };
        }
    }
}


