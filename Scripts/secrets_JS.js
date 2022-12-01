// Code for tabs
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

/* Hiding codes */

// Code 1
function Hidden_Careers() {
    if (document.getElementById("imgClickChange").src = "Resources/Victim2_.png") {
        document.getElementById("title").innerText = "MessedUpWrld Forum"

        document.getElementById("imgClickChange").src = "Resources/Victim2Edit.png";
        document.getElementById("employee1").src = "Resources/Employee(1)Edit.png";
        document.getElementById("employee2").src = "Resources/Employee(2)Edit.png";
        document.getElementById("employee3").src = "Resources/Employee(3)Edit.png";
        document.getElementById("employee4").src = "Resources/Employee(4)Edit.png";
        document.getElementById("employee5").src = "Resources/Employee(5)Edit.png";

        // Employee 1 text
        document.getElementById("employeeTranscript1").innerText = "UAreWhatUEat:";
        document.getElementById("employeeTranscript1_").innerText = "I'm telling you, the things... this place is not normal. I've worked here for 5 years, after my 3rd year of hard work they kept moving me up.";

        // Employee 2 text
        document.getElementById("employeeTranscript2").innerText = "UAreWhatUEat:";
        document.getElementById("employeeTranscript2_").innerText = "Oh God, our shipment came in today... the amount of bodies... the smell... idk how some of you people have NEVER questioned the smell, I'm guessing ya'll assumed it was from cooking all those weird burgers";

        // Employee 3 text
        document.getElementById("employeeTranscript3").innerText = "UAreWhatUEat:";
        document.getElementById("employeeTranscript3_").innerText = "We just got a new announcement... we are now gonna be getting new shipments... all from the morgue and cementery";

        // Employee 4 text
        document.getElementById("employeeTranscript4").innerText = "UAreWhatUEat:";
        document.getElementById("employeeTranscript4_").innerText = "You all think I'm crazy! Why won't you listen, I've been warning you the past year of the things they cook here all for population control that the government needs!!";

        // Employee 5 text
        document.getElementById("employeeTranscript5").innerText = "UAreWhatUEat:";
        document.getElementById("employeeTranscript5_").innerText = "THIS PLACE IS MESSED UP!! NOW THEY WANT US TO TAKE IN KIDS FROM THE LOCAL BOY SCOUTS AND DAYCARE!?! JUST LIKE THEY ARE LIVESTOCK!! PLEASE LISTEN TO ME PEOPLE";

        // Victim 2 text
        document.getElementById("victimTranscript").innerText = "UAreWhatUEat:";
        document.getElementById("victimTranscript_").innerText = "They are on to me on this blog post... I also received a message from my manager he wants to speak to me... I might just be next on the menu all because you people wouldn't take me seriously";
    }
}
// Code 2
function Hidden_Community() {
    const button_ = document.getElementById('button_');
    button_.addEventListener('click', function () {
        document.getElementById('secret').innerText = "========================= 2.) 7LQY-FXA7-EEYG-LDQNv =========================";
        document.getElementById('imgMissing').src = "Resources/Newspaper.png"
    });
}

// Code 3
function Hidden_MainPage() {
    if (document.getElementById('igBttn').src = "Resources/icnInstagram.png") {
        document.getElementById('secretCode').innerText = "3.) H568-2QTB-KVWY-379L";
    }
}


// Code 5
function Hidden_Stories() {
    if (document.getElementById("imgFounders").src = "Resources/Founders.png") {
        document.getElementById("caption").innerText = "5.) NKKS-L6Q6-ET3X-S6FQ";
        document.getElementById("location").src= "Resources/Victim3CrimeScene.png"
        document.getElementById("scene").innerText = "Someone received the wrong order...";
    }
}

function SearchBar() {
    const input = document.getElementById('searchBar').value;
    let secret_code = "676574206675636B65647LQY-FXA7-EEYG-LDQNvH568-2QTB-KVWY-379LRJET-H93B-R2NB-CG99NKKS-L6Q6-ET3X-S6FQ";

    searchBtn.addEventListener('click', function () {
        if (input == secret_code) {
            window.location.href = 'secretMenu.html';
        }

        // Search bar for normal menu
        if (input == "community" || input == "Community") {
            window.location.href = 'community.html';
        }

        if (input == "stories" || input == "Stories") {
            window.location.href = 'stories.html';
        }

        if (input == "menu" || input == "Menu") {
            window.location.href = 'menu.html';
        }

        if (input == "careers" || input == "Careers") {
            window.location.href = 'careers.html';
        }

        if (input == "locations" || input == "Locations") {
            window.location.href = 'locations.html';
        }

    });



}


