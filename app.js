var button = document.querySelector("#app form button");

var zipCode = document.querySelector("#app form input");
var content = document.querySelector("#app main");

button.addEventListener("click", run);

function run(event) {
    event.preventDefault();
    var zip = zipCode.value;

    var zip = zip.replace(' ', '');
    var zip = zip.replace('.', '');
    var zip = zip.trim();

    axios.get("https://viacep.com.br/ws/" + zip + "/json/")
        .then(function (response) {
            content.innerHTML = ''
            console.log(response.data);
            var data = response.data;
            var html = `
            <p>${data.logradouro}</p>
            <p>${data.bairro}</p>
            <p>${data.localidade}</p>
            <p>${data.uf}</p>
            `;
            content.innerHTML = html;

            if (response.data.erro) {
                new Error("Cep não encontrado");
                console.log("Cep não encontrado");
                content.innerHTML = "<p>Cep não encontrado<p>";    
            }
        }
        
    ).catch(function (error) { 
        content.innerHTML = '<p>CEP não encontrado</p>';
    })
}




// https://viacep.com.br/ws/58428850/json/
// https://api.github.com/users
// https://viacep.com.br/