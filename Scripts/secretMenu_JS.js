//Secret Menu Items 
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

// Secret Menu Customization Code
/* ORPHAN BURGER */
//defaults
document.getElementById("OB_defaultBread").checked = true;
document.getElementById("OB_patty").checked = true;
document.getElementById("OB_TomatoS").checked = true;
document.getElementById("OB_pickles").checked = true;
document.getElementById("OB_LettuceS").checked = true;
document.getElementById("OB_onionD").checked = true;
document.getElementById("OB_mustard").checked = true;
//add-ons
if (document.getElementById("OB_AmCheese").checked != true) {
    document.getElementById("OB_AMquantity").value = "";
    document.getElementById("OB_AMquantity").disabled = true;
}
if (document.getElementById("OB_MnJkCheese").checked != true) {
    document.getElementById("OB_MJquantity").value = "";
    document.getElementById("OB_MJquantity").disabled = true;
}
if (document.getElementById("OB_Bacon").checked != true) {
    document.getElementById("OB_BCNquantity").value = "";
    document.getElementById("OB_BCNquantity").disabled = true;
}
if (document.getElementById("OB_Jalapeno").checked != true) {
    document.getElementById("OB_JPNquantity").value = "";
    document.getElementById("OB_JPNquantity").disabled = true;
}
if (document.getElementById("OB_GrJalapenos").checked != true) {
    document.getElementById("OB_GrJPNquantity").value = "";
    document.getElementById("OB_GrJPNquantity").disabled = true;
}
if (document.getElementById("OB_Avocado").checked != true) {
    document.getElementById("OB_AVquantity").value = "";
    document.getElementById("OB_AVquantity").disabled = true;
}
if (document.getElementById("OB_Chiles").checked != true) {
    document.getElementById("OB_GCquantity").value = "";
    document.getElementById("OB_GCquantity").disabled = true;
}
//toppings
if (document.getElementById("OB_TomatoS").checked != true) {
    document.getElementById("OB_Tomato").value = "";
    document.getElementById("OB_Tomato").disabled = true;
} else if (document.getElementById("OB_TomatoS").checked == true) { document.getElementById("OB_Tomato").value = "Regular"; }
if (document.getElementById("OB_LettuceS").checked != true) {
    document.getElementById("OB_Lettuce").value = "";
    document.getElementById("OB_Lettuce").disabled = true;
} else if (document.getElementById("OB_LettuceS").checked == true) { document.getElementById("OB_Lettuce").value = "Regular"; }
if (document.getElementById("OB_pickles").checked != true) {
    document.getElementById("OB_Pickles").value = "";
    document.getElementById("OB_Pickles").disabled = true;
} else if (document.getElementById("OB_pickles").checked == true) { document.getElementById("OB_Pickles").value = "Regular"; }
if (document.getElementById("OB_onionD").checked != true) {
    document.getElementById("OB_DiOnion").value = "";
    document.getElementById("OB_DiOnion").disabled = true;
} else if (document.getElementById("OB_onionD").checked == true) { document.getElementById("OB_DiOnion").value = "Regular"; }
if (document.getElementById("OB_GrOnionS").checked != true) {
    document.getElementById("OB_GrOnion").value = "";
    document.getElementById("OB_GrOnion").disabled = true;
} else if (document.getElementById("OB_GrOnion").checked == true) { document.getElementById("OB_GrOnion").value = "Regular"; }
if (document.getElementById("OB_FriseeS").checked != true) {
    document.getElementById("OB_Frisee").value = "";
    document.getElementById("OB_Frisee").disabled = true;
} else if (document.getElementById("OB_FriseeS").checked == true) { document.getElementById("OB_Frisee").value = "Regular"; }
//sauces
if (document.getElementById("OB_mustard").checked != true) {
    document.getElementById("OB_Mustard").value = "";
    document.getElementById("OB_Mustard").disabled = true;
} else if (document.getElementById("OB_mustard").checked == true) { document.getElementById("OB_Mustard").value = "Regular"; }
if (document.getElementById("OB_Mayonnaise").checked != true) {
    document.getElementById("OB_Mayo").value = "";
    document.getElementById("OB_Mayo").disabled = true;
} else if (document.getElementById("OB_Mayonnaise").checked == true) { document.getElementById("OB_Mayo").value = "Regular"; }
if (document.getElementById("OB_KetchupS").checked != true) {
    document.getElementById("OB_Ketchup").value = "";
    document.getElementById("OB_Ketchup").disabled = true;
} else if (document.getElementById("OB_KetchupS").checked == true) { document.getElementById("OB_Ketchup").value = "Regular"; }
if (document.getElementById("OB_HoneyBBQ").checked != true) {
    document.getElementById("OB_BBQ").value = "";
    document.getElementById("OB_BBQ").disabled = true;
} else if (document.getElementById("OB_HoneyBBQ").checked == true) { document.getElementById("OB_BBQ").value = "Regular"; }
function check_OB_AddOns() {
    /* SELECT */
    if (document.getElementById("OB_AmCheese").checked == true) {
        document.getElementById("OB_AMquantity").value = "1";
        document.getElementById("OB_AMquantity").disabled = false;
    }
    if (document.getElementById("OB_MnJkCheese").checked == true) {
        document.getElementById("OB_MJquantity").value = "1";
        document.getElementById("OB_MJquantity").disabled = false;
    }
    if (document.getElementById("OB_Bacon").checked == true) {
        document.getElementById("OB_BCNquantity").value = "1";
        document.getElementById("OB_BCNquantity").disabled = false;
    }
    if (document.getElementById("OB_Jalapeno").checked == true) {
        document.getElementById("OB_JPNquantity").value = "1";
        document.getElementById("OB_JPNquantity").disabled = false;
    }
    if (document.getElementById("OB_GrJalapenos").checked == true) {
        document.getElementById("OB_GrJPNquantity").value = "1";
        document.getElementById("OB_GrJPNquantity").disabled = false;
    }
    if (document.getElementById("OB_Avocado").checked == true) {
        document.getElementById("OB_AVquantity").value = "1";
        document.getElementById("OB_AVquantity").disabled = false;
    }
    if (document.getElementById("OB_Chiles").checked == true) {
        document.getElementById("OB_GCquantity").value = "1";
        document.getElementById("OB_GCquantity").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("OB_AmCheese").checked != true) {
        document.getElementById("OB_AMquantity").value = "";
        document.getElementById("OB_AMquantity").disabled = true;
    }
    if (document.getElementById("OB_MnJkCheese").checked != true) {
        document.getElementById("OB_MJquantity").value = "";
        document.getElementById("OB_MJquantity").disabled = true;
    }
    if (document.getElementById("OB_Bacon").checked != true) {
        document.getElementById("OB_BCNquantity").value = "";
        document.getElementById("OB_BCNquantity").disabled = true;
    }
    if (document.getElementById("OB_Jalapeno").checked != true) {
        document.getElementById("OB_JPNquantity").value = "";
        document.getElementById("OB_JPNquantity").disabled = true;
    }
    if (document.getElementById("OB_GrJalapenos").checked != true) {
        document.getElementById("OB_GrJPNquantity").value = "";
        document.getElementById("OB_GrJPNquantity").disabled = true;
    }
    if (document.getElementById("OB_Avocado").checked != true) {
        document.getElementById("OB_AVquantity").value = "";
        document.getElementById("OB_AVquantity").disabled = true;
    }
    if (document.getElementById("OB_Chiles").checked != true) {
        document.getElementById("OB_GCquantity").value = "";
        document.getElementById("OB_GCquantity").disabled = true;
    }
}
function check_OB_Toppings() {
    /* SELECT */
    if (document.getElementById("OB_TomatoS").checked == true) {
        document.getElementById("OB_Tomato").value = "Regular";
        document.getElementById("OB_Tomato").disabled = false;
    }
    if (document.getElementById("OB_LettuceS").checked == true) {
        document.getElementById("OB_Lettuce").value = "Regular";
        document.getElementById("OB_Lettuce").disabled = false;
    }
    if (document.getElementById("Bpickles").checked == true) {
        document.getElementById("OB_Pickles").value = "Regular";
        document.getElementById("OB_Pickles").disabled = false;
    }
    if (document.getElementById("BonionD").checked == true) {
        document.getElementById("OB_DiOnion").value = "Regular";
        document.getElementById("OB_DiOnion").disabled = false;
    }
    if (document.getElementById("BGrOnion").checked == true) {
        document.getElementById("OB_GrOnion").value = "Regular";
        document.getElementById("OB_GrOnion").disabled = false;
    }
    if (document.getElementById("OB_FriseeS").checked == true) {
        document.getElementById("OB_Frisee").value = "Regular";
        document.getElementById("OB_Frisee").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("OB_TomatoS").checked != true) {
        document.getElementById("OB_Tomato").option = "";
        document.getElementById("OB_Tomato").disabled = true;
    }
    if (document.getElementById("OB_LettuceS").checked != true) {
        document.getElementById("OB_Lettuce").value = "";
        document.getElementById("OB_Lettuce").disabled = true;
    }
    if (document.getElementById("Bpickles").checked != true) {
        document.getElementById("OB_Pickles").value = "";
        document.getElementById("OB_Pickles").disabled = true;
    }
    if (document.getElementById("BonionD").checked != true) {
        document.getElementById("OB_DiOnion").value = "";
        document.getElementById("OB_DiOnion").disabled = true;
    }
    if (document.getElementById("BGrOnion").checked != true) {
        document.getElementById("OB_GrOnion").value = "";
        document.getElementById("OB_GrOnion").disabled = true;
    }
    if (document.getElementById("OB_FriseeS").checked != true) {
        document.getElementById("OB_Frisee").value = "";
        document.getElementById("OB_Frisee").disabled = true;
    }
}
function check_OB_Sauce() {
    /* SELECT */
    if (document.getElementById("OB_mustard").checked == true) {
        document.getElementById("OB_Mustard").value = "Regular";
        document.getElementById("OB_Mustard").disabled = false;
    }
    if (document.getElementById("OB_Mayonnaise").checked == true) {
        document.getElementById("OB_Mayo").value = "Regular";
        document.getElementById("OB_Mayo").disabled = false;
    }
    if (document.getElementById("OB_KetchupS").checked == true) {
        document.getElementById("OB_Ketchup").value = "Regular";
        document.getElementById("OB_Ketchup").disabled = false;
    }
    if (document.getElementById("OB_HoneyBBQ").checked == true) {
        document.getElementById("OB_BBQ").value = "Regular";
        document.getElementById("OB_BBQ").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("OB_mustard").checked != true) {
        document.getElementById("OB_Mustard").option = "";
        document.getElementById("OB_Mustard").disabled = true;
    }
    if (document.getElementById("OB_Mayonnaise").checked != true) {
        document.getElementById("OB_Mayo").value = "";
        document.getElementById("OB_Mayo").disabled = true;
    }
    if (document.getElementById("OB_KetchupS").checked != true) {
        document.getElementById("OB_Ketchup").value = "";
        document.getElementById("OB_Ketchup").disabled = true;
    }
    if (document.getElementById("OB_HoneyBBQ").checked != true) {
        document.getElementById("OB_BBQ").value = "";
        document.getElementById("OB_BBQ").disabled = true;
    }
}

