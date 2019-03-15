/* Object.entries() */
// import './entries';
/* Object.values() */
// import './values';
/* 字符串填充padStart()和padEnd() */
// import './padStartpadEnd';
/* Object.getOwnPropertyDescriptors(),该方法会返回目标对象中所有属性的属性描述符 */
class Point {
    constructor() {
        this.name = 123;
    }
    static add() {
        console.log(this.name)
    }
}
const point = new Point();
Point.add();
import './getOwnPropertyDescriptors';