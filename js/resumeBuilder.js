/*
This is empty on purpose! Your code to build the resume will go here.
 */

/* BIO */
var bio = {
    "name": "Tamer Labna",
    "role": "Software Engineer - Full Stack Developer",
    "contacts": {
        "mobile": "514-690-1248",
        "email": "tlabna@udacity.com",
        "github": "@tlabna",
        "location": "Montreal, QC"
    },
    "biopic": "images/fry.jpg",
    "welcomeMessage": "Welcome to my Resume! Here you'll get to know a little about me and my past experiences. If you wish to get in conact with me, don't hesitate to get in touch.",
    "skills": ["HTML", "CSS", "JS", "AJAX", "Python", "MySQL", "Django"],
    "display": function() {

        // Formatting Name + Role + Welcome message
        var splitNames = bio.name.split(" ");
        var formattedFirstName = HTMLheaderFName.replace("%data%", splitNames[0].toUpperCase());
        var formattedLastName = HTMLheaderLName.replace("%data%", splitNames[1].toUpperCase());
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#header").prepend(formattedWelcomeMsg);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedLastName);
        $("#header").prepend(formattedFirstName);

        // Formatting Contacts
        var formattedMobile;
        var formattedEmail;
        var formattedGitHub;
        var formattedLocation;

        for (var contact in bio.contacts) {
            if (bio.contacts.hasOwnProperty(contact)) {
                if (contact == 'mobile') {
                    formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact]);
                } else if (contact == 'email') {
                    formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact]);
                } else if (contact == 'github') {
                    formattedGitHub = HTMLgithub.replace("%data%", bio.contacts[contact]);
                } else if (contact == 'location') {
                    formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contact]);
                } else {
                    console.log("Seems we don't have a matching key for contacts...");
                }
            }
        }

        var contactArray = [];
        contactArray.push(formattedMobile, formattedEmail, formattedGitHub, formattedLocation);

        for (var i = 0; i < contactArray.length; i++) {
            $("#topContacts").append(contactArray[i]);
            $("#footerContacts").append(contactArray[i]);
        }

        // Formatting Bio Pic
        var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
        //$("#header").append(formattedbioPic);

    }
};

/* Creating a chart to display skills.
Using chartjs library: http://www.chartjs.org/docs/#polar-area-chart */

if (bio.skills.length > 0) {

    bio.skills.forEach(function(skill) {

        var formattedSkills = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkills);
    });

} else {
    console.log("No skills....");
}

var data = [{
    value: 10,
    color: "#F7464A",
    highlight: "#FF5A5E",
    label: bio.skills[0], //HTML
    labelcolor: "#F7464A" //red
}, {
    value: 8,
    color: "#FFCC00",
    highlight: "#FFEB99",
    label: bio.skills[1], //CSS
    labelcolor: "#FFCC00" //yellow
}, {
    value: 8,
    color: "#FF9933",
    highlight: "#ffcc99",
    label: bio.skills[2], //JS
    labelcolor: "#FF9933" //orange
}, {
    value: 6,
    color: "#3399FF",
    highlight: "#99CCFF",
    label: bio.skills[3], //AJAX
    labelcolor: "#3399FF" //light blue
}, {
    value: 8,
    color: "#33CC33",
    highlight: "#ADEBAD",
    label: bio.skills[4], //Python
    labelcolor: "#33CC33"
}, {
    value: 5,
    color: "#FF66FF",
    highlight: "#FF99FF",
    label: bio.skills[5], //MySQL
    labelcolor: "#FF66FF"
}, {
    value: 7,
    color: "#999",
    highlight: "#CCC",
    label: bio.skills[6], //DJANGO
    labelcolor: "#999" //grey
}];

// Display skill labels
var skillsChartLabels = function() {
    for (var skill = 0; skill < data.length; skill++) {
        var skillLabel = data[skill].label;
        var skillHTML = '<span class="label" style="background-color: ' + data[skill].labelcolor + '">' + skillLabel + '</span>';
        $("#skills-list").append(skillHTML);
    }
};

// Call functions
window.onload = function() {
    var ctx = document.getElementById("skills-chart").getContext("2d");
    window.myPolarAreaChart = new Chart(ctx).PolarArea(data, {
        responsive: false
    });
    // Call skillsChartLabels function defined
    skillsChartLabels();
};

bio.display();

var education = {
    "schools": [{
        "name": "Mcgill University",
        "location": "Montreal, QC",
        "degree": "B. Engineering",
        "dates": "2007-2012",
        "url": "https://www.mcgill.ca/",
        "majors": ["Computer Engineering", "Management"]
    }],

    "onlineCourses": [{
        "title": "Front-End Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com"
    }, {
        "title": "Full-Stack Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/"
    }],

    "display": function() {

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
                currentSchool.majors.forEach(function(major) {
                    var formattedMajor = HTMLschoolMajor.replace("%data%", major);
                    $(".education-entry:last").append(formattedMajor);
                });
            }
        }

        $('#education').append(HTMLonlineClasses);

        for (var onlineCourse = 0; onlineCourse < education.onlineCourses.length; onlineCourse++) {
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
    "jobs": [{
        "employer": "FixMeStick Technologies",
        "title": "Software Engineer",
        "location": "Montreal, QC",
        "dates": "2013 - 2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus officia commodi molestias soluta incidunt hic non excepturi tempora sint repellendus illum, quas quam accusamus. Quos tenetur, deserunt magnam cum reprehenderit."
    }, {
        "employer": "McGill University",
        "title": "Senior IT Consultant",
        "location": "Montreal, QC",
        "dates": "2011-2012",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum neque praesentium perspiciatis veritatis exercitationem, deleniti obcaecati accusamus necessitatibus voluptatibus, assumenda sunt? Voluptatem accusamus minus ullam, illum deserunt numquam, quidem cum."
    }, {
        "employer": "McGill University",
        "title": "Junior IT Consultant",
        "location": "Montreal, QC",
        "dates": "2011",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sit eos facilis quos nostrum totam accusantium, corrupti ipsam aspernatur est numquam minus possimus adipisci ad aperiam, maiores. Error, facilis, quam."
    }, {
        "employer": "McGill University",
        "title": "Research Assistant",
        "location": "Montreal, QC",
        "dates": "2011-2012",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint repellat aut, accusamus optio molestias sit ipsum, eveniet dolor. Beatae laudantium veniam modi ea, quibusdam repellendus dolor similique vitae culpa distinctio."
    }],

    "display": function() {
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
    "projects": [{
        "title": "Lorem1",
        "dates": "2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi asperiores sapiente iusto dicta saepe commodi et sit beatae iste quibusdam voluptatum optio fuga, impedit nulla nisi a quo, repellat reprehenderit.",
        "images": ["images/197x148.gif"]
    }, {
        "title": "Lorem2",
        "dates": "2015",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, voluptates. Commodi et rem facere quis, laboriosam nostrum sint cupiditate ipsum harum necessitatibus corporis inventore molestiae dolorum doloribus at tempora minima.",
        "images": ["images/197x148.gif", "images/197x148.gif"]
    }],

    "display": function() {
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

    splitName[0] = splitName[0].slice(0, 1).toUpperCase() + splitName[0].slice(1).toLowerCase();
    splitName[1] = splitName[1].toUpperCase();

    var inName = splitName[0] + " " + splitName[1];

    return inName;
}

$('#mapDiv').append(googleMap);
