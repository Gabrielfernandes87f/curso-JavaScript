var button = document.querySelector("#body button");

button.addEventListener("click", function () {
    
    axios.get("https://api.github.com/users")
        .then(function (response) {
            console.log(response);
            console.log(response.data[0].login);
            console.log('deu certo');
        })

        .catch(function (error) {
            console.warn(error);
            console.warn(error.response);
        })
            
        .finally(function () {
            console.log('finally')
        })
})




// https://api.github.com/users