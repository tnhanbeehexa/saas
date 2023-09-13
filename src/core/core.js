import setPosition from '../modules/position.js';
import setOverlay from '../modules/overlay.js';

class Popup {
    constructor(slector, userconfig) {
        this.slector = slector;
        this.config = userconfig;
        const trigger = this.config.trigger;
        this.trigger = trigger;
        this.height
        this.registerables();
    }
    registerables = () => {
        const userCustomize = Object.keys(this.trigger ? this.trigger:'');
        const generalCustomize = Object.keys(this.config ? this.config:'');
        generalCustomize.forEach((callback) => {
            if (callback !== 'trigger')
                this.generalPopup()[callback]();
        })
        userCustomize.forEach((callback) => {
            this.triggerPopup()[callback]();
        })
    }
    generalPopup = () => {
        return {
            setPosition: () => setPosition(this.config.setPosition.x, this.config.setPosition.y, this.slector),
            setOverlay: () => {setOverlay},
            setColor: () => {
                document.querySelector(this.slector).style.color = this.config.setColor;
            },
            isDisable: () => {
                if (this.config.disable == false)
                    document.querySelector(this.slector).classList.add("hint");
            },
            setBackground: () => {
                const elementPopup = document.querySelector(this.slector);
                elementPopup.style.color = this.config.color;
            }
        }
    }
    triggerPopup = () => {
        return {
            clickShowPopup: () => {
                document.querySelector(this.trigger.clickShowPopup.popupBtn).onclick = () => {
                    document.querySelector(this.slector).style.display = 'block';
                    setOverlay(this.config.setOverlay.enable);
                    this.triggerPopup
                }
            },
            showAfter: () => {
                if (this.trigger.showAfter.enable === true) {
                    window.onload = () => {
                        setTimeout(() => {
                            document.querySelector(this.slector).style.display = 'block';
                            setOverlay(this.config.setOverlay.enable);
                        }, this.trigger.showAfter.times);
                    }
                }
            },
            scrollPage: () => {
                let height = this.trigger.scrollPage.height;
                let el =  this.slector;
                if (this.trigger.scrollPage.enable === true) {
                    window.onscroll = () => {
                        activeScollPage();
                    }
                    function activeScollPage() {
                        if (window.scrollY > height) {
                            document.querySelector(el).style.display = 'block';
                            setOverlay(this.config.setOverlay.enable);
                        }
                    }
                }
            },
            closeAfter: () => {
                if (this.trigger.closeAfter.enable === true) {
                    setTimeout(() => {
                        document.querySelector(this.slector).style.display = 'none';
                        setOverlay(false);
                    }, this.trigger.closeAfter.times)
                }
            }
        }
    }
    
    optionsPopup = () => {
        
    }
};

export default Popup;