class Drag {
  /**
   * el HTMLElement 指令所绑定的元素，可以用来直接操作 DOM 
   * binding 参数对象
   * vnode VNode Vue 编译生成的虚拟节点
   */
  constructor(el, binding) {
    this.el = el;
    this.binding = binding;
    this.init();
  }
  init() {
    let el = this.el;
    let binding = this.binding;
    let vParent = el.offsetParent || document.body;
    el.ontouchstart = function(e) {
      //鼠标按下，计算当前元素距离可视区的距离
      /**
       * clientX 触摸点击相对可视区域的坐标
       * offsetLeft 元素相对位置  offsetLeft = left; offsetTop = top;
       */
      let disX = e.touches[0].clientX - e.target.offsetLeft;
      let disY = e.touches[0].clientY - e.target.offsetTop;

      el.style.borderColor = binding.borderColor || 'blue';
      el.style.opacity = binding.opacity || 1;

      document.ontouchmove = function(event) {
        let left = event.touches[0].clientX - disX;
        let top = event.touches[0].clientY - disY;
        // 设置坐标
        if (left <= 0) {
          left = 0;
        }
        if (left >= vParent.offsetWidth - event.target.offsetWidth) {
          left = vParent.offsetWidth - event.target.offsetWidth
        }
        if (top <= 0) {
          top = 0;
        }
        if (top >= vParent.offsetHeight - event.target.offsetHeight) {
          top = vParent.offsetHeight - event.target.offsetHeight
        }

        el.style.left = left + 'px';
        el.style.top = top + 'px';
      }

      document.ontouchend = function() {
        document.ontouchmove = null;
        document.ontouchend = null;
        el.style.borderColor = binding.borderColor || 'red';
        el.style.opacity = binding.opacity || 0.3
      }
    }
  }
}

export default Drag;

// const drag = {
//   /**
//    * el HTMLElement 指令所绑定的元素，可以用来直接操作 DOM 
//    * binding 参数对象
//    * vnode VNode Vue 编译生成的虚拟节点
//    */
//   bind(el, binding = {}) {
//     let elNode = el;
//     let vParent = el.offsetParent || document.body;
//     elNode.ontouchstart = function(e) {
//       //鼠标按下，计算当前元素距离可视区的距离
//       /**
//        * clientX 触摸点击相对可视区域的坐标
//        * offsetLeft 元素相对位置  offsetLeft = left; offsetTop = top;
//        */
//       let disX = e.touches[0].clientX - elNode.offsetLeft;
//       let disY = e.touches[0].clientY - elNode.offsetTop;

//       elNode.style.borderColor = binding.borderColor || 'blue';
//       elNode.style.opacity = binding.opacity || 1;

//       document.ontouchmove = function(e) {
//         let left = e.touches[0].clientX - disX;
//         let top = e.touches[0].clientY - disY;
//         // 设置坐标
//         if (left <= 0) {
//           left = 0;
//         }
//         if (left >= vParent.offsetWidth - elNode.offsetWidth) {
//           left = vParent.offsetWidth - elNode.offsetWidth
//         }
//         if (top <= 0) {
//           top = 0;
//         }
//         if (top >= vParent.offsetHeight - elNode.offsetHeight) {
//           top = vParent.offsetHeight - elNode.offsetHeight
//         }
//         el.style.left = left + 'px';
//         el.style.top = top + 'px';
//       }
//       document.ontouchend = function() {
//         document.ontouchmove = null;
//         document.ontouchend = null;
//         elNode.style.borderColor = binding.borderColor || 'red';
//         elNode.style.opacity = binding.opacity || 0.3
//       }
//     }
//   }
// }