export function addSpinner() {
	const container = document.getElementById('demo-container');
	const html = `
		<div class="d-flex justify-content-center mb-3">
			<div class="spinner-border text-primary" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
			<div class="spinner-border text-secondary" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
			<div class="spinner-border text-success" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
			<div class="spinner-border text-danger" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
			<div class="spinner-border text-warning" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
			<div class="spinner-border text-info" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
			<div class="spinner-border text-light" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
			<div class="spinner-border text-dark" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
		</div>
		<div class="mb-3">
			<button class="btn btn-primary" type="button" disabled>
				<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
				<span class="visually-hidden">Loading...</span>
			</button>
			<button class="btn btn-primary" type="button" disabled>
				<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
				Loading...
			</button>
		</div>
		<div class="d-flex align-items-center">
			<strong>Loading...</strong>
			<div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
		</div>
	`;

	container.innerHTML = html;
}