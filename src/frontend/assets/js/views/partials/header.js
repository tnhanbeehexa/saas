"use strict";

import render from "../../render.js";

const header = () => {
    return render`
        <header class="p-4 bg-dark text-white">
            <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="index.html" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none align-items-center flex-column justify-content-center logo-brand">
                        <img src="./assets/image/Variux+-+orange.png" class="header-logo"></img>
                        <span class="textLogo">POPUP Banner Module</span>
                    </a>

                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" class="nav-link px-2 text-secondary">About</a></li>
                        <li><a href="#" class="nav-link px-2 text-white">Guide Docs</a></li>
                    </ul>

                    <div class="text-end">
                        <button type="button" class="btn btn-outline-light me-2">Login</button>
                        <button type="button" class="btn btn-warning">Sign-up</button>
                    </div>
                </div>
            </div>
        </header>
    `
};

export default header;