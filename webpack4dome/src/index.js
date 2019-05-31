import './index.css';

import BgImg from '../common/static/bg.jpg'
import printMe from './print';

const Images = new Image();
Images.src = BgImg;
Images.style.width = '100%';
Images.style.height = '100%';
console.dir(Images)
document.querySelector('.app').appendChild(Images)


// 热更新是指不刷新页面
if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log(printMe())
  })
}