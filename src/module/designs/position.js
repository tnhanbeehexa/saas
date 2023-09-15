function setPosition (config) {
    if (config.design.setPosition.enable === true) {
        const elementForm = document.querySelector(config.design.setPosition.className);
        elementForm.classList.add(config.design.setPosition.x);
        elementForm.classList.add(config.design.setPosition.y);

        let root = document.documentElement;
        root.style.setProperty('--x', config.width + "px");
        root.style.setProperty('--y', config.height + "px");

        // elementForm.classList.remove('hint');
    }
}

export default setPosition;