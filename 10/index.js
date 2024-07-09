import { dataInfo } from "./data.js";

const data = JSON.parse(dataInfo);
console.log(data);

const content = document.querySelector('.content');

data.forEach(({ id, name, description, url }) => {
    const div = document.createElement('div');
    div.classList.add('animal');
    
    const title = document.createElement('h2');
    title.classList.add('animal-name');
    title.textContent = `${id}. ${name}`;
    
    const img = document.createElement('img');
    img.classList.add('animal-img');
    img.src = url;
    
    const desc = document.createElement('p');
    desc.classList.add('animal-desc');
    desc.textContent = description;
    
    div.appendChild(title);
    div.appendChild(img);
    div.appendChild(desc);
    content.appendChild(div);
});
