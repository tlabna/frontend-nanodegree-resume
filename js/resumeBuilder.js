/* BIO */
var bio = {
    "name": "Tamer Labna",
    "role": "Software Engineer - Full Stack Developer",
    "contacts": {
        "mobile": "514-690-1248",
        "email": "tlabna@me.com",
        "github": "@tlabna",
        "linkedin" : "@tamerlabna",
        "location": "Montreal, QC"
    },
    "biopic": "images/fry.jpg",
    "welcomeMessage": "Welcome to my Resume! Here you'll get to know a little about me and my past experiences. If you wish to get in conact with me, don't hesitate to get in touch.",
    "skills": ["HTML", "CSS", "JS/ES6", "AJAX", "Python", "MySQL/PostgreSQL", "Django", "Knockout", "Jasmine", "React Ecosystem"],
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
        //var formattedMobile; //Removing number from site
        //var formattedEmail; //Removing email from site
        var formattedGitHub;
        var formattedLinkedIn
        var formattedLocation;

        for (var contact in bio.contacts) {
            if (bio.contacts.hasOwnProperty(contact)) {
                if (contact == 'mobile') {
                    // Removing number from site
                    //formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact]);
                } /*else if (contact == 'email') {
                    formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact]);
                }*/ else if (contact == 'github') {
                    formattedGitHub = HTMLgithub.replace("%data%", bio.contacts[contact]);
                } else if (contact == 'linkedin') {
                    formattedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts[contact]);
                } else if (contact == 'location') {
                    formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contact]);
                } else {
                    console.log("Seems we don't have a matching key for contacts...");
                }
            }
        }

        var contactArray = [];
        contactArray.push(/*formattedMobile, formattedEmail,*/ formattedGitHub, formattedLinkedIn, formattedLocation);

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
    value: 9,
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
    value: 8,
    color: "#3399FF",
    highlight: "#99CCFF",
    label: bio.skills[3], //AJAX
    labelcolor: "#3399FF" //light blue
}, {
    value: 8,
    color: "#33CC33",
    highlight: "#ADEBAD",
    label: bio.skills[4], //Python
    labelcolor: "#33CC33" //green
}, {
    value: 7,
    color: "#FF66FF",
    highlight: "#FF99FF",
    label: bio.skills[5], //MySQL
    labelcolor: "#FF66FF" //pink
}, {
    value: 7,
    color: "#999",
    highlight: "#CCC",
    label: bio.skills[6], //DJANGO
    labelcolor: "#999" //grey
}, {
    value: 6,
    color: "#000",
    highlight: "#404040",
    label: bio.skills[7], //Knockout
    labelcolor: "#000" //black
}, {
    value: 5,
    color: "#9999FF",
    highlight: "#CCCCFF",
    label: bio.skills[8], //Jasmin
    labelcolor: "#9999FF" //light purple
}, {
    value: 8,
    color: "#2B3B8C",
    highlight: "#7686D5",
    label: bio.skills[9], //React
    labelcolor: "#2B3B8C" //dark blue
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
        "dates": "2013—2016",
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
        "title": "Duckr",
        "dates": "December 2017",
        "description": "Twitter like application built with React and Redux.",
        "technologies": ["React", "Redux", "ImmutableJS", "NPM", "Webpack", "Babel", "HTML", "CSS", "Firebase"],
        "images": ["./images/duckr.png"],
        "github": "https://github.com/tlabna/duckr",
        "demo": "https://duckr-wb.firebaseapp.com/"
    },
    {
        "title": "Bus Finder Demo",
        "dates": "June 2017",
        "description": "Responsive micro-site demo built with React (using Busbud API and hosted on Heroku) that triggers a departure search on a specific day for users travelling from New York to Montreal who want to attend the Osheaga Music Festival.",
        "technologies": ["React", "Express", "NPM", "Webpack", "Babel", "Axios", "HTML", "CSS", "Heroku"],
        "images": ["./images/bus-finder.png"],
        "github": "https://github.com/tlabna/coding-challenge-frontend-b",
        "demo": "https://busbud-finder-challenge.herokuapp.com/"
    },
    {
        "title": "GitHub Battle",
        "dates": "May 2017",
        "description": "Developed a React single page application using GitHub API where users can compare GitHub user accounts as well as display popular repositories on GitHub.",
        "technologies": ["ES6", "React", "Firebase", "NPM", "Webpack", "Babel", "Axios", "HTML", "CSS"],
        "images": ["./images/github-battle.png"],
        "github": "https://github.com/tlabna/github-battle",
        "demo": "https://github-battle-ec28a.firebaseapp.com"
    },
    {
        "title": "Linux Server Configuration",
        "dates": "April 2017",
        "description": "Hosted music catalog on Amazon servers, secured it from a number of attack vectors and installed/configured web and database servers.",
        "technologies": ["SSH", "Linux", "Apache", "PostgreSQL"],
        "images": ["images/music-catalog-linuxserver.png"],
        "github": "https://github.com/tlabna/linux-server-config",
        "demo": ""
    }, {
        "title": "Feed Reader Testing",
        "dates": "April 2017",
        "description": "Programmed comprehensive unit tests, using the Jasmine testing framework, for an RSS Feed Reader application that uses Google's RSS API.",
        "technologies": ["JavaScript", "Jasmine", "JavaScript testing frameworks"],
        "images": ["images/feed-reader.png"],
        "github": "https://github.com/tlabna/feedreader-testing",
        "demo": ""
    },
    {
        "title": "Neighbourhood Map",
        "dates": "March 2017",
        "description": "Responsive single page web application (uses Foursquare API and Google Maps API) to find interesting places in a neighbourhood.",
        "technologies": ["JavaScript", "HTML", "CSS", "Knockout", "AJAX", "JavaScript frameworks"],
        "images": ["images/neighbourhood-map.png"],
        "github": "https://github.com/tlabna/neighbourhood-map",
        "demo": ""
    },
    {
        "title": "Item Catalog",
        "dates": "March 2017",
        "description": "Developed a content management system using the Flask framework in Python. Authentication is provided via OAuth and all data is stored within a PostgreSQL database.",
        "technologies": ["HTML", "CSS", "Python", "Flask", "SQL", "Vagrant"],
        "images": ["images/music-catalog.png"],
        "github": "https://github.com/tlabna/item-catalog",
        "demo": ""
    },
    {
        "title": "Website Optimization",
        "dates": "March 2017",
        "description": "Optimized an inefficient web application's JavaScript, CSS and assets delivery, ensuring it runs at 60fps and achieves a PageSpeed score of at least 90.",
        "technologies": ["HTML", "CSS", "Chrome Developer Tools", "Critical rendering path", "60FPS rendering"],
        "images": ["images/pagespeed-insights.png"],
        "github": "https://github.com/tlabna/website-optimization",
        "demo": ""
    },
    {
        "title": "Online Resume",
        "dates": "December 2016",
        "description": "Using jQuery, developed an interactive resume application that reads all data from a JSON file and then dynamically modifies the DOM to display the information. Further customized the project by personalizing the design using CSS.",
        "technologies": ["HTML", "CSS", "JavaScript", "JQuery"],
        "images": ["images/online-resume2.png"],
        "github": "https://github.com/tlabna/online-resume",
        "demo": ""
    }],

    "display": function() {
        'use strict';

        for (var project = 0; project < projects.projects.length; project++) {

            $(".projects").append(HTMLprojectStart);
            // $(".project-entry:last").append(HTMLprojectThumbnail);

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
            // Removing dates $(".caption:last").append(formattedDates);

            //Check if we technologies, then apply container and label for each technology
            if (currentProject.technologies.length > 0) {
                $(".caption:last").append(HTMLprojectTechnologies);

                for (var tech = 0; tech < currentProject.technologies.length; tech++) {
                    var formattedTechnology = HTMLprojectTechnology.replace("%data%", currentProject.technologies[tech]);

                    $(".project-technologies:last").append(formattedTechnology);
                }
            }

            $(".caption:last").append(formattedDescription);

            // Project Links container
            $(".thumbnail:last").append(HTMLprojectLinks)

            // Check if github or demo links are available, if so append button to container
            if (currentProject.github !== "") {
                var formattedGithub = HTMLprojectGithub.replace("#", currentProject.github);
                $(".project-links:last").append(formattedGithub);
            }

            if (currentProject.demo !== "") {
                var formattedDemo = HTMLprojectDemo.replace("#", currentProject.demo);
                $(".project-links:last").append(formattedDemo);
            }

        }
    }
};
projects.display();

