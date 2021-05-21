import _ from 'lodash';
import obj from './shared';
obj.count++;
console.log(obj.count);
console.log(_.join(['Another', 'module', 'loaded!'], ''));
