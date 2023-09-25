"use strict";

import render from "../../render.js";

const header = () => {
    return render`
        <header class="header">
            <div class="container-header">
                <nav class="header-navbar-left">
                    <a href="#"><img src="./assets/image/logo-variux.png" alt="Logo" class="header-logo"></a>
                    <div class="header-navbar-option">
                        <a href="./index.html" class="header-navbar-option-title">Home</a>
                        <a href="./design.html" class="header-navbar-option-title">Design Layout</a>
                        <a href="./config.html" class="header-navbar-option-title">Config Popup</a>
                    </div>
                </nav>
                <nav class="header-navbar-right">
                    <img src="./assets/image/logo-variux.png" alt="user-avatar" class="user-avatar">
                    <div class="user-name-wrapper">
                        <h2 class="user-name">Tín Nguyễn
                            <ul class="user-menu">
                                <li class="user-menu-item">Profile</li>
                                <li class="user-menu-item">Profile</li>
                                <li class="user-menu-item">Profile</li>
                            </ul>
                        </h2>
                        <i class="fa-solid fa-angle-down"></i>
                    </div>
                </nav>
            </div>
        </header>
    `
};

export default header;