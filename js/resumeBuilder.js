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
        'use strict';

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

        if (bio.skills.length > 0) {

            bio.skills.forEach(function(skill) {

                var formattedSkills = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedSkills);
            });

        } else {
            console.log("No skills....");
        }

        // Formatting Bio Pic
        var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
        //$("#header").append(formattedbioPic);

    }
};

/* Creating a chart to display skills.
Using chartjs library: http://www.chartjs.org/docs/#polar-area-chart */

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
    'use strict';

    for (var skill = 0; skill < data.length; skill++) {
        var skillLabel = data[skill].label;
        var skillHTML = '<span class="label" style="background-color: ' + data[skill].labelcolor + '">' + skillLabel + '</span>';
        $("#skills-list").append(skillHTML);
    }
};

// Call functions
window.onload = function() {
    'use strict';

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
        "name": "McGill University",
        "location": "Montreal, QC",
        "degree": "B. Engineering",
        "dates": "2012",
        "majors": ["Computer Engineering"],
        "minors": ["Management"]
    }],

    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com"
    }, {
        "title": "Full Stack Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com"
    }],

    "display": function() {
        'use strict';

        for (var school = 0; school < education.schools.length; school++) {
            $("#education").append(HTMLschoolStart);

            var currentSchool = education.schools[school];

            var formattedName = HTMLschoolName.replace("%data%", currentSchool.name);
            var formattedLocation = HTMLschoolLocation.replace("%data%", currentSchool.location);
            var formattedDegree = HTMLschoolDegree.replace("%data%", currentSchool.degree);
            var formattedDates = HTMLschoolDates.replace("%data%", currentSchool.dates);

            $(".education-entry:last").append(formattedDegree);
            $(".education-entry:last").append(formattedName);
            $(".education-entry:last").append(formattedLocation);
            $(".education-entry:last").append(formattedDates);

            if (currentSchool.majors.length > 0) {
                for (var major = 0; major < currentSchool.majors.length; major++) {
                    var formattedMajor = HTMLschoolMajor.replace("%data%", currentSchool.majors[major]);
                    $(".education-entry:last").append(formattedMajor);
                }
            }

            if (currentSchool.minors.length > 0) {
                for (var minor = 0; minor < currentSchool.minors.length; minor++) {
                    var formattedMinor = HTMLschoolMinor.replace("%data%", currentSchool.minors[minor]);
                    $(".education-entry:last").append(formattedMinor);
                }
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

            $(".education-entry:last").append(formattedTitle);
            $(".education-entry:last").append(formattedSchool);
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
        "dates": "2013—2015",
        "description": [
                        "Administered complete customer support system, including web development of customer platform as well as communicating with 1000s of customers over the phone, email and chat (in English and French).",
                        "Designed responsive web apps to assist customers/employees in troubleshooting common problems and view scan history (retrieved from an AJAX request to backend API). These greatly reduce support requests.",
                        "Supervised backend (built with Django), developed improvements as well as reported bugs on Bitbucket and deployed fixes.",
                        "Created a script to re-image USBs and discovered a solution to enable Bluetooth compatibility for an early stage Mac product which was crucial to the success of the product launch.",
                        "Coordinated and took initiative to bring 12 employees up to speed with using the product and how to efficiently resolve support tickets. I was their go-to person when problems could not be resolved.",
                        "Played a big part in the company’s success, caught 90% of product bugs early and improved upon. Customers/employers were extremely happy with my service and going out of my way attitude."
                        ]
    }, {
        "employer": "McGill University",
        "title": "Senior IT Consultant",
        "location": "Montreal, QC",
        "dates": "2012",
        "description": [
                        "Educated professors and students how to use Information and Technology in order to meet their objectives and overcome problems.",
                        "Interviewed and assessed multiple applicants for hiring. Trained and supervised junior IT consultants."
                        ]
    }, {
        "employer": "McGill University",
        "title": "Junior IT Consultant",
        "location": "Montreal, QC",
        "dates": "2011",
        "description": [
                        "Assisted all faculty members of Desautels Faculty of Management in solving IT related issues. Ensured all hardware and software services were up to faculty standards.",
                        "Promoted in 3 months due to excellent work."
                        ]
    }, {
        "employer": "McGill University",
        "title": "Research Assistant",
        "location": "Montreal, QC",
        "dates": "2011",
        "description": [
                        "Collaborated with a professor for research in implementing an integrated glucose control system to treat patients with diabetes.",
                        "Collected data for research and used MATLAB to display data.",
                        "Successfully aided in the advancement of the research study."
                        ]
    }],

    "display": function() {
        'use strict';

        for (var job = 0; job < work.jobs.length; job++) {
            //create new div for work experience
            $("#workExperience").append(HTMLworkStart);

            var currentJob = work.jobs[job];

            var formattedEmployer = HTMLworkEmployer.replace("%data%", currentJob.employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", currentJob.title);
            var formattedLocation = HTMLworkLocation.replace("%data%", currentJob.location);
            var formattedDates = HTMLworkDates.replace("%data%", currentJob.dates);

            $(".work-entry:last").append(formattedWorkTitle);
            $(".work-entry:last").append(formattedEmployer);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDates);

            if (currentJob.description.length > 0) {
                // Append work list container (i.e <ul></ul>)
                $(".work-entry:last").append(HTMLworkDescriptionStart);

                // Go through each description and append as bullet points
                for (var i=0; i < currentJob.description.length; i++) {
                    var formattedDescription = HTMLworkDescription.replace("%data%", currentJob.description[i]);
                    $(".work-description:last").append(formattedDescription);
                }
            }

        }
    }
};
work.display();

