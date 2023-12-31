'use strict';

const showOncePageScroll = (config) => {
    if (config.trigger.scrollPage.enable === true) {
        console.log(config);
        console.log(config.selector);
        window.onscroll = () => {
            console.log(window.scrollY);
            activeScollPage();
        }

        function activeScollPage() {
            if (window.scrollY > config.trigger.scrollPage.height) {
                document.querySelector(config.selector).style.display = 'block';
            }
        }
    }
}

export default showOncePageScroll;