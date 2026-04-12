export function addBadge() {
  const container = document.getElementById("demo-container");

  const html = `
    <div class="d-flex gap-3 mb-3">
      <button type="button" class="btn btn-primary">
        Notifications <span class="badge text-bg-secondary">4</span>
      </button>

      <button type="button" class="btn btn-primary position-relative">
        Inbox
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          99+
          <span class="visually-hidden">unread messages</span>
        </span>
      </button>

      <button type="button" class="btn btn-primary position-relative">
        Profile
        <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
          <span class="visually-hidden">New alerts</span>
        </span>
      </button>
    </div>

    <div class="d-flex gap-3 mb-3">
      <span class="badge text-bg-primary">Primary</span>
      <span class="badge text-bg-secondary">Secondary</span>
      <span class="badge text-bg-success">Success</span>
      <span class="badge text-bg-danger">Danger</span>
      <span class="badge text-bg-warning">Warning</span>
      <span class="badge text-bg-info">Info</span>
      <span class="badge text-bg-light">Light</span>
      <span class="badge text-bg-dark">Dark</span>
    </div>

    <div class="d-flex gap-3">
      <span class="badge rounded-pill text-bg-primary">Primary</span>
      <span class="badge rounded-pill text-bg-secondary">Secondary</span>
      <span class="badge rounded-pill text-bg-success">Success</span>
      <span class="badge rounded-pill text-bg-danger">Danger</span>
      <span class="badge rounded-pill text-bg-warning">Warning</span>
      <span class="badge rounded-pill text-bg-info">Info</span>
      <span class="badge rounded-pill text-bg-light">Light</span>
      <span class="badge rounded-pill text-bg-dark">Dark</span>
    </div>
  `;

  container.innerHTML = html;
}