export const addSpinner = () => {
	const container = document.getElementById('demo-container');
	
	const html = /* html */ `
		<div class="d-flex flex-column gap-3">
				<div>
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
				<div>
					<button class="btn btn-primary" type="button" disabled>
						<span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
						<span class="visually-hidden" role="status">Loading...</span>
					</button>
					<button class="btn btn-primary" type="button" disabled>
						<span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
						<span role="status">Loading...</span>
					</button>
				</div>
		</div>
	`;

	container.innerHTML = html;
}