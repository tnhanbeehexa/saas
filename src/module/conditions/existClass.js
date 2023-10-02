'use strict';

const existClass = (config) => {
    if (config.condition.existClass.enable === true) {
        console.log(123);
        const checkClass = document.body.classList.contains(config.condition.existClass.className);
        console.log(checkClass);
        return checkClass;
    }
}

export default existClass;