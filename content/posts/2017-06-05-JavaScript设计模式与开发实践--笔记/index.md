---
title: JavaScript设计模式与开发实践--笔记
date: 2017-06-05
category: JavaScript
tags:
 - Front-end
 - 设计模式
---

## 第一章 面向对象的 JavaScript

### 动态类型语言和鸭子类型

#### 静态类型语言与动态类型语言

- 静态类型语言在编译时便已确定变量的类型
- 动态类型语言的变量类型要到程序运行的时候，待变量被赋予某个值之后，才能具有某种类型

#### 鸭子类型

鸭子类型的通俗说法是 : "如果它走起路来像鸭子，叫起来也是鸭子，那么它就是鸭子。"

### 多态

- 含义 : 同一操作作用于不同的对象上面，可以产生不同的解释和不同的执行结果

多态的思想实际上是把 "做什么" 和 "谁去做" 分离开来了。

### 封装

封装的目的是将信息隐藏。不仅包括封装数据和封装实现，还包括封装类型和封装变化。

#### 封装变化

通过封装变化的方式，把系统中稳定不变的部分和容易变化的部分隔离开来，在系统的演变 过程中，我们只需要替换那些容易变化的部分，如果这些部分是已经封装好的，替换起来也相对容易。这可以最大程度地保证程序的稳定性和可扩展性。

## 第二章 this、call 和 apply

### this

JavaScript 中的 this 总是指向一个对象，而具体指向哪个对象是在运行时基于函数的执行环境动态绑定的，而非函数被声明时的环境。

#### this 的指向

this 的指向大致分为下面几种：

- 作为对象的方法调用

- 作为普通函数调用

  在 ES5 的 strict 的模式下，this 已经被规定不会指向全局对象，而是 undefined


- 作为构造函数调用

  当用 new 运算符调用函数时，该函数总会返回一个对象，通常情况下，该对象就是构造函数里面 this 指向的对象

- `Function.prototype.call` 或 `Function.prototype.apply` 调用

  这两个函数可以动态地改变传入函数的 this

- 箭头函数调用

  箭头函数其实是没有 this 的，它里面的 this 是由函数调用时外层作用域的上下文的 this，常被用于解决普通函数调用时 this 指向全局的问题

#### 实现简化版的 bind

```javascript
Function.prototype.bind = function() {
  var self = this // 原函数
  var context = [].shift.call(arguments) // 上下文
  var args = [].slice.call(arguments) // 预置参数
  return function() {
    return self.apply(context, [].concat(args, [].slice.call(arguments)))
  }
}
```

## 第三章 闭包和高阶函数

### 高阶函数实现 AOP

AOP（面向切面编程）的主要作用是把一些跟核心业务逻辑模块无关的功能抽离出来，这些 跟业务逻辑无关的功能通常包括日志统计、安全控制、异常处理等。把这些功能抽离出来之后， 再通过“动态织入”的方式掺入业务逻辑模块中。

```javascript
Function.prototype.before = function(beforeFunc) {
  var _self = this // 保留对原函数的引用
  return function() {
    beforeFunc.apply(this, arguments)
    return _self.apply(this, arguments)
  }
}

Function.prototype.after = function(afterFunc) {
  var _self = this // 保留对原函数的引用
  return function() {
    var result = _self.apply(this, arguments)
    afterFunc.apply(this, arguments)
    return result
  }
}
```

### 函数去抖

任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行

```javascript
function debounce(func, timeout) {
  var timer = null // 保存的定时器

  return function() {
    var self = this
    var args = arguments

    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(function() {
      func.apply(self, args)
    }, timeout)
  }
}
```

#### 应用场景

- resize/scroll 触发统计事件
- 文本输入的验证（其实只用去最后一个输入的值即可，验证中间的值是没有任何意义的）
- 搜索联想功能

### 函数节流

指定时间间隔内只会执行一次任务

```javascript
function throttle(func, timeout) {
  var canRun = true

  return function() {
    var self = this
    var args = arguments

    if (!canRun) return

    canRun = false
    setImmediate(function() {
      func.apply(self, args)
      canRun = true
    }, timeout)
  }
}
```

#### 应用场景

- 监听滚动事件判断是否到页面底部自动加载更多：给 scroll 加了 debounce 后，只有用户停止滚动后，才会判断是否到了页面底部；如果是 throttle 的话，只要页面滚动就会间隔一段时间判断一次

