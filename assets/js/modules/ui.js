// Helper to observe reveal elements
const observeRevealElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

// Render Projects Function - Global
window.renderProjects = function (lang) {
    const list = document.getElementById('projects-list');
    if (!list || !window.projects) return;

    const btnText = window.translations && window.translations[lang] ? window.translations[lang].btn_details : 'View Details';

    list.innerHTML = window.projects.map((project, index) => {
        const delay = index * 100;
        return `
        <div class="group rounded-2xl overflow-hidden shadow-lg bg-gray-50 dark:bg-dark-card hover:-translate-y-2 transition-transform duration-300 border border-gray-100 dark:border-gray-800 reveal cursor-pointer"
            style="transition-delay: ${delay}ms"
            onclick="openModal('${project.id}')">
            <div class="relative overflow-hidden h-48">
                <img src="${project.img}"
                    alt="${project.title[lang]}"
                    class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
                <div
                    class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center">
                    <span
                        class="text-white opacity-0 group-hover:opacity-100 font-medium px-4 py-2 border border-white rounded-full transition-opacity">
                        ${btnText}
                    </span>
                </div>
            </div>
            <div class="p-6">
                <div class="flex justify-between items-center mb-2">
                    <h3 class="text-xl font-bold font-heading">${project.title[lang]}</h3>
                    <span
                        class="text-xs font-semibold px-2 py-1 ${project.category.className} rounded text-center">
                        ${project.category.title[lang]}
                    </span>
                </div>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    ${project.summary[lang]}
                </p>
                <div class="flex flex-wrap gap-2 text-xs">
                    ${project.tags.map(tag => `<span class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
        `;
    }).join('');

    // Re-observe new elements
    // Re-observe new elements
    observeRevealElements();
};

// Render Skills Function - Global
window.renderSkills = function () {
    const list = document.getElementById('skills-list');
    if (!list || !window.skills) return;

    list.innerHTML = window.skills.map((skill, index) => {
        const delay = (index % 6) * 50; // Stagger effect
        return `
        <div class="group glass p-6 rounded-xl flex flex-col items-center justify-center hover:border-primary-500 transition-colors cursor-default reveal"
             style="transition-delay: ${delay}ms">
            <i class="${skill.icon} text-4xl ${skill.color} mb-3 group-hover:scale-110 transition-transform ${skill.animate || ''}"></i>
            <span class="font-medium">${skill.name}</span>
        </div>
        `;
    }).join('');

    // Re-observe new elements
    observeRevealElements();
};

window.initUI = function (state) {
    // Mobile Menu
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
        // Use a flag or check if listener attached? 
        // Simplest: clone node to remove listeners or just ensure safe adding.
        // But standard addEventListener is fine since initUI runs once.
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // Navbar Blur Effect on Scroll
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (nav) {
            if (window.scrollY > 50) {
                nav.classList.add('shadow-md');
            } else {
                nav.classList.remove('shadow-md');
            }
        }
    });

    // Initial Render
    if (state && state.lang) {
        window.renderProjects(state.lang);
    } else {
        // Fallback or just render with default 'en' if state not passed
        window.renderProjects('en');
    }

    // Render Skills (not lang dependent)
    window.renderSkills();

    // Initial Observation for static elements
    observeRevealElements();

    // Set Copyright Year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.innerText = new Date().getFullYear();
    }
}
