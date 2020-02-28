import _ from 'lodash';

// output management
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // output management
  const btn = document.createElement('button');
  btn.innerHTML = 'click me and check the console';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
