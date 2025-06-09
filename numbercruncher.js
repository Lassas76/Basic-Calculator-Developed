const display = document.getElementById("calcscreen");
let current = "";
let first = null;
let operator = null;

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.dataset.clear !== undefined) {
      current = "";
      first = null;
      operator = null;
      display.textContent = "0";
    } else if (btn.dataset.equals !== undefined) {
      if (first !== null && operator !== null) {
        current = compute(first, current, operator).toString();
        display.textContent = current;
        first = null;
        operator = null;
      }
    } else if (btn.dataset.act !== undefined) {
      if (current !== "") {
        first = current;
        operator = btn.dataset.act;
        current = "";
      }
    } else {
      current += btn.textContent;
      display.textContent = current;
    }
  });
});

function compute(a, b, op) {
  const x = parseFloat(a), y = parseFloat(b);
  switch(op) {
    case "+": return x + y;
    case "-": return x - y;
    case "×": return x * y;
    case "÷": return y !== 0 ? x / y : "Err";
    default: return y;
  }
}
