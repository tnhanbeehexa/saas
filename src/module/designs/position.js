function setPosition (design) {
    console.log(design);
    if (design.setPosition.enable === true) {
        const elementForm = document.querySelector(design.setPosition.className);
        elementForm.classList.add(design.setPosition.x);
        elementForm.classList.add(design.setPosition.y);
    }
}

export default setPosition;