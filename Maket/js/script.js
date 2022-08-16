let elSiteSelect = document.querySelector(".form__select");
let elInputRadio = document.querySelector(".form__input-radio");
let elInputCheckOn = document.querySelector(".form__input-check-on");
let elInputCheckExtra = document.querySelector(".form__input-check-extra");

let elInfoSpan = document.querySelector(".info__pizza-bread");
let elInfoSpanFirst = document.querySelector(".info__pizza-size");
let elInfoSpanSecond = document.querySelector(".info__pizza-on-food");
let elInfoSpanThird = document.querySelector(".info__pizza-on-extra");




let selectArr = ["Yupqa" , "O`rtacha", "Qalin"];
const ChooseArr = [25, 30, 35,];
let chooseOnFood = ["Pomidor" , "Kurka Go`shti" , "Zaytun", "Tuzlangan bodring", "Qo`ziqorin", "Qazi"];
let chooseOnExtra = ["Achchiq", "Sosikali", "Mozarella",];
let targetArr = [];

for (let extra = 0; extra < chooseOnExtra.length; extra++) {
  let inputExtra = document.createElement("input");
  inputExtra.setAttribute("type", "checkbox");
  inputExtra.setAttribute("name" , "food_on_extra_pizza");
  inputExtra.setAttribute("class", "me-1");
  let labelExtra = document.createElement("label");
  labelExtra.setAttribute("class", "me-4")
  
  inputExtra.value = chooseOnExtra[extra] ;
  labelExtra.textContent = chooseOnExtra[extra] ;
  labelExtra.prepend(inputExtra);
  elInputCheckExtra.appendChild(labelExtra);
  
  let extraItem = document.createElement("li");
  inputExtra.addEventListener("click",function() {
    if(inputExtra.checked) {
      targetArr.push(chooseOnExtra[extra]);
      extraItem.textContent = chooseOnExtra[extra];
    } else{ 
      elInfoSpanThird.removeChild(extraItem);
    }
  })
}

for (let food = 0; food < chooseOnFood.length; food++) {
  let inputFood = document.createElement("input");
  inputFood.setAttribute("type", "checkbox");
  inputFood.setAttribute("name" , "food_on_pizza");
  inputFood.setAttribute("class", "me-1" , "checkbox");
  let labelFood = document.createElement("label");
  labelFood.setAttribute("class", "me-4")
  
  inputFood.value = chooseOnFood[food];
  labelFood.textContent = chooseOnFood[food] ;
  labelFood.prepend(inputFood);
  elInputCheckOn.appendChild(labelFood);
  
  
  let foodItem = document.createElement("li");
  inputFood.addEventListener("click",function() {
    if(inputFood.checked) {
      targetArr.push(chooseOnFood[food]);
      foodItem.textContent = chooseOnFood[food];
    } else{ 
    }
  })
}

for(let element = 0; element < selectArr.length; element++) {
  let selectOpt = document.createElement("option");
  selectOpt.value = selectArr[element];
  selectOpt.textContent = selectArr[element];
  elSiteSelect.appendChild(selectOpt);
  
  elSiteSelect.addEventListener('change', function(e){
  })
}

for (let choose = 0; choose < ChooseArr.length; choose++) {
  let inputChoose = document.createElement("input");
  inputChoose.setAttribute("type", "radio");
  inputChoose.setAttribute("name" , "Size_pizza");
  inputChoose.setAttribute("class", "me-1");
  let labelChoose = document.createElement("label");
  labelChoose.setAttribute("class", "me-4")
  
  inputChoose.value = `${ChooseArr[choose]} sm`;
  labelChoose.textContent = `${ChooseArr[choose]} sm`;
  labelChoose.prepend(inputChoose);
  elInputRadio.appendChild(labelChoose);
  
  elInputRadio.addEventListener('change', function(e){
    elInfoSpanFirst.textContent = e.target.value
  })
}