// ncaught SyntaxError: Cannot use import statement outside a module

// import addImage from './add-image';
import HiButton from './components/hi-button/hi-button';
import Heading from './components/heading/heading';

const button = new HiButton();
button.render();
// addImage();

const heading = new Heading();
heading.render();
