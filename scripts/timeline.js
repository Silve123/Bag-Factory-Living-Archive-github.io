function openModal(parentDivId, rowIndex, imageIndex) {
    // Display the modal
    document.getElementById('myModal').style.display = 'block';

    // Set the current slide info
    currentSlideInfo = { parentDivId, rowIndex, imageIndex };

    // Show the selected image
    showSlides();
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function plusSlides(n) {
    const { parentDivId, rowIndex, imageIndex } = currentSlideInfo;
    const modalContent = document.getElementById(parentDivId);

    if (!modalContent) return;

    // Get all images in the current modal content
    const rows = modalContent.querySelectorAll('.row');
    const images = rows[rowIndex].querySelectorAll('.myImg');

    // Calculate the total number of images
    const totalImages = rows.length * images.length;

    // Update imageIndex considering the total number of images
    currentSlideInfo.imageIndex = (imageIndex + n + totalImages) % totalImages;

    // Show the updated image
    showSlides();
}

function showSlides() {
    const { parentDivId, rowIndex, imageIndex } = currentSlideInfo;
    const modalContent = document.getElementById(parentDivId);

    if (!modalContent) return;

    // Get all images in the current modal content
    const rows = modalContent.querySelectorAll('.row');
    const images = rows[rowIndex].querySelectorAll('.myImg');

    // Calculate the row and column indices based on the updated imageIndex
    const updatedRowIndex = Math.floor(currentSlideInfo.imageIndex / images.length) % rows.length;
    const updatedImageIndex = currentSlideInfo.imageIndex % images.length;

    // Display the image in the modal
    const selectedImage = rows[updatedRowIndex].querySelectorAll('.myImg')[updatedImageIndex];
    document.getElementById('img01').src = selectedImage.src;
    document.getElementById('caption').innerHTML = selectedImage.alt;
}

// Set up event listeners after the page loads
window.onload = function () {
    // Attach click event to each image
    const images = document.querySelectorAll('.myImg');
    images.forEach((image, index) => {
        image.onclick = function () {
            // Call openModal with the parent id, row index, and index of the clicked image
            const parentDivId = this.closest('.main-content-container').id;
            const rowIndex = Array.from(this.closest('.row').parentElement.children).indexOf(this.closest('.row'));
            console.log(parentDivId, rowIndex, index)
            openModal(parentDivId, rowIndex, index);
        };
    });

    // Attach click event to close button
    const span = document.getElementsByClassName('close')[0];
    span.onclick = function () {
        // Call closeModal when close button is clicked
        closeModal();
    };

    // Attach click events to next and previous buttons
    const nextBtn = document.getElementsByClassName('next')[0];
    const prevBtn = document.getElementsByClassName('prev')[0];

    nextBtn.onclick = function () {
        // Call plusSlides with 1 to move to the next image
        plusSlides(1);
    };

    prevBtn.onclick = function () {
        // Call plusSlides with -1 to move to the previous image
        plusSlides(-1);
    };
};

function showFooter() {
    var footerObject = document.getElementById('footer-object');
    var footerText = document.querySelector('.footer-hiding-text');

    if (footerObject && footerText) {
        if (footerObject.style.display !== 'none') {
            footerObject.style.display = 'none';
            footerText.textContent = 'Show Funders';
        } else {
            footerObject.style.display = 'block'; 
            footerText.textContent = 'Hide Funders';
        }
    }
}

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


