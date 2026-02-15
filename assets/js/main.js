document.addEventListener('DOMContentLoaded', () => {
    // Shared State
    const state = {
        lang: localStorage.getItem('lang') || 'en',
        theme: localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    };

    // Initialize Modules (Global Functions)
    // Dependencies: data/*.js must be loaded before modules/*.js, which must be loaded before main.js
    if (window.initTheme) window.initTheme(state);
    if (window.initLanguage) window.initLanguage(state);
    if (window.initModal) window.initModal(state);
    if (window.initUI) window.initUI(state);
});
