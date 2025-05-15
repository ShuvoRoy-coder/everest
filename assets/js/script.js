function setLanguage(lang) {
        // Save language preference
        localStorage.setItem('language', lang);

        // Update text content for all elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = translations[lang][key];
        });
    }

document.addEventListener("DOMContentLoaded", () => {
    // On page load, check localStorage and apply language
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);

    const menuButton = document.querySelector("nav .navButton");
    const menuList = document.querySelector("nav ul");
    const toggleIcon = document.querySelector(".toggleIcon");
    const crossIcon = document.querySelector(".crossIcon");

    menuButton.addEventListener("click", () => {
        menuList.classList.toggle("opacity-0");
        menuList.classList.toggle("invisible");
        menuList.classList.toggle("pointer-events-none");
        toggleIcon.classList.toggle("hidden");
        crossIcon.classList.toggle("hidden");
    });


    const dropDownBtn = document.querySelector('.dropdownButton');
    const dropDownMenu = document.querySelector('.dropdownArea');

    // Show dropdown
    function showDropdown() {
        dropDownMenu.classList.remove("opacity-0", "invisible", "pointer-events-none");
    }

    // Hide dropdown
    function hideDropdown() {
        dropDownMenu.classList.add("opacity-0", "invisible", "pointer-events-none");
    }

    // Toggle on click (for mobile)
    dropDownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropDownMenu.classList.toggle("opacity-0");
        dropDownMenu.classList.toggle("invisible");
        dropDownMenu.classList.toggle("pointer-events-none");
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!dropDownMenu.contains(e.target) && !dropDownBtn.contains(e.target)) {
            hideDropdown();
        }
    });

    // Hover support (for desktop)
    dropDownBtn.addEventListener('mouseenter', showDropdown);
    dropDownMenu.addEventListener('mouseenter', showDropdown);

    dropDownBtn.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!dropDownMenu.matches(':hover')) {
                hideDropdown();
            }
        }, 150); // slight delay to allow moving to the menu
    });

    dropDownMenu.addEventListener('mouseleave', hideDropdown);


});