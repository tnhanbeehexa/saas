'use strict';

import render from "./render.js";
import findUsAt from "./views/partials/findUsAt.js";
import formContact from "./views/partials/formContact.js";
import header from "./views/partials/header.js";
import footer from "./views/partials/footer.js";
import slider from "./views/partials/slider.js";


const elementRoot = document.getElementById('root');

const app = () => {
    return render`
        <div class='container-variux'>
            ${header()}
            ${slider()}
            ${formContact()}
            ${findUsAt()}
            ${footer()}
        </div> 

    ` 
};

elementRoot.innerHTML = app();
const carousel = document.querySelector('.slider');
const btnLeft = document.querySelector('.btn-left');
btnLeft.addEventListener('click', () => {
    carousel.scrollLeft -= 200;
})

const btnRight = document.querySelector('.btn-right');
btnRight.addEventListener('click', () => {
    carousel.scrollLeft += 200;
})

export default app;