var projects = {
    "projects": [{
        "title": "Linux Server Configuration",
        "dates": "April 2017",
        "description": "Hosted music catalog on Amazon servers, secured it from a number of attack vectors and installed/configured web and database servers.",
        "technologies": ["SSH", "Linux", "Apache", "PostgreSQL"],
        "images": ["images/music-catalog-linuxserver.png"]
    }, {
        "title": "Feed Reader Testing",
        "dates": "April 2017",
        "description": "Programmed comprehensive unit tests, using the Jasmine testing framework, for an RSS Feed Reader application that uses Google's RSS API.",
        "technologies": ["JavaScript", "Jasmine", "JavaScript testing frameworks"],
        "images": ["images/feed-reader.png"]
    },
    {
        "title": "Neighbourhood Map",
        "dates": "March 2017",
        "description": "Responsive single page web application (uses Foursquare API and Google Maps API) to find interesting places in a neighbourhood.",
        "technologies": ["JavaScript", "HTML", "CSS", "Knockout", "AJAX", "JavaScript frameworks"],
        "images": ["images/neighbourhood-map.png"]
    },
    {
        "title": "Item Catalog",
        "dates": "March 2017",
        "description": "Developed a content management system using the Flask framework in Python. Authentication is provided via OAuth and all data is stored within a PostgreSQL database.",
        "technologies": ["HTML", "CSS", "Python", "Flask", "SQL", "Vagrant"],
        "images": ["images/music-catalog.png"]
    },
    {
        "title": "Website Optimization",
        "dates": "March 2017",
        "description": "Optimized an inefficient web application's JavaScript, CSS and assets delivery, ensuring it runs at 60fps and achieves a PageSpeed score of at least 90.",
        "technologies": ["HTML", "CSS", "Chrome Developer Tools", "Critical rendering path", "60FPS rendering"],
        "images": ["images/pagespeed-insights.png"]
    },
    {
        "title": "Online Resume",
        "dates": "December 2016",
        "description": "Using jQuery, developed an interactive resume application that reads all data from a JSON file and then dynamically modifies the DOM to display the information. Further customized the project by personalizing the design using CSS.",
        "technologies": ["HTML", "CSS", "JavaScript", "JQuery"],
        "images": ["images/online-resume.png"]
    }],

    "display": function() {
        'use strict';

        for (var project = 0; project < projects.projects.length; project++) {

            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectThumbnail);

            var currentProject = projects.projects[project];

            var formattedTitle = HTMLprojectTitle.replace("%data%", currentProject.title);
            var formattedDates = HTMLprojectDates.replace("%data%", currentProject.dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", currentProject.description);

            if (currentProject.images.length > 0) {
                for (var image = 0; image < currentProject.images.length; image++) {
                    var formattedImage = HTMLprojectImage.replace("%data%", currentProject.images[image]);

                    $(".thumbnail:last").append(formattedImage);
                }
            }

            // Project caption container
            $(".thumbnail:last").append(HTMLprojectCaption);

            // Caption Details
            $(".caption:last").append(formattedTitle);
            $(".caption:last").append(formattedDates);

            //Check if we technologies, then apply container and label for each technology
            if (currentProject.technologies.length > 0) {
                $(".caption:last").append(HTMLprojectTechnologies);

                for (var tech = 0; tech < currentProject.technologies.length; tech++) {
                    var formattedTechnology = HTMLprojectTechnology.replace("%data%", currentProject.technologies[tech]);

                    $(".project-technologies:last").append(formattedTechnology);
                }
            }

            $(".caption:last").append(formattedDescription);

        }
    }
};
projects.display();

//collecting click locations function
$(document).click(function(loc) {
    'use strict';

    // your code goes here
    var xCord = loc.pageX;
    var yCord = loc.pageY;

    logClicks(xCord, yCord);

});

$("#main").append(internationalizeButton);

function inName(name) {
    'use strict';

    var splitName = name.split(" ");

    splitName[0] = splitName[0].slice(0, 1).toUpperCase() + splitName[0].slice(1).toLowerCase();
    splitName[1] = splitName[1].toUpperCase();

    var inName = splitName[0] + " " + splitName[1];

    return inName;
}

$('#mapDiv').append(googleMap);

// Handling media query for parent divs that can't be accessed through CSS

$(document).ready(function() {
    'use strict';
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

//Function to the css rule
function checkSize() {
    'use strict';

    if ($(".topContactsBox").css("float") == "none") {
        $(".topContactsBox").parent().css({
            "text-align": "center"
        });
    }
    //Remove centering if window is resized back to a larger screen
    else if ($(".topContactsBox ul").css("float" == "right") && $(".topContactsBox").parent().css("text-align") == "center") {
        $(".topContactsBox").parent().css("text-align", "");
    }
}
