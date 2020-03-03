import Pic from './img/pic.jpg';

function addImage() {
  const img = document.createElement('img');
  img.alt = 'picture';
  img.width = 600;
  img.src = Pic;

  const body = document.querySelector('body');
  body.appendChild(img);
  // when webpack will done - name will be md5 hash with the file content
}

export default addImage;
