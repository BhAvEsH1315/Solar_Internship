function display(val) {
  document.getElementById("textarea").value += val
}

function clr() {
  document.getElementById("textarea").value = ""
}
function calculate() {
  var eq = document.getElementById("textarea").value
  var answer = eval(eq);
  document.getElementById("textarea").value = answer
}
