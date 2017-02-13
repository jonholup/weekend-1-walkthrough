$(document).ready(function(){ // waits for DOM to completly load
  $('#submitNewEmployee').on('click', function() { // event listener on submitNewEmployee
    // Declaring variable and retrieving values from input boxes
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var idNumber = $('#idNumber').val();
    var jobTitle = $('#jobTitle').val();
    var annualSalary = $('#annualSalary').val();

    // adds new employee row to DOM
    $('#employeeTableBody').append(
      '<tr>' +
        '<td>' + firstName + '</td>' +
        '<td>' + lastName + '</td>' +
        '<td>' + idNumber + '</td>' +
        '<td>' + jobTitle + '<td>' +
        '<td>' + annualSalary + '</td>' +
        '</tr>'
    );
  });


});
