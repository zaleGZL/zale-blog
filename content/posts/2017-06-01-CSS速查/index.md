---
title: CSS速查
date: 2017-06-01
category: CSS
tags:
 - Front-end
---

## 颜色

- 透明度: 若要指定颜色的透明度，则需要使用rgba(red, green, blue, alpha)来表示。alpha是一个0.0到1.0的数字，0.0表示完全透明，1.0表示完全不透明。

## 布局

- position 属性

1. `position: static;` HTML元素的默认属性。表示该元素按照页面的正常布局。
2. `position: relative;` 相对定位。该元素的位置会相对于该元素正常布局的位置，可以通过设置top、bottom、left、right 设置偏移。其他元素不会因为该元素的偏移而改变他本身的布局。

```CSS
div.relative {
    position: relative;
    left: 30px;
    border: 3px solid #73AD21;
}
```

3. `position: fixed;` 固定定位。该元素会从正常布局中删除，并且该元素的位置会相对于视窗的位置来定位，可以通过设置top、bottom、left、right 设置偏移。

```CSS
div.fixed {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 300px;
    border: 3px solid #73AD21;
}
```

4. `position: absolute;` 绝对定位。该元素也会从正常布局中删除，并且该元素会相对一个最近的非正常布局(position属性不是static)，如果没有找到，则会相对于body元素，可以通过设置top、bottom、left、right 设置偏移。

```CSS
div.relative {
    position: relative;
    width: 400px;
    height: 200px;
    border: 3px solid #73AD21;
} 

div.absolute {
    position: absolute;
    top: 80px;
    right: 0;
    width: 200px;
    height: 100px;
    border: 3px solid #73AD21;
}
```

5. `position: sticky;` 

- z-index 属性

由于使用定位可能会造成元素的重叠，所以可以设置 `z-index` 属性来解决该问题。

- box-sizing 属性

1. `box-sizing: content-box;` padding和border不被包含在定义的width和height之内。
2. `box-sizing: border-box;` padding和border被包含在定义的width和height之内。

```CSS
* {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
```

- overflow 属性

1. `overflow: visible;` 溢出内容不截断，这会导致内容超出容器。
2. `overflow: hidden;` 隐藏溢出容器的内容且不出现滚动条。
3. `overflow: scroll;` 隐藏溢出容器的内容，并且以滑动滚动条的方式展现剩下的内容。
4. `overflow: auto;` 当内容没有溢出容器时不出现滚动条，当内容溢出容器时出现滚动条，按需出现滚动条。此为body对象和textarea的默认值。

## CSS 选择器

1. 后代选择器

```CSS
div p {
    background-color: yellow;
}

/* 选择div标签所有后代p标签 */
```

2. 子选择器

```CSS
div > p {
    background-color: yellow;
}

/* 选择div标签的直接子p标签 */
```

## 伪类

伪类是用来定义元素的特殊状态。

```css
/* 未访问 */
a:link {
    color: red;
}

/* 访问过 */
a:visited {
    color: green;
}

/* 聚焦 */
a:focus {
    color: red;
}

/* 鼠标落在标签上面 */
a:hover {
    color: hotpink;
}

/* 鼠标点击标签不放 */
a:active {
    color: blue;
}

/* 在每个p元素后面插入内容 */
p:after { 
    content: " - Remember this";
}

/* 在每个p元素前面插入内容 */
p:before { 
    content: "Read this: ";
}

```

由于 CSS 有层叠的特性，并且这些规则的特殊性都是相同的，所以以上伪属性一定要按照一定的顺序定义。

推荐按照以下顺序定义规则:

a:link(未点击) a:visited(点击过) a:hover(鼠标悬停在上面) a:focus(获得焦点) a:active(鼠标点击不放)

## 属性选择器

```CSS
[attribute]  /*选择包含此属性的元素 */
[attribute="value"] /* 选择此属性值的元素 */
[attribute~="value"] /* 选择多个值属性中包含该值的元素(值属性是由单词组成，由空格隔开) */
[attribute|="value"] /* 选择多个值属性中以该值开头的元素(该值必须为单独的或者由-隔开) */
[attribute^="value"] /* 选择多个值属性中以该值开头的元素(以该值开头即可，没有其他要求，类似正则表达式的^符号) */
[attribute$="value"] /* 选择多个值属性中以该值结尾的元素(以该值结尾即可，没有其他要求，类似正则表达式的$符号) */
[attribute*="value"] /* 选择多个值属性中包含该值的元素(包含该值即可，没有其他要求，类似正则表达式的*符号 */
```

