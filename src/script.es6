//requires module
const MenuToggle = require("./MenuToggle.es6");

class Controller {
    constructor() {
        this.menu = new MenuToggle();

        this.menu.init();
    }
    loop() {

        if(this.menu.clicked) {
            this.menu.openAndClose();
        }

        // regelt de timing
        window.requestAnimationFrame(() => {
            this.loop();
        });

    }
}

document.addEventListener("DOMContentLoaded", ()=> {
    const control = new Controller();
    control.loop();
});