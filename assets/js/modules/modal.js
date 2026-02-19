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
        if (currentImages.length === 0) return;
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
    };

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

    // Toggle between summary and detail (README) view
    window.toggleDetailView = function (show) {
        const summaryView = document.getElementById('summary-view');
        const detailView = document.getElementById('detail-view');
        const textSide = document.getElementById('modal-text-side');
        const sliderSide = document.getElementById('modal-slider-side');

        if (show) {
            summaryView.classList.add('hidden');
            detailView.classList.remove('hidden');
            
            // Hide slider and expand text side
            if (sliderSide) sliderSide.classList.add('hidden');
            if (textSide) {
                textSide.classList.remove('md:w-2/5');
                textSide.classList.add('md:w-full');
                textSide.scrollTop = 0;
            }
        } else {
            summaryView.classList.remove('hidden');
            detailView.classList.add('hidden');
            
            // Show slider and shrink text side
            if (sliderSide) sliderSide.classList.remove('hidden');
            if (textSide) {
                textSide.classList.remove('md:w-full');
                textSide.classList.add('md:w-2/5');
                textSide.scrollTop = 0;
            }
        }
    };

    // Fetch and render README
    async function loadReadme(path) {
        const container = document.getElementById('readme-content');
        if (!container) return;

        // Show loading state
        container.innerHTML = `
            <div class="flex flex-col items-center justify-center py-12 text-gray-400">
                <i class="fas fa-spinner fa-spin text-2xl mb-2"></i>
                <span>Loading details...</span>
            </div>
        `;

        try {
            const response = await fetch(path);
            if (!response.ok) throw new Error('Failed to load README');
            const markdown = await response.text();
            
            // Render markdown using marked.js
            if (window.marked) {
                // Ensure proper pathing for images in README if any
                // This is a simple fix: replace ./ with the directory path
                const dirPath = path.split('/').slice(0, -1).join('/') + '/';
                const processedMarkdown = markdown.replace(/!\[(.*?)\]\(\.\/(.*?)\)/g, `![$1](${dirPath}$2)`);
                
                container.innerHTML = window.marked.parse(processedMarkdown);
            } else {
                container.innerHTML = '<p class="text-red-500">Error: Markdown parser not loaded.</p>';
            }
        } catch (error) {
            console.error(error);
            if (window.location.protocol === 'file:') {
                container.innerHTML = `
                    <div class="p-6 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl text-sm border border-red-100 dark:border-red-800">
                        <h4 class="font-bold mb-2">Browser Restriction (CORS)</h4>
                        <p class="mb-4">Browsers block fetching local files when using the <code>file://</code> protocol. To view project details locally, please run a local server:</p>
                        <code class="block p-3 bg-gray-900 text-gray-100 rounded mb-4 text-center">npm run dev</code>
                        <p class="text-xs opacity-70">Note: This feature will work automatically once deployed to GitHub Pages.</p>
                    </div>
                `;
            } else {
                container.innerHTML = `<p class="text-red-500 py-12 text-center">Failed to load project details.</p>`;
            }
        }
    }

    // Open Modal
    window.openModal = function (projectId) {
        const p = Array.isArray(window.projects)
            ? window.projects.find(proj => proj.id === projectId)
            : window.projects[projectId];

        if (!p) return;

        // Reset view to summary whenever modal opens
        window.toggleDetailView(false);

        const backdrop = document.getElementById('modal-backdrop');
        const content = document.getElementById('modal-content');
        const title = document.getElementById('modal-title');
        const desc = document.getElementById('modal-desc');
        const tagsContainer = document.getElementById('modal-tags');
        const prevBtn = document.getElementById('prev-slide');
        const nextBtn = document.getElementById('next-slide');
        const zoomBtn = document.getElementById('zoom-btn');
        const viewDetailBtn = document.getElementById('view-detail-btn');

        // Text Content
        title.innerText = p.title[state.lang];
        desc.innerHTML = p.desc[state.lang];

        // Handle View Detail Button
        if (viewDetailBtn) {
            // Update translation for view detail button
            const btnText = (window.translations && window.translations[state.lang]) 
                ? window.translations[state.lang].btn_details_modal 
                || (state.lang === 'vi' ? 'Xem Chi Tiết' : 'View Detail')
                : 'View Detail';
            viewDetailBtn.innerText = btnText;

            // Update translation for back button and loading span
            const backBtnText = (window.translations && window.translations[state.lang]) 
                ? window.translations[state.lang].modal_back || 'Back to Summary'
                : 'Back to Summary';
            const loadingText = (window.translations && window.translations[state.lang]) 
                ? window.translations[state.lang].modal_loading || 'Loading details...'
                : 'Loading details...';
            
            const backBtnSpan = document.querySelector('[data-i18n="modal_back"]');
            const loadingSpan = document.querySelector('[data-i18n="modal_loading"]');
            if (backBtnSpan) backBtnSpan.innerText = backBtnText;
            if (loadingSpan) loadingSpan.innerText = loadingText;

            // Remove old listeners and add new one
            const newBtn = viewDetailBtn.cloneNode(true);
            viewDetailBtn.parentNode.replaceChild(newBtn, viewDetailBtn);
            
            newBtn.addEventListener('click', () => {
                window.toggleDetailView(true);
                if (p.readmePath) {
                    let path = p.readmePath;
                    if (state.lang === 'vi') {
                        path = path.replace('README.md', 'README_vi.md');
                    }
                    loadReadme(path);
                } else {
                    document.getElementById('readme-content').innerHTML = '<p class="text-center py-12 text-gray-400">No additional details available for this project.</p>';
                }
            });
        }

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
