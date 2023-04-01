function calc() {
    var op = document.getElementById("Operator").value;
    var numOne = Number(document.getElementById("numOne").value);
    var numTwo = Number(document.getElementById("numTwo").value);
    var result;
    if (op === "+") {
      result = numOne + numTwo;
    } else if (op === "-") {
      result = numOne - numTwo;
    } else if (op === "*") {
      result = numOne * numTwo;
    } else if (op === "/") {
      result = numOne / numTwo;
    } else {
      result = "Invalid operator";
    }
    document.getElementById("Answer").innerHTML = result;
  }
  