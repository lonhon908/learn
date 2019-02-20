// 1、\n -- 换行符
let str1 = `a
b`;
console.log(/\n/.test(str1)); // true

// 2、\s -- 匹配空格 \S -- 匹配非空字符
let str2 = `a b`;
console.log(/\s/.test(str2)); // true
console.log(/^\S$/.test(str2)); // false

// 3、? -- 匹配前面的子表达式零次或一次
let str3 = 'addadaaaad';
console.log(str3.match(/a?d/g)); // ["ad", "d", "ad", "ad"]

// 4、贪婪模式
let str4 = '<H1>Chapter 1 - 介绍正则表达式</H1>';
console.log(str4.match(/<.*>/)); // ["<H1>Chapter 1 - 介绍正则表达式</H1>"]
console.log(str4.match(/<.*?>/)); // ["<H1>"]
let str4_2 = 'oooo';
console.log(str4_2.match(/o+?/)); // ["o"]
console.log(str4_2.match(/o+/)); // ["oooo"]
let str4_3 = 'assasssasssss';
console.log(str4_3.match(/a\w+?s/)); // ["ass"]
console.log(str4_3.match(/a\w+s/)); // ["assasssasssss"]

// 5、\b -- 匹配单词边界 \B
let str5 = 'bug bbug abu4g edugg';
console.log(str5.match(/\w+ug\b/ig)); // ["bug", "bbug"]
console.log(str5.match(/\w+ug\B/ig)); // ["edug"]

// 6、(pattern)
let str6 = 'hello world! hello world!';
console.log(str6.replace(/(he)/g, `<$1>`)); // <he>llo world! <he>llo world!

// 7、(?:pattern)  不进行存储供以后使用
let str7 = 'hello world! hello world!';
console.log(str6.replace(/(?:he)/g, `<$1>`)); // <$1>llo world! <$1>llo world!拿不到$1
console.log('industries'.match(/industr(?:y|ies)/))

// 8、(?=pattern) (?!pattern)
let str8 = 'a12';  
console.log(str8.match(/^(?=[a-z])[a-z0-9]+$/)); // ["a12"]
let str8_2 = 'industry abc';
console.log(str8_2.match(/industr(?:y|ies)/)); // ["industry"]
console.log(str8_2.match(/industr(?=y|ies)/)); // ["industr"]
console.log(str8_2.match(/industr(?!y|ies)/)); // null

// 9、反向引用
let str9 = '2017/08/09';
// 2017-08-09
// 2017/08/09
// 2017.08.09
// 要匹配这三种应该怎么写正则
const pp = /\d{4}([-/.])\d{2}\1\d{2}/;
console.log(pp.test(str9))
// 引用了不存在的分组呢, 这个时候正则会匹配字符本身，比如\1就匹配\1
