import _ from 'lodash';
import Person from './classes/Person';

const josh = new Person('Josh Van Riel', 28);

console.log(josh);
josh.greet();

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
