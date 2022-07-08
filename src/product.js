//import { id, name, salary } from "./details";

var cart = [];

      function add() {
       
        var ID = document.getElementById("id").value;
       
        var Name = document.getElementById("name").value;
        var Salary = document.getElementById("salary").value;
        if(Salary<=0){
          alert("salary is equal to zero or less than zero");
          debugger;
         }
        //  debugger;
       else if(Salary<30000){
         "use strict";
         Salary = 30000;
        }
        if (ID == "" || Name == "" || Salary == "") {
          document.getElementById("error").innerHTML =
            "All fields must be filled.";
        }

        var Details = {
          Empid: `${ID}`,
          Empname: `${Name}`,
          Empsalary: `${Salary}`,
        };
        cart.push(Details);
        this.JSON.stringify(cart)

// console.log("cart");
        var details;
details = () => {
  details = val => "empsalary " + ((Salary * 15 )/100) ;
  details = val => "name " + Name ;
  document.getElementById("demo").innerHTML = details + val;
};

// display
      
        Display();
      }

      function Display() {
        html_header = `<table><tr><th>ID</th><th>Name</th><th>Basic Salary</th><th>Updated Salary</th></tr>`;
        html_footer = `<tr><th></th><th></th><th></th><tr></table>`;
        var row = "";
        row += `<tr><td>${id}</td><td>${name}</td><td>${salary}</td><td></td></tr>`;

        try {
          cart.forEach((element) => {
            

            if (element.Empsalary > 0) {
              var updatedSal = element.Empsalary * 1.1;
              
              html_header += `<tr>
        <td>${element.Empid}</td>
        <td>${element.Empname}</td>
        <td>${element.Empsalary}</td>
        <td>${updatedSal}</td>
        </tr>`; }
            // } else {
            //   alert("Your salary is less than or equal to zero");
            // };
          });
          document.getElementById("table1").innerHTML = html_header + html_footer;
        } catch (Catcherror) {
          // alert("There is some error");
        }
      }

      // debuger function
//       let x = document.getElementById("salary").value;
//       if(x<= 0){

//       }
// debugger;
// document.getElementById("demo").innerHTML = x;

      class Cart {
        function() {
          var ID = document.getElementById("id").value;
          var Name = document.getElementById("name").value;
          var Salary = document.getElementById("salary").value;
          // "use strict";
          // Emp_Salary = 30000;
      // }
          let myCart = new Cart  (
            Empid= `${ID}`,
            Empname= `${Name}`,
            Empsalary= `${Salary}`,
          );        
         
        }
      }