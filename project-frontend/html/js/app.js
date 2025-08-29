const swiper = new Swiper('.swiper', {
  mousewheel: true,
  direction: 'vertical',
  speed: 1700,
  parallax: true
})
document.querySelectorAll('.header-content h1').forEach(e => {
	e.innerHTML = e.textContent.replace(/ (-|#|@){1}/g, s => s[1]+s[0]).replace(/(\S*)/g, m => {
		return m.replace(/\S(-|#|@)?/g, '<span class="letter">$&</span>')
	})
	e.querySelectorAll('.letter').forEach(function(l, i) {
		l.setAttribute('style', `z-index: -${ i }; transition-duration: ${ i/5 + 1 }s`)
	})
})

swiper.on('slideChange', function() {
	document.querySelectorAll('.header-content-slide').forEach(function(event, index) {
		return swiper.activeIndex === index? event.classList.add('active') : event.classList.remove('active')
	})
})

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('mobileSidebar');
    const toggleBtn = document.querySelector('.anim-menu-btn');
    const closeBtn = document.querySelector('.close-sidebar');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    }
});

