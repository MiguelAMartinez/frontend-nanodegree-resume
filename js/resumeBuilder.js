
// Bio 

var bio = {
  "name": "Miguel Martinez", 
  "role": "Web Developer",
  "contacts": {
  	"mobile": "832-420-9784",
  	"email": "miguel.martinez@utexas.edu",
  	"github": "MiguelAMartinez",
    "twitter": "none",
  	"location": "Austin,Texas"
  },
  "welcomeMessage": "Welcome to my website!",
  "skills": [
    "Web Development", "Entrepreneurship", "Engineering", "Programming"
  ],
  "bioPic": "images/me.jpg"
}

bio.display = function() {

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").prepend(formattedName + formattedRole + formattedBioPic + formattedWelcomeMsg);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill0 = HTMLskills.replace("%data%", bio.skills[0]);
    var formattedSkill1 = HTMLskills.replace("%data%", bio.skills[1]);
    var formattedSkill2 = HTMLskills.replace("%data%", bio.skills[2]);
    var formattedSkill3 = HTMLskills.replace("%data%", bio.skills[3]); 
    $("#skills").append(formattedSkill0 + formattedSkill1 + formattedSkill2 + formattedSkill3);
  }
}

bio.display();


// Work experience

var work = {
  "jobs": [
  {
    "employer": "Lyft",
    "title": "City Growth Leader",
    "location": "Austin, Texas",
    "dates": "June 2014 - May 2016",
    "description": "Developed and implemented business growth strategies<br>Established dozens of promotional partnerships with local businesses<br>Achieved acquisition of hundreds of new Lyft users"
  }, 
  {
    "employer": "UT Austin",
    "title": "Research Assistant",
    "location": "Austin, Texas",
    "dates": "June 2014 - August 2014",
    "description": "Evaluated mechanical properties of Si-metal structures via computational analysis<br>Analyzed formation of Si-metal alloys for material optimization<br>Investigated applications of Si-metal electrodes for Li ion batteries"
  }
  ]
}

 
// // **This one does not works**
// work.display = function() {
//   for (var i = 0; i < work.jobs.length; i++) {
//     $("#workExperience").append(HTMLworkStart);

//     var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
//     var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
//     var formattedEmployerTitle = formattedEmployer + formattedTitle;
//     $(".work-entry:last").append(formattedEmployerTitle);

//     var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
//     $(".work-entry:last").append(formattedDates);

//     var formattedDescription = HTMLprojectDescription.replace("%data%",work.jobs[job].description);
//     $(".work-entry:last").append(formattedDescription);
//   };
// }
// work.display();

// // **This one does not works**
//  work.display = function() {
//    work.jobs.forEach(function(job) {
//       $("#workExperience").append(HTMLworkStart);

//       var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
//       var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
//       var formattedEmployerTitle = formattedEmployer + formattedTitle;
//       $(".work-entry:last").append(formattedEmployerTitle);

//       var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
//       $(".work-entry:last").append(formattedDates);

//       var formattedDescription = HTMLprojectDescription.replace("%data%",work.jobs[job].description);
//       $(".work-entry:last").append(formattedDescription);
//     });
// }
// work.display();


// // **This one works**
//  work.display = function() {
//   for (job in work.jobs) {
//     $("#workExperience").append(HTMLworkStart);

//     var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
//     var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
//     var formattedEmployerTitle = formattedEmployer + formattedTitle;
//     $(".work-entry:last").append(formattedEmployerTitle);

//     var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
//     $(".work-entry:last").append(formattedDates);

//     var formattedDescription = HTMLprojectDescription.replace("%data%",work.jobs[job].description);
//     $(".work-entry:last").append(formattedDescription);
//   }
// }
// work.display();


// Projects

var projects = {
  "projects": [
  {
    "title": "Design Mockup Portfolio",
    "dates": "Summer 2016",
    "description": "A responsive web portfolio from a mockup design",
    "images": ["images/P2.png"]
  }, 
  {
    "title": "Animal Trading Card",
    "dates": "Summer 2016",
    "description": "Animal trading card with CSS styles",
    "images": ["images/P1.png"]
  }
  ]
}


projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    var formattedImages = HTMLprojectImage.replace("%data%",projects.projects[project].images);
    $(".project-entry:last").append(formattedImages);
  }
}

projects.display();

// Education

var education = {
  "schools": [
  {
    "name": "UT Austin",
    "location": "Austin, Texas",
    "degree": "B.S.",
    "dates": "2012 - 2016",
    "url": "http://www.utexas.edu",
    "majors": ["Chemical Engineering"]
  },
  {
    "name": "Texas Tech",
    "location": "Lubbock, Texas",
    "degree": "B.S.",
    "dates": "2011 - 2012",
    "url": "",
    "majors": ["Chemical Engineering"]
  }
  ], 
  "onlineCourses": [
  {
    "title": "Front-End ND",
    "school": "Udacity",
    "dates": "Summer 2016",
    "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
  }
  ]
}

education.display = function() {

  
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
    $(".education-entry:last").append(formattedName);

    var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
    $(".education-entry:last").append(formattedDegree);

    var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);

    var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
    $(".education-entry:last").append(formattedMajor);
  }

  $("#education").append(HTMLonlineClasses);
  for (course in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);

    var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
    $(".education-entry:last").append(formattedTitle);

    var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
    $(".education-entry:last").append(formattedSchool);

    var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
    $(".education-entry:last").append(formattedUrl);
  }
}

education.display();




// Clicks


$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

function locationizer(work_obj) {

  var locationsArray = [];

  for (job in work_obj.jobs) {
    locationsArray.push(work_obj.jobs[job].location);
  }

  return locationsArray;

}

console.log(locationizer(work));

function inName(name) {

  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
  
  return name[0] + " " + name[1];
}

$("#mapDiv").append(googleMap);
