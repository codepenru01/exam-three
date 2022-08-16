let inwebsite = document.querySelector(".form__select");
let labelRadio = document.querySelector(".form__input-radio");
let labelheck = document.querySelector(".form__input-check-on");
let labelAppen = document.querySelector(".form__input-check-extra");

let spanInfo = document.querySelector(".info__pizza-bread");
let spanFirst = document.querySelector(".info__pizza-size");
let spanSecond = document.querySelector(".info__pizza-on-food");
let spanThird = document.querySelector(".info__pizza-on-extra");

let selectArr = ["Yupqa" , "O`rtacha", "Qalin"];
const chooseArr = [25, 30, 35,];
let onFood = ["Pomidor" , "Kurka Go`shti" , "Zaytun", "Tuzlangan bodring", "Qo`ziqorin", "Qazi"];
let onExtra = ["Achchiq", "Sosikali", "Mozarella",];
let targetArr = [];

for (let extra = 0; extra < onExtra.length; extra++) {
  let inputExtra = document.createElement("input");
  inputExtra.setAttribute("type", "checkbox");
  inputExtra.setAttribute("name" , "food_on_extra_pizza");
  inputExtra.setAttribute("class", "me-1");
  let labelExtra = document.createElement("label");
  labelExtra.setAttribute("class", "me-4");
  
  inputExtra.value = onExtra[extra] ;
  labelExtra.textContent = onExtra[extra] ;
  labelExtra.prepend(inputExtra);
  labelAppen.appendChild(labelExtra);
  
  let extraItem = document.createElement("li");
  inputExtra.addEventListener("click",function() {
    if(inputExtra.checked) {
      targetArr.push(onExtra[extra]);
      spanThird.appendChild(extraItem);
      extraItem.textContent = onExtra[extra];
    } else{ 
      spanThird.removeChild(extraItem);
    }
  })
}

for (let food = 0; food < onFood.length; food++) {
  let inputFood = document.createElement("input");
  inputFood.setAttribute("type", "checkbox");
  inputFood.setAttribute("name" , "food_on_pizza");
  inputFood.setAttribute("class", "me-1" , "checkbox");
  let labelFood = document.createElement("label");
  labelFood.setAttribute("class", "me-4");
  
  inputFood.value = onFood[food];
  labelFood.textContent = onFood[food] ;
  labelFood.prepend(inputFood);
  labelheck.appendChild(labelFood);
  
  
  let foodItem = document.createElement("li");
  inputFood.addEventListener("click",function() {
    if(inputFood.checked) {
      targetArr.push(onFood[food]);
      spanSecond.appendChild(foodItem);
      foodItem.textContent = onFood[food];
    } else{ 
      spanSecond.removeChild(foodItem);
    }
  })
}

for(let element = 0; element < selectArr.length; element++) {
  let selectOpt = document.createElement("option");
  selectOpt.value = selectArr[element];
  selectOpt.textContent = selectArr[element];
  inwebsite.appendChild(selectOpt);
  
  inwebsite.addEventListener('change', function(e){
    spanInfo.textContent = e.target.value
  })
}

for (let choose = 0; choose < chooseArr.length; choose++) {
  let inputCars = document.createElement("input");
  inputCars.setAttribute("type", "radio");
  inputCars.setAttribute("name" , "Size_pizza");
  inputCars.setAttribute("class", "me-1");
  let labelChoose = document.createElement("label");
  labelChoose.setAttribute("class", "me-4")
  
  inputCars.value = `${ChooseArr[choose]} sm`;
  labelChoose.textContent = `${chooseArr[choose]} sm`;
  labelChoose.prepend(inputCars);
  labelRadio.appendChild(labelChoose);
  
  labelRadio.addEventListener('change', function(e){
    spanFirst.textContent = e.target.value;
  })
}