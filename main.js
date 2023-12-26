import './sass//style.scss';

const body = document.querySelector('body');
const toggleButton = document.getElementById('mobile-nav-toggler');

toggleButton.addEventListener('click', toggleNavigation);

function toggleNavigation() {
  if (body.classList.contains('mobile-navigation-open')) {
    body.classList.remove('mobile-navigation-open');
    toggleButton.setAttribute('aria-expanded', 'false');
  } else {
    body.classList.add('mobile-navigation-open');
    toggleButton.setAttribute('aria-expanded', 'true');
  }
}
