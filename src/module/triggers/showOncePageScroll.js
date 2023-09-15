function showOncePageScroll (config, selector) {
    console.log("Ko chay")
    if (config.trigger.scrollPage.enable === true) {
        window.onscroll = () => {
            console.log(window.scrollY);
            activeScollPage();
        }
        function activeScollPage() {
            if (window.scrollY > config.trigger.scrollPage.height) {
                document.querySelector(selector).classList.remove('hint');
            }
        }
    }
}

export default showOncePageScroll;