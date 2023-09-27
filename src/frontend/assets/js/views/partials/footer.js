"use strict";

import render from "../../render.js";

const footer = () => {
    return render`
        <footer class='footer'>
            <div class='container'>
                <div class='footer-container'>
                    <div class='footer__left'>
                        <div class="footer__left-logo">
                            <img src="./assets/image/Variux+-+orange.png" alt="Logo Variux" />
                            <div class="footer__left-icon">
                                <a href="">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a href="">
                                    <i class="fa-brands fa-youtube"></i>
                                </a>
                               <a href="">
                                    <i class="fa-brands fa-facebook-f"></i>
                               </a>
                            </div>
                        </div>
                        <div class="footer__left-contact-info">
                            <p>⚲ 3600 Dallas Highway Suite 230–360, Marietta, GA 30064</p>
                            <p>☏ +1 678 667 2185</p>
                            <p>✉︎ sales@variux.com</p>
                        </div>
                    </div>

                    <div class='footer__right'>
                        <div class="footer__right-top">
                            <ul class="footer__list-item">
                                <li>OUR SERVICES</li>
                                <li>
                                    <a href="">eCommerce Development</a>
                                </li>
                                <li>
                                    <a href="">eCommerce Migrations</a>
                                </li>
                                <li>
                                    <a href="">eCommerce Integrations</a>
                                </li>
                                <li>
                                    <a href="">ERP Consulting</a>
                                </li>
                                <li>
                                    <a href="">Data Management</a>
                                </li>
                            </ul>
                            <ul class="footer__list-item">
                                <li>RESOURCES</li>
                                <li>
                                    <a href="">Blogs</a>
                                </li>
                                <li>
                                    <a href="">Guides and White papers</a>
                                </li>
                                <li>
                                    <a href="">Newsroom</a>
                                </li>
                            </ul>
                            <ul class="footer__list-item">
                                <li>ABOUT</li>
                                <li>
                                    <a href="">Our Company</a>
                                </li>
                                <li>
                                    <a href="">Contact us</a>
                                </li>
                                <li>
                                    <a href="">Careers</a>
                                </li>
                            </ul>
                            
                        </div>
                        <div class="footer__right-bottom">
                            <a href="">Copyrights © 2023 Variux Inc. All rights reserved.</a>
                            <a href="">Privacy Policy</a>
                            <a href="">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `
};

export default footer;

