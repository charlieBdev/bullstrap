import cbToast from 'https://rawcdn.githack.com/charlieBdev/cbToast/fc75514980cbd1382a0c6232a8539afa1d684db0/dist/cbToast.min.js';

function setTooltips() {
    const tooltipTriggerList = document.querySelectorAll(
        '[data-bs-toggle="tooltip"]',
    );
    const tooltipList = [...tooltipTriggerList].map(
        (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl),
    );

    const popoverTriggerList = document.querySelectorAll(
        '[data-bs-toggle="popover"]',
    );
    const popoverList = [...popoverTriggerList].map(
        (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl),
    );
}

function swapAppTheme(appTheme) {
    if (!appTheme) {
        document.getElementById("theme-style").href =
            "bootstrap-source/dist/css/bootstrap.css";
        return;
    }
    document.getElementById("theme-style").href =
        `css/${appTheme}-bootstrap.css`;
}

function handleComponentSelect(value) {
    switch (value) {
        case 'accordion':
            addAccordion();
            break;
        case 'alert':
            addAlert();
            break;
        case 'badge':
            addBadge();
            break;
        case 'carousel':
            addCarousel();
            break;
        case 'form':
            addForm();
            break;
        case 'horizontalForm':
            addHorizontalForm();
            break;
        case 'pagination':
            addPagination();
            break;
        case 'progress':
            addProgress();
            break;
        case 'spinner':
            addSpinner();
            break;
        case 'table':
            addTable();
            break;
        case 'typography':
            addTypography();
            break;
        case 'validation':
            addValidation();
            break;
        default:
            document.getElementById('demo-container').innerHTML = '';
    }
}

function toggleTheme(theme) {
    console.log(`Toggling theme to ${theme}`);
    const html = document.documentElement;
    localStorage.setItem('bs-theme', theme);

    if (theme === 'system') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        html.setAttribute('data-bs-theme', prefersDark ? 'dark' : 'light');
    } else {
        html.setAttribute('data-bs-theme', theme);
    }

    showActiveTheme(theme);
}

function showActiveTheme(theme) {
    const themeButton = document.querySelector('#bd-theme-text');
    const activeBtn = document.querySelector(`[data-bs-theme-value="${theme}"]`);

    if (themeButton && activeBtn) {
        const activeIcon = activeBtn.querySelector('i');
        const btnIcon = themeButton.querySelector('i');

        if (activeIcon && btnIcon) {
            btnIcon.className = activeIcon.className;
            btnIcon.classList.remove('me-2');
        }
    }

    document.querySelectorAll('[data-bs-theme-value]').forEach(el => {
        el.classList.remove('active');
        el.setAttribute('aria-pressed', 'false');
    });

    if (activeBtn) {
        activeBtn.classList.add('active');
        activeBtn.setAttribute('aria-pressed', 'true');
    }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const savedTheme = getLocalStorageTheme();

    if (savedTheme === 'system') {
        toggleTheme('system');
    }
});

// add event listener for toast button
document.addEventListener("DOMContentLoaded", function () {
    const toastBtn = document.getElementById("toastBtn");
    if (toastBtn) {
        const optionsArray = [
            {},
            {
                title: "Info",
                message: "This is an info toast notification.",
                type: "info",
                position: "top-right",
                duration: 3000,
                onClose: () => console.log("Info toast closed")
            },
            {
                title: "Success",
                message: "This is a success toast notification.",
                type: "success",
                position: 'bottom-right',
                duration: 3000,
                onClose: () => console.log("Success toast closed")
            },
            {
                title: "Warning",
                message: "This is a warning toast notification.",
                type: "warning",
                position: 'bottom-left',
                duration: 3000,
                onClose: () => console.log("Warning toast closed")
            },
            {
                title: "Error",
                message: "This is an error toast notification.",
                type: "error",
                position: 'top-left',
                duration: 3000,
                onClose: () => console.log("Error toast closed")
            }
        ];

        toastBtn.addEventListener("click", function () {

            const randomOptions = optionsArray[Math.floor(Math.random() * optionsArray.length)];

            // Use the object directly
            if (Object.keys(randomOptions).length !== 0) {
                randomOptions.lightMode = Math.random() < 0.5;
                randomOptions.countdown = Math.random() < 0.5;
            }

            new cbToast(randomOptions);
        });
    }
});

window.toggleTheme = toggleTheme;
window.swapAppTheme = swapAppTheme;
window.handleComponentSelect = handleComponentSelect;
window.setTooltips = setTooltips;