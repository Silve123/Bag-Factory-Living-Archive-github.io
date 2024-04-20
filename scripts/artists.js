let currentSlideInfo = 0;

function openModal(index) {
    currentSlideInfo = index;
    showSlides();
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function plusSlides(n) {
    currentSlideInfo += n;
    showSlides();
}

function showSlides() {
    const images = document.querySelectorAll('.myImg');
    currentSlideInfo = (currentSlideInfo + images.length) % images.length;

    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
    document.getElementById('img01').src = images[currentSlideInfo].src;
    document.getElementById('caption').innerHTML = images[currentSlideInfo].alt;

    const singleLineDescription = document.querySelector('.single-line-description');
    singleLineDescription.innerHTML = `${images[currentSlideInfo].dataset.medium} ${images[currentSlideInfo].dataset.size}`;
}

window.onload = function () {
    const images = document.querySelectorAll('.myImg');
    images.forEach((image, index) => {
        image.onclick = function () {
            openModal(index);
        };
    });

    const span = document.getElementsByClassName('close')[0];
    span.onclick = function () {
        closeModal();
    };

    const nextBtn = document.getElementsByClassName('next')[0];
    const prevBtn = document.getElementsByClassName('prev')[0];

    nextBtn.onclick = function () {
        plusSlides(1);
    };

    prevBtn.onclick = function () {
        plusSlides(-1);
    };
};

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.myImg-div');
    let currentIndex = 0;

    function showNextSet() {
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = 'none';
        }
        for (let i = currentIndex; i < currentIndex + 4; i++) {
            if (images[i]) {
                images[i].style.display = 'block';
            }
        }
        currentIndex = (currentIndex + 4) % images.length;
    }

    showNextSet();

    setInterval(showNextSet, 3000); 
});

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