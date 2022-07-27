var button = document.querySelector('#body button');
var card = document.querySelector('#body #card');
var input = document.querySelector('#body input');

button.addEventListener('click', function (event) {
    event.preventDefault();
    card.innerHTML = `Sua idade é: ` + input.value;
    console.log(input.value);

});

//// uma function recebe um parametro e retorna um valor
// posso colocar o parametro dentro de parenteses ee
// retornar um obj com informações do evento.
// exemplo function click(event) {...}
// event.target.innerHTML = 'clicou';
// esse nome event é um objeto que contem todas as informações do evento, como o target, o elemento que foi clicado, etc.
// event é uma variavel, poderia ser qualquer nome que iria representar o evento. event apenas pra ficar mais facil de ler.
