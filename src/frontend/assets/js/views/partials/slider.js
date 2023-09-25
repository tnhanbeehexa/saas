"use strict";

import render from "../../render.js";

const slider = () => {
    return render`
        <div class="container">
            <div class="slider-wrapper">
                <div class="slider">
                    <div class="btn-left">
                        <i class="fa-solid fa-arrow-left"></i>
                    </div>
                    <div class="template-item col-lg-4 col-md-6 col-sm-12 col-12">
                        <img src="./assets/image/logo-variux.png" alt="logo">
                    </div>
                    <div class="template-item col-lg-4 col-md-6 col-sm-12 col-12">
                        <div class="row">
                            <div class="template-item col-lg-6 col-md-6 col-sm-6 col-6">
                                <img src="./assets/image/logo-beehexa.png" alt="logo">
                            </div>
                            <div class="template-item col-lg-6 col-md-6 col-sm-6 col-6">
                                <img src="./assets/image/logo-variux.png" alt="logo">
                            </div>
                        </div>
                        <div class="row">
                            <div class="template-item col-lg-12 col-md-12 col-sm-12 col-12">
                                <img src="./assets/image/logo-variux.png" alt="logo">
                            </div>
                        </div>
                    </div>
                    <div class="template-item col-lg-4 col-md-6 col-sm-12 col-12">
                        <img src="./assets/image/logo-beehexa.png" alt="logo">
                    </div>
                    <div class="template-item col-lg-4 col-md-6 col-sm-12 col-12">
                        <img src="./assets/image/logo-variux.png" alt="logo">
                    </div>
                    <div class="template-item col-lg-4 col-md-6 col-sm-12 col-12">
                        <img src="./assets/image/logo-beehexa.png" alt="logo">
                    </div>
                    <div class="btn-right">
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
    `
};

export default slider;