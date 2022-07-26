var text = 'hello world';

var value = text.replace(' ', ' G ');
console.log(value);

// resultado: hello G world
// o que aconteceu: o metodo replace substituiu o primeiro caracter ' ' por ' G '

// .lenght - retorna o tamanho da string
// console.log(text.length);
// o .trim - remove os espaços em branco no inicio e no fim da string
// console.log(text.trim());
// o .toUpperCase - converte a string para maiusculo
// console.log(text.toUpperCase());
// o .toLowerCase - converte a string para minusculo
// console.log(text.toLowerCase());
// o .charAt - retorna o caracter na posição especificada
// console.log(text.charAt(0));
// o .indexOf - retorna a posição do caracter na string
// console.log(text.indexOf('o'));
// o .substring - retorna uma parte da string
// console.log(text.substring(0, 3));
// o .slice - retorna uma parte da string
// console.log(text.slice(0, 3));
// o .split - divide a string em um array
// console.log(text.split(' '));  // divide no espaço
// o .replace - substitui um caracter por outro
// console.log(text.replace(' ', ' G '));

var site = 'www.google.com';
var replacee = site.split('www.');
console.log(replacee);

// esse método não altera a string original