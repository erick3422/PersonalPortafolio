// ===================== DARK THEME ==================== //

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'


// ============ PREVIOUSLY SELECTED TOPIC (if user selected)======== //

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validation the dar theme // 

const getCurrentTheme = () => document.body.classList.contains(darkTheme)? 'dark': 'light'
const getCurrentIcon = () => document.body.classList(iconTheme)? 'uil-lamp':
'uil-sun'

// We need to validate if the user has previously chooses a topic //
if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark'? 'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon=== 'uil-lamp' ? 'add' : 'remove'](iconTheme)
}

// Activate/ deactivate the theme  manually with the button //

themeButton.addEventListener('click', () => {
    // Add or remove the dark/light icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user has chosen
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// =========================== MENU SHOW AND HIDDEN ==================== //

const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')


// ========================== MENU SHOW =====================//
/* Validate if the constants exits */

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// ========================== MENU HIDDEN =====================//
/* Validate if the constants exits */

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// ===================== REMOVE MENU ==================== //

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When click nav__link will remove the menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
