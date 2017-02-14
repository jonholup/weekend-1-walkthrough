$(document).ready(function(){ // waits for DOM to completly load
  $('form').on('submit', function(event) { // event listener on form submission
    event.preventDefault(); // do not bring us to a new page

  // create an array of the inputs, the inputs are converted to objects
  // objects have 2 properties, name (from input) and value (user sub)
  // eg (name: 'firstName', value: 'Jonny')
    console.log('form values: ', $(this).serializeArray());

    var submissionArray = $(this).serializeArray(); // [{}, {}, {}]
    var newEmployeeObject = {}; // (firstName: 'Jonny', lastName: 'Holup')

    submissionArray.forEach(function(inputFieldObject){
      // newEmployeeObject is {}
      newEmployeeObject[inputFieldObject.name] = inputFieldObject.value;
      // newEmployeeObject.firstName = Jonny
      // newEmployeeObject is {firstName: 'Jonny'}
      // 2nd time through newEmployeeObject is {firstName: 'Jonny', lastName: 'Holup'}
    })

// does the same as for each loop above
// for(var i = 0; i < submissionArray.length; i++){
//   var inputFieldObject = submissionArray[i];
//   newEmployeeObject[inputFieldObject.name] = inputFieldObject.value;
//   // newEmployeeObject.firstName
//   // newEmployeeObject['firstName']
// }

    console.log('New Employee Object: ', newEmployeeObject);

    // adds new employee row to DOM
    $('#employeeTableBody').append(
      '<tr>' +
        '<td>' + newEmployeeObject.firstName + '</td>' +
        '<td>' + newEmployeeObject.lastName + '</td>' +
        '<td>' + newEmployeeObject.idNumber + '</td>' +
        '<td>' + newEmployeeObject.jobTitle + '<td>' +
        '<td>' + newEmployeeObject.annualSalary + '</td>' +
        '<td><button class="deleteEmployeeButton" data-salary="' + newEmployeeObject.annualSalary + '">Delete</button></td>' +
        '</tr>'
    );

  // add monthly salary expenses to the DOM
  var newEmployeeMonthlyExpenses = annualSalary / 12;
  // console.log(newEmployeeMonthlyExpenses);
  var previousMonthlyExpenses = $('#monthlyExpenses').text(); //string
  // console.log(previousMonthlyExpenses);
  var totalMonthlyExpenses = parseFloat(previousMonthlyExpenses) + newEmployeeMonthlyExpenses; //number
  $('#monthlyExpenses').text(totalMonthlyExpenses);

  // clear out input boxes
  $('.employeeFormInput').val('');
  });

  // adding listener for clicking delete employee buttons
  $('#employeeTableBody').on('click', '.deleteEmployeeButton', function (){
    // removing employee salary from totalMonthlyExpenses
    var deletedEmployeeSalary = ($(this).data('salary'));
    var deletedEmployeeMonthlyExpenses = deletedEmployeeSalary / 12;
    var previousMonthlyExpenses = $('#monthlyExpenses').text();
    var newTotalMonthlyExpenses = previousMonthlyExpenses - deletedEmployeeMonthlyExpenses;
    $('#monthlyExpenses').text(newTotalMonthlyExpenses);

    // select and remove the row from table
    $(this).parent().parent().remove();

  });
});
