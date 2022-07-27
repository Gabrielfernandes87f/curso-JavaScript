var button = document.querySelector('#body button');
var card = document.querySelector('#body #card');
var input = document.querySelector('#body input');

button.addEventListener('click', function (event) {
    event.preventDefault();
    card.innerHTML = `Sua idade é: ` + input.value;
    console.log(input.value);
});
// 
//////////////////////////////////////////////////////////////////////////////////////////////
