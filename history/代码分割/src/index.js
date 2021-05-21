import _ from 'lodash';
import obj from './shared';
import './style.css';
obj.count++;
console.log(obj.count);

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
