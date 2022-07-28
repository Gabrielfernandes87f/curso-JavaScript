var button = document.querySelector("#app button");
var cep = document.querySelector("#cep ");
var logradouro = document.querySelector("#logradouro");
var bairro = document.querySelector("#bairro");
var localidade = document.querySelector("#localidade");
var uf = document.querySelector("#uf");

button.addEventListener("click", function (event) {
    event.preventDefault();
    

    axios.get("https://viacep.com.br/ws/58428850/json/")
        .then(function (response) {
            cep.innerText = response.data.cep;
            logradouro.innerText = response.data.logradouro;
            bairro.innerText = response.data.bairro;
            localidade.innerText = response.data.localidade;
            uf.innerText = response.data.uf;
        })

        .catch(function (error) {
            console.warn(error);
            console.warn(error.response);
        })
            
        .finally(function () {
            console.log('finally')
        })
})
// https://viacep.com.br/ws/58428850/json/
// https://api.github.com/users
// https://viacep.com.br/