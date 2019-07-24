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

const obj: keys = {
  name: '',
  appId: 1,
  config: {}
}

let App: Application = {
  set(key, value) {
    obj[key] = value;
  },
  get(key) {
    return obj[key]
  }
};

App.set('name', 'zhangsan')
App.set('appId', 10)
App.set('config', 100) // 类型“100”的参数不能赋给类型“object”的参数
App.set('haha', 100) // 类型“"haha"”的参数不能赋给类型“"name" | "appId" | "config"”的参数
