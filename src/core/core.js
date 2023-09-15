import imports from './imports.js';

class Popup {
    constructor(selector, userconfig) {
        this.selector = selector;
        this.config = userconfig;
        const trigger = this.config.trigger;
        this.trigger = trigger;
        const condition = this.config.condition;
        this.condition = condition;
        this.height = this.config.height;
        this.width = this.config.width;
        this.registerables();
    }
    registerables = () => {
        const conPopup = Object.keys(this.condition ? this.condition:'');
        const designPopup = Object.keys(this.config.design ? this.config.design:'');
        const triggerPopup = Object.keys(this.config.trigger ? this.config.trigger:'');
        // const generalCustomize = Object.keys(this.config ? this.config:'');
        // generalCustomize.forEach((callback) => {
        //     if (callback !== 'condition') 
        //         this.generalPopup()[callback]();
        // })
        conPopup.forEach((callback) => {
            this.conditionPopup()[callback]();
        })
        designPopup.forEach((callback) => {
            this.designPopup()[callback]();
        })
        triggerPopup.forEach((callback) => {
            this.triggerPopup()[callback]();
        })
    }
    // generalPopup = () => {
    //     return {
    //         isDisable: () => {
    //             if (this.config.disable == false)
    //                 document.querySelector(this.slector).classList.add("hint");
    //         },
    //         setBackground: () => {
    //             console.log("setBackground Activate");
    //             const elementPopup = document.querySelector(this.slector);
    //             elementPopup.style.color = this.config.color;
    //         }
    //     }
    // }
    conditionPopup = () => {
        return {
            clickButton: () => {
                imports.clickButton(this.condition);
            },
            existClass: () => {
                imports.existClass(this.condition);
            },
            existCookie: () => {
                imports.existCookie(this.condition);
            }
        }
    }
    designPopup = () => {
        return {
            setOverlay: () => {
                imports.setOverlay(this.config);
            },
            setPosition: () => {
                imports.setPosition(this.config);
            }
        }
    }
    triggerPopup = () => {
        return {
            scrollPage: () => {
                imports.showOncePageScroll(this.config, this.selector);
            }
        }
    }
};

export default Popup;