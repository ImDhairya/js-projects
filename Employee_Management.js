

let employees = [
  {
    employeeId: 1,
    employeeName: "Aditya Gupta",
    employeePost: "Manager",
    userSalary: 43000,
  },
  {
    employeeId: 2,
    employeeName: "Vanshita Jaiswal",
    employeePost: "Assistant Manager",
    userSalary: 21000,
  },
];

function addEmps (id , name, post, salary ) {
  employees.push({
    employeeId : Number(`${id}`),
    employeeName : `${name}`,
    employeePost : `${post}`,
    userSalary : Number(`${salary}`)
  }
  )
}


function dropEmps(employeeIdToRemove) {
  employees = employees.filter((employees) => employees.employeeId !== Number(employeeIdToRemove));
  console.log("Employeee "+ employeeIdToRemove + " removed new list is : " );
  console.log(employees);
  
  
}



function updateSalary(e_id, n_salary) {
  employees = employees.map((employees) => {
    if (employees.employeeId === Number(e_id)) {
      return{...employees, userSalary : Number(n_salary)};
    }
    return employees;
  })
  console.log(employees);
}




function findEmps(id) {
  employees = employees.filter((employees) => employees.employeeId === Number(id));
  employees.length !== 0 ? console.log(employees) : console.log("Employee not found");
}
// findEmps(2);

function takingInput() {

  const prompt = require('prompt-sync') ({sigint : true});
  let inputid = prompt("Please enter your Employee ID : ");
  let inputName = prompt("Please enter your Name : ");
  let inputPost = prompt("Please enter your Post : ");
  let inputSalary = prompt("Please enter your salary : ");
  addEmps(inputid,inputName,inputPost,inputSalary);
  console.log(employees);

}

// inp(3)
const prompt = require('prompt-sync') ({sigint : true});
console.log("Press 1 to add Employee ");
console.log("Press 2 to remove Employee ");
console.log("Press 3 to update employee details ");
console.log("Press 4 to get employee details ");
let a = prompt("Enter the action ")
inp(Number(a))

function inp(a) {
  const prompt = require('prompt-sync') ({sigint : true});
  

  if (a === 1) {// Adding an employee
    takingInput();
  }else if (a === 2) { //Removing an employee

    let employeeIdToRemove = prompt("Enter the Employee ID you want to remove ");
    dropEmps(employeeIdToRemove);


  }else if (a === 3) {// Update employee details 

    let val1 = prompt("Enter the Employee ID you want to update ");
    let val2 = prompt("Enter the new salary ");
    updateSalary(val1,val2)


  }else if (a === 4) { //  find employee details


    let id = prompt("Enter Employee ID ");
    findEmps(id);
    
  }


}











