const languages = {
  languages: [
    {
      name: 'English',
      level: 3,
    },
    {
      name: 'Arabic',
      level: 3,
    },
    {
      name: 'French',
      level: 1,
    },
  ],

  display() {
    'use strict'

    languages.languages.forEach((language) => {
      const formattedLanguageName = `
        <div class="language-name">${language.name}</div>
      `
      const HTMLlanguageBarStart = '<div class="progress"></div>'

      const HTMLlanguageNativeBar =
        '<div class="progress-bar-striped progress-level-3"></div>'
      const HTMLlanguageFullProficiencyBar =
        '<div class="progress-bar-striped progress-level-2"></div>'
      const HTMLlanguageLimitedProficiencyBar =
        '<div class="progress-bar-striped progress-level-1"></div>'

      const HTMLlanguageNative = '<span>Native or bilingual proficiency</span>'
      const HTMLlanguageFullProficiency =
        '<span>Full professional proficiency</span>'
      const HTMLlanguageLimitedProficiency =
        '<span>Limited professional proficiency</span>'

      $('.languages').append(formattedLanguageName)
      $('.languages').append(HTMLlanguageBarStart)

      if (language.level === 3) {
        $('.progress:last').append(HTMLlanguageNativeBar)
        $('.progress-level-3:last').append(HTMLlanguageNative)
      } else if (language.level === 2) {
        $('.progress:last').append(HTMLlanguageFullProficiencyBar)
        $('.progress-level-2:last').append(HTMLlanguageFullProficiency)
      } else if (language.level === 1) {
        $('.progress:last').append(HTMLlanguageLimitedProficiencyBar)
        $('.progress-level-1:last').append(HTMLlanguageLimitedProficiency)
      } else {
        console.log("Something isn't right....Didn't find a language level")
      }
    })
  },
}
languages.display()
