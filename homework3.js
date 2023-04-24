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
