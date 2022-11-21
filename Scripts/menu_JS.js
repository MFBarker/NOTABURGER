// JavaScript source code

//collapsible used for individual Menu Items

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

//Burger Select by default
document.getElementById("BdefaultBread").checked = true;
document.getElementById("Bpatty").checked = true;
document.getElementById("Btomato").checked = true;
document.getElementById("Bpickles").checked = true;
document.getElementById("L").checked = true;
document.getElementById("BonionD").checked = true;
document.getElementById("Bmustard").checked = true;
//Chicken Selected By Default


//button for secret button
function addClick() {
    // Number 15 - Burger King Foot Lettuce
    var addMenu = document.getElementById("AddButton");
    var B = document.getElementById("B");
    var K = document.getElementById("K");
    var F = document.getElementById("F");
    var L = document.getElementById("L");

    var secret = document.getElementById("secret");

    addMenu.addEventListener("click", function () {
        this.classList.toggle("active");
        if (B.checked == 1 && K.checked == 1 && F.checked == 1 && L.checked == 1) {
            console.log("number 15");
            secret.textContent = "Code Goes Here";
        }
        else { console.log("click"); }
    });
}