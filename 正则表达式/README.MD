# 正则表达式语法汇总
NFA引擎匹配原理 https://blog.csdn.net/lxcnn/article/details/4304651
## 元字符
字符 | 描述 | 其他
-- | :--: | --
. | 匹配除换行符（\n、\r）之外
\d | 匹配一个数字字符 | 等价于 [0-9]
\D | 匹配一个非数字字符 | 等价于 [^0-9]
\w | 匹配字母、数字、下划线 | 等价于'[A-Za-z0-9_]'
\W | 匹配非字母、数字、下划线 | 等价于 '[^A-Za-z0-9_]'
(pattern) | 匹配 pattern | 并保存匹配结果
(?:pattern) | 匹配 pattern | 不保存匹配结果
(?=pattern) | 正向肯定预查
(?!pattern) | 与(?=pattern)类似，匹配不符合()内的字符
(?<=pattern) | 反向肯定预查
(?<!pattern) | 反向肯定预查与(?!pattern)类似

```js
// 共同点: (?:pattern) 与 (?=pattern)都匹配pattern，但不会把pattern结果放到Matches的集合中。
// 区别: (?:pattern) 匹配得到的结果包含pattern，(?=pattern) 则不包含
/* 
  是否消耗字符:
    (?:pattern) 消耗字符，下一字符匹配会从已匹配后的位置开始。 
    (?=pattern) 不消耗字符，下一字符匹配会从预查之前的位置开始。 即后者只预查，不移动匹配指针
*/
let str8_2 = 'industry abc';
console.log(str8_2.match(/industr(?:y|ies)/)); // ["industry"]
console.log(str8_2.match(/industr(?=y|ies)/)); // ["industr"]
// (?=pattern)获取匹配的；(?!pattern)获取非匹配
console.log(str8_2.match(/industr(?!y|ies)/)); // null，即：indestr后面不匹配(y|ies)
```


```js
// ()表示捕获分组，()会把每个分组里的匹配的值保存起来，使用$n(n是一个数字，表示第n个捕获组的内容)
let str6 = 'hello world! hello world!';
console.log(str6.replace(/(he)/g, `<$1>`)); // <he>llo world! <he>llo world!

// (?:)表示非捕获分组，和捕获分组唯一的区别在于，非捕获分组匹配的值不会保存起来
let str7 = 'hello world! hello world!';
console.log(str6.replace(/(?:he)/g, `<$1>`)); // <$1>llo world! <$1>llo world!  拿不到$1
'industries'.match(/industr(?:y|ies)/)
```


## 1、非打印字符
字符 | 描述 | 其他
-- | :--: | --
\n | 匹配换行符 |
\r | 匹配回车符 |
\s | 匹配任何空白字符 | 等价于 [\f\n\r\t\v]
\S | 匹配任何非空字符 | 等价于 [^\f\n\r\t\v]

```js
// 1、\n -- 换行符
let str1 = `a
b`
console.log(/\n/.test(str1)); // true
```
```js
// 2、\s -- 匹配空格 \S -- 匹配非空字符
let str2 = `a b`;
console.log(/\s/.test(str2)); // true
console.log(/^\S$/.test(str2)); // false
```
---
## 2、特殊字符
字符 | 描述 | 其他
-- | :--: | --
$ | 匹配结尾
() | 标记一个子表达式的开始和结束位置
* | 零次或多次
+ | 一次或多次
. | 匹配除换行符 \n 之外的任何单字符
? | 匹配前面的子表达式零次或一次
\ | 将下一个字符标记为或特殊字符
^ | 匹配输入字符串的开始位置 | 除非在方括号表达式中使用，此时它表示不接受该字符集合
\| | 指明两项之间的一个选择

```js
// ?
let str3 = 'addadaaaad';
console.log(str3.match(/a?d/g)); // ["ad", "d", "ad", "ad"]
```
---
## 3、限定符
字符 | 描述 | 其他
-- | :--: | --
* | 零次或多次 | * 等价于{0,}
+ | 一次或多次 | + 等价于{1,}
? | 零次或一次 | ? 等价于{0,1}
{n} | 匹配 n 次 |
{n,} | 至少匹配n 次 |
{n,m} | 最少匹配 n 次且最多匹配 m 次 |

```js
// 限定符 + ? 表示非贪婪模式
let str4_2 = 'oooo';
console.log(str4_2.match(/o+?/)); // ["o"]
console.log(str4_2.match(/o+/)); // ["oooo"]
let str4_3 = 'assasssasssss';
console.log(str4_3.match(/a\w+?s/)); // ["ass"]
console.log(str4_3.match(/a\w+s/)); // ["assasssasssss"]
```
---

## 4、定位符
字符 | 描述 | 其他
-- | :--: | --
^ |
$ |
\b | 匹配一个单词边界，即字与空格间的位置
\B | 非单词边界匹配

```js
let str5 = 'bug bbug abu4g edugg';
console.log(str5.match(/\w+ug\b/ig)); // ["bug", "bbug"]
console.log(str5.match(/\w+ug\B/ig)); // ["edug"]
```

