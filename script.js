//messages
let about = document.getElementById("aboutMe");
let myEducation = document.getElementById("edu");
let myProjects = document.getElementById("proj");
let myHome = document.getElementById("homePg")

//hidding the messages
myHome.hidden = false;
about.hidden = true;
myEducation.hidden = true;
myProjects.hidden = true; 

// clickable id's (class)
let myAMlabel = document.getElementById("amLabel");
let myEduLabel = document.getElementById("eduLabel");
let myProjLabel = document.getElementById("projLabel");
let myHomePage = document.getElementById("homePage") 

//anonymous event handler property and function for the second radio button clicked
myAMlabel.onclick = function() {
    myHome.hidden = true;
    about.hidden = false;
    myEducation.hidden = true;
    myProjects.hidden = true;
}
//anonymous event handler property and function for the third radio button clicked 
myEduLabel.onclick = function() {
    myHome.hidden = true;
    about.hidden = true;
    myEducation.hidden = false;
    myProjects.hidden = true;
}
//anonymous event handler property and function for the fourth radio button clicked 
myProjLabel.onclick = function() {
    myHome.hidden = true;
    about.hidden = true;
    myEducation.hidden = true;
    myProjects.hidden = false;
}
//anonymous event handler property and function for the first radio button clicked 
myHomePage.onclick = function() {
    myHome.hidden = false;
    about.hidden = true;
    myEducation.hidden = true;
    myProjects.hidden = true; 
}