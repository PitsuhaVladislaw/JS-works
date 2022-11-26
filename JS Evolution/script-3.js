/*
const title = "Hello"
const isVisible = () => Math.random() > 0.5;

const template = `
${isVisible} ? <p>Visible </p>
<h1 style = "color: red"> ${title} </h1>;`

console.log(template);
*/

const str = 'Hello';

console.log(str.startsWith('He'));
console.log(str.endsWith('lo'));

console.log(str.includes('llo'));

console.log(str.repeat(3));

console.log(str.trim())
console.log(str.trimStart())
console.log(str.endsWith())

console.log(str.padStart(10, '1234'));
console.log(str.padEnd(5, 'abc'));