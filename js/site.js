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