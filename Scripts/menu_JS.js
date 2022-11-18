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
var minus = document.getElementById("minus");
var plus = document.getElementById("plus");


if (num_display = 1) { minus.disabled = true; }
else if (num_display = 8) { plus.disabled = true; }
else if (num_display > 1 && num_display < 8) { minus.disabled = false; plus.disabled = false; }

function up(num_display) {
    if (num_display == "1") { num_display = "2" };
    if (num_display == "2") { num_display = "3" };
    if (num_display == "3") { num_display = "4" };
    if (num_display == "4") { num_display = "5" };
    if (num_display == "5") { num_display = "6" };
    if (num_display == "6") { num_display = "7" };
    if (num_display == "7") { num_display = "8" };
}

function down() {
    if (num_display.value == "8") { num_display.value = "7" };
    if (num_display.value == "7") { num_display.value = "6" };
    if (num_display.value == "6") { num_display.value = "5" };
    if (num_display.value == "5") { num_display.value = "4" };
    if (num_display.value == "4") { num_display.value = "3" };
    if (num_display.value == "3") { num_display.value = "2" };
    if (num_display.value == "2") { num_display.value = "1" };
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