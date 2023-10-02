const clickButton = (config) => {
    if (config.condition.clickButton.enable === true) {
        const el = document.getElementById(config.condition.clickButton.NameID);
        el.addEventListener('click', () => {
            //Trigger
            console.log(123);
        }) 
    }
};

export default clickButton;