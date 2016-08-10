
// Bio 
var bio = {
  'name': 'Miguel Martinez', 
  'role': 'Web Developer',
  'contacts': {
    'mobile': '832-420-9777',
    'email': 'miguel.martinez@utexas.edu',
    'github': 'MiguelAMartinez',
    'location': 'Austin, Texas'
  },
  'welcomeMessage': 'Welcome to my website! I am a highly-motivated, self-driven problem solver who loves technology and web development. I look forward to sharing my background, skills, experience, and projects with you.',
  'skills': [
    'Web Development', 'Responsive design', 'Engineering', 'Javascript'
  ],
  'biopic': 'images/me.jpg'
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace('%data%', bio.name);
  var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
  $('.header-top').prepend(formattedName + formattedRole); 

  var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
  $('.middle-image').append(formattedBioPic);

  var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
  $('.middle-text').append(formattedWelcomeMsg);

  var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
  var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
  var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
  $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);

  if (bio.skills.length > 0) {
    $('#skills').append(HTMLskillsStart);

    for (var i=0; i < bio.skills.length; i++) {
      var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
      $('.skills').append(formattedSkill);
    }
  }
};

bio.display();

// Work experience
var work = {
  'jobs': [{
    'employer': 'Lyft',
    'title': 'City Growth Leader',
    'location': 'Austin, TX',
    'dates': '06/14 - 05/16',
    'description': 'Developed and implemented business growth strategies<br>Established dozens of promotional partnerships with local businesses<br>Achieved acquisition of hundreds of new Lyft users'
  }, {
    'employer': 'UT Austin',
    'title': 'Research Assistant',
    'location': 'Austin, TX',
    'dates': '06/14 - 08/14',
    'description': 'Evaluated mechanical properties of Si-metal structures via computational analysis<br>Analyzed formation of Si-metal alloys for material optimization<br>Investigated applications of Si-metal electrodes for Li ion batteries'
  }, {
    'employer': 'UT Austin',
    'title': 'Research Assistant',
    'location': 'Austin, TX',
    'dates': '01/13 - 08/14',
    'description': 'Synthesized biodegradable gold nanoparticles<br>Designed clusters of nanoparticles with improved imaging properties<br>Researched applications for biomedical diagnosis and therapy'
  }, {
    'employer': 'Texas Parents Association',
    'title': 'Family Orientation Student Leader',
    'location': 'Austin, TX',
    'dates': '06/13 - 08/13',
    'description': 'Assisted in coordination of six Family Orientation summer sessions<br>Presented to hundreds of family members of incoming students'
  }]
};

work.display = function() {
  $('.work-title').append('<hr class="work-hr">'); 

  work.jobs.forEach(function(job) {
    $('#workExperience').append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace('%data%',job.employer);
    var formattedTitle = HTMLworkTitle.replace('%data%',job.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedLocation = HTMLworkLocation.replace('%data%',job.location);
    var formattedDates = HTMLworkDates.replace('%data%',job.dates);  
    var formattedDescription = HTMLworkDescription.replace('%data%',job.description);      
    $('.work-entry:last').append(formattedEmployerTitle + formattedDates + formattedLocation + formattedDescription);
  });
};

work.display();

// Projects
var projects = {
  'projects': [{
    'title': 'Design Mockup Portfolio',
    'dates': 'Summer 2016',
    'description': 'A responsive web portfolio from a mockup design',
    'images': ['images/P2.png']
  }, {
    'title': 'Animal Trading Card',
    'dates': 'Summer 2016',
    'description': 'Animal trading card with CSS styles',
    'images': ['images/P1.png']
  }]
};

projects.display = function() {
  $('.projects-title').append('<hr class="projects-hr">');

  projects.projects.forEach(function(project) {
    $('#projects').append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace('%data%',project.title);
    var formattedDates = HTMLprojectDates.replace('%data%',project.dates);
    var formattedDescription = HTMLprojectDescription.replace('%data%',project.description);
    $('.project-entry:last').append(formattedTitle + formattedDates + formattedDescription);

    for (var i=0; i < project.images.length; i++) {
      var formattedImage = HTMLprojectImage.replace('%data%',project.images[i]);      
      $('.project-entry:last').append(formattedImage);
    }
  });
};

projects.display();

// Education
var education = {
  'schools': [{
    'name': 'UT Austin',
    'location': 'Austin, Texas',
    'degree': 'B.S.',
    'dates': '2012 - 2016',
    'url': 'http://www.utexas.edu',
    'majors': ['Chemical Engineering']
  }, {
    'name': 'Texas Tech',
    'location': 'Lubbock, Texas',
    'degree': 'B.S.',
    'dates': '2011 - 2012',
    'url': '',
    'majors': ['Chemical Engineering']
  }],
  'onlineCourses': [{
    'title': 'Front-End ND',
    'school': 'Udacity',
    'dates': 'Summer 2016',
    'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
  }]
};

education.display = function() {
  $('.education-title').append('<hr class="education-hr">');

  education.schools.forEach(function(school) {
    $('#education').append(HTMLschoolStart);   

    var formattedName = HTMLschoolName.replace('%data%',school.name);
    var formattedDates = HTMLschoolDates.replace('%data%',school.dates);
    var formattedLocation = HTMLschoolLocation.replace('%data%',school.location);
    var formattedDegree = HTMLschoolDegree.replace('%data%',school.degree);
    $('.education-entry:last').append(formattedName + formattedDates + formattedLocation + formattedDegree);

    for (var i=0; i < school.majors.length; i++) {
        var formattedMajor = HTMLschoolMajor.replace('%data%',school.majors[i]);            
        $('.education-entry:last').append(formattedMajor);
    }
  });

  $('#education').append(HTMLonlineClasses);

  education.onlineCourses.forEach(function(onlineCourse) {
    $('#education').append(HTMLschoolStart);    

    var formattedTitle = HTMLonlineTitle.replace('%data%',onlineCourse.title);
    var formattedSchool = HTMLonlineSchool.replace('%data%',onlineCourse.school);
    var formattedDates = HTMLonlineDates.replace('%data%',onlineCourse.dates);
    var formattedUrl = HTMLonlineURL.replace('%data%',onlineCourse.url);    
    $('.education-entry:last').append(formattedTitle + formattedSchool + formattedDates + formattedUrl);
  });

  $('.map-title').append('<hr class="map-hr">');
};

education.display();

// Places I have lived
var living = {
  'places': [{
    'location': 'Valencia, Venezuela',
  }, {
    'location': 'Mexico City, Mexico',
  }, {
    'location': 'Monterry, Mexico',
  }]
};

// Maps
$('#mapDiv').append(googleMap);
