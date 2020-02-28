import _ from 'lodash';
import Person from './classes/Person';
import '../styles/style.css';
import img from './../img/es6.jpg';

// importing data
import books from '../data/books.xml';
import users from '../data/users.json';
import us500 from '../data/us-500.csv';

const josh = new Person('Josh Van Riel', 28);

console.log(josh);
josh.greet();

console.log(books);
console.log(users);
console.log(us500);

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // add image to our div
  const logo = new Image();
  logo.src = img;
  element.appendChild(logo);

  return element;
}

document.body.appendChild(component());
