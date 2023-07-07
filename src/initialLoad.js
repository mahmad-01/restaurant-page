import Pizza from './img/pizzaR.jpeg';
function initialLoad(){
    const body = document.querySelector('body');
    const content = document.createElement("div");
    content.setAttribute('id', 'content');
    const img = new Image();
    img.src = Pizza;
    const text = document.createElement('h2');
    text.textContent = "Welcome to Restaurante Mi Amor!"
    const textP = document.createElement('p');
    textP.textContent = "Restaurante Mi Amor is a charming pizza restaurant that captures the essence of Italy in every bite. Located in the heart of a bustling city, this eatery offers a delightful fusion of traditional Italian flavors and a warm, inviting ambiance. As soon as you step through the door, you're greeted by the heavenly aroma of freshly baked pizzas crafted with love and expertise.";
    content.appendChild(text);
    content.appendChild(textP);
    content.appendChild(img);
    content.style.backgroundColor = "Beige";
    body.appendChild(content);
};

export default initialLoad;