let resultResultu = function () {
  let selectSymbol = document.querySelector(".select-symbol").value;
  let varA = parseFloat(document.querySelector("#variable-a").value);
  let varB = parseFloat(document.querySelector("#variable-b").value);
  let resultNumber = document.querySelector("#resultNumber");

  switch (selectSymbol) {
    case "plus":
      resultNumber.innerHTML = (varA + varB).toFixed(2);
      break;
    case "minus":
      resultNumber.innerHTML = (varA - varB).toFixed(2);
      break;
    case "multiply":
      resultNumber.innerHTML = (varA * varB).toFixed(2);
      break;
    case "divide":
      resultNumber.innerHTML = (varA / varB).toFixed(2);
      break;
    case "compare":
      if (varA > varB) {
        resultNumber.innerHTML = "Proměnná A je větší než Proměnná B";
      } else if (varA < varB) {
        resultNumber.innerHTML = "Proměnná A je menší než Proměnná B";
      } else if (varA === varB) {
        resultNumber.innerHTML = "Proměnné se rovnají";
      }
      break;
    case "num-positive":
      if (varA > 0 && varB > 0) {
        resultNumber.innerHTML = "A i B jsou kladná";
      } else if ((varA > 0) | (varB > 0)) {
        resultNumber.innerHTML = "A nebo B je kladné";
      } else if (varA == 0 && varB == 0) {
        resultNumber.innerHTML = "A i B jsou nulové";
      } else if (varA < 0 && varB < 0) {
        resultNumber.innerHTML = "A i B jsou záporné";
      }
      break;
  }
};

console.log(
  "%c© Tom Růžička, www.virtualniajtak.cz, www.tomruzicka.cz",
  "color: grey; font-size:20px;"
);
