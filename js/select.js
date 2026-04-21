export const addSelect = () => {
  const container = document.getElementById("demo-container");
  
  const html = /* html */ `
    <div class="d-flex flex-column gap-3">
      <div>
        <label for="exampleSelect" class="form-label">Example select</label>
        <select class="form-select" id="exampleSelect" style="width: 50%">
        </select>
      </div>
      <div>
        <label for="exampleSelectMultiple" class="form-label">Example multiple select</label>
        <select class="form-select" id="exampleSelectMultiple" style="width: 50%" multiple>
        </select>
      </div>
    </div>
  `;

  container.innerHTML = html;

  var data = [
      {
          id: '',
          text: ''
      },
      {
          id: 1,
          text: 'war'
      },
      {
          id: 2,
          text: 'peace'
      },
      {
          id: 3,
          text: 'love'
      },
      {
          id: 4,
          text: 'hate'
      }
  ];

  var dataMulti = [
      {
          id: '-1',
          text: 'main'
      },
      {
          id: 1,
          text: 'bug'
      },
      {
          id: 2,
          text: 'duplicate'
      },
      {
          id: 3,
          text: 'invalid'
      },
      {
          id: 4,
          text: 'wontfix'
      }
  ];

  function createSelects() {
      // Initialize Select2
    $('#exampleSelect').select2({
      theme: 'bootstrap-5',
      placeholder: 'Select an option',
      data: data
    });

    $('#exampleSelectMultiple').select2({
      theme: 'bootstrap-5',
      closeOnSelect: false,
      allowClear: true,
      placeholder: 'Select options',
      data: dataMulti
    });
  }

  createSelects();
}