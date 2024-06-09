window.addEventListener('DOMContentLoaded', function () {
	const tabs = document.querySelectorAll('.link_title')
	const tabsContent = document.querySelectorAll('.content_box')
	const tabsLink = document.querySelectorAll('.tab_link')
	const mobileTabs = document.querySelectorAll('.mobile_content')
	const screenWidth = document.documentElement.clientWidth
	let windowResize = window.innerWidth
	console.log(windowResize)

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.classList.add('hide')
			item.classList.remove('show', 'fade')
		})
		tabsLink.forEach(item => {
			item.classList.remove('tab_link_active')
		})
		mobileTabs.forEach(item => {
			item.classList.add('mobile_content')
			item.classList.remove('mobile_content_active')
		})
	}

	function showTabContent(i) {
		tabsContent[i].classList.add('show', 'fade')
		tabsContent[i].classList.remove('hide')
		tabsLink[i].classList.add('tab_link_active')
	}

	function showMobileContent(i) {
		mobileTabs[i].classList.add('mobile_content_active', 'fade')
		mobileTabs[i].classList.remove('mobile_content')
		tabsLink[i].classList.add('tab_link_active')
	}

	if (screenWidth > 700) {
		hideTabContent(0)
		showTabContent(0)
	} else {
		hideTabContent(0)
		showMobileContent(0)
	}

	tabs.forEach(item => {
		item.addEventListener('click', event => {
			const target = event.target

			tabs.forEach((item, i) => {
				if (target === item) {
					if (screenWidth > 700) {
						hideTabContent()
						showTabContent(i)
					} else {
						hideTabContent()
						showMobileContent(i)
					}
				}
			})
		})
	})

	const nav = document.querySelector('header')
	let prevScrollpos = window.pageYOffset

	window.addEventListener('scroll', () => {
		let currentScrollPos = window.pageYOffset

		if (prevScrollpos < currentScrollPos) {
			nav.classList.add('hide_head')
		} else {
			nav.classList.remove('hide_head')
		}
		prevScrollpos = currentScrollPos
	})

	const mobile = document.querySelector('.hidden_mnu')
	const mobileOpenBtn = document.querySelector('.burger')
	const mobileCloseBtn = document.querySelector('.close')

	mobileOpenBtn.addEventListener('click', () => {
		mobile.classList.add('show_mobile', 'fade')
		mobile.classList.remove('hide_mobile')
		document.body.style.overflow = 'hidden'
	})

	const closeMobile = () => {
		setTimeout(() => {
			mobile.classList.add('hide_mobile', 'fade')
			mobile.classList.remove('show_mobile')
			document.body.style.overflow = ''
		}, 500)
	}

	mobileCloseBtn.addEventListener('click', closeMobile)
	mobile.addEventListener('click', e => {
		if (e.target === mobile) {
			closeMobile()
		}
	})

	document.addEventListener('keydown', e => {
		if (e.code === 'Escape' && mobile.classList.contains('show_mobile')) {
			closeMobile()
		}
	})

	const activeLinks = document.querySelectorAll('a[href^="#"]')
	const lnk = document.querySelectorAll('.header_link a')
	const lnkHide = document.querySelectorAll('.hide_link a')
	activeLinks.forEach((item, i) => {
		item.addEventListener('click', e => {
			event.preventDefault()
			const blockId = item.getAttribute('href')

			document.querySelector('' + blockId).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
			console.log(item)
			lnk.forEach(elem => {
				elem.classList.remove('active')
			})
			lnkHide.forEach(elem => {
				elem.classList.remove('active')
			})
			item.classList.add('active')
			closeMobile()
		})
	})
})
