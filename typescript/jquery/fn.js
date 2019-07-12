export default {
  add(str) {
    return str.length
  },
  _index: 0,
  Person: function(name, age) {
    this.name = name;
    this.age = age;
  }
}