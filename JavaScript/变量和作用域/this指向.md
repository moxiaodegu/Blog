## this的绑定方式

### 默认绑定

要说清楚默认绑定，就要从js解释执行说起，
我们都知道js在执行前，都会进行词法分析（将js语句分词，成计算机可识别的语言）、语法分析（查看语句是否有错误，有则抛出异常）、预编译（确认作用域和作用域链，变量提升、函数提升）、压入主执行栈（创建执行上下文，将this指向当前执行上下文）、代码执行

所以说，默认绑定发在代码进入主执行栈，将this指向刚创建的执行上下文

### 隐式绑定

```javascript
const a = 1
function foo() {
  console.log(this.a)
}
const obj = {
  a:2,
  foo
}
foo() // 1
obj.foo() // 2
```

### 显式绑定

bind、call、apply

### new 绑定

new 出来的函数 this 绑定的是新创建的对象

```javascript

function Foo(a){
  this.a = a
}
let bar = new Foo(2)
console.log(bar.a) // 2
```

## 指向判断顺序

1. 函数是否在 new 中调用，如果是的话 this 绑定的是新创建的对象；
2. 函数是否通过 call、apply、bind 的方式调用，如果是的话 this 绑定的是指定的对象；
3. 函数是否在某个上下文中被调用，如果是的话 this 绑定的是函数调用的上下文；
4. 除此之外 this 绑定的就是全局对象 在严格模式下绑定的是 undefined。

## 改变this指向

1. 变量保存 this：将 this 临时保存下来
2. call()：使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。
3. bind()：会有一个返回值，返回值是一个拥有第一个函数作用域的新的函数体
4. apply()：调用一个具有给定 this 值的函数，以及以一个数组（或一个类数组对象）的形式提供的参数。
