let error_flag = 0;

const date = Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
}).format(new Date());

const dateElement = document.getElementById("today-date");
dateElement.innerText = date.toString();

const budgetSlider = document.getElementById("budget");
const budgetOutput = document.getElementById("budgetValue");

budgetSlider.oninput = function () {
  budgetOutput.innerText = "$" + budgetSlider.value;
};

function checkfirstname()
    {
        x = document.getElementById("firstname").value;
        if( x.length<2) { 
              document.getElementById("name_message").innerHTML = "Invalid first name...too short.";  
              error_flag = 1;
        }
        else {
            if (x.match(/[a-zA-Z3-5'-]+$/)) {
              document.getElementById("name_message").innerHTML = "";  
            }
            else  {
              document.getElementById("name_message").innerHTML = "Invalid characters in first name.";
              error_flag = 1;
              }
        }
    }
    function checkmiddlename()
    {
        x = document.getElementById("middlename").value;
        if( x.length>0) { 
              if (x.match(/[a-zA-Z ]/)) {
              document.getElementById("name_message").innerHTML = "";  
            }
            else  {
              document.getElementById("name_message").innerHTML = "Invalid characters in middle name.";
              error_flag = 1;
              }
        }
    }
function checklastname()
    {
        x = document.getElementById("lastname").value;
        if( x.length<2) { 
              document.getElementById("name_message").innerHTML = "Invalid Last Name...too short.";
              error_flag = 1;  
        }
        else {
            if (x.match(/[a-zA-Z3-5'-]+$/)) {
              document.getElementById("name_message").innerHTML = "";  
            }
            else  {
              document.getElementById("name_message").innerHTML = "Invalid characters in last name.";
              error_flag = 1;
              }
        }
    }

    function checkaddress1() {
      x = document.getElementById("address1").value;
      console.log(x.value);
      console.log(x.length);
      if (x.length < 2 ) {  
        document.getElementById("address1_message").innerHTML = "Enter something on address 1 line";  
        error_flag = 1; 
        console.log(error_flag);
        }
        else { 
            document.getElementById("address1_message").innerHTML = "";  
        }
        console.log(address1_message);
  }
  function checkaddress2() {}
  
  function checkcity() {
           if (document.getElementById("city").value.match(/^[ a-zA-Z3-5'-]+$/)) {
                document.getElementById("city_message").innerHTML = "";  
              }
              else  {
                document.getElementById("city_message").innerHTML = "Invalid characters in City name.";
                error_flag = 1;
                }
  }
  function checkstate() {
          z=document.getElementById("state").value;
          if(z=="") { 
                document.getElementById("state_message").innerHTML = "Please choose a state";  
                error_flag = 1;
          }
          else {
            document.getElementById("state_message").innerHTML = ""; 
          }
  }


function getDataReview() {
  const contents = document.getElementById("registration");
  let foutput;
  let dataType;
  foutput =
    "<table class='output'><th>Dataname</th><th>Type</th><th>Value</th>";

  for (let i = 0; i < contents.length; i++) {
    if (contents.elements[i].value != "") {
      dataType = contents.elements[i].type;
      switch (dataType) {
        case "checkbox":
          if (contents.elements[i].checked) {
            console.log(contents.elements[i]);
            foutput = `${foutput}<tr><td align='right'>${contents.elements[i].name}</td>`;
            foutput = `${foutput}<td align='right'>${dataType}</td>`;
            foutput = `${foutput}<td class='outputdata'>${contents.elements[i].value}</td></tr>`;
          }
          break;
        case "radio":
          if (contents.elements[i].checked) {
            foutput = `${foutput}<tr><td align='right'>${contents.elements[i].name}</td>`;
            foutput = `${foutput}<td align='right'>${dataType}</td>`;
            foutput = `${foutput}<td class='outputdata'>${contents.elements[i].value}</td></tr>`;
          }
          break;
        case "button":
        case "submit":
        case "reset":
          break;
        default:
          foutput = `${foutput}<tr><td align='right'>${contents.elements[i].name}</td>`;
          foutput = `${foutput}<td align='right'>${dataType}</td>`;
          foutput = `${foutput}<td class='outputdata'>${contents.elements[i].value}</td></tr>`;
      }
    }
  }

  if (foutput.length > 0) {
    foutput = foutput + "</table>";
    document.getElementById("dataReview").innerHTML = foutput;
  }
}
