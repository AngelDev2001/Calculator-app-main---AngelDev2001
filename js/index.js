const pantalla = document.querySelector(".calculator__display");

const rango = document.getElementById("rango");

const container = document.querySelector(".container");

const calculator = document.querySelector(".calculator");

const calculatorHeaderTitle = document.querySelector(".calculator__header-title");

const calculatorOptionsTitle = document.querySelector(".calculator__options-title");

const calculatorFormContainerImput = document.querySelector(".calculator__form-containerImput");

const calculatorFormInputRange = document.querySelector(".calculator__form-inputRange");

const calculatorFormNumbers = document.querySelector(".calculator__form-numbers");

const calculatorDisplay = document.querySelector(".calculator__display");

const calculatorKeypad = document.querySelector(".calculator__keypad");

const calculatorKeypadKey = document.querySelectorAll(".calculator__keypad-key");

const calculatorKeypadKeyReset = document.querySelector(".calculator__keypad-keyReset");

const calculatorKeypadKeyDeleted = document.querySelector(".calculator__keypad-keyDeleted");

const calculatorKeypadKeyResult = document.querySelector(".calculator__keypad-keyResult");

window.addEventListener("DOMContentLoaded", () => {
  addStyle("one");
});

rango.addEventListener("change", () => {
  if (rango.value == "1") {

    addStyle("one");

    removeStyle("two");
    removeStyle("three");
    
  } else if (rango.value == "2") {

    addStyle("two");

    removeStyle("one");
    removeStyle("three");

  } else if (rango.value == "3") {

    addStyle("three");

    removeStyle("one");
    removeStyle("two");

  }
});

const buttons = Array.from(calculatorKeypadKey);

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "RESET":
        pantalla.innerText = "";
        break;
      case "DEL":
        if (pantalla.innerText) {
          pantalla.innerText = pantalla.innerText.slice(0, -1);
        }
        break;
      case "=":
        let nuevaEcuacion;

        try {
          if(pantalla.innerText !== ""){
            if (pantalla.innerText.includes("x")) {
              nuevaEcuacion = pantalla.innerText.replaceAll("x", "*");
            } else {
              nuevaEcuacion = pantalla.innerText;
            }

            pantalla.innerText = eval(nuevaEcuacion);
          }else{
            pantalla.innerText = "";
          }

        } catch {
          pantalla.innerText = "Error!";
        }
        break;
      default:
        pantalla.innerText += e.target.innerText;
    }
  });
});

const addStyle = (number) => {

  container.classList.add(`container-${number}`);

  calculator.classList.add(`calculator-${number}`);

  calculatorHeaderTitle.classList.add(`calculator__header-title-${number}`);

  calculatorOptionsTitle.classList.add(`calculator__options-title-${number}`);

  calculatorFormContainerImput.classList.add(`calculator__form-containerImput-${number}`);

  calculatorFormInputRange.classList.add(`calculator__form-inputRange-${number}`);
  
  calculatorFormNumbers.classList.add(`calculator__form-numbers-${number}`);

  calculatorDisplay.classList.add(`calculator__display-${number}`);

  calculatorKeypad.classList.add(`calculator__keypad-${number}`);

  Array.from(calculatorKeypadKey).forEach((button) => {
    button.classList.add(`calculator__keypad-key-${number}`);
  });

  calculatorKeypadKeyReset.classList.add(`calculator__keypad-keyReset-${number}`);

  calculatorKeypadKeyDeleted.classList.add(`calculator__keypad-keyDeleted-${number}`);

  calculatorKeypadKeyResult.classList.add(`calculator__keypad-keyResult-${number}`);
};

const removeStyle = (number) => {

  container.classList.remove(`container-${number}`);

  calculator.classList.remove(`calculator-${number}`);

  calculatorHeaderTitle.classList.remove(`calculator__header-title-${number}`);

  calculatorOptionsTitle.classList.remove(`calculator__options-title-${number}`);

  calculatorFormContainerImput.classList.remove(`calculator__form-containerImput-${number}`);

  calculatorFormInputRange.classList.remove(`calculator__form-inputRange-${number}`);
  
  calculatorFormNumbers.classList.remove(`calculator__form-numbers-${number}`);

  calculatorDisplay.classList.remove(`calculator__display-${number}`);

  calculatorKeypad.classList.remove(`calculator__keypad-${number}`);

  Array.from(calculatorKeypadKey).forEach((button) => {
    button.classList.remove(`calculator__keypad-key-${number}`);
  });

  calculatorKeypadKeyReset.classList.remove(`calculator__keypad-keyReset-${number}`);

  calculatorKeypadKeyDeleted.classList.remove(`calculator__keypad-keyDeleted-${number}`);

  calculatorKeypadKeyResult.classList.remove(`calculator__keypad-keyResult-${number}`);
};
