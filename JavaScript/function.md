# 函数
 - function foo() {}
 - var foo = function() {}
 - var foo = function ber() {}

# 立即执行函数
 - (function(){})()    常用
 - (function(){}())    w3c推介
 - 本质作用是创建一个独立的作用域
    1.模块化开发中，设置私有变量防止污染全局环境
    2.解决闭包中状态保存问题
    3.初始化数据和页面

# arguments 对象
 - 函数的实际参数会被保存在类似于数组的arguments对象中，在函数中，可以通过arguments[i]来找到对应的参数。
 - arguments.length 来获取参数数量
 - arguments是类数组对象。因为它有索引和length属性。但是类数组对象不能拥有array的所有属性。

# 默认参数
 - js的参数默认值是undefined
 - function multiply(a, b = 1) { return a*b;}

# 剩余参数
  把不确定数量的参数可以表示为一个数组
  function(mul, ...temp){ return temp.map(x => mul * x); }arg

# 箭头函数
 箭头函数和函数表达式比较
  1. 箭头函数拥有较短的语法，更简洁
  2. 箭头函数使用词法的方式绑定this
	1. 函数表达式：谁调用我，我就指向谁
		1.this总是指向它的直接调用者
		2.非严格模式，找不到调用者，指向window。在严格模式下。找不到调用者，为undefined。
		3.使用call,apply,bind(ES5新增)绑定的,this指的是 绑定的对象
	2. 箭头函数：我在哪个环境，我就指向谁
		1.没有自己的this，是继承来的，默认指向它定义时所处的对象
 3. 箭头函数总是匿名的u
 4.箭头函数没有arguments类对象
 5.不能通过new 对象调用
 6.没有原型
 7.没有super
 
 # 构造函数和普通函数区别
 1. 构造函数首字母大写
 2. 调用方式不同，构造函数 通过 new调用
 3. 作用不同，构造函数用来创建实例对象





