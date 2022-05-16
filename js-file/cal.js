console.log(
  "Javascript Calculator Made By Zeeshan Saeed\nhttps://github.com/m-zeeshan-saeed"
);

document.getElementById("answer").readOnly = true;
let screen = document.getElementById("answer");
buttons = document.querySelectorAll("button");
let screenvalue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "X") {
      buttonText = "*";
      screenvalue += buttonText;
      screen.value = screenvalue;
    } else if (buttonText == "c") {
      screenvalue = "";
      screen.value = screenvalue;
    } else if (buttonText == "=") {
      screen.value = eval(screenvalue);
    } else {
      screenvalue += buttonText;
      screen.value = screenvalue;
    }
  });
}
document.addEventListener("keydown", function (event) {
  console.log(event.which);
  if (event.shiftKey == 57) {
    event.key = "(";
  } else if (event.shiftKey == 48) {
    event.key = ")";
  } else if (event.shiftKey == 53) {
    event.key = "%";
  }
  if (event.keyCode == 88) {
    screenvalue += "*";
    Screen.value = screenvalue;
  }
  if (
    event.key <= 9 ||
    event.key == "+" ||
    event.key == "-" ||
    event.key == "*" ||
    event.key == "." ||
    event.key == "/" ||
    event.key == "%" ||
    event.key == "(" ||
    event.key == ")"
  ) {
    screenvalue += event.key;
    screen.value = screenvalue;
  }
  if (event.keyCode == 13 || event.keyCode == 187) {
    screen.value = eval(screenvalue);
  } else if (event.keyCode == 46) {
    screenvalue = "";
    screen.value = screenvalue;
    console.clear();
  } else if (event.keyCode == 8) {
    screenvalue = screenvalue.slice(0, -1);
    screen.value = screenvalue;
  } else if (event.keyCode == 67) {
    screenvalue = "";
    screen.value = screenvalue;
    console.clear();
  } else if (event.keyCode == 82) {
    this.location.reload();
  }
});

window.onerror = function () {
  alert("PLEASE INPUT VALID EXPRESSION");
  screenvalue = "";
  screen.value = screenvalue;
  console.clear();
};
