const Person = {
  name: '张三',
  value: 'hello world',
  say() {
    console.log(this.value)
  },
  run() {
    console.log('run')
  }
}

export default Person;
