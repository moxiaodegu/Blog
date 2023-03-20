
JavaScript从编译到执行分为四个步骤

![20210702143424](https://cdn.jsdelivr.net/gh/moxiaodegu/ImageHosting/imagesBlogs/20210702143424.png)

```
词法分析 
语法分析
预编译
解释执行
```

词法分析、语法分析、解释执行是有引擎控制的，预编译由编译器控制。

# 词法分析

词法分析就是将我们写的代码块分解成词法单元。
在《你不知道的js》中是这样描述的：将由字符组成的字符串分解成（对编程语言来说）有意义的代码块，这些代码块被称为词法单元（token）。例如，考虑程序var a = 2;。这段程序通常会被分解成为下面这些词法单元：var、a、=、2 、;。空格是否会被当作词法单元，取决于空格在这门语言中是否具有意义。

# 语法分析

语法分析是将词法单元流（数组）转换成一个由元素逐级嵌套所组成的代表了程序语法结构的树。这个树被称为“抽象语法树”（Abstract Syntax Tree,AST）。
并检查你的代码有没有什么低级的语法错误，如果有，引擎会停止执行并抛出异常。
# 预编译
## 预编译是在什么时候发生的
大家都知道JavaScript是解释型语言，既然是解释型语言，就是编译一行，执行一行，那预编译是在什么时候发生的呢？一般情况下是在script内代码块（如一个js文件）执行前和函数执行前。

## 实例分析
我们可以来看一个例子：
```javascript
    console.log(a);
    var a = 1;
    console.log(a);
    function test(a) {
        console.log(a);
        var a = 123;
        console.log(a);
        function a() {}
        console.log(a);
        console.log(b);
        var b = function() {}
        console.log(b);
    }
    test(2);
```
### 全局预编译

**当我们执行上面这段代码时，大概预编译过程如下：**
1. 创建一个全局对象GO/window（全局作用域）
2. 分词
3. 检查语法是否有错误
4. 从上到下查找，遇到var声明，先去全局作用域查找是否有同名变量，如有忽略当前声明，没有则添加声明变量为GO对象的属性，值为undefined，并为变量分配内存。遇到function，如有同名变量，则将值替换为function函数，没有则添加到GO，并分配内存并赋值。我一直在想es6中let/const 的暂存死区问题，自己得出一个结论：当遇到let/const声明时，虽然没有进行变量提升，预编译也没有忽略他们，在函数作用域或者块级作用域下，会添加一个标识，已防止去外层作用域获取。

**按照上面的过程我们可以抽象描述为：**

```
    GO/window = {
        a: undefined,
        test: function(a) {
            console.log(a);
            var a = 123;
            console.log(a);
            function a() {}
            console.log(a);
            console.log(b);
            var b = function() {}
            console.log(b);
        }
    }
```
**然后编译解释代码，在tast函数被调用之前：**

```
    GO/window = {
        a: 1,
        test: function(a) {
            console.log(a);
            var a = 123;
            console.log(a);
            function a() {}
            console.log(a);
            console.log(b);
            var b = function() {}
            console.log(b);
        }
    }
```

**这时候控制台会打印出：**
```
undefined
1
```

### 函数预编译
当执行test(2)前，也会进行预编译

**编译过程如下**
1. 创建AO（active object）对象（函数作用域）
2. 将形参变量为AO对象属性，值为undefined，并分配内存
3. var声明，先去全局作用域查找是否有同名变量，如有忽略当前声明，没有则添加声明变量为AO对象的属性，值为undefined，并为变量分配内存。遇到function，如有同名变量，则将值替换为function函数，没有则添加到GO，并分配内存并赋值。
4. 实参赋值给形参

**编译过程抽象描述为：**

```
test(a) {
    console.log(a);
    var a = 123;
    console.log(a);
    function a() {}
    console.log(a);
    console.log(b);
    var b = function() {}
    console.log(b);
}
```

预编译到第三行为：
1. 将形参a添加到AO对象，值为undefined，并分配内存空间。
2. 到var a = 123时，编译器首先检查AO对象是否有属性a，有，忽略。继续向下;
```
    AO = {
        a:undefined,
    }

```

预编译到第五行：
1. 到function a() {}时，查看是否有属性a,有，替换，并赋值function() {}
```
    AO = {
        a:function() {},
    }

```

预编译完成：
1. 到var b = function() {}，时，编译器首先检查AO对象是否有属性b，没有，将b添加到AO对象，值为undefined;

```
    AO = {
        a:function() {},
        b:undefined
    }

```

**这时候控制台会打印出：**
```
undefined
1
[Function: a]
123
123
undefined
[Function: b]

```

## var vs function
我看到很多的文章，写的是预编译中把变量声明和函数声明分开，先变量声明，后函数声明。这样确实可以解决一个疑问，明明函数声明在变量声明的前面，为什么打印出来的值不是undefined。其实是有一个理解错误：当遇到重名后，当前变量声明将被忽略，而不是被替换。

# 总结

**预编译发生在执行前的几微秒或者更少**

**预编译变量只提升声明、函数整体提升**

**匿名函数不进行预编译**