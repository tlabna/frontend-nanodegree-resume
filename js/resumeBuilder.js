/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name"  : "Tamer Labna",
    "role" : "Software Engineer - Full Stack Software Engineer",
    "contacts" : {
        "mobile" : "514-690-1248",
        "email" : "tlabna@udacity.com",
        "github" : "@tlabna",
        "location" : "Montreal"
    },
    "biopic" : "images/fry.jpg",
    "welcomeMessage" : "Welcome to my Resume!",
    "skills" : ["HTML", "CSS", "JS", "AJAX", "Python", "MySQL", "Django"],
    "display" : function () {

        // Formatting Name & Role
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        // Formatting Contacts
        var formattedMobile;
        var formattedEmail;
        var formattedGitHub;
        var formattedLocation;

        for (var contact in bio.contacts) {
            if (bio.contacts.hasOwnProperty(contact)) {
                if (contact == 'mobile') {
                    formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact]);
                }
                else if (contact == 'email') {
                    formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact]);
                }
                else if (contact == 'github') {
                    formattedGitHub = HTMLgithub.replace("%data%", bio.contacts[contact]);
                }
                else if (contact == 'location') {
                    formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contact]);
                }
                else {
                    console.log("Seems we don't have a matching key for contacts...");
                }
            }
        }

        var contactArray = [];
        contactArray.push(formattedMobile, formattedEmail, formattedGitHub, formattedLocation);

        for (var i=0; i < contactArray.length; i++) {
            $("#topContacts").append(contactArray[i]);
            $("#footerContacts").append(contactArray[i]);
        }

        // Formatting Bio Pic
        var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedbioPic);

        //Formatting Welcome message
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);


        // Formatting skills
        if (bio.skills.length > 0) {

            $("#header").append(HTMLskillsStart);

            bio.skills.forEach(function(skill) {

                var formattedSkills = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedSkills);
            });

        } else {
            console.log("No skills....");
        }
            }
        };

bio.display();

var education = {
    "schools" : [
        {
            "name" : "Mcgill University",
            "location" : "Montreal, QC",
            "degree" : "B. Engineering",
            "dates" : "2007-2012",
            "url" : "https://www.mcgill.ca/",
            "majors" : ["Computer Engineering", "Management"]
        }
    ],

    "onlineCourses" : [
        {
            "title" : "Front-End Nanodegree",
            "school" : "Udacity",
            "dates" : "2016",
            "url" : "https://www.udacity.com"
        },
        {
            "title" : "Full-Stack Nanodegree",
            "school" : "Udacity",
            "dates" : "2016",
            "url" : "https://www.udacity.com/"
        }
    ],

    "display" : function () {

        for (var school = 0; school < education.schools.length; school++) {
            $("#education").append(HTMLschoolStart);

            var currentSchool = education.schools[school];

            var formattedName = HTMLschoolName.replace("%data%", currentSchool.name);
            var formattedLocation = HTMLschoolLocation.replace("%data%", currentSchool.location);
            var formattedDegree = HTMLschoolDegree.replace("%data%", currentSchool.degree);
            var formattedDates = HTMLschoolDates.replace("%data%", currentSchool.dates);
            var formattedURL = HTMLonlineURL.replace("%data%", currentSchool.url);

            $(".education-entry:last").append(formattedName + formattedDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedLocation);
            $(".education-entry:last").append(formattedURL);

            if (currentSchool.majors.length > 0) {
                currentSchool.majors.forEach(function (major) {
                    var formattedMajor = HTMLschoolMajor.replace("%data%", major);
                    $(".education-entry:last").append(formattedMajor);
                });
            }
        }

        $('#education').append(HTMLonlineClasses);

        for (var onlineCourse= 0; onlineCourse < education.onlineCourses.length; onlineCourse++ ) {
            $("#education").append(HTMLschoolStart);

            var currentCourse = education.onlineCourses[onlineCourse];

            var formattedTitle = HTMLonlineTitle.replace("%data%", currentCourse.title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", currentCourse.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", currentCourse.dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", currentCourse.url);

            $(".education-entry:last").append(formattedTitle + formattedSchool);
            $(".education-entry:last").append(formattedOnlineDates);
            $('.education-entry:last').append(formattedOnlineURL);
        }

    }
};

education.display();

var work = {
    "jobs" : [
        {
            "employer" : "FixMeStick Technologies",
            "title" : "Software Engineer",
            "location" : "Montreal",
            "dates" : "2013 - 2016",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus officia commodi molestias soluta incidunt hic non excepturi tempora sint repellendus illum, quas quam accusamus. Quos tenetur, deserunt magnam cum reprehenderit."
        },
        {
            "employer" : "McGill University",
            "title" : "Senior IT Consultant",
            "location" : "Montreal",
            "dates" : "2011-2012",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum neque praesentium perspiciatis veritatis exercitationem, deleniti obcaecati accusamus necessitatibus voluptatibus, assumenda sunt? Voluptatem accusamus minus ullam, illum deserunt numquam, quidem cum."
        }
    ],

    "display" : function () {
        for (var job = 0; job < work.jobs.length; job++) {
                //create new div for work experience
                $("#workExperience").append(HTMLworkStart);

                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
                var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
                var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
                var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
                var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

                $(".work-entry:last").append(formattedEmployer + formattedWorkTitle);
                $(".work-entry:last").append(formattedLocation);
                $(".work-entry:last").append(formattedDates);
                $(".work-entry:last").append(formattedDescription);
        }
    }
};
work.display();

var projects = {
    "projects" : [
        {
            "title" : "Lorem1",
            "dates" : "2016",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi asperiores sapiente iusto dicta saepe commodi et sit beatae iste quibusdam voluptatum optio fuga, impedit nulla nisi a quo, repellat reprehenderit.",
            "images" : ["images/fry.jpg"]
        },
        {
            "title" : "Lorem2",
            "dates" : "2015",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, voluptates. Commodi et rem facere quis, laboriosam nostrum sint cupiditate ipsum harum necessitatibus corporis inventore molestiae dolorum doloribus at tempora minima.",
            "images" : ["images/fry.jpg", "images/197x148.gif"]
        }
    ],

    "display" : function () {
        for (var project = 0; project < projects.projects.length; project++) {

            $("#projects").append(HTMLprojectStart);

            var currentProject = projects.projects[project];

            var formattedTitle = HTMLprojectTitle.replace("%data%", currentProject.title);
            var formattedDates = HTMLprojectDates.replace("%data%", currentProject.dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", currentProject.description);

            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);

            if (currentProject.images.length > 0) {
                currentProject.images.forEach(function(image) {
                    var formattedImage = HTMLprojectImage.replace("%data%", image);

                    $(".project-entry:last").append(formattedImage);
                });
            }
        }
    }
};
projects.display();

//collecting click locations function
$(document).click(function(loc) {
  // your code goes here
  var xCord = loc.pageX;
  var yCord = loc.pageY;

  logClicks(xCord, yCord);

});

$("#main").append(internationalizeButton);

function inName(name) {

    var splitName = name.split(" ");

    splitName[0] = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1).toLowerCase();
    splitName[1] = splitName[1].toUpperCase();

    var inName = splitName[0] + " " + splitName[1];

    return  inName;
}

$('#mapDiv').append(googleMap);
