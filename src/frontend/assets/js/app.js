'use strict';

import render from "./render.js";
import header from "./views/partials/header.js";
import slider from "./views/partials/slider.js";
import footer from "./views/partials/footer.js";
import formContact from "./views/partials/formContact.js";

const elementRoot = document.getElementById('root');

const app = () => {
    return render`
        <div class='container-variux'>
            ${header()}
            ${slider()}
            ${footer()}
        </div>
    ` 
};

elementRoot.innerHTML = app();
const carousel = document.querySelector('.slider');
const btnLeft = document.querySelector('.btn-left');
btnLeft.addEventListener('click', () => {
    carousel.scrollLeft -= 1296/3;
})

const btnRight = document.querySelector('.btn-right');
btnRight.addEventListener('click', () => {
    carousel.scrollLeft += 1296/3;
})

export default app;