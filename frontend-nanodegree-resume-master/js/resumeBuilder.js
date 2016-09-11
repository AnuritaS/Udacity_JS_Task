//Initializing variable bio
var bio={
 "name": "Anurita Srivastava",
 "role": "Web developer",
 "contacts":
 [ {
	"mobile": 9897675634,
 	"email": "srivastava.anurita@gmail.com",
 	"github": "AnuritaS",
 	"facebook": "srivastava.anurita",
 	"location": ["Agra", "Chennai"]
 } ],
 "pic": "images/fry.jpg",
 "msg": "Thought medicine is a field of lifelong learning and abandoned the desire of becoming a doctor and became a coder. IRONY!",
 "skills": ["Enthusiast", "Determined", "Helpful", "Foodie", "Pet-lover", "Prefers solitude", "Chooses books over bros", "Returns owed money before time"]

};
//function to .append() bo
bio.display=function ()
{
var bioName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(bioName);
var bioRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(bioRole);
var biopic = HTMLbioPic.replace("%data%", bio.pic);
$("#header").append(biopic);
var bioMsg = HTMLwelcomeMsg.replace("%data%", bio.msg);
$("#header").append(bioMsg);
//for array inside object
if(bio.skills.length>0)
{
	$("#header").append(HTMLskillsStart);
	var newSkills=HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(newSkills);
	 newSkills=HTMLskills.replace("%data%",bio.skills[1]);
	 $("#skills").append(newSkills);
	 newSkills=HTMLskills.replace("%data%",bio.skills[2]);
	 $("#skills").append(newSkills);
	 newSkills=HTMLskills.replace("%data%",bio.skills[3]);
	 $("#skills").append(newSkills);
	 newSkills=HTMLskills.replace("%data%",bio.skills[4]);
	 $("#skills").append(newSkills);
	 	 newSkills=HTMLskills.replace("%data%",bio.skills[5]);
	 $("#skills").append(newSkills);
	 newSkills=HTMLskills.replace("%data%",bio.skills[6]);
	 $("#skills").append(newSkills);
	 newSkills=HTMLskills.replace("%data%",bio.skills[7]);
	 $("#skills").append(newSkills);


}
//for object inside object
  for(var contact in bio.contacts) {
   var bioMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
   var bioEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
   var bioGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
    var bioFacebook = HTMLfacebook.replace("%data%", bio.contacts[contact].facebook);
   var bioLocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
  //to display contacts on the top
   $("#topContacts").append(bioMobile, bioEmail, bioGithub, bioFacebook, bioLocation);
   //to display contacts on the bottom
   $("#footerContacts").append(bioMobile, bioEmail, bioGithub, bioFacebook, bioLocation);
}
};
//Initialize variable work
var work=
{
	"employer": "SRMADT",
	"title": "Intern",
	"date": "September 2016-presently",
	"location": "SRM University,Chennai",
	"description": "Doing an internship to prove that can handle in-house work and stress to get into the elite club of SRM!",
	"url": "http://srmadt.com/"

};
//functin to .append() work
work.display=function () {
	 $("#workExperience").append(HTMLworkStart);
	var workEmployer=HTMLworkEmployer.replace("%data%",work.employer);
	var workTitle=HTMLworkTitle.replace("%data%",work.title);
	$(".work-entry:last").append(workEmployer+workTitle);
	var workDate=HTMLworkDates.replace("%data%",work.date);
	$(".work-entry:last").append(workDate);
	var workLocation=HTMLworkLocation.replace("%data%",work.location);
	$(".work-entry:last").append(workLocation);
	var workDescription=HTMLworkDescription.replace("%data%",work.description);
	$(".work-entry:last").append(workDescription);
	$(".work-entry:last").children('a').attr('href', work.url);
	
};
//Initialize variable project
var projects = {
   "project": [
  {
    "title": "MicroTale",
     "dates": "February 28, 2015",
     "url" : "https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/10422529_280831685374191_2228210405701891676_n.jpg?oh=8ae7beb4d7f04da368aae176f2ad5ecf&oe=587CAA44",
       "description": "Tinytale on the topic #bridge, became the most liked post.",
      "images": ["images/tale.jpg"]
  },
{
	"title": "GOT Game",
     "dates": "September, 2016",
     "url" : "https://www.codecademy.com/courses/javascript-beginner-en-ZA2rb/0/1?curriculum_id=506324b3a7dffd00020bf661",
     "description": "Made a small Game Of Thrones prompt game as a task of CodeAcademy JavaScript Course.",
     "images": [ "images/image002.jpg","images/image004.jpg","images/image006.jpg","images/image008.jpg","images/image010.jpg"]
}
]
};
//function to .append() projects
projects.display=function() {
	 for(var pro in projects.project)
	 {
	 	$("#projects").append(HTMLprojectStart);
	var projectTitle=HTMLprojectTitle.replace("%data%",projects.project[pro].title);
	var projectDates=HTMLprojectDates.replace("%data%",projects.project[pro].dates);
	var projectDescription=HTMLprojectDescription.replace("%data%",projects.project[pro].description);
	var new1=projectTitle+projectDates+projectDescription;
   $(".project-entry:last").append(new1);
  $(".project-entry:last").children('a').attr('href',  projects.project[pro].url);if(projects.project[pro].images.length > 0)
  {
     for (var image in projects.project[pro].images) 
     {
 	var projectImage = HTMLprojectImage.replace("%data%",projects.project[pro].images[image]);
	$('.project-entry:last').append(projectImage);
 };
}
  
};
};
//Initialize variable education
var education=
{
"schools":[
{
	"name": "Miranda PlayHouse",
	"years": "1999-2001",
	"degree": "Kindergarden",
	"major": "Playground fun!",
	"city": "Agra,India"


},
{
	"name": "CJM St. Anthony's Junior College",
	"years": "2001-2015",
	"degree": "High school",
	"city": "Agra,India",
	"major": "Java",
	"url": "http://www.stanthonysjrcollege.org/"
},
{
    "name": "SRM University",
	"years": "2015-presently",
	"degree": "Undergraduation",
	"city": "Chennai,India",
	"major": "I.T.",
	"url": "http://www.srmuniv.ac.in/"
}
],
"onlineClasses": [
{
	"title": "HTML5 Tutorial",
    "school": "w3schools",
   "dates": "December 2015",
    "url": "http://www.w3schools.com/html/"

},
{
	"title": "JSP Tutorial",
    "school": "Javatpoint",
   "dates": "August 2016",
    "url": "http://www.javatpoint.com/jsp-tutorial"
},
  {
  	"title": "Introduction to JavaScript",
    "school": "CodeAcademy",
   "dates": "September 2016",
    "url": "https://www.codecademy.com/learn/javascript"
  },
  {
     "title": "JavaScript Basics for Beginner Course",
    "school": "Udacity",
   "dates": "September 2016",
    "url": "https://www.udacity.com/course/javascript-basics--ud804"
  }
]
};
//function to .append() education
education.display=function() {
	//for School
for(edu in education.schools)
{

	 $('#education').append(HTMLschoolStart);
	var schoolName=HTMLschoolName.replace("%data%",education.schools[edu].name);
	var schoolDate=HTMLschoolDates.replace("%data%",education.schools[edu].years);
	var schoolDegree=HTMLschoolDegree.replace("%data%",education.schools[edu].degree);
	var schoolCity=HTMLschoolLocation.replace("%data%",education.schools[edu].city);
	var schoolMajor=HTMLschoolMajor.replace("%data%",education.schools[edu].major);
	var new1=schoolName+schoolDegree;
	var new2=schoolCity+schoolDate;
	$(".education-entry:last").append(new1);
	$(".education-entry:last").append(new2);
	$(".education-entry:last").append(schoolMajor);
	$(".education-entry:last").children('a').attr('href',  education.schools[edu].url);
}
//for OnlineCourses
	$('#education').append(HTMLonlineClasses);
for(online in education.onlineClasses)
{

	 $("#education").append(HTMLschoolStart);
	var onlineTitle=HTMLonlineTitle.replace("%data%",education.onlineClasses[online].title);
	var onlineSchool=HTMLonlineSchool.replace("%data%",education.onlineClasses[online].school);
	var onlineDate=HTMLonlineDates.replace("%data%",education.onlineClasses[online].dates);
	var new1=onlineTitle+onlineSchool;
	$(".education-entry:last").append(new1);
	$(".education-entry:last").append(onlineDate);
	$(".education-entry:last").children('a').attr('href',  education.onlineClasses[online].url);
}
};
//To check position of click on the page
$(document).click(function(loc){
	var x=loc.pageX;
	var y=loc.pageY;
	logClicks(x,y);
}
);
//Performing Internationalization
function inName(oldName) {
    var finalName = oldName;
    var first="",last="";
var i=0;
while(finalName[i]!==" ")
{
  
    first=first+finalName[i];
i++;
}
while(i!==finalName.length)
{
last=last+finalName[i].toUpperCase();
i++;
}

first=first[0].toUpperCase()+first.slice(1).toLowerCase();

    finalName=first+last;
    // Don't delete this line!
    return finalName;
};

// Internationalization button
$("#main").append(internationalizeButton);
//Google Map
$("#mapDiv").append(googleMap);
//Calling all functions
bio.display();
 work.display();
 projects.display();
 education.display();
 
