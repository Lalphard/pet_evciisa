document.addEventListener('DOMContentLoaded', function () {
    const myForm = document.getElementById('myForm');
    const submitBtn = document.getElementById('submitBtn');
  
    submitBtn.addEventListener('click', function () {
      if (myForm.checkValidity()) {
        $('#exampleModal').modal('show');
      } else {
        myForm.classList.add('was-validated');
      }
    });
  
    document.getElementById('confirmBtn').addEventListener('click', function () {
      if (myForm.checkValidity()) {
        myForm.submit();
      } else {
        myForm.classList.add('was-validated');
      }
    });
  });