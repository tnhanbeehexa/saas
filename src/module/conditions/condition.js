class condition {
    clickButton = (condition) => {
        if (condition.clickButton.enable === true) {
            const el = document.getElementById(condition.clickButton.NameID);
            el.addEventListener('click', () => {
                //Trigger
            }) 
        }
    }
    existClass = (condition) => {
        if (condition.existClass.enable === true) {
            return document.body.classList.contains(condition.existClass.className);
        }
    }
    existCookie = (condition) => {
        function getCookie(cname) {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            let len = ca.length;
            for (let i = 0; i < len; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0)
                    return c.substring(name.length, c.length);
            }
            return "";
        }
        function checkCookie() {
            let value = getCookie(condition.existCookie.cname);
            if (value != 1) {
                return false;
            }
            return true;
        }
        return checkCookie();
    }
}

export default condition;