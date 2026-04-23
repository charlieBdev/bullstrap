export const addBadge = () => {
  const container = document.getElementById("demo-container");

  const html = /* html */ `
    <div class="d-flex flex-column gap-3">
      <div class="d-flex flex-column gap-3">
        <h1>Example heading <span class="badge text-bg-secondary">New</span></h1>
        <h2>Example heading <span class="badge text-bg-secondary">New</span></h2>
        <h3>Example heading <span class="badge text-bg-secondary">New</span></h3>
        <h4>Example heading <span class="badge text-bg-secondary">New</span></h4>
        <h5>Example heading <span class="badge text-bg-secondary">New</span></h5>
        <h6>Example heading <span class="badge text-bg-secondary">New</span></h6>
      </div>

      <div class="d-flex gap-3">
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

      <div class="d-flex gap-3 flex-wrap">
        <span class="badge text-bg-primary">Primary</span>
        <span class="badge text-bg-secondary">Secondary</span>
        <span class="badge text-bg-success">Success</span>
        <span class="badge text-bg-danger">Danger</span>
        <span class="badge text-bg-warning">Warning</span>
        <span class="badge text-bg-info">Info</span>
        <span class="badge text-bg-light">Light</span>
        <span class="badge text-bg-dark">Dark</span>
      </div>

      <div class="d-flex gap-3 flex-wrap">
        <span class="badge rounded-pill text-bg-primary">Primary</span>
        <span class="badge rounded-pill text-bg-secondary">Secondary</span>
        <span class="badge rounded-pill text-bg-success">Success</span>
        <span class="badge rounded-pill text-bg-danger">Danger</span>
        <span class="badge rounded-pill text-bg-warning">Warning</span>
        <span class="badge rounded-pill text-bg-info">Info</span>
        <span class="badge rounded-pill text-bg-light">Light</span>
        <span class="badge rounded-pill text-bg-dark">Dark</span>
      </div>
    </div>
  `;

  container.innerHTML = html;
}