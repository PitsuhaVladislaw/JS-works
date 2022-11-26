///Объект document. Поиск элементов
/*
let headerElement = document.getElementById("header");
document.write("Text of header is: " + headerElement.innerText + "<br/>");

let pElements = document.getElementsByTagName("p");

for (let i = 0; i < pElements.length; i++) {
    document.write("Text of paragraf: " + pElements[i].innerText + "<br/>");
}


let pElement = document.getElementsByTagName("p")[0];

document.write("First element of paragraf is:" + pElement.innerText);


let articleDiv = document.getElementsByClassName("article")[0];
    console.log(articleDiv);

let textElems = document.getElementsByClassName("text");

for (let i = 0; i < textElems.length; i++) {
    console.log(textElems[i]);
}


let groop = document.getElementsByClassName("groop");
for (let i = 0; i < groop.length; i++) {
    document.write("Groop is:" +  groop[i].innerText + "<br/>");
}

let elem = document.querySelector(".annotation p");
document.write("Elem is: " + elem.innerText + "<br/>");


let elems = document.querySelectorAll(".text p");

for (let i = 0; i < elems.length; i++) {
    document.write("Elem of text: " + elems[i].innerText + "<br/>");
} 
*/



///Свойства объекта document
/*
let container = document.documentElement;

let images = document.images;
/// изменим первое изображение
images[0].src = "pics/picture_4.jpg";
images[0].alt = "Новая картинка";
/// перебирем все изображения
for (let i = 0; i < images.length; i++) {
    document.write("<br/>" + images[i].src);
    document.write("<br/>" + images[i].alt);
}


let links = document.links;

for (let i = 0; i < links.length; i++) {
    document.write("<br/>" + links[i].innerText);
    document.write("<br/>" + links[i].href);
}
*/



///Объект Node. Навигация по DOM
/*
let articleDiv = document.querySelector("div.article");
let nodes = articleDiv.childNodes;

for (let i = 0; i < nodes.length; i++) {
    let type = "";
    
    if (nodes[i].nodeType === 1) {
        type = "element";
    } else if (nodes[i].nodeType === 2) {
        type = "atribute";
    } else if (nodes[i].nodeType === 3) {
        type = "text";
    }

    console.log(nodes[i].nodeName + ":" + type);
}

let articleDiv = document.querySelector("div.article");
let nodes = articleDiv.childNodes;

for (let i = 0; i < nodes.length; i++) {
    let type = "";

    if (nodes[i].nodeType === 1) {
        type = "element";
    } else if (nodes[i].nodeType === 2) {
        type = "atribute";
    } else if (nodes[i].nodeType === 3) {
        type = "text";
    }

    console.log(nodes[i].nodeName + ":" + type);
}


let articleDiv = document.querySelector("div.article");
/// получаем первый дочерний элемент
let node = articleDiv.firstChild;
console.log(node);

/// обращаемся к следующему узлу, пока он определен
while ((node = node.nextSibling) !== null) {
    console.log(node.nodeName);
}


let articleDiv = document.querySelector("div.article");

let node = articleDiv.lastChild;

while ((node = node.previousSibling) !== null) {
    console.log(node.nodeName);
}
*/



///Создание, добавление и удаление элементов веб-станицы
/*
let elem = document.createElement("div");
let elemText = document.createTextNode("Hello, world");

let articleDiv = document.querySelector("div.article");
/// создаем элемент
let elem = document.createElement("h2");

/// создаем для него текст
let elemText = document.createTextNode("Hello, world");

/// добавляем текст в элемент в качестве дочернего элемента
elem.appendChild(elemText);

/// добавляем элемент в блок div
articleDiv.apendChild(elem);


let elemP = document.createElement("h3");
let elemTextP = document.createTextNode("Hello, everybody!")
elemP.appendChild(elemTextP);

let firstElem = articleDiv.lastChild.previousSibling;
articleDiv.insertBefore(elemP, firstElem)


let articleDiv = document.querySelector("div.article");

/// клонируем элемент articleDiv
let newArticleDiv = articleDiv.cloneNode(true);

let pastArticleDiv = articleDiv.cloneNode(false);

/// добавляем в конец элемента body
document.body.appendChild(newArticleDiv);
document.body.appendChild(pastArticleDiv);


let articleDiv = document.querySelector("div.article");

/// находим узел, который будем удалять - первый параграф
let removableNode = document.querySelectorAll("div.article p")[0];

/// удаляем узел
articleDiv.removeChild(removableNode);


let articleDiv = document.querySelector("div.article");

/// находим узел, который будем заменять - первый параграф
let oldNode = document.querySelectorAll("div.article p")[0];

/// создаем элемент
let newNode = document.createElement("h2");

/// создаем для него текст
let elemText = document.createTextNode("hello, world!");

/// добавляем текст в элемент в качестве дочернего элемента
newNode.appendChild(elemText);

/// заменяем старый узел новым
articleDiv.replaceChild(newNode, oldNode);
*/



