// console.log(navigator.userAgent);
// console.log(navigator.language);
// console.log(navigator.userAgentData);
// if (navigator.userAgentData) {
//   navigator.userAgentData
//     .getHighEntropyValues(["platform"])
//     .then((data) => {
//       console.log("Платформа:", data.platform);
//     })
//     .catch((error) => {
//       console.error("Ошибка получения данных о платформе:", error);
//     });
// } else {
//   console.log(
//     "Свойство navigator.userAgentData не поддерживается в этом браузере."
//   );
// }

// console.log(window.devicePixelRatio);

// Задание 1
// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.
// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.
// Выведите в консоль строку:
// На компьютере с ОС ... с помощью браузера ... я открыл страничку ...
// (необходимые значения добавьте с помощью BOM)
// console.log(navigator.userAgentData.platform);
// console.log(navigator.userAgent);
// console.log(location.href);
// console.log(
//   `На компьютере с ОС ${navigator.userAgentData.platform} с помощью браузера ${navigator.userAgent} я открыл страничку ${location.href}`
// );

// console.log(document.body.childNodes);
// for (let node of document.body.childNodes) {
//   console.log(node);
// }

// console.log(document.body.parentElement);
// for (let elem of document.body.children) {
//   console.log(elem);
// }

// console.log(document.body.childNodes[1]);
// console.log(document.body.children[1]);
// console.log(document.body.children[1].childNodes[3]);

// const customItem = document.getElementById("custom-item");
// console.log(customItem);

// const selectedItem = document.getElementsByClassName("title");
// console.log(selectedItem);

// // const paragraphs = document.querySelectorAll("p");
// // console.log(paragraphs);

// const paragraphs1 = document.querySelector("ul li:first-child");
// console.log(paragraphs1);

// const paragraphs = document.querySelectorAll("h1, h2 ");
// console.log(paragraphs);
// const heading = document.querySelectorAll("h1, h2 ");
// console.log(paragraphs);
// const ull = document.querySelector(".ull");

// customItem.style.fontSize = "50px";
// console.log(ull.innerText);

// customItem.textContent = "Users";
// customItem.textContent = "";

// for (let elemrnts of paragraphs) {
//   elemrnts.style.color = "blue";
// }

// heading.forEach((elemrnts) => {
//   elements.textContent = "New Heading";
// });

// Задание 2
// В файле html есть разметка (добавьте ее в свой файл html):
// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>
// 2.1. Вывести в консоль каждое из имен (содержимое каждого li).
// 2.2. Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)

// const namesAll = document.querySelector("ul");
// console.log(namesAll.textContent);

const names = document.querySelectorAll("li");
// names.forEach((elements) => {
//   console.log(elements.textContent);
// });

names.forEach((elements, index) => {
  elements.textContent = index;
});
console.log(names);

// Задание 3
// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.

const textDelete = document.querySelectorAll(".forRemove");
textDelete.forEach((elements) => {
  elements.remove();
});

// const link = document.createElement("a");
// link.href = "https://www.google.com";
// link.setAttribute("target", "_blank");
// link.style.color = "violet";
// link.style.textDecoration = "none";
// link.textContent = "click me";
// document.body.append(link);
// console.log(link);

// const forAdding = document.querySelector(".forAdding");
// const button = document.createElement("button");
// button.textContent = "My button";
// forAdding.append(button);

// Задание 4
// Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.

const paragraphs = document.createElement("p");
paragraphs.textContent = "Lorem ipsum, dolor sit amet consectetur";
paragraphs.style.fontSize = "36px";
paragraphs.style.fontWeight = "600";
document.body.append(paragraphs);

// Задание 5
// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.

const createWorld = (teg, color, content) => {
  const tegName = document.createElement(teg);
  tegName.style.color = color;
  tegName.textContent = content;
  return tegName;
};
const content = createWorld("p", "red", "Hello world");
const content1 = createWorld("h1", "blue", "My pictures");
const content2 = createWorld("h2", "green", "Paragraphs");
console.log(content, content1, content2);
document.body.append(content);
document.body.append(content1);
document.body.append(content2);

// Задание 6
// Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.

const select = document.createElement("select");
document.body.append(select);
for (let elements = 1960; elements <= 2020; elements++) {
  const option = document.createElement("option");
  option.textContent = elements;
  select.append(option);
}

// Задание 7
// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:
// const clients = [
// {name: "Женя", order: true},
// {name: "Кристина", order: true},
// {name: "Павел", order: false},
// {name: "Виолетта", order: false},
// {name: "Костя", order: true}
// ]
// Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом
// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.

const clients = [
  { name: "Женя", order: true },
  { name: "Кристина", order: true },
  { name: "Павел", order: false },
  { name: "Виолетта", order: false },
  { name: "Костя", order: true },
];
const listTop = document.createElement("ul");
document.body.append(listTop);
clients.forEach((elements) => {
  const list = document.createElement("li");
  list.style.listStyleType = "none";
  if (elements["order"] == true) {
    elements["order"] = "оплатил";
  } else {
    elements["order"] = "отменил";
  }
  const text = `- Клиент ${elements.name} ${elements["order"]} заказ`;
  list.textContent = text;
  listTop.append(list);
});

// Задание 8
// Есть массив ссылок:
// let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];
// Вам нужно:
// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY

let linksArr = [
  "https://www.amazon.com/",
  "https://www.youtube.com/",
  "https://devby.io/",
  "https://www.google.com/",
  "https://apple.com/",
];

const block = document.createElement("div");
block.style.backgroundColor = "green";
block.style.padding = "15px 20px";

for (let elements of linksArr) {
  const link = document.createElement("a");
  link.href = elements;
  link.setAttribute("target", "_blank");
  link.textContent = "LINK";
  block.append(link);
}
document.body.append(block);
