function setOverlay (config) {
    if (config.design.setOverlay.enable === true) {
        const el = document.querySelector(config.design.setOverlay.className);
        if(el.classList.contains('hint') == false) {
            let overlay = document.createElement('div');
            overlay.style.backgroundColor = config.design.setOverlay.backgroundColor;
            overlay.style.opacity = config.design.setOverlay.opacity;
            overlay.classList.add('overlay');
            document.querySelector('body').appendChild(overlay);
        } 
        else {
            let overlay = document.querySelector('.overlay');
            overlay ? document.querySelector('body').removeChild(overlay) : "";
        }
    }
}

export default setOverlay;