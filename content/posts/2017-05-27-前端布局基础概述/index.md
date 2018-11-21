---
title: 前端布局基础概述
date: 2017-05-27
category: CSS
tags:
 - Front-end
---

## 什么是前端布局？

前端布局主要有三种方案：

- 传统布局（借助浮动、定位等手段）
- flex布局
- grid布局

## 布局基础要点

### W3C 盒模型

一个 Web 页面是由众多 html 元素组成的，每个 html 元素都会被解析成一个矩形盒，如下图所示：

![img](2018-04-04-014137-20181121172030137.png)

### box-sizing (CSS3属性)

简单来说，box-sizing 就是用来告诉浏览器 CSS 属性中的 weight 和 height 是用来设置哪个尺寸的，目前在 W3C 标准中仅支持 content-box 和 border-box。

### 在 reset.css 中全局配置 IE 盒模型

```css
html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

*, *:before, *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
}
```

这样设计的好处有：

1. 子元素的盒模型由父元素决定，方便统一设置和引入第三方组件
2. 支持低版本的浏览器

### 元素的分类和布局特性

从元素的布局特性来分，主要可以分为三类元素：block-level (块级) 元素，inline-block (行内级) 元素 和 inline-block-level (行内块级) 元素。

在水平和垂直的方向上，行内级元素分别受父元素的 text-align 属性和自身 vertical-align 属性的控制。

### 格式化上下文

格式化上下文，它指的是具有某种CSS格式化规则（布局规则）的上下文环境，在这个上下文环境内的所有子元素，都将根据其特定的CSS格式化规则来进行排列。

常见的格式化上下文有BFC（CSS2.1 规范）、IFC（CSS2.1 规范）、 FFC（CSS3规范新增）和GFC（CSS3规范新增），具体介绍如下：

#### BFC

BFC, 全称是block formatting context，它是一个独立封闭的渲染区域，在这个区域内的所有元素，从区域的顶部起，一个接一个地根据自身的布局特性进行排列：在这个区域内的块级元素 ，按从上到下的顺序显示，相邻的块级元素可以使用margin隔离，但在垂直方向上相邻的块级元素会发生margin合并；在这个区域内的inline-level或inline-level-block元素，则按从左到右的顺序显示。

##### 创建方式

满足下列条件中的任何一个：

- `float` 的值不为 `none`
- `position` 的值不为 `static` 或者 `relative`
- `display` 的值为 `table-cell`, `table-caption`, `inline-block`, `flex`, 或者 `inline-flex` 中的任何一个
- `overflow` 的值不为 `visible`

##### 特性

1. 对应一个独立、封闭的渲染区域，子元素的CSS样式不会影响BFC元素外部

   例如普通父元素的第一个子元素的 `margin-top` 会穿过父元素而影响到外面的元素，而具有 BFC 的父元素的第一个子元素的 `margin-top` 是无法影响到外部元素的。

2. 浮动子元素参与BFC父元素的高度计算，也就是BFC元素能够识别浮动元素

3. 占据文档流的BFC元素，能够识别浮动的兄弟元素

### 包含块

我们在设置元素尺寸属性（width、height、padding、margin和border）的百分比值或偏移属性（top、right、bottom和left）的值时，通常会有一个“相对参考系”，这个"相对参考系"一般是包裹着这个元素的块级祖先元素（一般是块级父元素）或离这个元素最近的非static（relative、absolute和fixed）定位的祖先元素。

##### ICB (initial containing block, 初始包含块)

根元素 `<html />` 是有包含块的，它是一个不可见的矩形框，W3C组织称之为ICB（initial containing block, 初始包含块）。

直观来说，根元素 `<html />` 的包含块 ICB, 就是『首屏』

##### 不同定位元素分别对应的包含块

- static和relative定位元素的包含块，为其块级祖先元素（通常是块级父元素）的content box
- absolute定位元素的包含块，为最近的非静态定位祖先元素的padding box，查无非静态定位祖先元素，那么它的包含块是ICB（即根元素<html />的包含块）
- fix定位元素的包含块，为当前viewport（视窗）

### 基本原理

#### 文档流

文档流按照页面元素书写的顺序，将页面元素按从左到右，从上至下的一般顺序进行排列，而页面元素则根据自身的布局属性(block-box or inline-box)，决定是行内显示，还是换行显示

#### 脱离文档流

元素脱离了默认存放的容器，换到另外一个容器存放。一个元素脱离了文档流，这样会导致：其父元素无法识别其，其也不参与父元素高度的计算。若有一个父元素的所有子元素都脱离文档流，则会出现“高度塌陷”问题。常见的脱离文档流的方法有：

- 浮动元素
- absolute、fixed 元素

#### 行框

line box的模型结构，形如七线谱，其中有六条重要的线：top线、text-top线、middle线、baseline线、text-bottom线和bottom线，如下图所示：


