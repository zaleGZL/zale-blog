---
title: JavaScript速查
date: 2017-06-07
category: JavaScript
tags:
 - Front-end
---

## 字符串操作

> 注意: 所有字符串的操作都是返回新的字符串，不会修改原始字符串。

- 子字符串查询

```js
str.indexOf(searchValue[, fromIndex])
str.lastIndexOf(searchValue[, fromIndex])
str.search(regexp)
```

- 字符串提取

```js
str.slice(beginIndex[, endIndex])
str.substring(indexStart, [indexEnd])
str.substr(start, [length])
```

- 字符串替换

```js
str.replace(regexp|substr, newSubstr|function) // 默认情况下只取代第一个匹配到的值
```

- 大小写转换

```js
str.toUpperCase()
str.toLowerCase()
```

- 字符串拼接

```js
str.concat((value1[, value2[, ...[, valueN]]]))
```

- 提取字符

```js
str.charAt(index)
str.charCodeAt(index)
```

- 字符串 => 数组

```js
str.split([separator[, limit]])
```

## 数组操作

- 增删操作

```js
array.splice(start, deleteCount)
array.splice(start, deleteCount, item1, item2, ...)
```

## Date

- `toISOString()`

该方法返回一个ISO格式的字符串，YYYY-MM-DDTHH:mm:ss.sssZ。时区总是UTC(协调世界时)，以后缀"Z"标识。

- `toUTCString()`

该方法返回一个使用UTC时区的易读格式的字符串。返回值可能随平台而变化。


注意: 在数据库中存储Date建议使用toISOString()返回的字符串来存储，ISO是一个标准的格式，推荐使用。

## 巧用 `||` 和 `&&` 布尔运算符

```js
function eventHandler(e) {
    if (!e) e = window.event;
}

//可以替换为：
function eventHandler(e) {
    e = e || window.event;
}
```

```js
if (myobj) {
    doSomething(myobj);
}

//可以替换为：
myobj && doSomething(myobj);
```

## localStorage、sessionStorage、storage事件

- `localStorage` 只要在相同的协议，相同的主机名，相同的端口下，就能读取和修改同一份localStorage数据，数据理论上来说是永久有效的，除非手动清除。
- `sessionStorage` 的要求相对要严格一些，它除了要求相同的协议、主机名和端口，还要求在同一窗口(即同一标签页)。sessionStorage的生存期顾名思义，就是回话级别的，浏览器窗口关闭了(或者关闭该标签页，标签页刷新不算)，数据也就被清空了。
- `localStorage` 和 `sessionStorage` 中的键和值都只能是字符串，若要存储对象，可以先转换成可识别的字符串格式(如JSON格式)。
- storage 事件当存储的数据发生变化时，会触发 storage 事件。触发这个事件会调用同域下其他窗口的storage事件，不过触发storage的窗口（即当前窗口）不触发这个事件。
- 使用注意事项: (1). 需要判断浏览器是否支持。(2). 写数据时需要进行异常处理，避免超出容量。(3). 避免存储敏感数据。

## Unicode 与 UTF-8 的区别

- Unicode 定义的是一个字符集，每一个字符对应一个唯一的数字。
- UTF-8 是一种编码方式，将数字转换成二进制数字存储在电脑中。

## offsetTop、scrollTop、clientTop … 区别

![](http://p3ek8rd7p.bkt.clouddn.com/2018-05-03-125128.jpg)

## 正则表达式

- 正则表达式的 lastIndex 属性值只作为 exec 和 test 方法的起始搜索位置，并且仅当正则表达式带有/g (global) 标识的时候。非全局或任何表达式作为参数传递给字符串的 match，replace，search 及 split 方法时，会搜索目标字符串的起始位置。

## new.target

**new.target** 属性允许你检测函数或构造方法是否是通过 `new` 运算符被调用的。在通过 `new` 运算符被初始化的函数或构造方法中，`new.target` 返回一个指向构造方法或函数的引用。在普通的函数调用中，`new.target`  的值是 `undefined`。

## 箭头函数与函数表达式直接的区别

箭头函数的语法比函数表达式要短些，并且不绑定自己的 `this`、`arguments`、`super` 或 `new.target` 。





