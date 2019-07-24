
// 当你已知某个类型范围的时候，可以使用 in 和 keyof 来遍历类型,我们可以使用 in 来约束属性名必须为三家运营商之一
type ChinaMobilePhones = '10086' | '10010' | '10000';
let phone: ChinaMobilePhones;

interface ChinaMobile {
  name: string
  website: string
}

// 只能 type 使用， interface 无法使用
type ChinaMobileList = {
  // 遍历属性
  [phone in ChinaMobilePhones]: ChinaMobile
}

const list = {
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

const data: ChinaMobileList = list;