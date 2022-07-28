localStorage.theme = 'light';
var theme = localStorage.theme;



var themePromise = new Promise(function (resolve, reject) {

    var theme = localStorage.theme

    if (theme == 'dark') {
        resolve('dark')
        console.log('dark')
    } else {
        reject('light')
        console.log('light')
    }
})

console.log(themePromise)