"use strcit";

const dropdown = document.getElementById("dropdown");
const results = document.getElementById("results")

window.onload = () => {
dropdown.addEventListener('change', populateMountains)
}

const mountainSelect = document.createElement("select");


mountainsArray.forEach((mountain, index) =>{
  const option = document.createElement("option");
  option.value = index;
  option.textContent = mountain.name;
  mountainSelect.appendChild(option);
});

dropdown.appendChild(mountainSelect);

function populateMountains(){
    // imageHolder.innerHTML ="";
   results.innerHTML = "";

    const selectedIndex = mountainSelect.value;
    // console.log(selectedIndex);


    let mountain = mountainsArray[selectedIndex];

   console.log(mountain.desc);
  //  mountainName.textContent = mountain.name;
   
   const title = document.createElement("h1");
   title.textContent = mountain.name;
   results.appendChild(title);

   const elevation = document.createElement("p");
   elevation.textContent = mountain.elevation;
   results.appendChild(elevation);

   const description = document.createElement("p");
   description.textContent = mountain.desc;
   results.appendChild(description);


  const image = document.createElement("img");
  image.src = "images/" + mountain.img;
  results.appendChild(image);


}
