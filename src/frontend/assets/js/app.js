'use strict';

import render from "./render.js";
import formContact from "./views/partials/formContact.js";
import header from "./views/partials/header.js";

const elementRoot = document.getElementById('root');

const app = () => {
    return render`
        <div class='container-variux'>
            ${header()}
        </div>
    ` 
};

elementRoot.innerHTML = app();
export default app;