window.initTheme = function (state) {
    // --- Theme Logic ---
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
        state.theme = theme;
    }

    // Toggle Theme
    const toggleTheme = () => applyTheme(state.theme === 'dark' ? 'light' : 'dark');

    // Attach Listeners
    const btnDesktop = document.getElementById('theme-toggle');
    const btnMobile = document.getElementById('theme-toggle-mobile');

    if (btnDesktop) btnDesktop.addEventListener('click', toggleTheme);
    if (btnMobile) btnMobile.addEventListener('click', toggleTheme);

    // Initial Apply
    applyTheme(state.theme);
}
