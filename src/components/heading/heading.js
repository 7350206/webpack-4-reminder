import './heading.scss';

class Heading {
  render() {
    const body = document.querySelector('body');
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Some very useful text';
    body.appendChild(h1);
  }
}

export default Heading;
