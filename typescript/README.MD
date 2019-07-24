# typescript

```js
// 定义
const phoneList = {
  '10086': {
    name: '中国移动',
    website: 'http://www.10086.cn',
  },
  '10010': {
    name: '中国联通',
    website: 'http://www.10010.com',
  },
  '10000': {
    name: '中国电信',
    website: 'http://www.189.cn'
  }
}
```
<a href="./ts/in.ts">in.ts</a>

##### 1、约束参数
```js
// 约束属性名必须为三家运营商之一
type ChinaMobilePhones = '10086' | '10010' | '10000';
let phone: ChinaMobilePhones;
```

<a href="./ts/in.ts">in.ts</a>

##### 2、类型遍历  <font color=orange>in</font>
```js
type ChinaMobilePhones = '10086' | '10010' | '10000'

interface ChinaMobile {
  name: string;
  website: string;
}

// 只能 type 使用， interface 无法使用
type ChinaMobileList = {
  // 遍历属性
  [phone in ChinaMobilePhones]: ChinaMobile
}

const data: ChinaMobileList = list;
```

<a href="./ts/keyof.ts">keyof.ts</a>

##### 3、约束方法的参数  <font color=orange>keyof</font>

```js
type keys = {
  name: string;
  appId: number;
  config: object;
}

interface Application {
  // 参数和值约束范围
  set<T extends keyof keys>(key: T, val: keys[T])
  get<T extends keyof keys>(key: T): keys[T]
}
```