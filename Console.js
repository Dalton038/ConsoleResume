let firstName = "Dalton";
let middleName = "Eugene";
let lastName = "Hall";
let fullName = firstName + " " + middleName + " " + lastName;
let fullNameCaps = fullName.toUpperCase();


displayDescription(fullNameCaps, "Web Developer in learning", "my description");


function displayDescription(myName, myCareer, myDescription) {
    console.log("Name: " + myName);
    console.log("Career: " + myCareer);
    console.log("Description: " + myDescription + ".");
}


console.log("My Interests: ");

displayInterests("Gaming");
displayInterests("Anime");
displayInterests("Sports");
displayInterests("Ocean");
displayInterests("Family");


function displayInterests(myInterest) {
    console.log("*  " + myInterest);
}


console.log("My Previous Experiences: ");

displayPosition("Target", "General Sales", "Helped customers on the floor");

displayPosition("Gossett Construction", "masonry", "Built or fixed anything concrete related");

function displayPosition(companyName, jobTitle, jobDescription) {
    console.log("  " + companyName + " : " + jobTitle + " , " + jobDescription + ". ");
};


console.log("My Skills: ");

displaySkill("Building Computers", true);
displaySkill("Drawing", false);
displaySkill("Html", false);
displaySkill("CSS", false);
displaySkill("JavaScript", false);
displaySkill("Fixing almost anything", true);
displaySkill("MMA", false);
displaySkill("Good at sports", true);


function displaySkill(mySkill, bamBam) {
    if (bamBam == true) {
        console.log("*  BAM: " + mySkill);
    } else if (bamBam == false) {
        console.log("*  " + mySkill);
    };
}