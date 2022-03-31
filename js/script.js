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



// ====================== Typewriter Effect ======================= //


new Typewriter('#typewriter', {
	strings: ['Propiedad de Sandra ❤️', 'Software Engineer', 'Web Developer', 'Front End Developer', 'Web Designer', 'Gamer', 'Tech Guy', 'Grown Mind'],
	autoStart: true,
    loop: true,
    cursor: "|"
})


// ===================== Swiper Effect ======================== //

var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
        invert: false,
    },
	//navigation: {
	//	nextEl: '.swiper-button-next',
	//	prevEl: '.swiper-button-prev',
//	},
	pagination: {
		el: '.blog-slider__pagination',
        clickable: true,
	},
	// mousewheel: true,
	keyboard: true,
})

// =================== SCROLL UP SECTION ========================== //

function scrollUp() {
	const scrollup = document.getElementById('scroll-up')
	// When the scroll higher than 560 viewpoint /height , then the scroll up icon showld appear and on clicking should reach top of the page
	if (this.scrollY >= 560) {
		scrollup.classList.add('show-scroll')
	} else {
		scrollup.classList.remove('show-scroll')
	}
}
window.addEventListener('scroll', scrollUp)



// ================= SCROLL SECTION ACTIVATE HIGHLIGHT ================ //

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
	const scrollY = window.pageYOffset

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50
		sectionId = current.getAttribute('id')

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector('.nav__menu a[href*=' + sectionId + ']')
				.classList.add('active-link')
		} else {
			document
				.querySelector('.nav__menu a[href*=' + sectionId + ']')
				.classList.remove('active-link')
		}
	})

}
window.addEventListener('scroll', scrollActive)


// ====================== Email Clear Form============= // 


function submitForm() {
	var frm = document.getElementsByName('contact-form')[0]
	frm.submit() // Submit the form
	frm.reset() // Reset all form data
	return false // Prevent page refresh
}