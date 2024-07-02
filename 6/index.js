"use strict";

// Задание 1
document.addEventListener('DOMContentLoaded', () => {
    console.log('Все теги прогрузились');
});

// Задание 2
window.addEventListener('load', () => {
    console.log('Страница загрузилась');
});

// Задание 3
document.addEventListener('click', (event) => {
    const target = event.target;
    const tagName = target.tagName.toLowerCase();
    const parentElement = target.parentElement.tagName.toLowerCase();
    
    if (target.classList.contains('super_element')) {
        console.log(`Класс "super_element" присутствует в элементе "${tagName}"`);
    } else {
        console.log(`Класс "super_element" в элементе "${tagName}" отсутствует`);
    }
});

// Задание 4
const textarea = document.querySelector('textarea');
textarea.addEventListener('mouseenter', () => {
    console.log('Вы навели на textarea');
});

// Задание 5
const ul = document.querySelector('ul');
ul.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName.toLowerCase() === 'button') {
        console.log(target.textContent);
    }
});

// Задание 6
// Объяснение уже дано в комментарии к заданию 6.

// Задание 7
const liElements = document.querySelectorAll('li:nth-child(even)');
liElements.forEach((li, index) => {
    if (index % 2 !== 0) {
        li.style.backgroundColor = '#e7e3e3';
    }
});
