let count = 0;

$("#handleDecrement").click(() => {
  count = count - 1;
  setNewValue();
});

$("#handleIncrement").click(() => {
  count = count + 1;
  setNewValue();
});

$("#handleReset").click(() => {
  count = 0;
  setNewValue();
});

function setNewValue() {
  $("#number").html(count);
}
