var inputs = [].slice.call(document.querySelectorAll('input[type="text"]')),
  button = document.querySelector('button');
inputs.forEach(function (el) {
  el.addEventListener('input', checkInputs, false);
});
function checkInputs() {
  var empty = inputs.filter(function (el) {
    return el.value.trim() === '';
  }).length;
  button.disabled = empty !== 0;
}
checkInputs();

function viewDiv() {
  document.getElementById("div1").style.display = "block";
  $('.btn').on('click', function () {
    $(this).addClass('hide');
  })
};