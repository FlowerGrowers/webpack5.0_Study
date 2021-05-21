import * as _ from 'lodash';
// 没有默认导出

// 要使导入默认这样做，并保持从'lodash'导入_；
// TypeScript的语法，在你的tsconfig.json文件中设置 "allowSyntheticDefaultImports"：true和 "esModuleInterop"：true。
// 这与TypeScript的配置有关，在我们的指南中提到的只是供你参考。
// 注意，如果你已经使用babel-loader来转译你的代码，你可以使用@babel/preset-typescript，让Babel同时处理你的JavaScript和TypeScript文件，而不是使用一个额外的加载器。请记住，与ts-loader相反，底层的@babel/plugin-transform-typescript插件并不执行任何类型检查。
function component() {
  const element = document.createElement('div');
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
