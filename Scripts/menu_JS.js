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

/* Burgers by default */
//Turkey Burger
document.getElementById("TB_LargeBun").checked = true;
document.getElementById("TB_patty").checked = true;
document.getElementById("TB_TomatoS").checked = true;
document.getElementById("TB_pickles").checked = true;
document.getElementById("TB_LettuceS").checked = true;
document.getElementById("TB_onionD").checked = true;
document.getElementById("TB_mustard").checked = true;
//Salmon Burger
document.getElementById("SB_defaultBread").checked = true;
document.getElementById("SB_patty").checked = true;
document.getElementById("SB_TomatoS").checked = true;
document.getElementById("SB_pickles").checked = true;
document.getElementById("SB_LettuceS").checked = true;
document.getElementById("SB_onionD").checked = true;
document.getElementById("SB_mustard").checked = true;
//Impossible Burger
document.getElementById("IB_defaultBread").checked = true;
document.getElementById("IB_patty").checked = true;
document.getElementById("IB_TomatoS").checked = true;
document.getElementById("IB_pickles").checked = true;
document.getElementById("IB_LettuceS").checked = true;
document.getElementById("IB_onionD").checked = true;
document.getElementById("IB_mustard").checked = true;
//Grass Burger
document.getElementById("GB_defaultBread").checked = true;
document.getElementById("GB_patty").checked = true;
document.getElementById("GB_TomatoS").checked = true;
document.getElementById("GB_pickles").checked = true;
document.getElementById("GB_LettuceS").checked = true;
document.getElementById("GB_onionD").checked = true;
document.getElementById("GB_mustard").checked = true;
/* Chicken Selected By Default */
//Grilled Chicken Sandwich
document.getElementById("GrChS_defaultBread").checked = true;
document.getElementById("GrChS_patty").checked = true;
document.getElementById("GrChS_TomatoS").checked = true;
document.getElementById("GrChS_LeafLettuceS").checked = true;
document.getElementById("GrChS_notASauce").checked = true;
//Chicken Sandwich
document.getElementById("ChS_defaultBread").checked = true;
document.getElementById("ChS_patty").checked = true;
document.getElementById("ChS_TomatoS").checked = true;
document.getElementById("ChS_LeafLettuceS").checked = true;
document.getElementById("ChS_notASauce").checked = true;
//Chicken Tenders
document.getElementById("CT_Gravy").checked = true;
/* Sides */
document.getElementById("Fries_M").checked = true;
document.getElementById("OnRings_M").checked = true;
/* Breakfast */
//Sausage Biscuit and Bacon Biscuit
document.getElementById("SauBis_defaultSausage").checked = true;
document.getElementById("BacBis_defaultBacon").checked = true;
//Egg and Cheese Biscuit
document.getElementById("ECBis_AmCheese").checked = true;
//Biscuit Sandwich
document.getElementById("BisSando_defaultMeat").checked = true;
document.getElementById("BisSando_AmCheese").checked = true;
document.getElementById("BisSando_Egg").checked = true;
//Pancake Platter
document.getElementById("PP_defaultMeat").checked = true;
//Breakfast Platter
document.getElementById("BP_defaultMeat").checked = true;
document.getElementById("BP_Egg").checked = true;
/* Drinks and Shakes */
document.getElementById("Soda_M").checked = true;
document.getElementById("Coffee_M").checked = true;
document.getElementById("Tea_M").checked = true;
document.getElementById("Shakes_M").checked = true;

//button for secret button
function addClick() {
    // Burger King Foot Lettuce (BKFL) : (Bacon, Ketchup, Frisee, Lettuce)
    var addMenu = document.getElementById("secretButton");
    var B = document.getElementById("GB_Bacon");
    var K = document.getElementById("GB_KetchupS");
    var F = document.getElementById("GB_FriseeS");
    var L = document.getElementById("GB_LettuceS");
    // Jolibee Fried Towel (JBFT) : (Jalapenos, Bacon, Frisee, Tomatos)
    var J = document.getElementById("GB_Jalapenos");
    var T = document.getElementById("GB_TomatoS");

    var secret = document.getElementById("secret");

    addMenu.classList.toggle("active");
    if (B.checked == 1 && K.checked == 1 && F.checked == 1 && L.checked == 1) {
        console.log("Number 15");
        secret.textContent = "4.) RJET-H93B-R2NB-CG99";
    }
    else if (J.checked == 1 && B.checked == 1 && F.checked == 1 && T.checked == 1) {
        console.log("Delicious");
        secret.textContent = "4.) RJET-H93B-R2NB-CG99";
    }
    else { console.log("click"); }
}

function dudClick() {
    console.log("DUD Click")
}