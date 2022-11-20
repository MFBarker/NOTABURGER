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


// item int display selection
var count = 1;

var minus = document.getElementById("minus");
var plus = document.getElementById("plus");
var num_display = document.getElementById("numDisplay").ariaValueText;


if (num_display == 1) { minus.disabled = true; }
else if (num_display == 8) { plus.disabled = true; }
else if (num_display > 1 && num_display < 8) { minus.disabled = false; plus.disabled = false; }



function up() {
    if (num_display == 1) { count = 2; }
    else if (num_display == 2) { count = 3; }
    else if (num_display == 3) { count = 4; }
    else if (num_display == 4) { count = 5; }
    else if (num_display == 5) { count = 6; }
    else if (num_display == 6) { count = 7; }
    else if (num_display == 7) { count = 8; plus.ariaDisabled = true; }

    //debug only
    console.log(num_display + " (up)");
    num_display.ariaValueText = count;
}

function down() {
    if (num_display == 8) { count = 7; }
    else if (num_display == 7) { count = 6; }
    else if (num_display == 6) { count = 5; }
    else if (num_display == 5) { count = 4; }
    else if (num_display == 4) { count = 3; }
    else if (num_display == 3) { count = 2; }
    else if (num_display == 2) { count = 1; minus.ariaDisabled = true; }

    //debug only
    console.log(num_display + " (down)")
}


function Programs(evt, programName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(programName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();