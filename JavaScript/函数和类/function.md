## 箭头函数和普通函数的区别

const foo = ()=>{} 等价于 function foo(){}

1. 箭头函数不能使用augments、super、new.target（指向被new执行的构造函数）
2. 箭头函数不能用做构造函数
3. 箭头函数没有prototype
4. this指向不同，箭头函数指向创建的作用域（箭头函数没有自己的this，内部的this就是定义时上层作用域中的this），普通函数指向函数调用（函数执行时）的作用域
5. 箭头函数不能用作generator函数

## 参数

函数的参数在内部表现为一个数组

1. 类数组对象 arguments
2. 严格模式下。augments不能更改传入的参数值
3. 所有的参数都是按值传递的， 传递对象传递的是对象的引用值
4. 扩展参数 function foo(...vals) （只能作为最后一个参数

## 重载

定义同名函数，后面会替换前面

## 函数内部

### arguments

- 类数组对象，调用时传入所有参数
- 只有以function定义的函数，才有
- arguments.callee是指向augments所在函数的指针（严格模式下会报错

```javascript
    function factorial(num) {
      if (num <= 1) {
        return 1;
      } else {
        return num＊arguments.callee(num-1); 
        //等同于 
        return num＊factorial(num-1);
      }
    }
```

## this

在标准函数和箭头函数，this的行为不同

- 标准函数
  1. this指向调用函数的上下文对象（作用域）
  2. 全局上下文中调用时，this指向window
- 箭头函数
  1. this始终指向定义函数的作用域

## new.target

如果用new调用，会引用调用的构造函数，否则值为undefined

## 函数属性

- length 返回参数个数
- prototype 不可枚举 返回原型链方法

## 函数方法

可以将任意对象作为函数的作用域

- apply（this值，参数数组）
- call（this值，参数1，参数2）
- bind（this值，参数1，参数2）

三者区别：

1. call 和 apply都是对函数直接调用，bind不会立即调用，只是返回一个改变了this指向的新函数实例
2. apply第二个参数是数组，bind、call是多个参数

```javascript
const aa = '2'
const obj = {
  aa: '3'
}
const obj1 = {
  aa: '4'
}
const foo = () => {
  console.log(this.aa)
}
function foo1() {
  console.log(this.aa)
}
foo() // 2 箭头函数的this始终指向声明函数的作用域
foo.call(obj) // 2 箭头函数的this始终指向声明函数的作用域
foo.apply(obj1) // 2 箭头函数的this始终指向声明函数的作用域
const fooB = foo.bind(obj)
fooB() // 2 箭头函数的this始终指向声明函数的作用域
foo1() // 2
// call apply 除了给函数传参方式不同，其他都一样
foo1.call(obj) // 3
foo1.apply(obj1) // 4
// bind 创建一个更改完this的函数实例
const fooB1 = foo1.bind(obj)
fooB1() // 3
```

## 重写apply/bind/call

```javascript
// 重写apply
Function.prototype.apply1= function(that){
  that.fn= this
  const args = arguments[1] || []
  return that.fn(...args)
}

// 重写call
Function.prototype.call1= function(that){
  // 把当前函数赋值给传入作用对象的fn属性
  that.fn= this 
  const args = [...arguments].slice(1)
  // 如果在对象内部调用，作用域会变成对象内部
  return that.fn(...args)
}

// 重写bind
Function.prototype.bind1= function(that) {
  // 获取参数
  const args = [...arguments].slice(1)
  // 返回一个更改了this指向的函数实例
  const temp = function() {
    return this.apply(that,args)
  }
  // 返回的实例的原型和当前函数的原型保持一致
  temp.prototype = this.prototype
  return temp
}

```

## 函数声明提升

函数声明提升是整体提升

1. function XXX(){} 有函数声明提升

``` javascript
XX() // 可以请求
function XX(){}

xx() // 报错
const xx = function(){}
```

## 闭包

1. 闭包通常在嵌套函数中
2. 闭包会保留包含函数的作用域，所以比起他函数更占内存，容易造成内存泄漏
3. this指向问题，闭包中如果使用的是函数声明创建的函数，那this指向会指向调用的作用域。用箭头函数可以解决，或者把this值赋值给一个变量

闭包原理：https://github.com/mqyqingfeng/Blog/issues/9

## 立即调用函数表达式（IIFE）

es5 中可以通过立即调用函数表达式模拟块级作用域

优点：不会像闭包造成内存泄漏，函数调用完后会立即被销毁

```javascript
// 立即调用函数
(function(){
  // 块级作用域
})()

// 模拟块级
(function(){
  var i = 1
})()
console.log(i) // 报错
```