/* BBQ RIBS SANDWICH */
//Defaults
document.getElementById("BBQSando_defaultBread").checked = true;
document.getElementById("BBQSando_patty").checked = true;
document.getElementById("BBQSando_pickles").checked = true;
document.getElementById("BBQSando_onionD").checked = true;
document.getElementById("BBQSando_HoneyBBQ").checked = true;
//add-ons
if (document.getElementById("BBQSando_Bacon").checked != true) {
    document.getElementById("BBQSando_BCNquantity").value = "";
    document.getElementById("BBQSando_BCNquantity").disabled = true;
}
if (document.getElementById("BBQSando_Jalapeno").checked != true) {
    document.getElementById("BBQSando_JPNquantity").value = "";
    document.getElementById("BBQSando_JPNquantity").disabled = true;
}
if (document.getElementById("BBQSando_GrJalapenos").checked != true) {
    document.getElementById("BBQSando_GrJPNquantity").value = "";
    document.getElementById("BBQSando_GrJPNquantity").disabled = true;
}
if (document.getElementById("BBQSando_Avocado").checked != true) {
    document.getElementById("BBQSando_AVquantity").value = "";
    document.getElementById("BBQSando_AVquantity").disabled = true;
}
if (document.getElementById("BBQSando_Chiles").checked != true) {
    document.getElementById("BBQSando_GCquantity").value = "";
    document.getElementById("BBQSando_GCquantity").disabled = true;
}
//toppings
if (document.getElementById("BBQSando_TomatoS").checked != true) {
    document.getElementById("BBQSando_Tomato").value = "";
    document.getElementById("BBQSando_Tomato").disabled = true;
} else if (document.getElementById("BBQSando_TomatoS").checked == true) { document.getElementById("BBQSando_Tomato").value = "Regular"; }
if (document.getElementById("BBQSando_LettuceS").checked != true) {
    document.getElementById("BBQSando_Lettuce").value = "";
    document.getElementById("BBQSando_Lettuce").disabled = true;
} else if (document.getElementById("BBQSando_LettuceS").checked == true) { document.getElementById("BBQSando_Lettuce").value = "Regular"; }
if (document.getElementById("BBQSando_pickles").checked != true) {
    document.getElementById("BBQSando_Pickles").value = "";
    document.getElementById("BBQSando_Pickles").disabled = true;
} else if (document.getElementById("BBQSando_pickles").checked == true) { document.getElementById("BBQSando_Pickles").value = "Regular"; }
if (document.getElementById("BBQSando_onionD").checked != true) {
    document.getElementById("BBQSando_DiOnion").value = "";
    document.getElementById("BBQSando_DiOnion").disabled = true;
} else if (document.getElementById("BBQSando_onionD").checked == true) { document.getElementById("BBQSando_DiOnion").value = "Regular"; }
if (document.getElementById("BBQSando_GrOnionS").checked != true) {
    document.getElementById("BBQSando_GrOnion").value = "";
    document.getElementById("BBQSando_GrOnion").disabled = true;
} else if (document.getElementById("BBQSando_GrOnion").checked == true) { document.getElementById("BBQSando_GrOnion").value = "Regular"; }
if (document.getElementById("BBQSando_FriseeS").checked != true) {
    document.getElementById("BBQSando_Frisee").value = "";
    document.getElementById("BBQSando_Frisee").disabled = true;
} else if (document.getElementById("BBQSando_FriseeS").checked == true) { document.getElementById("BBQSando_Frisee").value = "Regular"; }
//sauces
if (document.getElementById("BBQSando_mustard").checked != true) {
    document.getElementById("BBQSando_Mustard").value = "";
    document.getElementById("BBQSando_Mustard").disabled = true;
} else if (document.getElementById("BBQSando_mustard").checked == true) { document.getElementById("BBQSando_Mustard").value = "Regular"; }
if (document.getElementById("BBQSando_Mayonnaise").checked != true) {
    document.getElementById("BBQSando_Mayo").value = "";
    document.getElementById("BBQSando_Mayo").disabled = true;
} else if (document.getElementById("BBQSando_Mayonnaise").checked == true) { document.getElementById("BBQSando_Mayo").value = "Regular"; }
if (document.getElementById("BBQSando_KetchupS").checked != true) {
    document.getElementById("BBQSando_Ketchup").value = "";
    document.getElementById("BBQSando_Ketchup").disabled = true;
} else if (document.getElementById("BBQSando_KetchupS").checked == true) { document.getElementById("BBQSando_Ketchup").value = "Regular"; }
if (document.getElementById("BBQSando_HoneyBBQ").checked != true) {
    document.getElementById("BBQSando_BBQ").value = "";
    document.getElementById("BBQSando_BBQ").disabled = true;
} else if (document.getElementById("BBQSando_HoneyBBQ").checked == true) { document.getElementById("BBQSando_BBQ").value = "Regular"; }
function check_BBQSando_AddOns() {
    /* SELECT */
    if (document.getElementById("BBQSando_Bacon").checked == true) {
        document.getElementById("BBQSando_BCNquantity").value = "1";
        document.getElementById("BBQSando_BCNquantity").disabled = false;
    }
    if (document.getElementById("BBQSando_Jalapeno").checked == true) {
        document.getElementById("BBQSando_JPNquantity").value = "1";
        document.getElementById("BBQSando_JPNquantity").disabled = false;
    }
    if (document.getElementById("BBQSando_GrJalapenos").checked == true) {
        document.getElementById("BBQSando_GrJPNquantity").value = "1";
        document.getElementById("BBQSando_GrJPNquantity").disabled = false;
    }
    if (document.getElementById("BBQSando_Avocado").checked == true) {
        document.getElementById("BBQSando_AVquantity").value = "1";
        document.getElementById("BBQSando_AVquantity").disabled = false;
    }
    if (document.getElementById("BBQSando_Chiles").checked == true) {
        document.getElementById("BBQSando_GCquantity").value = "1";
        document.getElementById("BBQSando_GCquantity").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("BBQSando_Bacon").checked != true) {
        document.getElementById("BBQSando_BCNquantity").value = "";
        document.getElementById("BBQSando_BCNquantity").disabled = true;
    }
    if (document.getElementById("BBQSando_Jalapeno").checked != true) {
        document.getElementById("BBQSando_JPNquantity").value = "";
        document.getElementById("BBQSando_JPNquantity").disabled = true;
    }
    if (document.getElementById("BBQSando_GrJalapenos").checked != true) {
        document.getElementById("BBQSando_GrJPNquantity").value = "";
        document.getElementById("BBQSando_GrJPNquantity").disabled = true;
    }
    if (document.getElementById("BBQSando_Avocado").checked != true) {
        document.getElementById("BBQSando_AVquantity").value = "";
        document.getElementById("BBQSando_AVquantity").disabled = true;
    }
    if (document.getElementById("BBQSando_Chiles").checked != true) {
        document.getElementById("BBQSando_GCquantity").value = "";
        document.getElementById("BBQSando_GCquantity").disabled = true;
    }
}
function check_BBQSando_Toppings() {
    /* SELECT */
    if (document.getElementById("BBQSando_TomatoS").checked == true) {
        document.getElementById("BBQSando_Tomato").value = "Regular";
        document.getElementById("BBQSando_Tomato").disabled = false;
    }
    if (document.getElementById("BBQSando_LettuceS").checked == true) {
        document.getElementById("BBQSando_Lettuce").value = "Regular";
        document.getElementById("BBQSando_Lettuce").disabled = false;
    }
    if (document.getElementById("Bpickles").checked == true) {
        document.getElementById("BBQSando_Pickles").value = "Regular";
        document.getElementById("BBQSando_Pickles").disabled = false;
    }
    if (document.getElementById("BonionD").checked == true) {
        document.getElementById("BBQSando_DiOnion").value = "Regular";
        document.getElementById("BBQSando_DiOnion").disabled = false;
    }
    if (document.getElementById("BGrOnion").checked == true) {
        document.getElementById("BBQSando_GrOnion").value = "Regular";
        document.getElementById("BBQSando_GrOnion").disabled = false;
    }
    if (document.getElementById("BBQSando_FriseeS").checked == true) {
        document.getElementById("BBQSando_Frisee").value = "Regular";
        document.getElementById("BBQSando_Frisee").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("BBQSando_TomatoS").checked != true) {
        document.getElementById("BBQSando_Tomato").option = "";
        document.getElementById("BBQSando_Tomato").disabled = true;
    }
    if (document.getElementById("BBQSando_LettuceS").checked != true) {
        document.getElementById("BBQSando_Lettuce").value = "";
        document.getElementById("BBQSando_Lettuce").disabled = true;
    }
    if (document.getElementById("Bpickles").checked != true) {
        document.getElementById("BBQSando_Pickles").value = "";
        document.getElementById("BBQSando_Pickles").disabled = true;
    }
    if (document.getElementById("BonionD").checked != true) {
        document.getElementById("BBQSando_DiOnion").value = "";
        document.getElementById("BBQSando_DiOnion").disabled = true;
    }
    if (document.getElementById("BGrOnion").checked != true) {
        document.getElementById("BBQSando_GrOnion").value = "";
        document.getElementById("BBQSando_GrOnion").disabled = true;
    }
    if (document.getElementById("BBQSando_FriseeS").checked != true) {
        document.getElementById("BBQSando_Frisee").value = "";
        document.getElementById("BBQSando_Frisee").disabled = true;
    }
}
function check_BBQSando_Sauce() {
    /* SELECT */
    if (document.getElementById("BBQSando_mustard").checked == true) {
        document.getElementById("BBQSando_Mustard").value = "Regular";
        document.getElementById("BBQSando_Mustard").disabled = false;
    }
    if (document.getElementById("BBQSando_Mayonnaise").checked == true) {
        document.getElementById("BBQSando_Mayo").value = "Regular";
        document.getElementById("BBQSando_Mayo").disabled = false;
    }
    if (document.getElementById("BBQSando_KetchupS").checked == true) {
        document.getElementById("BBQSando_Ketchup").value = "Regular";
        document.getElementById("BBQSando_Ketchup").disabled = false;
    }
    if (document.getElementById("BBQSando_HoneyBBQ").checked == true) {
        document.getElementById("BBQSando_BBQ").value = "Regular";
        document.getElementById("BBQSando_BBQ").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("BBQSando_mustard").checked != true) {
        document.getElementById("BBQSando_Mustard").option = "";
        document.getElementById("BBQSando_Mustard").disabled = true;
    }
    if (document.getElementById("BBQSando_Mayonnaise").checked != true) {
        document.getElementById("BBQSando_Mayo").value = "";
        document.getElementById("BBQSando_Mayo").disabled = true;
    }
    if (document.getElementById("BBQSando_KetchupS").checked != true) {
        document.getElementById("BBQSando_Ketchup").value = "";
        document.getElementById("BBQSando_Ketchup").disabled = true;
    }
    if (document.getElementById("BBQSando_HoneyBBQ").checked != true) {
        document.getElementById("BBQSando_BBQ").value = "";
        document.getElementById("BBQSando_BBQ").disabled = true;
    }
}


//secret burger image
function burger() {
    document.getElementById("secretBurger").src = "Resources/Menu Pictures/TongueBurger.png";
    document.getElementById("secretText").textContent = "You have been visited by the Tongue Burger.";
}