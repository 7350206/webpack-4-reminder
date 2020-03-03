// ncaught SyntaxError: Cannot use import statement outside a module

import addImage from './add-image';
import HiButton from './components/hi-button/hi-button';

const Button = new HiButton();
Button.render();
// addImage();
