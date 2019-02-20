
const url = 'https://blog.csdn.net/lxcnn/article/details/4304651';

/************************ 1 ************************/
`1
源字符串：abc

正则表达式：abc

匹配过程：

首先由字符“a”取得控制权，从位置0开始匹配，由“a”来匹配“a”，匹配成功，控制权交给字符“b”；由于“a”已被“a”匹配，所以“b”从位置1开始尝试匹配，由“b”来匹配“b”，匹配成功，控制权交给“c”；由“c”来匹配“c”，匹配成功。

此时正则表达式匹配完成，报告匹配成功。匹配结果为“abc”，开始位置为0，结束位置为3。
`

/************************ 2 ************************/
`2
源字符串：abc

正则表达式：ab?c

量词“?”属于匹配优先量词，在可匹配可不匹配时，会先选择尝试匹配，只有这种选择会使整个表达式无法匹配成功时，才会尝试让出匹配到的内容。这里的量词“?”是用来修饰字符“b”的，所以“b?”是一个整体。

匹配过程：

首先由字符“a”取得控制权，从位置0开始匹配，由“a”来匹配“a”，匹配成功，控制权交给字符“b?”；由于“?”是匹配优先量词，所以会先尝试进行匹配，由“b?”来匹配“b”，匹配成功，控制权交给“c”，同时记录一个备选状态；由“c”来匹配“c”，匹配成功。记录的备选状态丢弃。

此时正则表达式匹配完成，报告匹配成功。匹配结果为“abc”，开始位置为0，结束位置为3。
`

/************************ 3 ************************/
`3
源字符串：ac

正则表达式：ab?c

匹配过程：

首先由字符“a”取得控制权，从位置0开始匹配，由“a”来匹配“a”，匹配成功，控制权交给字符“b?”；先尝试进行匹配，由“b?”来匹配“c”，同时记录一个备选状态，匹配失败，此时进行回溯，找到备选状态，“b?”忽略匹配，让出控制权，把控制权交给“c”；由“c”来匹配“c”，匹配成功。

此时正则表达式匹配完成，报告匹配成功。匹配结果为“ac”，开始位置为0，结束位置为2。其中“b?”不匹配任何内容。
`

/************************ 4 ************************/
`4
源字符串：abd

正则表达式：ab?c

匹配过程：

首先由字符“a”取得控制权，从位置0开始匹配，由“a”来匹配“a”，匹配成功，控制权交给字符“b?”；先尝试进行匹配，由“b?”来匹配“b”，同时记录一个备选状态，匹配成功，控制权交给“c”；由“c”来匹配“d”，匹配失败，此时进行回溯，找到记录的备选状态，“b?”忽略匹配，即“b?”不匹配“b”，让出控制权，把控制权交给“c”；由“c”来匹配“b”，匹配失败。此时第一轮匹配尝试失败。

正则引擎使正则向前传动，由位置1开始尝试匹配，由“a”来匹配“b”，匹配失败，没有备选状态，第二轮匹配尝试失败。

继续向前传动，直到在位置3尝试匹配失败，匹配结束。此时报告整个表达式匹配失败。
`

/************************ 5 ************************/
`5
源字符串：abc

正则表达式：ab??c

量词“??”属于忽略优先量词，在可匹配可不匹配时，会先选择不匹配，只有这种选择会使整个表达式无法匹配成功时，才会尝试进行匹配。这里的量词“??”是用来修饰字符“b”的，所以“b??”是一个整体。

匹配过程：

首先由字符“a”取得控制权，从位置0开始匹配，由“a”来匹配“a”，匹配成功，控制权交给字符“b??”；先尝试忽略匹配，即“b??”不进行匹配，同时记录一个备选状态，控制权交给“c”；由“c”来匹配“b”，匹配失败，此时进行回溯，找到记录的备选状态，“b??”尝试匹配，即“b??”来匹配“b”，匹配成功，把控制权交给“c”；由“c”来匹配“c”，匹配成功。

此时正则表达式匹配完成，报告匹配成功。匹配结果为“abc”，开始位置为0，结束位置为3。其中“b??”匹配字符“b”。
`

/************************ 6 ************************/
`6
源字符串：a12

正则表达式：^(?=[a-z])[a-z0-9]+$

元字符“^”和“$”匹配的只是位置，顺序环视“(?=[a-z])”只进行匹配，并不占有字符，也不将匹配的内容保存到最终的匹配结果，所以都是零宽度的。

这个正则的意义就是匹配由字母或数字组成的，第一个字符是字母的字符串。

匹配过程：

首先由元字符“^”取得控制权，从位置0开始匹配，“^”匹配的就是开始位置“位置0”，匹配成功，控制权交给顺序环视“(?=[a-z])”；

“(?=[a-z])”要求它所在位置右侧必须是字母才能匹配成功，零宽度的子表达式之间是不互斥的，即同一个位置可以同时由多个零宽度子表达式匹配，所以它也是从位置0尝试进行匹配，位置0的右侧是字符“a”，符合要求，匹配成功，控制权交给“[a-z0-9]+”；

因为“(?=[a-z])”只进行匹配，并不将匹配到的内容保存到最后结果，并且“(?=[a-z])”匹配成功的位置是位置0，所以“[a-z0-9]+”也是从位置0开始尝试匹配的，“[a-z0-9]+”首先尝试匹配“a”，匹配成功，继续尝试匹配，可以成功匹配接下来的“1”和“2”，此时已经匹配到位置3，位置3的右侧已没有字符，这时会把控制权交给“$”；

元字符“$”从位置3开始尝试匹配，它匹配的是结束位置，也就是“位置3”，匹配成功。

此时正则表达式匹配完成，报告匹配成功。匹配结果为“a12”，开始位置为0，结束位置为3。其中“^”匹配位置0，“(?=[a-z])”匹配位置0，“[a-z0-9]+”匹配字符串“a12”，“$”匹配位置3。
`