const btn_number = document.querySelectorAll(".buttons .number");
const btn_operator = document.querySelectorAll(".buttons .operator");
//=========================================================================
const result = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const backspace = document.querySelector(".backspace");
//=========================================================================
const first_display = document.querySelector(".input");
const secund_display = document.querySelector(".output");

let signal = false;
let decimal = false;

btn_number.forEach((element) => {
  element.addEventListener("click", (e) => {
    signal = false;
    if (e.target.innerHTML === ",") {
      if (!decimal) {
        decimal = true;
        if (first_display.innerHTML == "0") {
          first_display.innerHTML = "0,";
        } else {
          first_display.innerHTML += e.target.innerHTML;
        }
      }
    } else {
      if (first_display.innerHTML == "0") {
        first_display.innerHTML = "";
      }
      first_display.innerHTML += e.target.innerHTML;
    }
  });
});

btn_operator.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (!signal) {
      signal = true;
      if (first_display.innerHTML == "0") {
        first_display.innerHTML = "";
      }
      if (e.target.innerHTML === "x") {
        first_display.innerHTML += "*";
      } else {
        first_display.innerHTML += e.target.innerHTML;
      }
    }
  });
});

result.addEventListener("click", () => {
  signal = false;
  decimal = false;
  const outcome = eval(first_display.innerHTML);
  secund_display.innerHTML = outcome;
});

clear.addEventListener("click", () => {
  signal = false;
  decimal = false;
  first_display.innerHTML = "0";
  secund_display.innerHTML = "";
});

backspace.addEventListener("click", () => {
  let del = first_display.innerHTML.slice(0, -1);
  first_display.innerHTML = del;
});
