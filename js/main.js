window.addEventListener('DOMContentLoaded', function () {
	const tabs = document.querySelectorAll('.link_title')
	const tabsContent = document.querySelectorAll('.content_box')
	const tabsLink = document.querySelectorAll('.tab_link')

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.classList.add('hide')
			item.classList.remove('show', 'fade')
		})
		tabsLink.forEach(item => {
			item.classList.remove('tab_link_active')
		})
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('show', 'fade')
		tabsContent[i].classList.remove('hide')
		tabsLink[i].classList.add('tab_link_active')
	}
	hideTabContent()
	showTabContent()

	tabs.forEach(item => {
		item.addEventListener('click', event => {
			const target = event.target

			tabs.forEach((item, i) => {
				if (target === item) {
					hideTabContent()
					showTabContent(i)
				}
			})
		})
	})
})
