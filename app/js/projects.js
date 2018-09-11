const projects = {
  projects: [
    {
      title: "That's Delicious",
      dates: 'July 2018',
      description:
        'A full stack restaurant application where users can search, geolocate, review and add/edit their favourite restaurants from around the world.',
      technologies: [
        'Node',
        'Express',
        'mongoDB',
        'passportJS',
        'ES6/7',
        'HTML5',
        'Pug',
        'Sass',
        'CSS3',
        'Webpack',
        'Babel',
        'Heroku',
      ],
      images: ['./images/thats-delicious.png'],
      github: 'https://github.com/tlabna/thats-delicious',
      demo: 'https://thats-delicious-wb.herokuapp.com/',
    },
    {
      title: 'Duckr',
      dates: 'December 2017',
      description: 'Twitter like application built with React and Redux.',
      technologies: [
        'React',
        'Redux',
        'ImmutableJS',
        'NPM',
        'Webpack',
        'Babel',
        'HTML',
        'CSS',
        'Firebase',
      ],
      images: ['./images/duckr.png'],
      github: 'https://github.com/tlabna/duckr',
      demo: 'https://duckr-wb.firebaseapp.com/',
    },
    {
      title: 'Bus Finder Demo',
      dates: 'June 2017',
      description:
        'Responsive micro-site demo built with React (using Busbud API and hosted on Heroku) that triggers a departure search on a specific day for users travelling from New York to Montreal who want to attend the Osheaga Music Festival.',
      technologies: [
        'React',
        'Express',
        'NPM',
        'Webpack',
        'Babel',
        'Axios',
        'HTML',
        'CSS',
        'Heroku',
      ],
      images: ['./images/bus-finder.png'],
      github: 'https://github.com/tlabna/coding-challenge-frontend-b',
      demo: 'https://busbud-finder-challenge.herokuapp.com/',
    },
    {
      title: 'GitHub Battle',
      dates: 'May 2017',
      description:
        'Developed a React single page application using GitHub API where users can compare GitHub user accounts as well as display popular repositories on GitHub.',
      technologies: [
        'ES6',
        'React',
        'Firebase',
        'NPM',
        'Webpack',
        'Babel',
        'Axios',
        'HTML',
        'CSS',
      ],
      images: ['./images/github-battle.png'],
      github: 'https://github.com/tlabna/github-battle',
      demo: 'https://github-battle-ec28a.firebaseapp.com',
    },
    {
      title: 'Linux Server Configuration',
      dates: 'April 2017',
      description:
        'Hosted music catalog on Amazon servers, secured it from a number of attack vectors and installed/configured web and database servers.',
      technologies: ['SSH', 'Linux', 'Apache', 'PostgreSQL'],
      images: ['images/music-catalog-linuxserver.png'],
      github: 'https://github.com/tlabna/linux-server-config',
      demo: '',
    },
    {
      title: 'Feed Reader Testing',
      dates: 'April 2017',
      description:
        "Programmed comprehensive unit tests, using the Jasmine testing framework, for an RSS Feed Reader application that uses Google's RSS API.",
      technologies: ['JavaScript', 'Jasmine', 'JavaScript testing frameworks'],
      images: ['images/feed-reader.png'],
      github: 'https://github.com/tlabna/feedreader-testing',
      demo: '',
    },
    {
      title: 'Neighbourhood Map',
      dates: 'March 2017',
      description:
        'Responsive single page web application (uses Foursquare API and Google Maps API) to find interesting places in a neighbourhood.',
      technologies: [
        'JavaScript',
        'HTML',
        'CSS',
        'Knockout',
        'AJAX',
        'JavaScript frameworks',
      ],
      images: ['images/neighbourhood-map.png'],
      github: 'https://github.com/tlabna/neighbourhood-map',
      demo: 'https://tlabna.github.io/neighbourhood-map/dist/index.html',
    },
    {
      title: 'Item Catalog',
      dates: 'March 2017',
      description:
        'Developed a content management system using the Flask framework in Python. Authentication is provided via OAuth and all data is stored within a PostgreSQL database.',
      technologies: ['HTML', 'CSS', 'Python', 'Flask', 'SQL', 'Vagrant'],
      images: ['images/music-catalog.png'],
      github: 'https://github.com/tlabna/item-catalog',
      demo: '',
    },
    {
      title: 'Website Optimization',
      dates: 'March 2017',
      description:
        "Optimized an inefficient web application's JavaScript, CSS and assets delivery, ensuring it runs at 60fps and achieves a PageSpeed score of at least 90.",
      technologies: [
        'HTML',
        'CSS',
        'Chrome Developer Tools',
        'Critical rendering path',
        '60FPS rendering',
      ],
      images: ['images/pagespeed-insights.png'],
      github: 'https://github.com/tlabna/website-optimization',
      demo: '',
    },
    {
      title: 'Online Resume',
      dates: 'December 2016',
      description:
        'Using jQuery, developed an interactive resume application that reads all data from a JSON file and then dynamically modifies the DOM to display the information. Further customized the project by personalizing the design using CSS.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'JQuery'],
      images: ['images/online-resume2.png'],
      github: 'https://github.com/tlabna/online-resume',
      demo: '',
    },
  ],

  display() {
    'use strict'

    const HTMLprojectStart = '<div class="project--entry thumbnail"></div>'
    const HTMLprojectCaption = '<div class="caption"></div>'
    const HTMLprojectTitle = '<h3>%data%</h3>'
    // Dates removed
    // const HTMLprojectDates = '<div class="date-text">%data%</div>'
    const HTMLprojectDescription = '<h5>%data%</h5>'
    const HTMLprojectImage =
      '<div class="project--image"><img src="%data%"></div>'
    const HTMLprojectTechnologies = '<h5 class="project--technologies"></h5>'
    const HTMLprojectTechnology = '<span class="label">%data%</span>'
    const HTMLprojectLinks = '<div class="project--links"></div>'
    const HTMLprojectDemo =
      "<a href='#' class='btn project--button demo'>Demo</a>"
    const HTMLprojectGithub =
      "<a href='#' class='btn project--button'>Github</a>"

    projects.projects.forEach((project) => {
      $('.projects').append(HTMLprojectStart)

      const formattedTitle = HTMLprojectTitle.replace('%data%', project.title)
      // Dates removed
      // const formattedDates = HTMLprojectDates.replace('%data%', project.dates)
      const formattedDescription = HTMLprojectDescription.replace(
        '%data%',
        project.description
      )

      if (project.images.length > 0) {
        for (let image = 0; image < project.images.length; image++) {
          var formattedImage = HTMLprojectImage.replace(
            '%data%',
            project.images[image]
          )

          $('.thumbnail:last').append(formattedImage)
        }
      }

      // Project caption container
      $('.thumbnail:last').append(HTMLprojectCaption)

      // Caption Details
      $('.caption:last').append(formattedTitle)
      // Removing dates $(".caption:last").append(formattedDates);

      // Check if we technologies, then apply container and label for each technology
      if (project.technologies.length > 0) {
        $('.caption:last').append(HTMLprojectTechnologies)

        for (let tech = 0; tech < project.technologies.length; tech++) {
          const formattedTechnology = HTMLprojectTechnology.replace(
            '%data%',
            project.technologies[tech]
          )

          $('.project--technologies:last').append(formattedTechnology)
        }
      }

      $('.caption:last').append(formattedDescription)

      // Project Links container
      $('.thumbnail:last').append(HTMLprojectLinks)

      // Check if github or demo links are available, if so append button to container
      if (project.github !== '') {
        const formattedGithub = HTMLprojectGithub.replace('#', project.github)
        $('.project--links:last').append(formattedGithub)
      }

      if (project.demo !== '') {
        const formattedDemo = HTMLprojectDemo.replace('#', project.demo)
        $('.project--links:last').append(formattedDemo)
      }
    })
  },
}
projects.display()

/**
 * Sets image container elements to equal largest image height
 * This will lineup project card sections evenly on all device sizes
 *
 */
function equalizeImageHeights() {
  const imageDivs = document.querySelectorAll('.project--image img')
  let tallestHeight = 0

  imageDivs.forEach((imageDiv) => {
    if (imageDiv.offsetHeight > tallestHeight) {
      tallestHeight = imageDiv.offsetHeight
    }
  })

  $('.project--image').height(tallestHeight)
}

// equalizeImageHeights on page load and window resize
$(window).on('load', equalizeImageHeights)
$(window).resize(equalizeImageHeights)
