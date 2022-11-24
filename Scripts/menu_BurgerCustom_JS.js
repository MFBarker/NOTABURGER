/* TURKEY BURGER  */
//add-ons
if (document.getElementById("TB_AmCheese").checked != true) {
    document.getElementById("TB_AMquantity").value = "";
    document.getElementById("TB_AMquantity").disabled = true;
}
if (document.getElementById("TB_MnJkCheese").checked != true) {
    document.getElementById("TB_MJquantity").value = "";
    document.getElementById("TB_MJquantity").disabled = true;
}
if (document.getElementById("B").checked != true) {
    document.getElementById("TB_BCNquantity").value = "";
    document.getElementById("TB_BCNquantity").disabled = true;
}
if (document.getElementById("J").checked != true) {
    document.getElementById("TB_JPNquantity").value = "";
    document.getElementById("TB_JPNquantity").disabled = true;
}
if (document.getElementById("TB_GrJalapenos").checked != true) {
    document.getElementById("TB_GrJPNquantity").value = "";
    document.getElementById("TB_GrJPNquantity").disabled = true;
}
if (document.getElementById("TB_Avocado").checked != true) {
    document.getElementById("TB_AVquantity").value = "";
    document.getElementById("TB_AVquantity").disabled = true;
}
if (document.getElementById("TB_Chiles").checked != true) {
    document.getElementById("TB_GCquantity").value = "";
    document.getElementById("TB_GCquantity").disabled = true;
}
//toppings
if (document.getElementById("T").checked != true) {
    document.getElementById("TB_Tomato").value = "";
    document.getElementById("TB_Tomato").disabled = true;
} else if (document.getElementById("T").checked == true) { document.getElementById("TB_Tomato").value = "Regular"; }
if (document.getElementById("L").checked != true) {
    document.getElementById("TB_Lettuce").value = "";
    document.getElementById("TB_Lettuce").disabled = true;
} else if (document.getElementById("L").checked == true) { document.getElementById("TB_Lettuce").value = "Regular"; }
if (document.getElementById("Bpickles").checked != true) {
    document.getElementById("TB_Pickles").value = "";
    document.getElementById("TB_Pickles").disabled = true;
} else if (document.getElementById("Bpickles").checked == true) { document.getElementById("TB_Pickles").value = "Regular"; }
if (document.getElementById("Bpickles").checked != true) {
    document.getElementById("TB_Pickles").value = "";
    document.getElementById("TB_Pickles").disabled = true;
} else if (document.getElementById("Bpickles").checked == true) { document.getElementById("TB_Pickles").value = "Regular"; }
if (document.getElementById("BonionD").checked != true) {
    document.getElementById("TB_DiOnion").value = "";
    document.getElementById("TB_DiOnion").disabled = true;
} else if (document.getElementById("BonionD").checked == true) { document.getElementById("TB_DiOnion").value = "Regular"; }
if (document.getElementById("BGrOnion").checked != true) {
    document.getElementById("TB_GrOnion").value = "";
    document.getElementById("TB_GrOnion").disabled = true;
} else if (document.getElementById("BGrOnion").checked == true) { document.getElementById("TB_GrOnion").value = "Regular"; }
if (document.getElementById("F").checked != true) {
    document.getElementById("TB_Frisee").value = "";
    document.getElementById("TB_Frisee").disabled = true;
} else if (document.getElementById("F").checked == true) { document.getElementById("TB_Frisee").value = "Regular"; }
//sauces
if (document.getElementById("TB_mustard").checked != true) {
    document.getElementById("TB_Mustard").value = "";
    document.getElementById("TB_Mustard").disabled = true;
} else if (document.getElementById("TB_mustard").checked == true) { document.getElementById("TB_Mustard").value = "Regular"; }
if (document.getElementById("TB_Mayonnaise").checked != true) {
    document.getElementById("TB_Mayo").value = "";
    document.getElementById("TB_Mayo").disabled = true;
} else if (document.getElementById("TB_Mayonnaise").checked == true) { document.getElementById("TB_Mayo").value = "Regular"; }
if (document.getElementById("K").checked != true) {
    document.getElementById("TB_Ketchup").value = "";
    document.getElementById("TB_Ketchup").disabled = true;
} else if (document.getElementById("K").checked == true) { document.getElementById("TB_Ketchup").value = "Regular"; }
if (document.getElementById("TB_HoneyBBQ").checked != true) {
    document.getElementById("TB_BBQ").value = "";
    document.getElementById("TB_BBQ").disabled = true;
} else if (document.getElementById("TB_HoneyBBQ").checked == true) { document.getElementById("TB_BBQ").value = "Regular"; }
function check_TB_AddOns() {
    /* SELECT */
    if (document.getElementById("TB_AmCheese").checked == true) {
        document.getElementById("TB_AMquantity").value = "1";
        document.getElementById("TB_AMquantity").disabled = false;
    }
    if (document.getElementById("TB_MnJkCheese").checked == true) {
        document.getElementById("TB_MJquantity").value = "1";
        document.getElementById("TB_MJquantity").disabled = false;
    }
    if (document.getElementById("B").checked == true) {
        document.getElementById("TB_BCNquantity").value = "1";
        document.getElementById("TB_BCNquantity").disabled = false;
    }
    if (document.getElementById("J").checked == true) {
        document.getElementById("TB_JPNquantity").value = "1";
        document.getElementById("TB_JPNquantity").disabled = false;
    }
    if (document.getElementById("TB_GrJalapenos").checked == true) {
        document.getElementById("TB_GrJPNquantity").value = "1";
        document.getElementById("TB_GrJPNquantity").disabled = false;
    }
    if (document.getElementById("TB_Avocado").checked == true) {
        document.getElementById("TB_AVquantity").value = "1";
        document.getElementById("TB_AVquantity").disabled = false;
    }
    if (document.getElementById("TB_Chiles").checked == true) {
        document.getElementById("TB_GCquantity").value = "1";
        document.getElementById("TB_GCquantity").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("TB_AmCheese").checked != true) {
        document.getElementById("TB_AMquantity").value = "";
        document.getElementById("TB_AMquantity").disabled = true;
    }
    if (document.getElementById("TB_MnJkCheese").checked != true) {
        document.getElementById("TB_MJquantity").value = "";
        document.getElementById("TB_MJquantity").disabled = true;
    }
    if (document.getElementById("B").checked != true) {
        document.getElementById("TB_BCNquantity").value = "";
        document.getElementById("TB_BCNquantity").disabled = true;
    }
    if (document.getElementById("J").checked != true) {
        document.getElementById("TB_JPNquantity").value = "";
        document.getElementById("TB_JPNquantity").disabled = true;
    }
    if (document.getElementById("TB_GrJalapenos").checked != true) {
        document.getElementById("TB_GrJPNquantity").value = "";
        document.getElementById("TB_GrJPNquantity").disabled = true;
    }
    if (document.getElementById("TB_Avocado").checked != true) {
        document.getElementById("TB_AVquantity").value = "";
        document.getElementById("TB_AVquantity").disabled = true;
    }
    if (document.getElementById("TB_Chiles").checked != true) {
        document.getElementById("TB_GCquantity").value = "";
        document.getElementById("TB_GCquantity").disabled = true;
    }
}
function check_TB_Toppings() {
    /* SELECT */
    if (document.getElementById("T").checked == true) {
        document.getElementById("TB_Tomato").value = "Regular";
        document.getElementById("TB_Tomato").disabled = false;
    }
    if (document.getElementById("L").checked == true) {
        document.getElementById("TB_Lettuce").value = "Regular";
        document.getElementById("TB_Lettuce").disabled = false;
    }
    if (document.getElementById("Bpickles").checked == true) {
        document.getElementById("TB_Pickles").value = "Regular";
        document.getElementById("TB_Pickles").disabled = false;
    }
    if (document.getElementById("BonionD").checked == true) {
        document.getElementById("TB_DiOnion").value = "Regular";
        document.getElementById("TB_DiOnion").disabled = false;
    }
    if (document.getElementById("BGrOnion").checked == true) {
        document.getElementById("TB_GrOnion").value = "Regular";
        document.getElementById("TB_GrOnion").disabled = false;
    }
    if (document.getElementById("F").checked == true) {
        document.getElementById("TB_Frisee").value = "Regular";
        document.getElementById("TB_Frisee").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("T").checked != true) {
        document.getElementById("TB_Tomato").option = "";
        document.getElementById("TB_Tomato").disabled = true;
    }
    if (document.getElementById("L").checked != true) {
        document.getElementById("TB_Lettuce").value = "";
        document.getElementById("TB_Lettuce").disabled = true;
    }
    if (document.getElementById("Bpickles").checked != true) {
        document.getElementById("TB_Pickles").value = "";
        document.getElementById("TB_Pickles").disabled = true;
    }
    if (document.getElementById("BonionD").checked != true) {
        document.getElementById("TB_DiOnion").value = "";
        document.getElementById("TB_DiOnion").disabled = true;
    }
    if (document.getElementById("BGrOnion").checked != true) {
        document.getElementById("TB_GrOnion").value = "";
        document.getElementById("TB_GrOnion").disabled = true;
    }
    if (document.getElementById("F").checked != true) {
        document.getElementById("TB_Frisee").value = "";
        document.getElementById("TB_Frisee").disabled = true;
    }
}
function check_TB_Sauce() {
    /* SELECT */
    if (document.getElementById("TB_mustard").checked == true) {
        document.getElementById("TB_Mustard").value = "Regular";
        document.getElementById("TB_Mustard").disabled = false;
    }
    if (document.getElementById("TB_Mayonnaise").checked == true) {
        document.getElementById("TB_Mayo").value = "Regular";
        document.getElementById("TB_Mayo").disabled = false;
    }
    if (document.getElementById("K").checked == true) {
        document.getElementById("TB_Ketchup").value = "Regular";
        document.getElementById("TB_Ketchup").disabled = false;
    }
    if (document.getElementById("TB_HoneyBBQ").checked == true) {
        document.getElementById("TB_BBQ").value = "Regular";
        document.getElementById("TB_BBQ").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("TB_mustard").checked != true) {
        document.getElementById("TB_Mustard").option = "";
        document.getElementById("TB_Mustard").disabled = true;
    }
    if (document.getElementById("TB_Mayonnaise").checked != true) {
        document.getElementById("TB_Mayo").value = "";
        document.getElementById("TB_Mayo").disabled = true;
    }
    if (document.getElementById("K").checked != true) {
        document.getElementById("TB_Ketchup").value = "";
        document.getElementById("TB_Ketchup").disabled = true;
    }
    if (document.getElementById("TB_HoneyBBQ").checked != true) {
        document.getElementById("TB_BBQ").value = "";
        document.getElementById("TB_BBQ").disabled = true;
    }
}
/* SALMON BURGER */