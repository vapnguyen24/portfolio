window.initModal = function (state) {
    let currentImages = [];
    let currentIndex = 0;
    let slideInterval = null;

    // Helper to update the image source
    function updateSlide() {
        const img = document.getElementById('modal-img');
        const zoomImg = document.getElementById('zoom-img');

        if (img) {
            img.style.opacity = '0';
            setTimeout(() => {
                if (currentImages.length > 0) {
                    img.src = currentImages[currentIndex];
                }
                img.style.opacity = '1';
            }, 200);
        }

        // Also update zoom image if it's open
        if (zoomImg && !document.getElementById('zoom-modal').classList.contains('hidden')) {
            if (currentImages.length > 0) {
                // Should we fade for zoom too? Maybe just direct swap for responsiveness
                zoomImg.src = currentImages[currentIndex];
            }
        }

        // Update Zoom Controls (show/hide based on list length)
        updateZoomControls();
    }

    function updateZoomControls() {
        const prevZoom = document.getElementById('zoom-prev');
        const nextZoom = document.getElementById('zoom-next');
        if (currentImages.length > 1) {
            if (prevZoom) prevZoom.style.display = 'block';
            if (nextZoom) nextZoom.style.display = 'block';
        } else {
            if (prevZoom) prevZoom.style.display = 'none';
            if (nextZoom) nextZoom.style.display = 'none';
        }
    }

    // Shared Slide Function
    window.changeSlide = function (direction) {
        clearInterval(slideInterval); // Pause auto-slide on interaction

        currentIndex += direction;
        if (currentIndex >= currentImages.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = currentImages.length - 1;

        updateSlide();
        startSlideShow(); // Restart
    };

    // Alias for Zoom Slider (same logic, just clearer name for HTML onclick)
    window.changeZoomSlide = function (direction) {
        window.changeSlide(direction);
    }

    function startSlideShow() {
        // Prevent multiple intervals
        clearInterval(slideInterval);

        if (currentImages.length <= 1) return;

        slideInterval = setInterval(() => {
            currentIndex++;
            if (currentIndex >= currentImages.length) currentIndex = 0;
            updateSlide();
        }, 3000); // 3 seconds per slide
    }

    // Open Modal
    window.openModal = function (projectId) {
        const p = Array.isArray(window.projects)
            ? window.projects.find(proj => proj.id === projectId)
            : window.projects[projectId];

        if (!p) return;

        const backdrop = document.getElementById('modal-backdrop');
        const content = document.getElementById('modal-content');
        const title = document.getElementById('modal-title');
        const desc = document.getElementById('modal-desc');
        const tagsContainer = document.getElementById('modal-tags');
        const prevBtn = document.getElementById('prev-slide');
        const nextBtn = document.getElementById('next-slide');
        const zoomBtn = document.getElementById('zoom-btn');

        // Text Content
        title.innerText = p.title[state.lang];
        desc.innerHTML = p.desc[state.lang];

        // Tags
        tagsContainer.innerHTML = '';
        p.tags.forEach(tag => {
            const span = document.createElement('span');
            span.className = 'px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs text-gray-700 dark:text-gray-300';
            span.innerText = tag;
            tagsContainer.appendChild(span);
        });

        // Slider Setup
        currentImages = p.images && p.images.length > 0 ? p.images : (p.img ? [p.img] : []);
        currentIndex = 0;

        // Preload all project images for this modal
        currentImages.forEach(src => {
            const imgPreload = new Image();
            imgPreload.src = src;
        });

        // Initial Image Load
        const img = document.getElementById('modal-img');
        if (img && currentImages.length > 0) {
            img.src = currentImages[0];
            img.style.opacity = '1';
        }

        // Controls Visibility Common
        if (currentImages.length > 1) {
            if (prevBtn) prevBtn.style.display = 'block';
            if (nextBtn) nextBtn.style.display = 'block';
            startSlideShow();
        } else {
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
        }

        if (zoomBtn) {
            zoomBtn.style.display = currentImages.length > 0 ? 'block' : 'none';
        }

        // Show Modal
        if (backdrop) backdrop.classList.remove('hidden');
        requestAnimationFrame(() => {
            if (backdrop) backdrop.classList.remove('opacity-0');
            if (content) {
                content.classList.remove('opacity-0', 'scale-95');
                content.classList.add('scale-100');
            }
        });

        document.body.style.overflow = 'hidden';
    };

    // Close Modal
    window.closeModal = function () {
        const backdrop = document.getElementById('modal-backdrop');
        const content = document.getElementById('modal-content');

        clearInterval(slideInterval);

        if (backdrop) backdrop.classList.add('opacity-0');
        if (content) {
            content.classList.remove('scale-100');
            content.classList.add('opacity-0', 'scale-95');
        }

        setTimeout(() => {
            if (backdrop) backdrop.classList.add('hidden');
            document.body.style.overflow = '';
        }, 300);
    };

    // Zoom Functions
    window.openZoomModal = function () {
        const zoomModal = document.getElementById('zoom-modal');
        const zoomImg = document.getElementById('zoom-img');

        if (zoomModal && zoomImg && currentImages.length > 0) {
            zoomImg.src = currentImages[currentIndex];
            zoomModal.classList.remove('hidden');
            updateZoomControls();
        }
    };

    window.closeZoomModal = function () {
        const zoomModal = document.getElementById('zoom-modal');
        if (zoomModal) zoomModal.classList.add('hidden');
    };

    // Keyboard Events
    document.addEventListener('keydown', (e) => {
        const zoomModal = document.getElementById('zoom-modal');
        const zoomOpen = zoomModal && !zoomModal.classList.contains('hidden');
        const backdrop = document.getElementById('modal-backdrop');
        const modalOpen = backdrop && !backdrop.classList.contains('hidden');

        if (e.key === 'Escape') {
            if (zoomOpen) {
                window.closeZoomModal();
            } else if (modalOpen) {
                window.closeModal();
            }
        }

        // Arrow keys for slider (works for both modal and zoom view as they share state)
        if (zoomOpen || modalOpen) {
            if (e.key === 'ArrowLeft') window.changeSlide(-1);
            if (e.key === 'ArrowRight') window.changeSlide(1);
        }
    });
}
