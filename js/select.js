export const addSelect = () => {
    const container = document.getElementById("demo-container");
    if (!container) return; // Guard clause

    const html = /* html */ `
        <div class="d-flex flex-column gap-3">
            <label for="exampleSelect" class="form-label">Single Select</label>
            <select id="exampleSelect" class="form-select">
                <option></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
                
            <label for="exampleSelectMultiple" class="form-label">Multiple Select</label>
            <select id="exampleSelectMultiple" class="form-select" multiple>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
    `;

    container.innerHTML = html;

    // Initialize Select2
    // Single Select
    $('#exampleSelect').select2({
        theme: 'bootstrap-5',
        placeholder: 'Select an option',
        width: '100%' // Ensures it fills the container correctly
    });

    // Multiple Select
    $('#exampleSelectMultiple').select2({
        theme: 'bootstrap-5',
        placeholder: 'Select options',
        closeOnSelect: false,
        width: '100%'
    });
}