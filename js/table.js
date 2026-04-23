export const addTable = () => {
    const container = document.getElementById("demo-container");

    const html = /* html */ `
        <table id="demoTable" class="table table-striped table-hover" style="width:100%">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    `;

    container.innerHTML = html;
    
    $('#demoTable').DataTable({
        layout: {
            topStart: 'info',
            topEnd: 'search',
            bottomStart: 'pageLength',
            bottomEnd: 'paging'
        },
        autoWidth: false,
        language: {
            search: '',
            searchPlaceholder: 'Filter...'
        },
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        responsive: true
    });
}