/* Languages */
var languages = {
    "languages" : [{
        "name" : "English",
        "level" : 3
    },
    {
        "name" : "Arabic",
        "level" : 3
    },
    {
        "name" : "French",
        "level" : 1
    }],

    "display" : function() {
        'use strict';

        for (var language = 0; language < languages.languages.length; language++) {

            var currentLanguage = languages.languages[language];

            var formattedLanguageName = HTMLlanguageName.replace("%data%", currentLanguage.name);

            $("#languages").append(formattedLanguageName);
            $("#languages").append(HTMLlanguagesBarStart);

            if (currentLanguage.level == 3) {
                $(".progress:last").append(HTMLlanguageNativeBar);
                $(".progress-bar-success:last").append(HTMLlanguageNative);
            }
            else if (currentLanguage.level == 2) {
                $(".progress:last").append(HTMLlanguageFullProficiencyBar);
                $(".progress-bar-info:last").append(HTMLlanguageFullProficiency);
            }
            else if (currentLanguage.level == 1) {
                $(".progress:last").append(HTMLlanguageLimitedProficiencyBar);
                $(".progress-bar-warning:last").append(HTMLlanguageLimitedProficiency);
            }
            else {
                console.log("Something isn't right....Didn't find a number for language level");
            }
        }
    }
};
languages.display();


/* Distinctions */
var distinctions = {
    "distinctions" : [
        "Member of the McGill varsity tennis team",
        "Competed in pro level tennis tournaments internationally",
        "GCSE Award for best school project in Information Technology (Top 3% Worldwide)",
        "International Award (also known as the Duke of Edinburgh Award) - Silver Level"
    ],

    "display" : function() {
        'use strict';

        $("#distinctions").append(HTMLdistinctionsStart);

        for (var distinction = 0; distinction < distinctions.distinctions.length; distinction++){
            var currentDistinction = distinctions.distinctions[distinction];

            var formattedDistinction = HTMLdistinction.replace("%data%", currentDistinction);

            $(".distinction-list").append(formattedDistinction);

        }
    }
};
distinctions.display();

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
});

// run test on resize of the window
$(window).resize(checkSize);

//Function to the css rule
function checkSize() {
    'use strict';

    if ($(".topContactsBox").css("float") === "none") {
        $(".topContactsBox").parent().css({
            "text-align": "center"
        });
    }
    //Remove centering if window is resized back to a larger screen
    else if ($(".topContactsBox").css("float") === "right" && $(".topContactsBox").parent().css("text-align") === "center") {
        $(".topContactsBox").parent().css("text-align", "");
    }
}
