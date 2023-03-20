---
title: 生成器
tags: JavaScript
layout: post
---

生成器函数拥有在函数块内暂停和回复执行代码的能力

## 生成器函数

- 函数名称前加星号表示一个生成器
  - 箭头函数不能用来定义生成器函数
  - 星号不受两侧空格影响

     ```javascript
        //等价
        function* generatorFn(){}
        function * generatorFn(){}
        function *generatorFn(){}
     ```

- 调用生成器函数会产生一个生成器对象，生成器对象最开始处于暂停执行的状态
- 生成器对象实现了Iterator接口，具有next()方法，调用next方法会让生成器开始或恢复执行
- next方法返回还有done、value属性的对象，类似迭代器，value无返回值为undefined
- 生成器函数只在初次调用next()方法开始执行
- 生成器对象可作为可迭代对象

## yield

- yield可以让生成器函数开始或暂停执行，生成器函数在遇到yield关键字之前都会顺序执行，遇到yield之后暂停执行，只能在生成器对象上调用next()函数才会恢复执行
- yield返回的值会赋值到next返回的对象属性value上
- yield关键字生成器函数退出done值为false，return为 true
- 生成器函数区分生成器对象，相互不影响
- yield关键字只能在生成器函数当中用，在其他地方会抛出异常

### 使用yield实现输入输出

- yield会接收next()传入的参数，第一次调用next传入的值不会被使用，因为第一次是为了开始执行生成器函数

## yield*

- 将可迭代对象序列化成一连串可以单独输出的值

### 使用yield* 实现递归算法

```javascript
function *generatorFn(n) {
    if (n > 0) {
        yield* generatorFn(n-1);
        yield n-1;
    }
}

for ( let i of generatorFn(3)) {
    console.log(i)
}
// 0,1,2

// 等同于

function generatorFn(n) {
    if (n>0) {       
        generatorFn(n-1)
    } 
    console.log(n)
}

generatorFn(3)

```

## 提前终止生成器

- return 强制生成器进入关闭状态，一旦关闭就无法恢复了。后续调用返回done为true，for-of等内置语言会忽略done：true的返回值
- throw 

## 总结

生成器函数是一种特殊的函数，调用之后会返回一个生成器对象，生成器对象实现了iterable接口，所以可以用在任何可以用可迭代对象的地方。yield关键字能够暂停执行生成器函数，可通过next()函数接收和产生输出，yield*可以把可迭代对象序列化成一连串值
```javascript

```


