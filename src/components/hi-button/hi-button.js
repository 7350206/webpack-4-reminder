// need loader to handle exports.function

import './hi-button.scss';

class HiButton {
  // class properties are not supported for now
  // need a loader
  buttonCssClass = 'hi-button-text';

  render() {
    const button = document.createElement('button');
    const body = document.querySelector('body');
    button.innerHTML = 'Hi there';
    button.classList.add('hi-button');

    button.onclick = function() {
      const p = document.createElement('p');
      p.innerHTML = 'Hi there';
      p.classList.add(this.buttonCssClass);
      // p.classList.add('hi-button-text');

      body.appendChild(p);
    };

    body.appendChild(button);
  }
}

export default HiButton;
