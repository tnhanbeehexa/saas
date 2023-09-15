const existClass = (condition) => {
    if (condition.existClass.enable === true) {
        const checkClass = document.body.classList.contains(condition.existClass.className);
        return checkClass;
    }
}

export default existClass;