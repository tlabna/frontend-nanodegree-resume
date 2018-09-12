const distinctions = {
  distinctions: [
    'Member of the McGill varsity tennis team',
    'Competed in pro level tennis tournaments internationally',
    'GCSE Award for best school project in Information Technology (Top 3% Worldwide)',
    'International Award (also known as the Duke of Edinburgh Award) - Gold Level',
  ],
  display() {
    'use strict'

    const [...distinctionsList] = distinctions.distinctions
    const htmlDistinctionsList = '<ul class="distinctions-list"></ul>'

    $('.distinctions').append(htmlDistinctionsList)

    distinctionsList.forEach((distinction) => {
      const htmlDistinctionItem = `<li>${distinction}</li>`
      $('.distinctions-list').append(htmlDistinctionItem)
    })
  },
}
distinctions.display()
