document.addEventListener("DOMContentLoaded", () => {
    // On page load, check localStorage and apply language
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);

    const menuButton = document.querySelector("nav .navButton");
    const menuList = document.querySelector("nav ul");
    const toggleIcon = document.querySelector(".toggleIcon");
    const crossIcon = document.querySelector(".crossIcon");
    const allNavLink = document.querySelectorAll("nav ul li a");

    const navAreaToggle = () => {
        menuList.classList.toggle("opacity-0");
        menuList.classList.toggle("invisible");
        menuList.classList.toggle("pointer-events-none");
        toggleIcon.classList.toggle("hidden");
        crossIcon.classList.toggle("hidden");
    }

    menuButton.addEventListener("click", () => {
        navAreaToggle();
    });

    allNavLink.forEach(navLink => {
        navLink.addEventListener("click", () => {
            navAreaToggle();
        })
    })


    document.querySelectorAll('.dropdownButton').forEach((dropDownBtn, index) => {
        const dropDownMenu = dropDownBtn.closest('li').querySelector('.dropdownArea');

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
            }, 150);
        });

        dropDownMenu.addEventListener('mouseleave', hideDropdown);
    });



});