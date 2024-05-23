// "use strict";

// const locationsArray = [
//     "Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
//     "Delaware", "DC", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
//     "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
//     "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
//     "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico",
//     "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Islands",
//     "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
// ];

// const  stateSelect = document.getElementById ("stateSelect");
// const  parkTypeSelect = document.getElementById("parkTypeSelect");
// //const submitButton = document.getElementById("submitButton");
// const cardRowOutput = document.getElementById("cardRowOutput");


// window.onload = () => {
//     populateStateSelect();
//     // console.log(nationalParksArray)
//     populateParkType(); 
//     console.log(parkTypeSelect)
//     stateSelect.onchange = showLocationDataOnChang;
    
// //     submitButton.onclick = onsubmitButton;
// //     stateSelect.onchange = onsubmitButton;
//  }
// // function onsubmitButton() {
// //     let selectedValue = stateList.value;
// //     if (selectedValue !== "") {
// //         outputH1.innerHTML = selectedValue;
// //     } else {
// //         outputH1.innerHTML = "No Region is selected";
// //     }
// //}

// function populateStateSelect() {
//     for (let i = 0; i < locationsArray.length; i++) {
//         let newOption = document.createElement("option");
//         newOption.textContent = locationsArray[i];
//         newOption.value = locationsArray[i];
//         stateSelect.appendChild(newOption);
//     }
// }


// const parkTypesArray = [
//     "National Park",
//     "National Monument",
//     "Recreation Area",
//     "Scenic Trail",
//     "Battlefield",
//     "Historic",
//     "Memorial",
//     "Preserve",
//     "Island",
//     "River",
//     "Seashore",
//     "Trail",
//     "Parkway"
// ]



// function populateParkType() {
//     for (let i = 0; i < parkTypesArray.length; i++) {
//         let newOption = document.createElement("option");
//         newOption.textContent = parkTypesArray[i];
//         newOption.value = parkTypesArray[i];
//         parkTypeSelect.appendChild(newOption);
//     }
// }

// //After you choose


// function showLocationDataOnChang(){
//     cardRowOutput.innerHTML =""
//     for(let nationalPark of nationalParksArray){
//         console.log(stateSelect.value)
//         if(nationalPark.State == stateSelect.value){
//             let address =`${nationalPark.City}, ${nationalPark.State},${nationalPark.Phone}`
//             cardRowOutput.appendChild(generateCard(nationalPark.LocationName, address))
//             console.log("state")
//         }
//     }
// }

//   function showLocationDataOnChang(){
//      cardRowOutput.innerHTML = ""
//      for(let nationalPark of nationalParksArray){
//         if(nationalPark.LocationName.includes(parkTypeDropdown.value) == true){
//         let address = `${nationalPark.City},${nationalPark.State},${nationalPark.Phone}`
//          cardRowOutput.appendChild(generateCard(nationalPark.LocationName,address));         }
//     }}
    
//     function generateCard (title, location){
//         let parkListCard = document.createElement("div");
//         parkListCard.classList.add("card", "parkcard");
    
//         let parkCardBody = document.createElement("div");
//         parkCardBody.classList.add("card-body");
    
//         parkListCard.appendChild(parkCardBody);
    
//         let parkCardTitle = document.createElement("h5");
//         parkCardTitle.classList.add("card-title");
    
//         parkCardBody.appendChild(parkCardTitle);
    
     
    
//         let parkCardText = document.createElement("p");
//         parkCardText.classList.add("card-text");
    
//         parkCardBody.appendChild(parkCardText);
    
//         let parkCardLocation = document.createElement("p");
//         parkCardLocation.classList.add("cardLocation");
    
//         parkCardText.appendChild(parkCardLocation);
    
//         let parkCardContact = document.createElement("h6");
//         parkCardContact.classList.add("card-text");
    
//         parkCardBody.appendChild(parkCardContact);
    
    
//         parkCardTitle.innerHTML = title;
    
//         parkCardLocation.innerHTML = location;
    
//         // parkCardContact.innerHTML = contact
    
                
            
//         return parkListCard;
//     }
"use strict";

const locationsArray = ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "DC", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Islands", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

const stateSelect = document.getElementById("stateSelect");
const parkTypeSelect = document.getElementById("parkTypeSelect");
const cardRowOutput = document.getElementById("cardRowOutput");

window.onload = () => {
    populateStateSelect();
    populateParkType();

    stateSelect.onchange = showLocationDataOnChange;
    parkTypeSelect.onchange = showLocationDataOnChange;
};

function populateStateSelect() {
    for (let i = 0; i < locationsArray.length; i++) {
        let newOption = document.createElement("option");
        newOption.textContent = locationsArray[i];
        newOption.value = locationsArray[i];
        stateSelect.appendChild(newOption);
    }
}

const parkTypesArray = ["National Park", "National Monument", "Recreation Area", "Scenic Trail", "Battlefield", "Historic", "Memorial", "Preserve", "Island", "River", "Seashore", "Trail", "Parkway"];

function populateParkType() {
    for (let i = 0; i < parkTypesArray.length; i++) {
        let newOption = document.createElement("option");
        newOption.textContent = parkTypesArray[i];
        newOption.value = parkTypesArray[i];
        parkTypeSelect.appendChild(newOption);
    }
}

function showLocationDataOnChange() {
    cardRowOutput.innerHTML = "";
    // Replace with your actual data or fetch it from somewhere
    // const nationalParksArray = fetchNationalParksData();

    for (let nationalPark of nationalParksArray) {
        if (stateSelect.value && nationalPark.State === stateSelect.value) {
            let address = `${nationalPark.City}, ${nationalPark.State}, ${nationalPark.Phone}`;
            cardRowOutput.appendChild(generateCard(nationalPark.LocationName, address));
        } else if (parkTypeSelect.value && nationalPark.LocationName.includes(parkTypeSelect.value)) {
            let address = `${nationalPark.City}, ${nationalPark.State}, ${nationalPark.Phone}`;
            cardRowOutput.appendChild(generateCard(nationalPark.LocationName, address));
        }
    }
}

function generateCard(title, location) {
    let parkListCard = document.createElement("div");
    parkListCard.classList.add("card", "parkcard");

    let parkCardBody = document.createElement("div");
    parkCardBody.classList.add("card-body");
    parkListCard.appendChild(parkCardBody);

    let parkCardTitle = document.createElement("h5");
    parkCardTitle.classList.add("card-title");
    parkCardBody.appendChild(parkCardTitle);
    parkCardTitle.innerHTML = title;

    let parkCardText = document.createElement("p");
    parkCardText.classList.add("card-text");
    parkCardBody.appendChild(parkCardText);

    let parkCardLocation = document.createElement("p");
    parkCardLocation.classList.add("cardLocation");
    parkCardText.appendChild(parkCardLocation);
    parkCardLocation.innerHTML = location;

    return parkListCard;
}

    