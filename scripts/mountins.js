"use strcit";




const mountainSelect = document.createElement("select");
mountainDropdown.appendChild(mountainSelect);
mountainArry.forEach((montain, index) =>{
 const option = document.createElement("option");
 option.value = index;


 option.textContent = mountain.name;
 mountainSelect.appendChild(Option);
});

function populateMountains(){
    imageHolder.innerHTML ="";
    const selectedIndex = mountainSelect.value;
    console.log(selectedIndex);


    let mountain = mountainArry[selectedIndex];

   console.log(mountain.desc);
   mountainName.textContent = mountain.name;
   mountainDesc.textContent = mountain.desc;
   mountainElevation.textContent = mountain.elevation;

 const image = document.createElement("img");
 image.scr ="images"+mountain.img;
 image.alt = mountain.name;
 imageHolder.appendChild(image);

}
