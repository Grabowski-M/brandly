export default class Init {
  constructor() {
    this.menuTriggerButton = document.querySelector('.js-header__nav__trigger');
    this.headerNav = document.querySelector('.js-header__nav');

    this.init();
  }

  init() {
    this.addListenerToMenu()
  }

  addListenerToMenu() {
    this.menuTriggerButton.addEventListener('click', () => this.triggerMenu())
  }

  triggerMenu() {
    console.log(this.headerNav.classList);
    if(this.headerNav.classList.contains('is-open')) {
      this.menuOff();
    }
    else {
      this.menuOn();
    }
  }

  menuOn() {
    this.headerNav.classList.add('is-open');
  }

  menuOff() {
    this.headerNav.classList.remove('is-open');
  }
}