## 鼠标效果属性

```CSS
cursor:
    值:
    pointer 手型
    help 求助
    not-allowed 禁止操作
```

## visibility 和 display

```CSS
visibility:
    值
    visible: 设置对象可视
    hidden: 设置对象隐藏(保留物理空间)
    
display:
    值:
    none: 隐藏对象(不保留物理空间)
    inline: 指定对象为内联元素
    block: 指定对象为块元素
    inline-block: 指定对象为内联块元素
```

## 长单词超出容器宽度的解决办法

通过设置 `word-wrap` 属性能够将这种长单词进行分割。

```CSS
p {
    word-wrap: break-word;
}
```

## 字体

举例:

```CSS
@font-face {
    font-family: myFirstFont;
    src: url(sansation_light.woff);
}

div {
    font-family: myFirstFont;
}
```

## 媒体查询

语法:

```CSS
@media not|only 媒体类型 and (表达式) {
    CSS-Code;
}

/* or */

<link rel="stylesheet" media="mediatype and|not|only (expressions)" href="print.css">

```

媒体类型:

```CSS
值:
    all 所有设备
    print 打印设备
    screen 电脑、平板和智能手机
    speech 演讲
```

举例:

```CSS
body {
    background-color: pink;
}

@media (min-width: 500px) and (max-width: 600px) {
    body {
        background-color: green;
    }
}

/* 如果视窗宽度小于500px或者大于600px，则body元素的背景是粉色。如果视窗宽度在500px至600px之间，则body元素的背景是绿色。 */
```

## 响应式设计

设置 `viewport` 元信息:

```CSS
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## px、em、rem的区别

- `px` : 使用像素作为长度单位。
- `em` : 相对其父级的字体大小，即倍数。

```HTML
<span>Outer <span>inner</span> outer</span>
```

```CSS
body { font-size: 62.5%; }
span { font-size: 1.6em; }
```

以上外层的span元素的字体大小为16 x 62.5% x 1.6 = 16px，内层的span元素的字体大小(相对于外层的字体大小)为16 x 1.6 = 25.6(根据不同的流量器取舍不一样)。

-  `rem` : 相对于根元素(html)的字体大小。

上面的CSS改为:

```CSS
html { font-size: 62.5%; }
span { font-size: 16px; font-size: 1.6rem; }
```

这样外层和内层的字体大小都是相对于根元素，使用rem时考虑到浏览器的兼容性，最好px和rem一起设置。

### 三种定位机制

- 普通流
  - 相对定位: 相对于元素在文档流中的原始位置进行定位
- 绝对定位: 相对于最近的已定位的元素进行定位
  - 固定定位: 也算是绝对定位的一种，只不过是相对于浏览器的窗口进行定位
- 浮动: 脱离文档流

与定位相关的属性:

```css
left
top
right
bottom
z-index
```

### 清除浮动

```css
.clear:after {
  content: '';
  display: block;
  clear: both;
  width: 0;
  height: 0;
  visibility: hidden;
}
```

### 连续英文单词换行

- `word-break: break-all;`

  不管三七二十一，该换行的地方直接换行。(速记: 微博吧(wbba))

- `wrap-word: break-word;`

  如果在某一行有地方能换行就尽量换行，这样就能尽量不打断连续的英文单词，但是这种方法会导致排版比较难看。(速记: 我五百万(wwbw))

另外，`word-spacing` 是单词之间间距的，`white-space` 是字符是否换行显示的。

### 超出的文本如何隐藏

- `text-overflow: clip;`

  超出的文本直接截断。

- `text-overflow: ellipsis;`

  超出的文本使用省略号。

## CSS单位

- em : 相对于当前元素内的文本字体大小。
- rem : 相对于根元素的字体大小。
- vh : 相对于 Viewport 来设置高度，1 vh = 1/100 视口高度。
- vw : 相对于 Viewport 来设置高度，1 vw = 1/100 视口宽度。

## 清除IOS下input及textarea的阴影

```css
input, textarea {
    -webkit-appearance: none;
}
```

## 设置滚动条样式

```css

/* 滚动条样式 */

::-webkit-scrollbar { /* 血槽宽度 */
    width: 8px;
    height: 8px;
}

::-webkit-scrollbar-thumb { /* 拖动条 */
    background-color: rgba(0, 0, 0, .3);
    border-radius: 6px;
}

::-webkit-scrollbar-track { /* 背景槽 */
    background-color: #ddd;
    border-radius: 6px;
}
```

