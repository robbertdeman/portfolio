class MenuToggle {
    constructor() {
        this.menuToggle = document.getElementById("burger");
        this.menu = document.getElementById("menu");
        this.clicked = false;
        this.open = false;
    }
    init () {
        this.menuToggle.addEventListener("click", ()=> {
            this.clicked = true;
            console.log("geklikt");
        });
    }
    openAndClose() {
        if (!this.open) {
            this.menu.style.display = "block";
            this.open = true;
        }
        else if (this.open) {
            this.menu.style.display = "none";
            this.open = false;
        }
        this.clicked = false;
    }
}

module.exports = MenuToggle;