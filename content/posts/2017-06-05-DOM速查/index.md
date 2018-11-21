---
title: DOM速查
date: 2017-06-05
category: DOM
tags:
 - JavaScript
 - 浏览器
---

##  查找元素

```JavaScript
document.getElementById(id)

// 下面方法返回的是HTML Collections，注意与querySelectorAll的返回值区分
// 返回的HTMLCollections是动态元素集合，是即时更新的。
// HTMLCollections 包含文档的element节点。
document.getElementsByClassName(name) 
document.getElementsByTagName(name)
document.getElementsByName(name) // 特殊，返回的是NodeList


document.querySelector(selectors) // 返回匹配指定选择器组的第一个元素

// 下面方法返回的是Node Lists，注意与getElementsBy方法区分
// 返回的是一个静态的NodeList（NodeList在其它情况下都是动态的，比如Node.childNodes）
// NodeList 包含文档中所有节点，包括element、Text 和 Comment。
document.querySelectorAll(selectors) // 返回匹配指定选择器组的元素列表
```

## 改变属性

```JavaScript
element.innerHTML = new html content
element.attribute = new value // 例如 document.getElementById("image").src = 'demo.jpg'
element.setAttrbute(attribute, value)
element.style.property = style
```

## 增加或者删除元素

```JavaScript
document.createElement(element)
parentNode.removeChild(oldChild) // 从父节点中删除一个子节点，返回被删除的节点，节点保存在内存中
parentNode.appendChild(newChild)
parentNode.replaceChild(newChild, oldChild)
document.write(text) // 向html文档流写入数据，若文档流已经关闭，则会先清空文档流，然后在写入
```

## 事件

```JavaScript
document.getElementById(id).onclick = function() {code}

element.addEventListener(event, function [, useCapture]); // useCapture默认为false
element.removeEventListener("mousemove", myFunction);

/* Events */
onload // 文档加载完成后触发
onunload // 页面关闭后触发
onchange // 通常用于表单字段的验证，当输入值改变的时候就会触发
onmouseover
onmouseout
onmousedown
onmouseup
onclick
onfocus
```

## 获取元素计算后的样式

在浏览器执行JS代码之前，若CSSDOM（CSS对象模型）还没有下载和构建完成，则浏览器会阻塞JS代码的执行，直到CSSDOM构建完成。这样做是为了能在JS代码中获取元素计算后的样式。

### 语法

```JavaScript
let style = window.getComputedStyle(element, [pseudoElt]);
```

- element：要计算样式的`Element`。
- pseudoElt: 指定一个要匹配的伪元素的字符串。必须对普通元素省略（或null）。
- 返回值：返回的样式是一个实时的`CSSStyleDeclaration`对象，当元素的样式更改时，它会自动更新本身。

```JavaScript
var span = document.getElementsByTagName('span')[0];
var spanStyle = window.getComputedStyle(span);
console.log(spanStyle.color);
```

## 使用DocumentFragment 优化多次 append

一旦需要向文档插入DOM，可以使用一个文档碎片来构建DOM结构，避免多次插入DOM引发浏览器多次构建DOM。

```JavaScript
for (var i = 0; i < 1000; i++) {

    var el = document.createElement('p');
    el.innerHTML = i;
    document.body.appendChild(el);
}

//可以替换为：
var frag = document.createDocumentFragment();
for (var i = 0; i < 1000; i++) {
    var el = document.createElement('p');
    el.innerHTML = i;
    frag.appendChild(el);
}
document.body.appendChild(frag);
```

## 使用一次innerHTML赋值代替构建DOM元素


innnerHTML直接使用了HTML解析器来构建，速度要比用JavaScript来创建DOM速度要快许多，如果多次使用会带来性能问题，所以使用的次数要有所控制。

```JavaScript
var frag = document.createDocumentFragment();
for (var i = 0; i < 1000; i++) {
    var el = document.createElement('p');
    el.innerHTML = i;
    frag.appendChild(el);
}
document.body.appendChild(frag);

//可以替换为：
var html = [];
for (var i = 0; i < 1000; i++) {
    html.push('<p>' + i + '</p>');
}
document.body.innerHTML = html.join('');
```

## 删除DOM节点

删除DOM节点之前一定要先移除绑定在DOM节点上的事件，否则会造成内存泄露，最终导致内存无法被回收。

## 获取元素的大小及其相对视口的位置

```javascript
let img = document.getElementById('myImg')
let rectObject = img.getBoundingClientRect()
```

返回值是一个对象，该对象包含了一组用于描述边框的只读属性，包括 left、top、right 和 bottom，单位为像素。

![](http://p3ek8rd7p.bkt.clouddn.com/2018-05-06-131918.png)

