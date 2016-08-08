
// Bio 
var bio = {
  'name': 'Miguel Martinez', 
  'role': "Web Developer",
  "contacts": {
    "mobile": "832-420-9784",
    "email": "miguel.martinez@utexas.edu",
    "github": "MiguelAMartinez",
    "twitter": "none",
    "location": "Austin,Texas"
  },
  "welcomeMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla orci in lacus dignissim imperdiet. Maecenas vitae diam volutpat, faucibus dolor ut, rutrum dui. Cras a convallis mauris. Praesent facilisis commodo nisl, vel rhoncus leo. Aenean tincidunt suscipit urna eu facilisis. Sed vulputate in ante vitae vehicula. Morbi placerat ligula sollicitudin erat interdum interdum. Sed convallis augue tristique, venenatis arcu eget, viverra enim. Morbi ac faucibus lectus, laoreet viverra arcu.",
  "skills": [
    "Web Development", "Entrepreneurship", "Engineering", "Programming"
  ],
  "bioPic": "images/me.jpg"
};

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
};

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
};

 work.display = function() {
  work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",job.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%",job.dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%",job.description);
    $(".work-entry:last").append(formattedDescription);
  });
};

work.display();

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
};

projects.display = function() {
  projects.projects.forEach(function(project) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%",project.dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);
    $(".project-entry:last").append(formattedDescription);

    var formattedImages = HTMLprojectImage.replace("%data%",project.images);
    $(".project-entry:last").append(formattedImages);
  });
};

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
};

education.display = function() {
  education.schools.forEach(function(school) {
    $("#education").append(HTMLschoolStart);    
    var formattedName = HTMLschoolName.replace("%data%",school.name);
    $(".education-entry:last").append(formattedName);

    var formattedDegree = HTMLschoolDegree.replace("%data%",school.degree);
    $(".education-entry:last").append(formattedDegree);

    var formattedDates = HTMLschoolDates.replace("%data%",school.dates);
    $(".education-entry:last").append(formattedDates);

    var formattedLocation = HTMLschoolLocation.replace("%data%",school.location);
    $(".education-entry:last").append(formattedLocation);

    var formattedMajor = HTMLschoolMajor.replace("%data%",school.majors);
    $(".education-entry:last").append(formattedMajor);
  });

  $("#education").append(HTMLonlineClasses);
  education.schools.forEach(function(onlineCourse) {
    $("#education").append(HTMLschoolStart);    
    var formattedTitle = HTMLonlineTitle.replace("%data%",onlineCourse.title);
    $(".education-entry:last").append(formattedTitle);

    var formattedSchool = HTMLonlineSchool.replace("%data%",onlineCourse.school);
    $(".education-entry:last").append(formattedSchool);

    var formattedDates = HTMLonlineDates.replace("%data%",onlineCourse.dates);
    $(".education-entry:last").append(formattedDates);

    var formattedUrl = HTMLonlineURL.replace("%data%",onlineCourse.url);
    $(".education-entry:last").append(formattedUrl);
  });
};

education.display();

// Clicks
$("#mapDiv").append(googleMap);