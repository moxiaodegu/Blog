
### 块级作用域

众所周知，在 ES5 当中，只有`全局作用域`和`函数作用域`。那为什么需要`块级作用域`呢？

- 场景一：内层同名变量会覆盖外层变量

    ```javascript
    var str = "hello,world!";
    function fun() {
    console.log(str);
    var str = "你好，世界";
    }
    fun(); // undefined

    var str = "hello,world!";
    function fun() {
    console.log(str);
    let str = "你好，世界";
    }
    fun(); //  ReferenceError
    ```

- 场景二：循环变量泄露为全局变量

    ```javascript
    for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
    }
    // 5 5 5 5 5
    for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
    }
    // 1 2 3 4 5
    ```

    在ES5，我们在通常会使用匿名立即执行函数解决这类问题

    ```javascript
    for (var i = 0; i < 5; i++) {
        (function (i) {
            setTimeout(() => {
                console.log(i);
            }, 1000);
        })(i)
    }
    // 1 2 3 4 5
    ```

## let

let 实际上是 ES6 新增的块级作用域，和var相比，有以下特征

> 不存在变量提升

var 声明的变量会提升到当前作用域的最顶端，注意只提升声明，不提升赋值。

```javascript
console.log(str); // undefined
var str = "javascript";
等价于;
var str;
console.log(str);
str = "javascript";
```

let 不存在变量提升

```javascript
console.log(str); // ReferenceError
let str = "javascript";
```

> 暂时性死区

只要是 let 声明的变量会“绑定”到当前作用域，不会受外部影响，在代码块内，使用 let 命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”，总之，暂时性死区的本质就是，<strong>只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量</strong>。

```javascript
var tmp = 123;
if (true) {
  tmp = "abc"; // ReferenceError
  let tmp;
}
```

> 不允许重复声明

let 不允许同一作用域内重复声明同一个变量，重复的var声明会被忽略，重复的let声明会报错。

```javascript
var str;
var str; // 可以

var str;
let str; //报错

let str1；
let str1; //报错
```

因此，函数内部不能使用let重复声明参数

```javascript
function fun(str) {
    var str = "222"
    console.log(str);
}

fun("111"); // 222


function fun(str) {
    let str = "222"
    console.log(str);
}

fun("111"); // 报错
```

> 不属于window属性
使用var变量声明时，变量会自动添加到最近的执行上下文。
var、function属于全局变量，是顶层对象的属性，let、const、class 不属于顶层对象属性，不可通过window.去访问

## const

const 声明一个只读的常量，一旦被声明就不允许改变。

```javascript
const str = "str"
str = "str" // 报错
```

const和let一样声明只在块级作用域有效，同样没有变量提升，和存在暂时性死区，也不可重复声明

> const的本质

我们都知道，基本类型数据存在栈内存中，引用类型数据只是在栈内存存储了一个指向堆内存的指针，实际数据存放在堆内存中。
const并不是保证这个变量不可以改变，而是保证这个变量指向的占内存的值不可改变，所以使用const创建引用类型数据要小心

```javascript
const arr = [];
arr.push(1) // 可以
arr = 1 // 报错
```

如果想将一个对象冻结的话，可以使用`Object.freeze`方法

```javascript
const foo = Object.freeze({});
// 常规模式时，面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;
```

之前记录的笔记

### 变量提升

- 变量的声明都将被提升到作用域顶端。

   ```javascript
  console.log(v1);
  var v1 = 100;
  function foo() {
   console.log(v1);
   var v1 = 200;
   console.log(v1);
  }
  foo();
  console.log(v1);
  // undefined  undefined 200  100
   ```

### let

1. 创建块级作用域。
2. 定义后不能重新定义。
3. 不存在变量提升。
5. 全局作用域下定义时不会被挂载到顶层对象上（window对象 / global 对象）

### let vs var

1. 作用域不同
2. var 存在变量提升

 > var 声明的变量和 let 或 const 声明的变量，在创建相应作用域的词法环境阶段，都会注册标识符，但仅通过 var 声明的变量存在会变量提升

3. var可重复定义
4. let存在暂时性死区。

 > 暂时性死区：在代码块内使用const命令和let命令声明变量之前，该变量都不可用

### const

1. 同let
2. 一旦初始化赋值，不可更改
3. 定义时必须初始化
4. 本质：

 > const本质不是不能改变变量的值，是不能改变变量指向的内存地址，基本类型变量的值保存在这个变量指向的内存地址里，所以等同于一个常量，引用类型的变量指向的内存地址里保存的是一个指针，const只能保证这个指针不变，但是控制不了数据结构的改变
