document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const darkModeStyle = document.getElementById('dark-mode-style');
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        enableDarkMode();
    }
    
    themeToggle.addEventListener('click', () => {
        if (darkModeStyle.disabled) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });
    
    function enableDarkMode() {
        darkModeStyle.disabled = false;
        themeToggle.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    }
    
    function disableDarkMode() {
        darkModeStyle.disabled = true;
        themeToggle.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});