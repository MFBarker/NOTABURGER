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
if (document.getElementById("TB_Bacon").checked != true) {
    document.getElementById("TB_BCNquantity").value = "";
    document.getElementById("TB_BCNquantity").disabled = true;
}
if (document.getElementById("TB_Jalapeno").checked != true) {
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
if (document.getElementById("TB_TomatoS").checked != true) {
    document.getElementById("TB_Tomato").value = "";
    document.getElementById("TB_Tomato").disabled = true;
} else if (document.getElementById("TB_TomatoS").checked == true) { document.getElementById("TB_Tomato").value = "Regular"; }
if (document.getElementById("TB_LettuceS").checked != true) {
    document.getElementById("TB_Lettuce").value = "";
    document.getElementById("TB_Lettuce").disabled = true;
} else if (document.getElementById("TB_LettuceS").checked == true) { document.getElementById("TB_Lettuce").value = "Regular"; }
if (document.getElementById("TB_pickles").checked != true) {
    document.getElementById("TB_Pickles").value = "";
    document.getElementById("TB_Pickles").disabled = true;
} else if (document.getElementById("TB_pickles").checked == true) { document.getElementById("TB_Pickles").value = "Regular"; }
if (document.getElementById("TB_onionD").checked != true) {
    document.getElementById("TB_DiOnion").value = "";
    document.getElementById("TB_DiOnion").disabled = true;
} else if (document.getElementById("TB_onionD").checked == true) { document.getElementById("TB_DiOnion").value = "Regular"; }
if (document.getElementById("TB_GrOnionS").checked != true) {
    document.getElementById("TB_GrOnion").value = "";
    document.getElementById("TB_GrOnion").disabled = true;
} else if (document.getElementById("TB_GrOnion").checked == true) { document.getElementById("TB_GrOnion").value = "Regular"; }
if (document.getElementById("TB_FriseeS").checked != true) {
    document.getElementById("TB_Frisee").value = "";
    document.getElementById("TB_Frisee").disabled = true;
} else if (document.getElementById("TB_FriseeS").checked == true) { document.getElementById("TB_Frisee").value = "Regular"; }
//sauces
if (document.getElementById("TB_mustard").checked != true) {
    document.getElementById("TB_Mustard").value = "";
    document.getElementById("TB_Mustard").disabled = true;
} else if (document.getElementById("TB_mustard").checked == true) { document.getElementById("TB_Mustard").value = "Regular"; }
if (document.getElementById("TB_Mayonnaise").checked != true) {
    document.getElementById("TB_Mayo").value = "";
    document.getElementById("TB_Mayo").disabled = true;
} else if (document.getElementById("TB_Mayonnaise").checked == true) { document.getElementById("TB_Mayo").value = "Regular"; }
if (document.getElementById("TB_KetchupS").checked != true) {
    document.getElementById("TB_Ketchup").value = "";
    document.getElementById("TB_Ketchup").disabled = true;
} else if (document.getElementById("TB_KetchupS").checked == true) { document.getElementById("TB_Ketchup").value = "Regular"; }
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
    if (document.getElementById("TB_Bacon").checked == true) {
        document.getElementById("TB_BCNquantity").value = "1";
        document.getElementById("TB_BCNquantity").disabled = false;
    }
    if (document.getElementById("TB_Jalapeno").checked == true) {
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
    if (document.getElementById("TB_Bacon").checked != true) {
        document.getElementById("TB_BCNquantity").value = "";
        document.getElementById("TB_BCNquantity").disabled = true;
    }
    if (document.getElementById("TB_Jalapeno").checked != true) {
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
    if (document.getElementById("TB_TomatoS").checked == true) {
        document.getElementById("TB_Tomato").value = "Regular";
        document.getElementById("TB_Tomato").disabled = false;
    }
    if (document.getElementById("TB_LettuceS").checked == true) {
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
    if (document.getElementById("TB_FriseeS").checked == true) {
        document.getElementById("TB_Frisee").value = "Regular";
        document.getElementById("TB_Frisee").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("TB_TomatoS").checked != true) {
        document.getElementById("TB_Tomato").option = "";
        document.getElementById("TB_Tomato").disabled = true;
    }
    if (document.getElementById("TB_LettuceS").checked != true) {
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
    if (document.getElementById("TB_FriseeS").checked != true) {
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
    if (document.getElementById("TB_KetchupS").checked == true) {
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
    if (document.getElementById("TB_KetchupS").checked != true) {
        document.getElementById("TB_Ketchup").value = "";
        document.getElementById("TB_Ketchup").disabled = true;
    }
    if (document.getElementById("TB_HoneyBBQ").checked != true) {
        document.getElementById("TB_BBQ").value = "";
        document.getElementById("TB_BBQ").disabled = true;
    }
}
/* SALMON BURGER */
//add-ons
if (document.getElementById("SB_AmCheese").checked != true) {
    document.getElementById("SB_AMquantity").value = "";
    document.getElementById("SB_AMquantity").disabled = true;
}
if (document.getElementById("SB_MnJkCheese").checked != true) {
    document.getElementById("SB_MJquantity").value = "";
    document.getElementById("SB_MJquantity").disabled = true;
}
if (document.getElementById("SB_Bacon").checked != true) {
    document.getElementById("SB_BCNquantity").value = "";
    document.getElementById("SB_BCNquantity").disabled = true;
}
if (document.getElementById("SB_Jalapenos").checked != true) {
    document.getElementById("SB_JPNquantity").value = "";
    document.getElementById("SB_JPNquantity").disabled = true;
}
if (document.getElementById("SB_GrJalapenos").checked != true) {
    document.getElementById("SB_GrJPNquantity").value = "";
    document.getElementById("SB_GrJPNquantity").disabled = true;
}
if (document.getElementById("SB_Avocado").checked != true) {
    document.getElementById("SB_AVquantity").value = "";
    document.getElementById("SB_AVquantity").disabled = true;
}
if (document.getElementById("SB_Chiles").checked != true) {
    document.getElementById("SB_GCquantity").value = "";
    document.getElementById("SB_GCquantity").disabled = true;
}
//toppings
if (document.getElementById("SB_TomatoS").checked != true) {
    document.getElementById("SB_Tomato").value = "";
    document.getElementById("SB_Tomato").disabled = true;
} else if (document.getElementById("SB_TomatoS").checked == true) { document.getElementById("SB_Tomato").value = "Regular"; }
if (document.getElementById("SB_LettuceS").checked != true) {
    document.getElementById("SB_Lettuce").value = "";
    document.getElementById("SB_Lettuce").disabled = true;
} else if (document.getElementById("SB_LettuceS").checked == true) { document.getElementById("SB_Lettuce").value = "Regular"; }
if (document.getElementById("SB_pickles").checked != true) {
    document.getElementById("SB_Pickles").value = "";
    document.getElementById("SB_Pickles").disabled = true;
} else if (document.getElementById("SB_pickles").checked == true) { document.getElementById("SB_Pickles").value = "Regular"; }
if (document.getElementById("SB_onionD").checked != true) {
    document.getElementById("SB_DiOnion").value = "";
    document.getElementById("SB_DiOnion").disabled = true;
} else if (document.getElementById("SB_onionD").checked == true) { document.getElementById("SB_DiOnion").value = "Regular"; }
if (document.getElementById("SB_GrOnionS").checked != true) {
    document.getElementById("SB_GrOnion").value = "";
    document.getElementById("SB_GrOnion").disabled = true;
} else if (document.getElementById("SB_GrOnion").checked == true) { document.getElementById("SB_GrOnion").value = "Regular"; }
if (document.getElementById("SB_FriseeS").checked != true) {
    document.getElementById("SB_Frisee").value = "";
    document.getElementById("SB_Frisee").disabled = true;
} else if (document.getElementById("SB_FriseeS").checked == true) { document.getElementById("SB_Frisee").value = "Regular"; }
//sauces
if (document.getElementById("SB_mustard").checked != true) {
    document.getElementById("SB_Mustard").value = "";
    document.getElementById("SB_Mustard").disabled = true;
} else if (document.getElementById("SB_mustard").checked == true) { document.getElementById("SB_Mustard").value = "Regular"; }
if (document.getElementById("SB_Mayonnaise").checked != true) {
    document.getElementById("SB_Mayo").value = "";
    document.getElementById("SB_Mayo").disabled = true;
} else if (document.getElementById("SB_Mayonnaise").checked == true) { document.getElementById("SB_Mayo").value = "Regular"; }
if (document.getElementById("SB_KetchupS").checked != true) {
    document.getElementById("SB_Ketchup").value = "";
    document.getElementById("SB_Ketchup").disabled = true;
} else if (document.getElementById("SB_KetchupS").checked == true) { document.getElementById("SB_Ketchup").value = "Regular"; }
if (document.getElementById("SB_HoneyBBQ").checked != true) {
    document.getElementById("SB_BBQ").value = "";
    document.getElementById("SB_BBQ").disabled = true;
} else if (document.getElementById("SB_HoneyBBQ").checked == true) { document.getElementById("SB_BBQ").value = "Regular"; }
function check_SB_AddOns() {
    /* SELECT */
    if (document.getElementById("SB_AmCheese").checked == true) {
        document.getElementById("SB_AMquantity").value = "1";
        document.getElementById("SB_AMquantity").disabled = false;
    }
    if (document.getElementById("SB_MnJkCheese").checked == true) {
        document.getElementById("SB_MJquantity").value = "1";
        document.getElementById("SB_MJquantity").disabled = false;
    }
    if (document.getElementById("SB_Bacon").checked == true) {
        document.getElementById("SB_BCNquantity").value = "1";
        document.getElementById("SB_BCNquantity").disabled = false;
    }
    if (document.getElementById("SB_Jalapenos").checked == true) {
        document.getElementById("SB_JPNquantity").value = "1";
        document.getElementById("SB_JPNquantity").disabled = false;
    }
    if (document.getElementById("SB_GrJalapenos").checked == true) {
        document.getElementById("SB_GrJPNquantity").value = "1";
        document.getElementById("SB_GrJPNquantity").disabled = false;
    }
    if (document.getElementById("SB_Avocado").checked == true) {
        document.getElementById("SB_AVquantity").value = "1";
        document.getElementById("SB_AVquantity").disabled = false;
    }
    if (document.getElementById("SB_Chiles").checked == true) {
        document.getElementById("SB_GCquantity").value = "1";
        document.getElementById("SB_GCquantity").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("SB_AmCheese").checked != true) {
        document.getElementById("SB_AMquantity").value = "";
        document.getElementById("SB_AMquantity").disabled = true;
    }
    if (document.getElementById("SB_MnJkCheese").checked != true) {
        document.getElementById("SB_MJquantity").value = "";
        document.getElementById("SB_MJquantity").disabled = true;
    }
    if (document.getElementById("SB_Bacon").checked != true) {
        document.getElementById("SB_BCNquantity").value = "";
        document.getElementById("SB_BCNquantity").disabled = true;
    }
    if (document.getElementById("SB_Jalapenos").checked != true) {
        document.getElementById("SB_JPNquantity").value = "";
        document.getElementById("SB_JPNquantity").disabled = true;
    }
    if (document.getElementById("SB_GrJalapenos").checked != true) {
        document.getElementById("SB_GrJPNquantity").value = "";
        document.getElementById("SB_GrJPNquantity").disabled = true;
    }
    if (document.getElementById("SB_Avocado").checked != true) {
        document.getElementById("SB_AVquantity").value = "";
        document.getElementById("SB_AVquantity").disabled = true;
    }
    if (document.getElementById("SB_Chiles").checked != true) {
        document.getElementById("SB_GCquantity").value = "";
        document.getElementById("SB_GCquantity").disabled = true;
    }
}
function check_SB_Toppings() {
    /* SELECT */
    if (document.getElementById("SB_TomatoS").checked == true) {
        document.getElementById("SB_Tomato").value = "Regular";
        document.getElementById("SB_Tomato").disabled = false;
    }
    if (document.getElementById("SB_LettuceS").checked == true) {
        document.getElementById("SB_Lettuce").value = "Regular";
        document.getElementById("SB_Lettuce").disabled = false;
    }
    if (document.getElementById("SB_pickles").checked == true) {
        document.getElementById("SB_Pickles").value = "Regular";
        document.getElementById("SB_Pickles").disabled = false;
    }
    if (document.getElementById("SB_onionD").checked == true) {
        document.getElementById("SB_DiOnion").value = "Regular";
        document.getElementById("SB_DiOnion").disabled = false;
    }
    if (document.getElementById("SB_GrOnionS").checked == true) {
        document.getElementById("SB_GrOnion").value = "Regular";
        document.getElementById("SB_GrOnion").disabled = false;
    }
    if (document.getElementById("SB_FriseeS").checked == true) {
        document.getElementById("SB_Frisee").value = "Regular";
        document.getElementById("SB_Frisee").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("SB_TomatoS").checked != true) {
        document.getElementById("SB_Tomato").option = "";
        document.getElementById("SB_Tomato").disabled = true;
    }
    if (document.getElementById("SB_LettuceS").checked != true) {
        document.getElementById("SB_Lettuce").value = "";
        document.getElementById("SB_Lettuce").disabled = true;
    }
    if (document.getElementById("SB_pickles").checked != true) {
        document.getElementById("SB_Pickles").value = "";
        document.getElementById("SB_Pickles").disabled = true;
    }
    if (document.getElementById("SB_onionD").checked != true) {
        document.getElementById("SB_DiOnion").value = "";
        document.getElementById("SB_DiOnion").disabled = true;
    }
    if (document.getElementById("SB_GrOnionS").checked != true) {
        document.getElementById("SB_GrOnion").value = "";
        document.getElementById("SB_GrOnion").disabled = true;
    }
    if (document.getElementById("SB_FriseeS").checked != true) {
        document.getElementById("SB_Frisee").value = "";
        document.getElementById("SB_Frisee").disabled = true;
    }
}
function check_SB_Sauce() {
    /* SELECT */
    if (document.getElementById("SB_mustard").checked == true) {
        document.getElementById("SB_Mustard").value = "Regular";
        document.getElementById("SB_Mustard").disabled = false;
    }
    if (document.getElementById("SB_Mayonnaise").checked == true) {
        document.getElementById("SB_Mayo").value = "Regular";
        document.getElementById("SB_Mayo").disabled = false;
    }
    if (document.getElementById("SB_KetchupS").checked == true) {
        document.getElementById("SB_Ketchup").value = "Regular";
        document.getElementById("SB_Ketchup").disabled = false;
    }
    if (document.getElementById("SB_HoneyBBQ").checked == true) {
        document.getElementById("SB_BBQ").value = "Regular";
        document.getElementById("SB_BBQ").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("SB_mustard").checked != true) {
        document.getElementById("SB_Mustard").option = "";
        document.getElementById("SB_Mustard").disabled = true;
    }
    if (document.getElementById("SB_Mayonnaise").checked != true) {
        document.getElementById("SB_Mayo").value = "";
        document.getElementById("SB_Mayo").disabled = true;
    }
    if (document.getElementById("SB_KetchupS").checked != true) {
        document.getElementById("SB_Ketchup").value = "";
        document.getElementById("SB_Ketchup").disabled = true;
    }
    if (document.getElementById("SB_HoneyBBQ").checked != true) {
        document.getElementById("SB_BBQ").value = "";
        document.getElementById("SB_BBQ").disabled = true;
    }
}
/* IMPOSSIBLE BURGER */
//add-ons
if (document.getElementById("IB_AmCheese").checked != true) {
    document.getElementById("IB_AMquantity").value = "";
    document.getElementById("IB_AMquantity").disabled = true;
}
if (document.getElementById("IB_MnJkCheese").checked != true) {
    document.getElementById("IB_MJquantity").value = "";
    document.getElementById("IB_MJquantity").disabled = true;
}
if (document.getElementById("IB_Bacon").checked != true) {
    document.getElementById("IB_BCNquantity").value = "";
    document.getElementById("IB_BCNquantity").disabled = true;
}
if (document.getElementById("IB_Jalapenos").checked != true) {
    document.getElementById("IB_JPNquantity").value = "";
    document.getElementById("IB_JPNquantity").disabled = true;
}
if (document.getElementById("IB_GrJalapenos").checked != true) {
    document.getElementById("IB_GrJPNquantity").value = "";
    document.getElementById("IB_GrJPNquantity").disabled = true;
}
if (document.getElementById("IB_Avocado").checked != true) {
    document.getElementById("IB_AVquantity").value = "";
    document.getElementById("IB_AVquantity").disabled = true;
}
if (document.getElementById("IB_Chiles").checked != true) {
    document.getElementById("IB_GCquantity").value = "";
    document.getElementById("IB_GCquantity").disabled = true;
}
//toppings
if (document.getElementById("IB_TomatoS").checked != true) {
    document.getElementById("IB_Tomato").value = "";
    document.getElementById("IB_Tomato").disabled = true;
} else if (document.getElementById("IB_TomatoS").checked == true) { document.getElementById("IB_Tomato").value = "Regular"; }
if (document.getElementById("IB_LettuceS").checked != true) {
    document.getElementById("IB_Lettuce").value = "";
    document.getElementById("IB_Lettuce").disabled = true;
} else if (document.getElementById("IB_LettuceS").checked == true) { document.getElementById("IB_Lettuce").value = "Regular"; }
if (document.getElementById("IB_pickles").checked != true) {
    document.getElementById("IB_Pickles").value = "";
    document.getElementById("IB_Pickles").disabled = true;
} else if (document.getElementById("IB_pickles").checked == true) { document.getElementById("IB_Pickles").value = "Regular"; }
if (document.getElementById("IB_onionD").checked != true) {
    document.getElementById("IB_DiOnion").value = "";
    document.getElementById("IB_DiOnion").disabled = true;
} else if (document.getElementById("IB_onionD").checked == true) { document.getElementById("IB_DiOnion").value = "Regular"; }
if (document.getElementById("IB_GrOnionS").checked != true) {
    document.getElementById("IB_GrOnion").value = "";
    document.getElementById("IB_GrOnion").disabled = true;
} else if (document.getElementById("IB_GrOnion").checked == true) { document.getElementById("IB_GrOnion").value = "Regular"; }
if (document.getElementById("IB_FriseeS").checked != true) {
    document.getElementById("IB_Frisee").value = "";
    document.getElementById("IB_Frisee").disabled = true;
} else if (document.getElementById("IB_FriseeS").checked == true) { document.getElementById("IB_Frisee").value = "Regular"; }
//sauces
if (document.getElementById("IB_mustard").checked != true) {
    document.getElementById("IB_Mustard").value = "";
    document.getElementById("IB_Mustard").disabled = true;
} else if (document.getElementById("IB_mustard").checked == true) { document.getElementById("IB_Mustard").value = "Regular"; }
if (document.getElementById("IB_Mayonnaise").checked != true) {
    document.getElementById("IB_Mayo").value = "";
    document.getElementById("IB_Mayo").disabled = true;
} else if (document.getElementById("IB_Mayonnaise").checked == true) { document.getElementById("IB_Mayo").value = "Regular"; }
if (document.getElementById("IB_KetchupS").checked != true) {
    document.getElementById("IB_Ketchup").value = "";
    document.getElementById("IB_Ketchup").disabled = true;
} else if (document.getElementById("IB_KetchupS").checked == true) { document.getElementById("IB_Ketchup").value = "Regular"; }
if (document.getElementById("IB_HoneyBBQ").checked != true) {
    document.getElementById("IB_BBQ").value = "";
    document.getElementById("IB_BBQ").disabled = true;
} else if (document.getElementById("IB_HoneyBBQ").checked == true) { document.getElementById("IB_BBQ").value = "Regular"; }
function check_IB_AddOns() {
    /* SELECT */
    if (document.getElementById("IB_AmCheese").checked == true) {
        document.getElementById("IB_AMquantity").value = "1";
        document.getElementById("IB_AMquantity").disabled = false;
    }
    if (document.getElementById("IB_MnJkCheese").checked == true) {
        document.getElementById("IB_MJquantity").value = "1";
        document.getElementById("IB_MJquantity").disabled = false;
    }
    if (document.getElementById("IB_Bacon").checked == true) {
        document.getElementById("IB_BCNquantity").value = "1";
        document.getElementById("IB_BCNquantity").disabled = false;
    }
    if (document.getElementById("IB_Jalapenos").checked == true) {
        document.getElementById("IB_JPNquantity").value = "1";
        document.getElementById("IB_JPNquantity").disabled = false;
    }
    if (document.getElementById("IB_GrJalapenos").checked == true) {
        document.getElementById("IB_GrJPNquantity").value = "1";
        document.getElementById("IB_GrJPNquantity").disabled = false;
    }
    if (document.getElementById("IB_Avocado").checked == true) {
        document.getElementById("IB_AVquantity").value = "1";
        document.getElementById("IB_AVquantity").disabled = false;
    }
    if (document.getElementById("IB_Chiles").checked == true) {
        document.getElementById("IB_GCquantity").value = "1";
        document.getElementById("IB_GCquantity").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("IB_AmCheese").checked != true) {
        document.getElementById("IB_AMquantity").value = "";
        document.getElementById("IB_AMquantity").disabled = true;
    }
    if (document.getElementById("IB_MnJkCheese").checked != true) {
        document.getElementById("IB_MJquantity").value = "";
        document.getElementById("IB_MJquantity").disabled = true;
    }
    if (document.getElementById("IB_Bacon").checked != true) {
        document.getElementById("IB_BCNquantity").value = "";
        document.getElementById("IB_BCNquantity").disabled = true;
    }
    if (document.getElementById("IB_Jalapenos").checked != true) {
        document.getElementById("IB_JPNquantity").value = "";
        document.getElementById("IB_JPNquantity").disabled = true;
    }
    if (document.getElementById("IB_GrJalapenos").checked != true) {
        document.getElementById("IB_GrJPNquantity").value = "";
        document.getElementById("IB_GrJPNquantity").disabled = true;
    }
    if (document.getElementById("IB_Avocado").checked != true) {
        document.getElementById("IB_AVquantity").value = "";
        document.getElementById("IB_AVquantity").disabled = true;
    }
    if (document.getElementById("IB_Chiles").checked != true) {
        document.getElementById("IB_GCquantity").value = "";
        document.getElementById("IB_GCquantity").disabled = true;
    }
}
function check_IB_Toppings() {
    /* SELECT */
    if (document.getElementById("IB_TomatoS").checked == true) {
        document.getElementById("IB_Tomato").value = "Regular";
        document.getElementById("IB_Tomato").disabled = false;
    }
    if (document.getElementById("IB_LettuceS").checked == true) {
        document.getElementById("TB_Lettuce").value = "Regular";
        document.getElementById("TB_Lettuce").disabled = false;
    }
    if (document.getElementById("IB_pickles").checked == true) {
        document.getElementById("IB_Pickles").value = "Regular";
        document.getElementById("IB_Pickles").disabled = false;
    }
    if (document.getElementById("IB_onionD").checked == true) {
        document.getElementById("IB_DiOnion").value = "Regular";
        document.getElementById("IB_DiOnion").disabled = false;
    }
    if (document.getElementById("IB_GrOnionS").checked == true) {
        document.getElementById("IB_GrOnion").value = "Regular";
        document.getElementById("IB_GrOnion").disabled = false;
    }
    if (document.getElementById("IB_FriseeS").checked == true) {
        document.getElementById("IB_Frisee").value = "Regular";
        document.getElementById("IB_Frisee").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("IB_TomatoS").checked != true) {
        document.getElementById("IB_Tomato").option = "";
        document.getElementById("IB_Tomato").disabled = true;
    }
    if (document.getElementById("IB_LettuceS").checked != true) {
        document.getElementById("IB_Lettuce").value = "";
        document.getElementById("IB_Lettuce").disabled = true;
    }
    if (document.getElementById("IB_pickles").checked != true) {
        document.getElementById("IB_Pickles").value = "";
        document.getElementById("IB_Pickles").disabled = true;
    }
    if (document.getElementById("IB_onionD").checked != true) {
        document.getElementById("IB_DiOnion").value = "";
        document.getElementById("IB_DiOnion").disabled = true;
    }
    if (document.getElementById("IB_GrOnionS").checked != true) {
        document.getElementById("IB_GrOnion").value = "";
        document.getElementById("IB_GrOnion").disabled = true;
    }
    if (document.getElementById("IB_FriseeS").checked != true) {
        document.getElementById("IB_Frisee").value = "";
        document.getElementById("IB_Frisee").disabled = true;
    }
}
function check_IB_Sauce() {
    /* SELECT */
    if (document.getElementById("IB_mustard").checked == true) {
        document.getElementById("IB_Mustard").value = "Regular";
        document.getElementById("IB_Mustard").disabled = false;
    }
    if (document.getElementById("IB_Mayonnaise").checked == true) {
        document.getElementById("IB_Mayo").value = "Regular";
        document.getElementById("IB_Mayo").disabled = false;
    }
    if (document.getElementById("IB_KetchupS").checked == true) {
        document.getElementById("IB_Ketchup").value = "Regular";
        document.getElementById("IB_Ketchup").disabled = false;
    }
    if (document.getElementById("IB_HoneyBBQ").checked == true) {
        document.getElementById("IB_BBQ").value = "Regular";
        document.getElementById("IB_BBQ").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("IB_mustard").checked != true) {
        document.getElementById("IB_Mustard").option = "";
        document.getElementById("IB_Mustard").disabled = true;
    }
    if (document.getElementById("IB_Mayonnaise").checked != true) {
        document.getElementById("IB_Mayo").value = "";
        document.getElementById("IB_Mayo").disabled = true;
    }
    if (document.getElementById("IB_KetchupS").checked != true) {
        document.getElementById("IB_Ketchup").value = "";
        document.getElementById("IB_Ketchup").disabled = true;
    }
    if (document.getElementById("IB_HoneyBBQ").checked != true) {
        document.getElementById("IB_BBQ").value = "";
        document.getElementById("IB_BBQ").disabled = true;
    }
}
/* GRASS BURGER */
if (document.getElementById("GB_AmCheese").checked != true) {
    document.getElementById("GB_AMquantity").value = "";
    document.getElementById("GB_AMquantity").disabled = true;
}
if (document.getElementById("GB_MnJkCheese").checked != true) {
    document.getElementById("GB_MJquantity").value = "";
    document.getElementById("GB_MJquantity").disabled = true;
}
if (document.getElementById("GB_Bacon").checked != true) {
    document.getElementById("GB_BCNquantity").value = "";
    document.getElementById("GB_BCNquantity").disabled = true;
}
if (document.getElementById("GB_Jalapenos").checked != true) {
    document.getElementById("GB_JPNquantity").value = "";
    document.getElementById("GB_JPNquantity").disabled = true;
}
if (document.getElementById("GB_GrJalapenos").checked != true) {
    document.getElementById("GB_GrJPNquantity").value = "";
    document.getElementById("GB_GrJPNquantity").disabled = true;
}
if (document.getElementById("GB_Avocado").checked != true) {
    document.getElementById("GB_AVquantity").value = "";
    document.getElementById("GB_AVquantity").disabled = true;
}
if (document.getElementById("GB_Chiles").checked != true) {
    document.getElementById("GB_GCquantity").value = "";
    document.getElementById("GB_GCquantity").disabled = true;
}
//toppings
if (document.getElementById("GB_TomatoS").checked != true) {
    document.getElementById("GB_Tomato").value = "";
    document.getElementById("GB_Tomato").disabled = true;
} else if (document.getElementById("GB_TomatoS").checked == true) { document.getElementById("GB_Tomato").value = "Regular"; }
if (document.getElementById("GB_LettuceS").checked != true) {
    document.getElementById("GB_Lettuce").value = "";
    document.getElementById("GB_Lettuce").disabled = true;
} else if (document.getElementById("GB_LettuceS").checked == true) { document.getElementById("GB_Lettuce").value = "Regular"; }
if (document.getElementById("GB_pickles").checked != true) {
    document.getElementById("GB_Pickles").value = "";
    document.getElementById("GB_Pickles").disabled = true;
} else if (document.getElementById("GB_pickles").checked == true) { document.getElementById("GB_Pickles").value = "Regular"; }
if (document.getElementById("GB_onionD").checked != true) {
    document.getElementById("GB_DiOnion").value = "";
    document.getElementById("GB_DiOnion").disabled = true;
} else if (document.getElementById("GB_onionD").checked == true) { document.getElementById("GB_DiOnion").value = "Regular"; }
if (document.getElementById("GB_GrOnionS").checked != true) {
    document.getElementById("GB_GrOnion").value = "";
    document.getElementById("GB_GrOnion").disabled = true;
} else if (document.getElementById("GB_GrOnion").checked == true) { document.getElementById("GB_GrOnion").value = "Regular"; }
if (document.getElementById("GB_FriseeS").checked != true) {
    document.getElementById("GB_Frisee").value = "";
    document.getElementById("GB_Frisee").disabled = true;
} else if (document.getElementById("GB_FriseeS").checked == true) { document.getElementById("GB_Frisee").value = "Regular"; }
//sauces
if (document.getElementById("GB_mustard").checked != true) {
    document.getElementById("GB_Mustard").value = "";
    document.getElementById("GB_Mustard").disabled = true;
} else if (document.getElementById("GB_mustard").checked == true) { document.getElementById("GB_Mustard").value = "Regular"; }
if (document.getElementById("GB_Mayonnaise").checked != true) {
    document.getElementById("GB_Mayo").value = "";
    document.getElementById("GB_Mayo").disabled = true;
} else if (document.getElementById("GB_Mayonnaise").checked == true) { document.getElementById("GB_Mayo").value = "Regular"; }
if (document.getElementById("GB_KetchupS").checked != true) {
    document.getElementById("GB_Ketchup").value = "";
    document.getElementById("GB_Ketchup").disabled = true;
} else if (document.getElementById("GB_KetchupS").checked == true) { document.getElementById("GB_Ketchup").value = "Regular"; }
if (document.getElementById("GB_HoneyBBQ").checked != true) {
    document.getElementById("GB_BBQ").value = "";
    document.getElementById("GB_BBQ").disabled = true;
} else if (document.getElementById("GB_HoneyBBQ").checked == true) { document.getElementById("GB_BBQ").value = "Regular"; }
function check_GB_AddOns() {
    /* SELECT */
    if (document.getElementById("GB_AmCheese").checked == true) {
        document.getElementById("GB_AMquantity").value = "1";
        document.getElementById("GB_AMquantity").disabled = false;
    }
    if (document.getElementById("GB_MnJkCheese").checked == true) {
        document.getElementById("GB_MJquantity").value = "1";
        document.getElementById("GB_MJquantity").disabled = false;
    }
    if (document.getElementById("GB_Bacon").checked == true) {
        document.getElementById("GB_BCNquantity").value = "1";
        document.getElementById("GB_BCNquantity").disabled = false;
    }
    if (document.getElementById("GB_Jalapenos").checked == true) {
        document.getElementById("GB_JPNquantity").value = "1";
        document.getElementById("GB_JPNquantity").disabled = false;
    }
    if (document.getElementById("GB_GrJalapenos").checked == true) {
        document.getElementById("GB_GrJPNquantity").value = "1";
        document.getElementById("GB_GrJPNquantity").disabled = false;
    }
    if (document.getElementById("GB_Avocado").checked == true) {
        document.getElementById("GB_AVquantity").value = "1";
        document.getElementById("GB_AVquantity").disabled = false;
    }
    if (document.getElementById("GB_Chiles").checked == true) {
        document.getElementById("GB_GCquantity").value = "1";
        document.getElementById("GB_GCquantity").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("GB_AmCheese").checked != true) {
        document.getElementById("GB_AMquantity").value = "";
        document.getElementById("GB_AMquantity").disabled = true;
    }
    if (document.getElementById("GB_MnJkCheese").checked != true) {
        document.getElementById("GB_MJquantity").value = "";
        document.getElementById("GB_MJquantity").disabled = true;
    }
    if (document.getElementById("GB_Bacon").checked != true) {
        document.getElementById("GB_BCNquantity").value = "";
        document.getElementById("GB_BCNquantity").disabled = true;
    }
    if (document.getElementById("GB_Jalapenos").checked != true) {
        document.getElementById("GB_JPNquantity").value = "";
        document.getElementById("GB_JPNquantity").disabled = true;
    }
    if (document.getElementById("GB_GrJalapenos").checked != true) {
        document.getElementById("GB_GrJPNquantity").value = "";
        document.getElementById("GB_GrJPNquantity").disabled = true;
    }
    if (document.getElementById("GB_Avocado").checked != true) {
        document.getElementById("GB_AVquantity").value = "";
        document.getElementById("GB_AVquantity").disabled = true;
    }
    if (document.getElementById("GB_Chiles").checked != true) {
        document.getElementById("GB_GCquantity").value = "";
        document.getElementById("GB_GCquantity").disabled = true;
    }
}
function check_GB_Toppings() {
    /* SELECT */
    if (document.getElementById("GB_TomatoS").checked == true) {
        document.getElementById("GB_Tomato").value = "Regular";
        document.getElementById("GB_Tomato").disabled = false;
    }
    if (document.getElementById("GB_LettuceS").checked == true) {
        document.getElementById("GB_Lettuce").value = "Regular";
        document.getElementById("GB_Lettuce").disabled = false;
    }
    if (document.getElementById("GB_pickles").checked == true) {
        document.getElementById("GB_Pickles").value = "Regular";
        document.getElementById("GB_Pickles").disabled = false;
    }
    if (document.getElementById("GB_onionD").checked == true) {
        document.getElementById("GB_DiOnion").value = "Regular";
        document.getElementById("GB_DiOnion").disabled = false;
    }
    if (document.getElementById("GB_GrOnionS").checked == true) {
        document.getElementById("GB_GrOnion").value = "Regular";
        document.getElementById("GB_GrOnion").disabled = false;
    }
    if (document.getElementById("GB_FriseeS").checked == true) {
        document.getElementById("GB_Frisee").value = "Regular";
        document.getElementById("GB_Frisee").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("GB_TomatoS").checked != true) {
        document.getElementById("GB_Tomato").option = "";
        document.getElementById("GB_Tomato").disabled = true;
    }
    if (document.getElementById("GB_LettuceS").checked != true) {
        document.getElementById("GB_Lettuce").value = "";
        document.getElementById("GB_Lettuce").disabled = true;
    }
    if (document.getElementById("GB_pickles").checked != true) {
        document.getElementById("GB_Pickles").value = "";
        document.getElementById("GB_Pickles").disabled = true;
    }
    if (document.getElementById("GB_onionD").checked != true) {
        document.getElementById("GB_DiOnion").value = "";
        document.getElementById("GB_DiOnion").disabled = true;
    }
    if (document.getElementById("GB_GrOnionS").checked != true) {
        document.getElementById("GB_GrOnion").value = "";
        document.getElementById("GB_GrOnion").disabled = true;
    }
    if (document.getElementById("GB_FriseeS").checked != true) {
        document.getElementById("GB_Frisee").value = "";
        document.getElementById("GB_Frisee").disabled = true;
    }
}
function check_GB_Sauce() {
    /* SELECT */
    if (document.getElementById("GB_mustard").checked == true) {
        document.getElementById("GB_Mustard").value = "Regular";
        document.getElementById("GB_Mustard").disabled = false;
    }
    if (document.getElementById("GB_Mayonnaise").checked == true) {
        document.getElementById("GB_Mayo").value = "Regular";
        document.getElementById("GB_Mayo").disabled = false;
    }
    if (document.getElementById("GB_KetchupS").checked == true) {
        document.getElementById("GB_Ketchup").value = "Regular";
        document.getElementById("GB_Ketchup").disabled = false;
    }
    if (document.getElementById("GB_HoneyBBQ").checked == true) {
        document.getElementById("GB_BBQ").value = "Regular";
        document.getElementById("GB_BBQ").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("GB_mustard").checked != true) {
        document.getElementById("GB_Mustard").option = "";
        document.getElementById("GB_Mustard").disabled = true;
    }
    if (document.getElementById("GB_Mayonnaise").checked != true) {
        document.getElementById("GB_Mayo").value = "";
        document.getElementById("GB_Mayo").disabled = true;
    }
    if (document.getElementById("GB_KetchupS").checked != true) {
        document.getElementById("GB_Ketchup").value = "";
        document.getElementById("GB_Ketchup").disabled = true;
    }
    if (document.getElementById("GB_HoneyBBQ").checked != true) {
        document.getElementById("GB_BBQ").value = "";
        document.getElementById("GB_BBQ").disabled = true;
    }
}
/* Grilled Chicken Sandwich */
//add-ons
if (document.getElementById("GrChS_AmCheese").checked != true) {
    document.getElementById("GrChS_AMquantity").value = "";
    document.getElementById("GrChS_AMquantity").disabled = true;
}
if (document.getElementById("GrChS_MnJkCheese").checked != true) {
    document.getElementById("GrChS_MJquantity").value = "";
    document.getElementById("GrChS_MJquantity").disabled = true;
}
if (document.getElementById("GrChS_Bacon").checked != true) {
    document.getElementById("GrChS_BCNquantity").value = "";
    document.getElementById("GrChS_BCNquantity").disabled = true;
}
if (document.getElementById("GrChS_Jalapenos").checked != true) {
    document.getElementById("GrChS_JPNquantity").value = "";
    document.getElementById("GrChS_JPNquantity").disabled = true;
}
if (document.getElementById("GrChS_GrJalapenos").checked != true) {
    document.getElementById("GrChS_GrJPNquantity").value = "";
    document.getElementById("GrChS_GrJPNquantity").disabled = true;
}
if (document.getElementById("GrChS_Avocado").checked != true) {
    document.getElementById("GrChS_AVquantity").value = "";
    document.getElementById("GrChS_AVquantity").disabled = true;
}
if (document.getElementById("GrChS_Chiles").checked != true) {
    document.getElementById("GrChS_GCquantity").value = "";
    document.getElementById("GrChS_GCquantity").disabled = true;
}
//toppings
if (document.getElementById("GrChS_TomatoS").checked != true) {
    document.getElementById("GrChS_Tomato").value = "";
    document.getElementById("GrChS_Tomato").disabled = true;
} else if (document.getElementById("GrChS_TomatoS").checked == true) { document.getElementById("GrChS_Tomato").value = "Regular"; }
if (document.getElementById("GrChS_LeafLettuceS").checked != true) {
    document.getElementById("GrChS_LeafLettuce").value = "";
    document.getElementById("GrChS_LeafLettuce").disabled = true;
} else if (document.getElementById("GrChS_LeafLettuceS").checked == true) { document.getElementById("GrChS_LeafLettuce").value = "Regular"; }
if (document.getElementById("GrChS_pickles").checked != true) {
    document.getElementById("GrChS_Pickles").value = "";
    document.getElementById("GrChS_Pickles").disabled = true;
} else if (document.getElementById("GrChS_pickles").checked == true) { document.getElementById("GrChS_Pickles").value = "Regular"; }
if (document.getElementById("GrChS_onionD").checked != true) {
    document.getElementById("GrChS_DiOnion").value = "";
    document.getElementById("GrChS_DiOnion").disabled = true;
} else if (document.getElementById("GrChS_onionD").checked == true) { document.getElementById("GrChS_DiOnion").value = "Regular"; }
if (document.getElementById("GrChS_GrOnionS").checked != true) {
    document.getElementById("GrChS_GrOnion").value = "";
    document.getElementById("GrChS_GrOnion").disabled = true;
} else if (document.getElementById("GrChS_GrOnion").checked == true) { document.getElementById("GrChS_GrOnion").value = "Regular"; }
if (document.getElementById("GrChS_FriseeS").checked != true) {
    document.getElementById("GrChS_Frisee").value = "";
    document.getElementById("GrChS_Frisee").disabled = true;
} else if (document.getElementById("GrChS_FriseeS").checked == true) { document.getElementById("GrChS_Frisee").value = "Regular"; }
//sauces
if (document.getElementById("GrChS_notASauce").checked != true) {
    document.getElementById("GrChS_NotASauce").value = "";
    document.getElementById("GrChS_NotASauce").disabled = true;
} else if (document.getElementById("GrChS_notASauce").checked == true) { document.getElementById("GrChS_NotASauce").value = "Regular"; }
if (document.getElementById("GrChS_mustard").checked != true) {
    document.getElementById("GrChS_Mustard").value = "";
    document.getElementById("GrChS_Mustard").disabled = true;
} else if (document.getElementById("GrChS_mustard").checked == true) { document.getElementById("GrChS_Mustard").value = "Regular"; }
if (document.getElementById("GrChS_Mayonnaise").checked != true) {
    document.getElementById("GrChS_Mayo").value = "";
    document.getElementById("GrChS_Mayo").disabled = true;
} else if (document.getElementById("GrChS_Mayonnaise").checked == true) { document.getElementById("GrChS_Mayo").value = "Regular"; }
if (document.getElementById("GrChS_KetchupS").checked != true) {
    document.getElementById("GrChS_Ketchup").value = "";
    document.getElementById("GrChS_Ketchup").disabled = true;
} else if (document.getElementById("GrChS_KetchupS").checked == true) { document.getElementById("GrChS_Ketchup").value = "Regular"; }
if (document.getElementById("GrChS_HoneyBBQ").checked != true) {
    document.getElementById("GrChS_BBQ").value = "";
    document.getElementById("GrChS_BBQ").disabled = true;
} else if (document.getElementById("GrChS_HoneyBBQ").checked == true) { document.getElementById("GrChS_BBQ").value = "Regular"; }
function check_GrChS_AddOns() {
    /* SELECT */
    if (document.getElementById("GrChS_AmCheese").checked == true) {
        document.getElementById("GrChS_AMquantity").value = "1";
        document.getElementById("GrChS_AMquantity").disabled = false;
    }
    if (document.getElementById("GrChS_MnJkCheese").checked == true) {
        document.getElementById("GrChS_MJquantity").value = "1";
        document.getElementById("GrChS_MJquantity").disabled = false;
    }
    if (document.getElementById("GrChS_Bacon").checked == true) {
        document.getElementById("GrChS_BCNquantity").value = "1";
        document.getElementById("GrChS_BCNquantity").disabled = false;
    }
    if (document.getElementById("GrChS_Jalapenos").checked == true) {
        document.getElementById("GrChS_JPNquantity").value = "1";
        document.getElementById("GrChS_JPNquantity").disabled = false;
    }
    if (document.getElementById("GrChS_GrJalapenos").checked == true) {
        document.getElementById("GrChS_GrJPNquantity").value = "1";
        document.getElementById("GrChS_GrJPNquantity").disabled = false;
    }
    if (document.getElementById("GrChS_Avocado").checked == true) {
        document.getElementById("GrChS_AVquantity").value = "1";
        document.getElementById("GrChS_AVquantity").disabled = false;
    }
    if (document.getElementById("GrChS_Chiles").checked == true) {
        document.getElementById("GrChS_GCquantity").value = "1";
        document.getElementById("GrChS_GCquantity").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("GrChS_AmCheese").checked != true) {
        document.getElementById("GrChS_AMquantity").value = "";
        document.getElementById("GrChS_AMquantity").disabled = true;
    }
    if (document.getElementById("GrChS_MnJkCheese").checked != true) {
        document.getElementById("GrChS_MJquantity").value = "";
        document.getElementById("GrChS_MJquantity").disabled = true;
    }
    if (document.getElementById("GrChS_Bacon").checked != true) {
        document.getElementById("GrChS_BCNquantity").value = "";
        document.getElementById("GrChS_BCNquantity").disabled = true;
    }
    if (document.getElementById("GrChS_Jalapenos").checked != true) {
        document.getElementById("GrChS_JPNquantity").value = "";
        document.getElementById("GrChS_JPNquantity").disabled = true;
    }
    if (document.getElementById("GrChS_GrJalapenos").checked != true) {
        document.getElementById("GrChS_GrJPNquantity").value = "";
        document.getElementById("GrChS_GrJPNquantity").disabled = true;
    }
    if (document.getElementById("GrChS_Avocado").checked != true) {
        document.getElementById("GrChS_AVquantity").value = "";
        document.getElementById("GrChS_AVquantity").disabled = true;
    }
    if (document.getElementById("GrChS_Chiles").checked != true) {
        document.getElementById("GrChS_GCquantity").value = "";
        document.getElementById("GrChS_GCquantity").disabled = true;
    }
}
function check_GrChS_Toppings() {
    /* SELECT */
    if (document.getElementById("GrChS_TomatoS").checked == true) {
        document.getElementById("GrChS_Tomato").value = "Regular";
        document.getElementById("GrChS_Tomato").disabled = false;
    }
    if (document.getElementById("GrChS_LeafLettuceS").checked == true) {
        document.getElementById("GrChS_LeafLettuce").value = "Regular";
        document.getElementById("GrChS_LeafLettuce").disabled = false;
    }
    if (document.getElementById("GrChS_pickles").checked == true) {
        document.getElementById("GrChS_Pickles").value = "Regular";
        document.getElementById("GrChS_Pickles").disabled = false;
    }
    if (document.getElementById("GrChS_onionD").checked == true) {
        document.getElementById("GrChS_DiOnion").value = "Regular";
        document.getElementById("GrChS_DiOnion").disabled = false;
    }
    if (document.getElementById("GrChS_GrOnionS").checked == true) {
        document.getElementById("GrChS_GrOnion").value = "Regular";
        document.getElementById("GrChS_GrOnion").disabled = false;
    }
    if (document.getElementById("GrChS_FriseeS").checked == true) {
        document.getElementById("GrChS_Frisee").value = "Regular";
        document.getElementById("GrChS_Frisee").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("GrChS_TomatoS").checked != true) {
        document.getElementById("GrChS_Tomato").option = "";
        document.getElementById("GrChS_Tomato").disabled = true;
    }
    if (document.getElementById("GrChS_LeafLettuceS").checked != true) {
        document.getElementById("GrChS_LeafLettuce").value = "";
        document.getElementById("GrChS_LeafLettuce").disabled = true;
    }
    if (document.getElementById("GrChS_pickles").checked != true) {
        document.getElementById("GrChS_Pickles").value = "";
        document.getElementById("GrChS_Pickles").disabled = true;
    }
    if (document.getElementById("GrChS_onionD").checked != true) {
        document.getElementById("GrChS_DiOnion").value = "";
        document.getElementById("GrChS_DiOnion").disabled = true;
    }
    if (document.getElementById("GrChS_GrOnionS").checked != true) {
        document.getElementById("GrChS_GrOnion").value = "";
        document.getElementById("GrChS_GrOnion").disabled = true;
    }
    if (document.getElementById("GrChS_FriseeS").checked != true) {
        document.getElementById("GrChS_Frisee").value = "";
        document.getElementById("GrChS_Frisee").disabled = true;
    }
}
function check_GrChS_Sauce() {
    /* SELECT */
    if (document.getElementById("GrChS_notASauce").checked == true) {
        document.getElementById("GrChS_NotASauce").value = "Regular";
        document.getElementById("GrChS_NotASauce").disabled = false;
    }
    if (document.getElementById("GrChS_mustard").checked == true) {
        document.getElementById("GrChS_Mustard").value = "Regular";
        document.getElementById("GrChS_Mustard").disabled = false;
    }
    if (document.getElementById("GrChS_Mayonnaise").checked == true) {
        document.getElementById("GrChS_Mayo").value = "Regular";
        document.getElementById("GrChS_Mayo").disabled = false;
    }
    if (document.getElementById("GrChS_KetchupS").checked == true) {
        document.getElementById("GrChS_Ketchup").value = "Regular";
        document.getElementById("GrChS_Ketchup").disabled = false;
    }
    if (document.getElementById("GrChS_HoneyBBQ").checked == true) {
        document.getElementById("GrChS_BBQ").value = "Regular";
        document.getElementById("GrChS_BBQ").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("GrChS_notASauce").checked != true) {
        document.getElementById("GrChS_NotASauce").option = "";
        document.getElementById("GrChS_NotASauce").disabled = true;
    }
    if (document.getElementById("GrChS_mustard").checked != true) {
        document.getElementById("GrChS_Mustard").option = "";
        document.getElementById("GrChS_Mustard").disabled = true;
    }
    if (document.getElementById("GrChS_Mayonnaise").checked != true) {
        document.getElementById("GrChS_Mayo").value = "";
        document.getElementById("GrChS_Mayo").disabled = true;
    }
    if (document.getElementById("GrChS_KetchupS").checked != true) {
        document.getElementById("GrChS_Ketchup").value = "";
        document.getElementById("GrChS_Ketchup").disabled = true;
    }
    if (document.getElementById("GrChS_HoneyBBQ").checked != true) {
        document.getElementById("GrChS_BBQ").value = "";
        document.getElementById("GrChS_BBQ").disabled = true;
    }
}
/* Chicken Sandwich */
if (document.getElementById("ChS_AmCheese").checked != true) {
    document.getElementById("ChS_AMquantity").value = "";
    document.getElementById("ChS_AMquantity").disabled = true;
}
if (document.getElementById("ChS_MnJkCheese").checked != true) {
    document.getElementById("ChS_MJquantity").value = "";
    document.getElementById("ChS_MJquantity").disabled = true;
}
if (document.getElementById("ChS_Bacon").checked != true) {
    document.getElementById("ChS_BCNquantity").value = "";
    document.getElementById("ChS_BCNquantity").disabled = true;
}
if (document.getElementById("ChS_Jalapenos").checked != true) {
    document.getElementById("ChS_JPNquantity").value = "";
    document.getElementById("ChS_JPNquantity").disabled = true;
}
if (document.getElementById("ChS_GrJalapenos").checked != true) {
    document.getElementById("ChS_GrJPNquantity").value = "";
    document.getElementById("ChS_GrJPNquantity").disabled = true;
}
if (document.getElementById("ChS_Avocado").checked != true) {
    document.getElementById("ChS_AVquantity").value = "";
    document.getElementById("ChS_AVquantity").disabled = true;
}
if (document.getElementById("ChS_Chiles").checked != true) {
    document.getElementById("ChS_GCquantity").value = "";
    document.getElementById("ChS_GCquantity").disabled = true;
}
//toppings
if (document.getElementById("ChS_TomatoS").checked != true) {
    document.getElementById("ChS_Tomato").value = "";
    document.getElementById("ChS_Tomato").disabled = true;
} else if (document.getElementById("ChS_TomatoS").checked == true) { document.getElementById("ChS_Tomato").value = "Regular"; }
if (document.getElementById("ChS_LeafLettuceS").checked != true) {
    document.getElementById("ChS_LeafLettuce").value = "";
    document.getElementById("ChS_LeafLettuce").disabled = true;
} else if (document.getElementById("ChS_LeafLettuceS").checked == true) { document.getElementById("ChS_LeafLettuce").value = "Regular"; }
if (document.getElementById("ChS_pickles").checked != true) {
    document.getElementById("ChS_Pickles").value = "";
    document.getElementById("ChS_Pickles").disabled = true;
} else if (document.getElementById("ChS_pickles").checked == true) { document.getElementById("ChS_Pickles").value = "Regular"; }
if (document.getElementById("ChS_onionD").checked != true) {
    document.getElementById("ChS_DiOnion").value = "";
    document.getElementById("ChS_DiOnion").disabled = true;
} else if (document.getElementById("ChS_onionD").checked == true) { document.getElementById("ChS_DiOnion").value = "Regular"; }
if (document.getElementById("ChS_GrOnionS").checked != true) {
    document.getElementById("ChS_GrOnion").value = "";
    document.getElementById("ChS_GrOnion").disabled = true;
} else if (document.getElementById("ChS_GrOnion").checked == true) { document.getElementById("ChS_GrOnion").value = "Regular"; }
if (document.getElementById("ChS_FriseeS").checked != true) {
    document.getElementById("ChS_Frisee").value = "";
    document.getElementById("ChS_Frisee").disabled = true;
} else if (document.getElementById("ChS_FriseeS").checked == true) { document.getElementById("ChS_Frisee").value = "Regular"; }
//sauces
if (document.getElementById("ChS_notASauce").checked != true) {
    document.getElementById("ChS_NotASauce").value = "";
    document.getElementById("ChS_NotASauce").disabled = true;
} else if (document.getElementById("ChS_notASauce").checked == true) { document.getElementById("ChS_NotASauce").value = "Regular"; }
if (document.getElementById("ChS_mustard").checked != true) {
    document.getElementById("ChS_Mustard").value = "";
    document.getElementById("ChS_Mustard").disabled = true;
} else if (document.getElementById("ChS_mustard").checked == true) { document.getElementById("ChS_Mustard").value = "Regular"; }
if (document.getElementById("ChS_Mayonnaise").checked != true) {
    document.getElementById("ChS_Mayo").value = "";
    document.getElementById("ChS_Mayo").disabled = true;
} else if (document.getElementById("ChS_Mayonnaise").checked == true) { document.getElementById("ChS_Mayo").value = "Regular"; }
if (document.getElementById("ChS_KetchupS").checked != true) {
    document.getElementById("ChS_Ketchup").value = "";
    document.getElementById("ChS_Ketchup").disabled = true;
} else if (document.getElementById("ChS_KetchupS").checked == true) { document.getElementById("ChS_Ketchup").value = "Regular"; }
if (document.getElementById("ChS_HoneyBBQ").checked != true) {
    document.getElementById("ChS_BBQ").value = "";
    document.getElementById("ChS_BBQ").disabled = true;
} else if (document.getElementById("ChS_HoneyBBQ").checked == true) { document.getElementById("ChS_BBQ").value = "Regular"; }
function check_ChS_AddOns() {
    /* SELECT */
    if (document.getElementById("ChS_AmCheese").checked == true) {
        document.getElementById("ChS_AMquantity").value = "1";
        document.getElementById("ChS_AMquantity").disabled = false;
    }
    if (document.getElementById("ChS_MnJkCheese").checked == true) {
        document.getElementById("ChS_MJquantity").value = "1";
        document.getElementById("ChS_MJquantity").disabled = false;
    }
    if (document.getElementById("ChS_Bacon").checked == true) {
        document.getElementById("ChS_BCNquantity").value = "1";
        document.getElementById("ChS_BCNquantity").disabled = false;
    }
    if (document.getElementById("ChS_Jalapenos").checked == true) {
        document.getElementById("ChS_JPNquantity").value = "1";
        document.getElementById("ChS_JPNquantity").disabled = false;
    }
    if (document.getElementById("ChS_GrJalapenos").checked == true) {
        document.getElementById("ChS_GrJPNquantity").value = "1";
        document.getElementById("ChS_GrJPNquantity").disabled = false;
    }
    if (document.getElementById("ChS_Avocado").checked == true) {
        document.getElementById("ChS_AVquantity").value = "1";
        document.getElementById("ChS_AVquantity").disabled = false;
    }
    if (document.getElementById("ChS_Chiles").checked == true) {
        document.getElementById("ChS_GCquantity").value = "1";
        document.getElementById("ChS_GCquantity").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("ChS_AmCheese").checked != true) {
        document.getElementById("ChS_AMquantity").value = "";
        document.getElementById("ChS_AMquantity").disabled = true;
    }
    if (document.getElementById("ChS_MnJkCheese").checked != true) {
        document.getElementById("ChS_MJquantity").value = "";
        document.getElementById("ChS_MJquantity").disabled = true;
    }
    if (document.getElementById("ChS_Bacon").checked != true) {
        document.getElementById("ChS_BCNquantity").value = "";
        document.getElementById("ChS_BCNquantity").disabled = true;
    }
    if (document.getElementById("ChS_Jalapenos").checked != true) {
        document.getElementById("ChS_JPNquantity").value = "";
        document.getElementById("ChS_JPNquantity").disabled = true;
    }
    if (document.getElementById("ChS_GrJalapenos").checked != true) {
        document.getElementById("ChS_GrJPNquantity").value = "";
        document.getElementById("ChS_GrJPNquantity").disabled = true;
    }
    if (document.getElementById("ChS_Avocado").checked != true) {
        document.getElementById("ChS_AVquantity").value = "";
        document.getElementById("ChS_AVquantity").disabled = true;
    }
    if (document.getElementById("ChS_Chiles").checked != true) {
        document.getElementById("ChS_GCquantity").value = "";
        document.getElementById("ChS_GCquantity").disabled = true;
    }
}
function check_ChS_Toppings() {
    /* SELECT */
    if (document.getElementById("ChS_TomatoS").checked == true) {
        document.getElementById("ChS_Tomato").value = "Regular";
        document.getElementById("ChS_Tomato").disabled = false;
    }
    if (document.getElementById("ChS_LeafLettuceS").checked == true) {
        document.getElementById("ChS_LeafLettuce").value = "Regular";
        document.getElementById("ChS_LeafLettuce").disabled = false;
    }
    if (document.getElementById("ChS_pickles").checked == true) {
        document.getElementById("ChS_Pickles").value = "Regular";
        document.getElementById("ChS_Pickles").disabled = false;
    }
    if (document.getElementById("ChS_onionD").checked == true) {
        document.getElementById("ChS_DiOnion").value = "Regular";
        document.getElementById("ChS_DiOnion").disabled = false;
    }
    if (document.getElementById("ChS_GrOnionS").checked == true) {
        document.getElementById("ChS_GrOnion").value = "Regular";
        document.getElementById("ChS_GrOnion").disabled = false;
    }
    if (document.getElementById("ChS_FriseeS").checked == true) {
        document.getElementById("ChS_Frisee").value = "Regular";
        document.getElementById("ChS_Frisee").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("ChS_TomatoS").checked != true) {
        document.getElementById("ChS_Tomato").option = "";
        document.getElementById("ChS_Tomato").disabled = true;
    }
    if (document.getElementById("ChS_LeafLettuceS").checked != true) {
        document.getElementById("ChS_LeafLettuce").value = "";
        document.getElementById("ChS_LeafLettuce").disabled = true;
    }
    if (document.getElementById("ChS_pickles").checked != true) {
        document.getElementById("ChS_Pickles").value = "";
        document.getElementById("ChS_Pickles").disabled = true;
    }
    if (document.getElementById("ChS_onionD").checked != true) {
        document.getElementById("ChS_DiOnion").value = "";
        document.getElementById("ChS_DiOnion").disabled = true;
    }
    if (document.getElementById("ChS_GrOnionS").checked != true) {
        document.getElementById("ChS_GrOnion").value = "";
        document.getElementById("ChS_GrOnion").disabled = true;
    }
    if (document.getElementById("ChS_FriseeS").checked != true) {
        document.getElementById("ChS_Frisee").value = "";
        document.getElementById("ChS_Frisee").disabled = true;
    }
}
function check_ChS_Sauce() {
    /* SELECT */
    if (document.getElementById("ChS_notASauce").checked == true) {
        document.getElementById("ChS_NotASauce").value = "Regular";
        document.getElementById("ChS_NotASauce").disabled = false;
    }
    if (document.getElementById("ChS_mustard").checked == true) {
        document.getElementById("ChS_Mustard").value = "Regular";
        document.getElementById("ChS_Mustard").disabled = false;
    }
    if (document.getElementById("ChS_Mayonnaise").checked == true) {
        document.getElementById("ChS_Mayo").value = "Regular";
        document.getElementById("ChS_Mayo").disabled = false;
    }
    if (document.getElementById("ChS_KetchupS").checked == true) {
        document.getElementById("ChS_Ketchup").value = "Regular";
        document.getElementById("ChS_Ketchup").disabled = false;
    }
    if (document.getElementById("ChS_HoneyBBQ").checked == true) {
        document.getElementById("ChS_BBQ").value = "Regular";
        document.getElementById("ChS_BBQ").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("ChS_notASauce").checked != true) {
        document.getElementById("ChS_NotASauce").option = "";
        document.getElementById("ChS_NotASauce").disabled = true;
    }
    if (document.getElementById("ChS_mustard").checked != true) {
        document.getElementById("ChS_Mustard").option = "";
        document.getElementById("ChS_Mustard").disabled = true;
    }
    if (document.getElementById("ChS_Mayonnaise").checked != true) {
        document.getElementById("ChS_Mayo").value = "";
        document.getElementById("ChS_Mayo").disabled = true;
    }
    if (document.getElementById("ChS_KetchupS").checked != true) {
        document.getElementById("ChS_Ketchup").value = "";
        document.getElementById("ChS_Ketchup").disabled = true;
    }
    if (document.getElementById("ChS_HoneyBBQ").checked != true) {
        document.getElementById("ChS_BBQ").value = "";
        document.getElementById("ChS_BBQ").disabled = true;
    }
}
/* BREAKFAST */
//Egg and Cheese Sandwich
if (document.getElementById("ECBis_ACheese").checked != true) {
    document.getElementById("ECBis_AMquantity").value = "";
    document.getElementById("ECBis_AMquantity").disabled = true;
}
if (document.getElementById("ECBis_MJCheese").checked != true) {
    document.getElementById("ECBis_MJCquantity").value = "";
    document.getElementById("ECBis_MJCquantity").disabled = true;
}
if (document.getElementById("ECBis_Egg").checked != true) {
    document.getElementById("ECBis_EGGquantity").value = "";
    document.getElementById("ECBis_EGGquantity").disabled = true;
}
if (document.getElementById("ECBis_Jalapenos").checked != true) {
    document.getElementById("ECBis_JPNquantity").value = "";
    document.getElementById("ECBis_JPNquantity").disabled = true;
}
if (document.getElementById("ECBis_GrJalapenos").checked != true) {
    document.getElementById("ECBis_GrJPNquantity").value = "";
    document.getElementById("ECBis_GrJPNquantity").disabled = true;
}
if (document.getElementById("ECBis_Avocado").checked != true) {
    document.getElementById("ECBis_AVquantity").value = "";
    document.getElementById("ECBis_AVquantity").disabled = true;
}
if (document.getElementById("ECBis_Chiles").checked != true) {
    document.getElementById("ECBis_GCquantity").value = "";
    document.getElementById("ECBis_GCquantity").disabled = true;
}
function check_ECBis_AddOns() {
    /* SELECT */
    if (document.getElementById("ECBis_ACheese").checked == true) {
        document.getElementById("ECBis_AMquantity").value = "1";
        document.getElementById("ECBis_AMquantity").disabled = false;
    }
    if (document.getElementById("ECBis_MJCheese").checked == true) {
        document.getElementById("ECBis_MJCquantity").value = "1";
        document.getElementById("ECBis_MJCquantity").disabled = false;
    }
    if (document.getElementById("ECBis_Egg").checked == true) {
        document.getElementById("ECBis_EGGquantity").value = "1";
        document.getElementById("ECBis_EGGquantity").disabled = false;
    }
    if (document.getElementById("ECBis_Jalapenos").checked == true) {
        document.getElementById("ECBis_JPNquantity").value = "1";
        document.getElementById("ECBis_JPNquantity").disabled = false;
    }
    if (document.getElementById("ECBis_GrJalapenos").checked == true) {
        document.getElementById("ECBis_GrJPNquantity").value = "1";
        document.getElementById("ECBis_GrJPNquantity").disabled = false;
    }
    if (document.getElementById("ECBis_Avocado").checked == true) {
        document.getElementById("ECBis_AVquantity").value = "1";
        document.getElementById("ECBis_AVquantity").disabled = false;
    }
    if (document.getElementById("ECBis_Chiles").checked == true) {
        document.getElementById("ECBis_GCquantity").value = "1";
        document.getElementById("ECBis_GCquantity").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("ECBis_ACheese").checked != true) {
        document.getElementById("ECBis_AMquantity").value = "";
        document.getElementById("ECBis_AMquantity").disabled = true;
    }
    if (document.getElementById("ECBis_MJCheese").checked != true) {
        document.getElementById("ECBis_MJCquantity").value = "";
        document.getElementById("ECBis_MJCquantity").disabled = true;
    }
    if (document.getElementById("ECBis_Egg").checked != true) {
        document.getElementById("ECBis_EGGquantity").value = "";
        document.getElementById("ECBis_EGGquantity").disabled = true;
    }
    if (document.getElementById("ECBis_Jalapenos").checked != true) {
        document.getElementById("ECBis_JPNquantity").value = "";
        document.getElementById("ECBis_JPNquantity").disabled = true;
    }
    if (document.getElementById("ECBis_GrJalapenos").checked != true) {
        document.getElementById("ECBis_GrJPNquantity").value = "";
        document.getElementById("ECBis_GrJPNquantity").disabled = true;
    }
    if (document.getElementById("ECBis_Avocado").checked != true) {
        document.getElementById("ECBis_AVquantity").value = "";
        document.getElementById("ECBis_AVquantity").disabled = true;
    }
    if (document.getElementById("ECBis_Chiles").checked != true) {
        document.getElementById("ECBis_GCquantity").value = "";
        document.getElementById("ECBis_GCquantity").disabled = true;
    }
}
//Biscuit Sandwich
if (document.getElementById("BisSando_ACheese").checked != true) {
    document.getElementById("BisSando_AMquantity").value = "";
    document.getElementById("BisSando_AMquantity").disabled = true;
}
if (document.getElementById("BisSando_MJCheese").checked != true) {
    document.getElementById("BisSando_MJCquantity").value = "";
    document.getElementById("BisSando_MJCquantity").disabled = true;
}
if (document.getElementById("BisSando_Egg").checked != true) {
    document.getElementById("BisSando_EGGquantity").value = "";
    document.getElementById("BisSando_EGGquantity").disabled = true;
} else if (document.getElementById("BisSando_Egg").checked == true) { document.getElementById("BisSando_EGGquantity").value = "1"; }
if (document.getElementById("BisSando_Jalapenos").checked != true) {
    document.getElementById("BisSando_JPNquantity").value = "";
    document.getElementById("BisSando_JPNquantity").disabled = true;
}
if (document.getElementById("BisSando_GrJalapenos").checked != true) {
    document.getElementById("BisSando_GrJPNquantity").value = "";
    document.getElementById("BisSando_GrJPNquantity").disabled = true;
}
if (document.getElementById("BisSando_Avocado").checked != true) {
    document.getElementById("BisSando_AVquantity").value = "";
    document.getElementById("BisSando_AVquantity").disabled = true;
}
if (document.getElementById("BisSando_Chiles").checked != true) {
    document.getElementById("BisSando_GCquantity").value = "";
    document.getElementById("BisSando_GCquantity").disabled = true;
}
function check_BisSando_AddOns() {
    /* SELECT */
    if (document.getElementById("BisSando_ACheese").checked == true) {
        document.getElementById("BisSando_AMquantity").value = "1";
        document.getElementById("BisSando_AMquantity").disabled = false;
    }
    if (document.getElementById("BisSando_MJCheese").checked == true) {
        document.getElementById("BisSando_MJCquantity").value = "1";
        document.getElementById("BisSando_MJCquantity").disabled = false;
    }
    if (document.getElementById("BisSando_Egg").checked == true) {
        document.getElementById("BisSando_EGGquantity").value = "1";
        document.getElementById("BisSando_EGGquantity").disabled = false;
    }
    if (document.getElementById("BisSando_Jalapenos").checked == true) {
        document.getElementById("BisSando_JPNquantity").value = "1";
        document.getElementById("BisSando_JPNquantity").disabled = false;
    }
    if (document.getElementById("BisSando_GrJalapenos").checked == true) {
        document.getElementById("BisSando_GrJPNquantity").value = "1";
        document.getElementById("BisSando_GrJPNquantity").disabled = false;
    }
    if (document.getElementById("BisSando_Avocado").checked == true) {
        document.getElementById("BisSando_AVquantity").value = "1";
        document.getElementById("BisSando_AVquantity").disabled = false;
    }
    if (document.getElementById("BisSando_Chiles").checked == true) {
        document.getElementById("BisSando_GCquantity").value = "1";
        document.getElementById("BisSando_GCquantity").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("BisSando_ACheese").checked != true) {
        document.getElementById("BisSando_AMquantity").value = "";
        document.getElementById("BisSando_AMquantity").disabled = true;
    }
    if (document.getElementById("BisSando_MJCheese").checked != true) {
        document.getElementById("BisSando_MJCquantity").value = "";
        document.getElementById("BisSando_MJCquantity").disabled = true;
    }
    if (document.getElementById("BisSando_Egg").checked != true) {
        document.getElementById("BisSando_EGGquantity").value = "";
        document.getElementById("BisSando_EGGquantity").disabled = true;
    }
    if (document.getElementById("BisSando_Jalapenos").checked != true) {
        document.getElementById("BisSando_JPNquantity").value = "";
        document.getElementById("BisSando_JPNquantity").disabled = true;
    }
    if (document.getElementById("BisSando_GrJalapenos").checked != true) {
        document.getElementById("BisSando_GrJPNquantity").value = "";
        document.getElementById("BisSando_GrJPNquantity").disabled = true;
    }
    if (document.getElementById("BisSando_Avocado").checked != true) {
        document.getElementById("BisSando_AVquantity").value = "";
        document.getElementById("BisSando_AVquantity").disabled = true;
    }
    if (document.getElementById("BisSando_Chiles").checked != true) {
        document.getElementById("BisSando_GCquantity").value = "";
        document.getElementById("BisSando_GCquantity").disabled = true;
    }
}
//Pancake Platter
if (document.getElementById("PP_Egg").checked != true) {
    document.getElementById("PP_EGGquantity").value = "";
    document.getElementById("PP_EGGquantity").disabled = true;
}
if (document.getElementById("PP_Jalapenos").checked != true) {
    document.getElementById("PP_JPNquantity").value = "";
    document.getElementById("PP_JPNquantity").disabled = true;
}
if (document.getElementById("PP_GrJalapenos").checked != true) {
    document.getElementById("PP_GrJPNquantity").value = "";
    document.getElementById("PP_GrJPNquantity").disabled = true;
}
if (document.getElementById("PP_Avocado").checked != true) {
    document.getElementById("PP_AVquantity").value = "";
    document.getElementById("PP_AVquantity").disabled = true;
}
if (document.getElementById("PP_Chiles").checked != true) {
    document.getElementById("PP_GCquantity").value = "";
    document.getElementById("PP_GCquantity").disabled = true;
}
function check_PP_AddOns() {
    /* SELECT */
    if (document.getElementById("PP_Egg").checked == true) {
        document.getElementById("PP_EGGquantity").value = "1";
        document.getElementById("PP_EGGquantity").disabled = false;
    }
    if (document.getElementById("PP_Jalapenos").checked == true) {
        document.getElementById("PP_JPNquantity").value = "1";
        document.getElementById("PP_JPNquantity").disabled = false;
    }
    if (document.getElementById("PP_GrJalapenos").checked == true) {
        document.getElementById("PP_GrJPNquantity").value = "1";
        document.getElementById("PP_GrJPNquantity").disabled = false;
    }
    if (document.getElementById("PP_Avocado").checked == true) {
        document.getElementById("PP_AVquantity").value = "1";
        document.getElementById("PP_AVquantity").disabled = false;
    }
    if (document.getElementById("PP_Chiles").checked == true) {
        document.getElementById("PP_GCquantity").value = "1";
        document.getElementById("PP_GCquantity").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("PP_Egg").checked != true) {
        document.getElementById("PP_EGGquantity").value = "";
        document.getElementById("PP_EGGquantity").disabled = true;
    }
    if (document.getElementById("PP_Jalapenos").checked != true) {
        document.getElementById("PP_JPNquantity").value = "";
        document.getElementById("PP_JPNquantity").disabled = true;
    }
    if (document.getElementById("PP_GrJalapenos").checked != true) {
        document.getElementById("PP_GrJPNquantity").value = "";
        document.getElementById("PP_GrJPNquantity").disabled = true;
    }
    if (document.getElementById("PP_Avocado").checked != true) {
        document.getElementById("PP_AVquantity").value = "";
        document.getElementById("PP_AVquantity").disabled = true;
    }
    if (document.getElementById("PP_Chiles").checked != true) {
        document.getElementById("PP_GCquantity").value = "";
        document.getElementById("PP_GCquantity").disabled = true;
    }
}
//Breakfast Platter
if (document.getElementById("BP_ACheese").checked != true) {
    document.getElementById("BP_AMquantity").value = "";
    document.getElementById("BP_AMquantity").disabled = true;
}
if (document.getElementById("BP_MJCheese").checked != true) {
    document.getElementById("BP_MJCquantity").value = "";
    document.getElementById("BP_MJCquantity").disabled = true;
}
if (document.getElementById("BP_Egg").checked != true) {
    document.getElementById("BP_EGGquantity").value = "";
    document.getElementById("BP_EGGquantity").disabled = true;
} else if (document.getElementById("BP_Egg").checked == true) { document.getElementById("BP_EGGquantity").value = "1"; }
if (document.getElementById("BP_Jalapenos").checked != true) {
    document.getElementById("BP_JPNquantity").value = "";
    document.getElementById("BP_JPNquantity").disabled = true;
}
if (document.getElementById("BP_GrJalapenos").checked != true) {
    document.getElementById("BP_GrJPNquantity").value = "";
    document.getElementById("BP_GrJPNquantity").disabled = true;
}
if (document.getElementById("BP_Avocado").checked != true) {
    document.getElementById("BP_AVquantity").value = "";
    document.getElementById("BP_AVquantity").disabled = true;
}
if (document.getElementById("BP_Chiles").checked != true) {
    document.getElementById("BP_GCquantity").value = "";
    document.getElementById("BP_GCquantity").disabled = true;
}
function check_BP_AddOns() {
    /* SELECT */
    if (document.getElementById("BP_ACheese").checked == true) {
        document.getElementById("BP_AMquantity").value = "1";
        document.getElementById("BP_AMquantity").disabled = false;
    }
    if (document.getElementById("BP_MJCheese").checked == true) {
        document.getElementById("BP_MJCquantity").value = "1";
        document.getElementById("BP_MJCquantity").disabled = false;
    }
    if (document.getElementById("BP_Egg").checked == true) {
        document.getElementById("BP_EGGquantity").value = "1";
        document.getElementById("BP_EGGquantity").disabled = false;
    }
    if (document.getElementById("BP_Jalapenos").checked == true) {
        document.getElementById("BP_JPNquantity").value = "1";
        document.getElementById("BP_JPNquantity").disabled = false;
    }
    if (document.getElementById("BP_GrJalapenos").checked == true) {
        document.getElementById("BP_GrJPNquantity").value = "1";
        document.getElementById("BP_GrJPNquantity").disabled = false;
    }
    if (document.getElementById("BP_Avocado").checked == true) {
        document.getElementById("BP_AVquantity").value = "1";
        document.getElementById("BP_AVquantity").disabled = false;
    }
    if (document.getElementById("BP_Chiles").checked == true) {
        document.getElementById("BP_GCquantity").value = "1";
        document.getElementById("BP_GCquantity").disabled = false;
    }
    /* DESELECT */
    if (document.getElementById("BP_ACheese").checked != true) {
        document.getElementById("BP_AMquantity").value = "";
        document.getElementById("BP_AMquantity").disabled = true;
    }
    if (document.getElementById("BP_MJCheese").checked != true) {
        document.getElementById("BP_MJCquantity").value = "";
        document.getElementById("BP_MJCquantity").disabled = true;
    }
    if (document.getElementById("BP_Egg").checked != true) {
        document.getElementById("BP_EGGquantity").value = "";
        document.getElementById("BP_EGGquantity").disabled = true;
    }
    if (document.getElementById("BP_Jalapenos").checked != true) {
        document.getElementById("BP_JPNquantity").value = "";
        document.getElementById("BP_JPNquantity").disabled = true;
    }
    if (document.getElementById("BP_GrJalapenos").checked != true) {
        document.getElementById("BP_GrJPNquantity").value = "";
        document.getElementById("BP_GrJPNquantity").disabled = true;
    }
    if (document.getElementById("BP_Avocado").checked != true) {
        document.getElementById("BP_AVquantity").value = "";
        document.getElementById("BP_AVquantity").disabled = true;
    }
    if (document.getElementById("BP_Chiles").checked != true) {
        document.getElementById("BP_GCquantity").value = "";
        document.getElementById("BP_GCquantity").disabled = true;
    }
}