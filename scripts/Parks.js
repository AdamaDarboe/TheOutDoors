"use strict";

const locationsArray = [
    "Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
    "Delaware", "DC", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
    "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
    "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico",
    "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Islands",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

const  stateSelect = document.getElementById ("stateSelect");
const  parkTypeSelect = document.getElementById("parkTypeSelect");
const submitButton = document.getElementById("submitButton");
window.onload = () => {
    populateStatesList();
    doSomethingButton.onclick = onDoSomethingButtonClick;
    stateList.onchange = onDoSomethingButtonClick;
}

function onDoSomethingButtonClick() {
    let selectedValue = stateList.value;
    if (selectedValue !== "") {
        outputH1.innerHTML = selectedValue;
    } else {
        outputH1.innerHTML = "No Region is selected";
    }
}

function populateStatesList() {
    for (let i = 0; i < locationsArray.length; i++) {
        let newOption = document.createElement("option");
        newOption.textContent = locationsArray[i];
        newOption.value = locationsArray[i];
        stateSelect.appendChild(newOption);
    }
}


const parkTypesArray = [
    "National Park",
    "National Monument",
    "Recreation Area",
    "Scenic Trail",
    "Battlefield",
    "Historic",
    "Memorial",
    "Preserve",
    "Island",
    "River",
    "Seashore",
    "Trail",
    "Parkway"
]


function populateStatesList() {
    for (let i = 0; i < locationsArray.length; i++) {
        let newOption = document.createElement("option");
        newOption.textContent = locationsArray[i];
        newOption.value = locationsArray[i];
        stateSelect.appendChild(newOption);
    }
}

function populateStatesList() {
    for (let i = 0; i < parkTypesArray.length; i++) {
        let newOption = document.createElement("option");
        newOption.textContent = parkTypesArray[i];
        newOption.value = parkTypesArray[i];
        stateSelect.appendChild(newOption);
    }
}
