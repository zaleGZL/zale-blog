---
title: 前端样式布局基础
date: 2017-05-20
category: CSS
tags:
 - Front-end
---

## 水平居中

- 内联（内联块）水平居中

  ```css
  .child {
      display: inline-block;
  }
  .parent {
      text-align: center;
  }
  ```


- table + margin

  ```css
  .child {
      display: table;
      margin: 0 auto;
  }
  ```

- flex 布局

  flex + justify-content 或 flex + margin auto

  ```css
  /* flex + justify-content */
  .parent {
      display: flex;
      justify-content: center;
  }

  /* flex + margin auto */
  .parent {
      display: flex;
  }

  .child {
      margin: 0 auto;
  }
  ```

- 子元素固定宽/不定宽 + 绝对定位

  - 子元素定宽：absolute + margin auto
  - 子元素不定宽：absolute + transform

  ```css
  .parent {
      position: relative;
      height: 300px;
  }
  /* absolute + margin auto */
  .child {
      width: 100px;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
  }

  /* absolute + transform */

  .child {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
  }
  ```

## 垂直居中

- table-cell + vertical-align

  ```css
  .parent {
      display: table-cell;
      vertical-align: middle;
      height: 300px;
  }
  ```


- 单行内联元素垂直居中 height 等于 line-height

  ```css
  .parent {
      height: 20px;
      line-height: 20px;
  }
  ```

- 子元素固定高/不定高 + 绝对定位

  - 固定高：absolute + margin auto
  - 不定高：absolute + transform

  ```css
  .parent {
      height: 300px;
      position: relative;
  }

  /* absolute + margin auto */
  .child {
      position: absolute;
      height: 100px;
      top: 0;
      bottom: 0;
      margin: auto 0;
  }

  /* absolute + transform */
  .child {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
  }
  ```

- flex

  flex + align-items 或 flex + margin auto

  ```css
  /* flex + align-items */
  .parent {
      display: flex;
      align-items: center;
  }

  /* flex + margin auto */
  .parent {
      display: flex;
  }

  .child {
      margin: auto 0;
  }
  ```

## 水平垂直居中

- inline-block + text-align + table-cell + vertical-align

  ```css
  .parent {
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    height: 200px;
    width: 100px;
  }

  .son {
    display: inline-block;
  }
  ```

- 表格居中

  ```css
  .parent {
      display: table;
      height: 400px;
  }

  .child {
      text-align: center;
      display: table-cell;
      vertical-align: middle;
  }
  ```


- 绝对定位

  - 子元素定宽高：absolute + margin
  - 子元素不定宽高：absolute + transform

  ```css
  .parent {
    position: relative;
    height: 500px;
  }
  
  /* 子元素定宽高：absolute + margin */
  .child {
    position: absolute;
    height: 130px;
    width: 130px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  
  /* 子元素不定宽高：absolute + transform */
  .child {
    background-color: blue;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ```

- flex

  - flex + margin
  - flex + justify-content align-items

  ```css
  /* flex + margin */
  .parent {
      display: flex;
      height: 500px;
  }
  
  .child {
      margin: auto;
      height: 100px;
      width: 100px;
  }
  
  /* flex + justify-content align-items */
  .parent {
      display: flex;
      justify-content: center;
      align-items: center;
  }
  ```

