// need loader to handle exports.function

import './hi-button.css';

class HiButton {
  render() {
    const button = document.createElement('button');
    const body = document.querySelector('body');
    button.innerHTML = 'Hi there';
    button.classList.add('hi-button');

    button.onclick = function() {
      const p = document.createElement('p');
      p.innerHTML = 'Hi there';
      p.classList.add('hi-button-text');

      body.appendChild(p);
    };

    body.appendChild(button);
  }
}

export default HiButton;
