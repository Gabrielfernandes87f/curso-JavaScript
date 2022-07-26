var button = document.querySelector('#body button');
var card = document.querySelector('#body #card');
var input = document.querySelector('#body input');

button.addEventListener('click', function () {
    card.innerHTML =  `Sua idade é: ` + input.value;
});
//////////////////////////////////////////////////////////////////////////////////////////////

button.addEventListener('click', function () {
    alert(`Seu email  é: ` + input.value)
});

//////////////////////////////////////////////////////////////////////////////////////////////

function mostrarEmail() {
    card.innerHTML =  `Sua idade é (mostrarEmail): ` + input.value;
}

button.addEventListener('click', mostrarEmail);

button.addEventListener('click', function () {
    card.innerHTML = `
    <div class="new">
        <h1 class="title-admin">Novo acesso com admin,</h1>
        <p>Seu email é: ` + input.value + `</p>
    </div>
</div>`
});