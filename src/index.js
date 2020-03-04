// ncaught SyntaxError: Cannot use import statement outside a module

// import addImage from './add-image';
import HiButton from './components/hi-button/hi-button';
import Heading from './components/heading/heading';

const button = new HiButton();
button.render();
// addImage();

const heading = new Heading();
heading.render();

if (process.env.NODE_ENV === 'production') {
  console.log('production mode');
} else if (process.env.NODE_ENV === 'development') {
  console.log('development mode, use sourcemaps');
} else {
  console.log('none mode');
}

// prod and dev modes handle errors differently
heading.notExistMethod();
