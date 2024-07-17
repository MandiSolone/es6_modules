console.log("Hello World");

// TODO
 import { WishList } from "./wishlist";

 let form = document.querySelector("#submitForm"); 
 let makeInput = document.querySelector("#makeInput"); 
 let modelInput = document.querySelector("#modleInput"); 
 let yearInput = document.querySelector("#yearInput"); 
 let makePara = document.querySelector("#car-make"); 
 let modelPara = document.querySelector("#car-model"); 
 let yearPara = document.querySelector("#car-year"); 
 let removeBtn = document.querySelector("#removeBtn"); 
 let uL = document.querySelector("#wishlist-title > ul");

//Call the WishList constructor to create an instance from the WishList class
let wishList = new WishList(); 

form.addEventListener("submit", addCar); 

removeBtn.addEventListener("click", removeCar);  

function updateDOMList(){
   uL.innerHTML = ""; //clear the contents of ul 

    wishlist.list.forEach((car) => {
        let liMakeModel  = document.createElement("li");
        liMakeModel.textContent = `${car.make} ${car.model}`;
        liMakeModel.addEventListener("click", () => showCarDetails(car)); 
        uL.appendChild(liMakeModel);
    });
}

function showCarDetails(car){
    makePara.textContent = car.make
    modelPara.textContent = car.model
    yearPara.textContent = car.year
    removeBtn.disabled = fales; //enable remove button 

     //This will set a custom data- attribute on the DOM element that corresponds with the selected element
     removeBtn.setAttribute("data-carId", car.id);
}

function addCar(event) {
    event.preventDefualt(); 

    let make = makeInput.value; 
    let model = modelInput.value; 
    let year = yearInput.value; 

    wishlist.add(make, model, year); 

    updateDOMList(); 
}

function removeCar() {
    let carId = Number(removeBtn.getAttribute("data-carId"));
    wishlist.remove(carId); 

    updateDOMList();

  makePara.textContent = "";
  modelPara.textContent = "";
  yearPara.textContent = "";
  removeBtn.disabled = true;// disable remove Btn
}