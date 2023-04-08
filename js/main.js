const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const projects = document.querySelector('#projects')
const help = document.querySelector('#help')

const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const projectsContent = document.querySelector('#projects-content')
const helpContent = document.querySelector('#help-content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    // modal: true,
    width: '1000px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})
projects.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'My Projects',
    width: '1000px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: projectsContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})
help.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'About This Website',
    width: '400px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 500,
    mount: helpContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})




contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '400px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 850,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})