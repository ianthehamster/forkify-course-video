import View from './View';
import icons from 'url:../../img/icons.svg';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded 😄';

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super(); // since it is a child class of View
    this._addHandlerShowWindow(); // make it private
    this._addHandlerHideWindow();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
    // toggle will add the class if it is not there and remove the class when it is there
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this)); // bind method binds the correct this keyword from toggleWindow() function to this addEventListener -> this now points to current object (i.e., _overlay, _window)
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault(); // prevent page from reloading after form submission

      const dataArr = [...new FormData(this)]; // this points to the _parentElement which is an HTML form element
      // use spread operator to convert object into an array containing all fields and its values

      const data = Object.fromEntries(dataArr); // fromEntries() takes an array of entries and converts it to an object

      handler(data); // handler() points to controlAddRecipe in controller.js
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
