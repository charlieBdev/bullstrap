import cbToast from 'https://raw.githack.com/charlieBdev/cbToast/main/dist/cbToast.min.js';
import { 
    addAccordion, addAlert, addBadge, addCarousel, 
    addForm, addHorizontalForm, addPagination, addProgress, 
    addSpinner, addTable, addTypography, addValidation 
} from './index.js';

// --- 1. Initialization ---
init();

function init() {
    const savedTheme = getLocalStorageTheme();
    applyTheme(savedTheme);
    setTooltips();
    setupEventListeners();
}

// --- 2. Event Listeners (The "No Window" Way) ---
function setupEventListeners() {
    // A. Component Selection
    const selectEl = document.getElementById('demoComponentSelect');
    if (selectEl) {
        selectEl.addEventListener('change', (e) => handleComponentSelect(e.target.value));
    }

    // B. Bootstrap Theme Toggle (The Dropdown)
    document.querySelectorAll('[data-bs-theme-value]').forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.getAttribute('data-bs-theme-value');
            toggleTheme(theme);
        });
    });

    // C. App Brand Themes (The Radio Buttons)
    const themeGroup = document.getElementById('themeRadioGroup');
    if (themeGroup) {
        themeGroup.addEventListener('change', (e) => {
            if (e.target.classList.contains('btn-check')) {
                swapAppTheme(e.target.value);
            }
        });
    }

    // D. Toast Button
    const toastBtn = document.getElementById("toastBtn");
    if (toastBtn) {
        toastBtn.addEventListener("click", showRandomToast);
    }
}

// --- 3. Internal Logic ---

function handleComponentSelect(value) {
    const container = document.getElementById('demo-container');
    container.innerHTML = ''; // Clear existing content

    const components = {
        accordion: addAccordion,
        alert: addAlert,
        badge: addBadge,
        carousel: addCarousel,
        form: addForm,
        horizontalForm: addHorizontalForm,
        pagination: addPagination,
        progress: addProgress,
        spinner: addSpinner,
        table: addTable,
        typography: addTypography,
        validation: addValidation
    };

    if (components[value]) {
        components[value]();
    }
}

function swapAppTheme(appTheme) {
    const themeStyle = document.getElementById("theme-style");
    if (!appTheme || appTheme === 'none') {
        themeStyle.href = "bootstrap-source/dist/css/bootstrap.css";
        return;
    }
    themeStyle.href = `css/${appTheme}-bootstrap.css`;
}

function toggleTheme(theme) {
    localStorage.setItem('bs-theme', theme);
    applyTheme(theme);
}

function applyTheme(theme) {
    const html = document.documentElement;
    let activeTheme = theme;

    if (theme === 'system') {
        activeTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    html.setAttribute('data-bs-theme', activeTheme);
    updateThemeUI(theme);
}

function updateThemeUI(theme) {
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
        el.classList.toggle('active', el.getAttribute('data-bs-theme-value') === theme);
    });
}

function getLocalStorageTheme() {
    return localStorage.getItem('bs-theme') || 'system';
}

function setTooltips() {
    if (typeof bootstrap !== 'undefined') {
        [...document.querySelectorAll('[data-bs-toggle="tooltip"]')].map(el => new bootstrap.Tooltip(el));
        [...document.querySelectorAll('[data-bs-toggle="popover"]')].map(el => new bootstrap.Popover(el));
    }
}

function showRandomToast() {
    const types = ["default", "info", "success", "warning", "error"];
    const type = types[Math.floor(Math.random() * types.length)];

    // 1. Capitalize the Title
    const capitalizedTitle = type.charAt(0).toUpperCase() + type.slice(1);

    // 2. Fix a/an grammar
    const article = (type === 'info' || type === 'error') ? 'an' : 'a';

    new cbToast({
        title: capitalizedTitle,
        message: `This is ${article} ${type} notification.`,
        type: type,
        duration: 3000,
        useBS5Theme: true,
        // Optional: Pass the current site theme so the toast matches
        theme: document.documentElement.getAttribute('data-bs-theme') 
    });
}