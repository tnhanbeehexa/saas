'use strict';

import render from "./render.js";
import header from "./views/partials/header.js";
import slider from "./views/partials/slider.js";
import footer from "./views/partials/footer.js";
import findUsAt from "./views/partials/findUsAt.js";

import formContact from "./views/partials/formContact.js"
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

export default app;