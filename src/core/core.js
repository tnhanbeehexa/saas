class Popup {
    constructor(slector, config) {
        this.slector = slector;
        this.config = config;
    }
    setBackground = () => {
        const elementPopup = document.querySelector(this.slector);
        elementPopup.style.color = this.config.color;
    }
    clickShowPopup = () => {
        document.querySelector(this.config.popupBtn).onclick=() => {
            document.querySelector(this.slector).style.display = 'block';
        }
    }
    showAfter = () => {
        window.onload =() => {
            setTimeout(() => {
                document.querySelector(this.slector).style.display = 'block';
            }, this.config.showPopupAfter)
        }
    }
    closeAfter = () => {
        if(this.config.closePopupAfter) {
            setTimeout(() => {
                document.querySelector(this.slector).style.display = 'none';
            }, this.config.closePopupAfter+this.config.showPopupAfter)
        }
    }
};

export default Popup;