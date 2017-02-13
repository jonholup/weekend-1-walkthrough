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
        '<td><button class="deleteEmployeeButton">Delete</button></td>' +
        '</tr>'
    );

  // add monthly salary expenses to the DOM
  var newEmployeeMonthlyExpenses = annualSalary / 12;
  var previousMonthlyExpenses = $('#monthlyExpenses').text(); //string
  var totalMonthlyExpenses = parseFloat(previousMonthlyExpenses) + newEmployeeMonthlyExpenses; //number
  $('#monthlyExpenses').text(totalMonthlyExpenses);

  // clear out input boxes
  $('.employeeFormInput').val('');
  });

  // adding listener for clicking delete employee buttons
  $('#employeeTableBody').on('click', '.deleteEmployeeButton', function (){
    console.log('delete button clicked!');
    $(this).parent().parent().remove(); //selecting the row that i want to delete
  });
});
