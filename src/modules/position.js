function setPosition(x="left", y="top", slector) {
    document.querySelector(slector).classList.add(x);
    document.querySelector(slector).classList.add(y);
}

export default setPosition;