let L1_1 = document.querySelector("#L1_1");
let L1_2 = document.querySelector("#L1_2");
let L1_3 = document.querySelector("#L1_3");
let L1_4 = document.querySelector("#L1_4");
let L1_5 = document.querySelector("#L1_5");
let L1_6 = document.querySelector("#L1_6");

// Opgave 1

function getFullName(firstName, lastName){
  let fullName = firstName + " " + lastName;
  let nameHeader = document.createElement("h3");
  nameHeader.innerText = fullName;
  L1_1.appendChild(nameHeader);
}

// Opgave 2



// Function Calls
fullName("Mathias", "Arenfeldt");
