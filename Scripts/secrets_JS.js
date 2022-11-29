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
function Hidden_() {
    const button_ = document.getElementById('button_');
    button_.addEventListener('click', function () {
        document.getElementById('secret').innerText = "========================= 2.) 7LQY-FXA7-EEYG-LDQNv =========================";
    });
}

function Hidden_Careers() {
    if (document.getElementById("imgClickChange").src = "Resources/Victim2_.png") {
        document.getElementById("imgClickChange").src = "Resources/Victim2Edit.png"
        document.getElementById("employee1").src = "Resources/Employee(1)Edit.png"
        document.getElementById("employee2").src = "Resources/Employee(2)Edit.png"
        document.getElementById("employee3").src = "Resources/Employee(3)Edit.png"
    } 

    
}


function SearchBar() {
    const input = document.getElementById('searchBar').value;
    let secret_code = "676574206675636B65647LQY-FXA7-EEYG-LDQNvH568-2QTB-KVWY-379LRJET-H93B-R2NB-CG99NKKS-L6Q6-ET3X-S6FQ";

    searchBtn.addEventListener('click', function () {
        if (input == secret_code) {
            window.location.href = 'secretMenu.html';

        }

        if (input == "community" || input == "Community")
        {
            window.location.href = 'community.html';
        }

        if(input == "stories" || input == "Stories")
        {
            window.location.href = 'stories.html';
        }

        if (input == "menu" || input == "Menu")
        {
            window.location.href = 'menu.html';
        }

        if (input == "careers" || input == "Careers")
        {
            window.location.href = 'careers.html';
        }

        if (input == "locations" || input == "Locations")
        {
            window.location.href = 'locations.html';
        }

    });



}