///Объект Element. Управление элементами
/*
let articleDiv = document.querySelector("div.article");

let firstNode = articleDiv.firstChild;
let nodes = articleDiv.childNodes;

document.write("First node here is " + firstNode[i].innerText + "<br/>");

for(let i = 0; i < nodes.length; i++) {
    document.write("Child of Article is " + nodes[i].nodeValue + "<br/>");
}


html{
    color:blue;
}
et root = document.documentElement;
/// устанавливаем стиль
root.style.color = "blue";
root.style.fontFamily = "Verdana";

/// получаем значение стиля
document.write(root.style.color + "<br/>");
document.write(root.style.fontFamily + "<br/>");


let articleDiv = document.querySelector("div.article");

/// установка нового класса
articleDiv.className = "blueStyle";

/// получаем название класса
document.write(articleDiv.className);

///Объединить старый и новый класс вместе
articleDiv.className = articleDiv.className + "blueStyle";

///Удалить все классы и оставить пустую строку
articleDiv.className = "";
document.write(articleDiv.className);


let articleDiv = document.querySelector("div.article");

/// удаляем класс
articleDiv.classList.remove("article");

/// добавляем класс
articleDiv.classList.add("blueStyle");

/// переключаем класс
articleDiv.classList.toggle("article");

document.write(articleDiv.classList);
*/



///Изменение стиля элементов
/*
function getChildren(elem) {
    for (let i in elem.childNodes) {
        if (elem.childNodes[i].nodeType === 1) {
            console.log(elem.childNodes[i].tagName);
            getChildren(elem.childNodes[i]);
        }
    }
}

let root = document.documentElement;

console.log(root.tagName);
getChildren(root);


let articleDiv = document.querySelector("div.article");

console.log(articleDiv.innerText);
console.log("___________________");
console.log(articleDiv.innerHTML);


let pElement = document.querySelectorAll("div.article p")[0];

pElement.innerText = "hello";
pElement.textContent = "hello";
console.log(pElement.innerHTML);
console.log(pElement.textContent);

let articleDiv = document.querySelector("div.article");

articleDiv.innerHTML = "<h2>Hello World!!!</h2><p>bla bla bla</p>"
console.log(articleDiv.innerHTML);


let articleDiv = document.querySelector("div.article");

/// получаем атрибут style
let styleValue = articleDiv.getAttribute("style");
console.log("Before changing attribute: " + styleValue);

/// удаляем атрибут
articleDiv.removeAttribute("style");

/// добавляем заново атрибут style
articleDiv.setAttribute("style", "color: blue");

styleValue = articleDiv.getAttribute("style");
console.log("After changing attribute: " + styleValue);


let rect = document.getElementById("rect");

let clientRect = rect.getBoundingClientRect();

///Просто опредление параметров длины и ширины с(без)границы
console.log("offsetHeight" + rect.offsetHeight);
console.log("offsetWidth:" + rect.offsetWidth);
console.log("clientHeight:" + rect.clientHeight);
console.log("clientWidth:" + rect.clientWidth);

///getBoundingClientRect()
console.log("Top:" + clientRect.top);
console.log("Left:" + clientRect.left);
console.log("Right:" + clientRect.right);
console.log("Bottom:" + clientRect.bottom);
*/



///Создание своего элемента HTML
/*
*/