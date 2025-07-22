document.addEventListener('DOMContentLoaded', () => {
    const darkModeCheckbox = document.querySelector('.dark-mode-checkbox');

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
    };

    // Add event listener to checkbox
    darkModeCheckbox.addEventListener('change', toggleDarkMode);

    // Check for saved user preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        darkModeCheckbox.checked = true;
        toggleDarkMode();
    }

    // Save user preference
    darkModeCheckbox.addEventListener('change', () => {
        if (darkModeCheckbox.checked) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', null);
        }
    });
});
