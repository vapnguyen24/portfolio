window.initLanguage = function (state) {
    // --- Language Logic ---
    function applyLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (window.translations[lang][key]) {
                if (el.innerHTML.includes('<') && !['hero_desc', 'about_text'].includes(key)) {
                    // Preserve HTML icons if wrapper
                    el.innerHTML = window.translations[lang][key];
                } else {
                    el.innerHTML = window.translations[lang][key];
                }
            }
        });

        // Update Toggle Text
        const langText = lang === 'en' ? 'EN' : 'VI';
        const toggle = document.getElementById('lang-toggle');
        const toggleMobile = document.getElementById('lang-toggle-mobile');

        if (toggle) toggle.innerText = langText;
        if (toggleMobile) toggleMobile.innerText = langText;

        localStorage.setItem('lang', lang);
        state.lang = lang;
        if (window.renderProjects) window.renderProjects(lang);
    }

    // Toggle Language
    const toggleLang = () => applyLanguage(state.lang === 'en' ? 'vi' : 'en');

    // Attach Listeners
    const btnDesktop = document.getElementById('lang-toggle');
    const btnMobile = document.getElementById('lang-toggle-mobile');

    if (btnDesktop) btnDesktop.addEventListener('click', toggleLang);
    if (btnMobile) btnMobile.addEventListener('click', toggleLang);

    // Initial Apply
    applyLanguage(state.lang);
}
