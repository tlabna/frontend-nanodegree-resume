/* BIO */
const bio = {
  name: 'Tamer Labna',
  role: 'Software Engineer - Full Stack Developer',
  contacts: {
    email: 'tlabna@me.com',
    github: 'https://github.com/tlabna/',
    linkedin: 'https://www.linkedin.com/in/tamerlabna/',
    location: 'Montreal, QC',
  },
  welcomeMessage:
    'I enjoy writing code that solves your problems and to help improve peoples lives.',
  skills: [
    'HTML',
    'CSS',
    'JS/ES6',
    'AJAX',
    'Python',
    'MySQL/PostgreSQL',
    'Django',
    'Knockout',
    'Jasmine',
    'React Ecosystem',
  ],
  display() {
    'use strict'

    /**
     * Build Header HTML
     */
    const [first, last] = bio.name.split(' ')

    const HTMLfirstName = first
      .toUpperCase()
      .split('')
      .map((letter) => {
        return `
          <span class="first-name">${letter}</span>
        `
      })
      .join('')

    const HTMLlastName = last
      .toUpperCase()
      .split('')
      .map((letter) => `<span class="last-name">${letter}</span>`)
      .join('')

    const HTMLnameBanner = `
      <h2 class="banner banner--large">
        ${HTMLfirstName}
        ${HTMLlastName}
      </h2>
    `

    const HTMLrole = `
      <p class="role">
        <mark>${bio.role}</mark>
      </p>
    `

    const HTMLwelcomeMessage = `
      <div class="welcome--message">
        <p>${bio.welcomeMessage}</p>
      </div>
    `

    const HTMLsocials = document.createElement('div')
    HTMLsocials.className = 'socials'

    const socials = Object.keys(bio.contacts)
      .map((social) => {
        if (social === 'email') {
          // skip
          return // eslint-disable-line
        } else if (social === 'github') {
          return `
          <a href=${bio.contacts[social]}>
            <svg aria-hidden="true" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512">
              <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
            </svg>
          </a>
        `
        } else if (social === 'linkedin') {
          return `
          <a href=${bio.contacts[social]}>
            <svg aria-hidden="true" data-prefix="fab" data-icon="linkedin-in" class="svg-inline--fa fa-linkedin-in fa-w-14" role="img"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor" d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"></path>
            </svg>
          </a>
        `
        } else if (social === 'location') {
          // skip
          return // eslint-disable-line
        } else {
          console.error('Ooops! something is wrong with contacts...')
        }
      })
      .join('')

    // write socials html in div
    HTMLsocials.innerHTML = socials

    $('.hero--top').append(HTMLnameBanner)
    $('.hero--top').append(HTMLrole)
    $('.hero--bottom').append(HTMLwelcomeMessage)
    $('.hero--bottom').append(HTMLsocials)

    /** End: Build Header HTML */

    /** Start: Build Skills */
    var data = [
      {
        value: 10,
        color: '#F7464A',
        highlight: '#FF5A5E',
        label: bio.skills[0], // HTML
        labelcolor: '#F7464A', // red
      },
      {
        value: 9,
        color: '#FFCC00',
        highlight: '#FFEB99',
        label: bio.skills[1], // CSS
        labelcolor: '#FFCC00', // yellow
      },
      {
        value: 8,
        color: '#FF9933',
        highlight: '#ffcc99',
        label: bio.skills[2], // JS
        labelcolor: '#FF9933', // orange
      },
      {
        value: 8,
        color: '#3399FF',
        highlight: '#99CCFF',
        label: bio.skills[3], // AJAX
        labelcolor: '#3399FF', // light blue
      },
      {
        value: 8,
        color: '#33CC33',
        highlight: '#ADEBAD',
        label: bio.skills[4], // Python
        labelcolor: '#33CC33', // green
      },
      {
        value: 7,
        color: '#FF66FF',
        highlight: '#FF99FF',
        label: bio.skills[5], // MySQL
        labelcolor: '#FF66FF', // pink
      },
      {
        value: 7,
        color: '#999',
        highlight: '#CCC',
        label: bio.skills[6], // DJANGO
        labelcolor: '#999', // grey
      },
      {
        value: 6,
        color: '#000',
        highlight: '#404040',
        label: bio.skills[7], // Knockout
        labelcolor: '#000', // black
      },
      {
        value: 5,
        color: '#9999FF',
        highlight: '#CCCCFF',
        label: bio.skills[8], // Jasmin
        labelcolor: '#9999FF', // light purple
      },
      {
        value: 8,
        color: '#2B3B8C',
        highlight: '#7686D5',
        label: bio.skills[9], // React
        labelcolor: '#2B3B8C', // dark blue
      },
    ]

    // Display skill labels
    function skillsChartLabels() {
      'use strict'

      data.forEach((skill) => {
        const skillLabel = skill.label
        const skillHTML = `
        <li class="skill" style="background-color: ${skill.labelcolor}">
          ${skillLabel}
        </li>
        `

        $('.skills--list').append(skillHTML)
      })
    }

    window.onload = function() {
      'use strict'

      var ctx = document.getElementById('skills-chart').getContext('2d')
      // eslint-disable-next-line
      window.myPolarAreaChart = new Chart(ctx).PolarArea(data, {
        responsive: true,
        maintainAspectRatio: false,
      })
      // Call skillsChartLabels function defined
      skillsChartLabels()
    }

    /** End: Build Skills */
  },
}

bio.display()
