### new运算符到底做了什么

1. 在内存中创建一个对象
2. 将对象的隐式原型（__proto__）赋值为构造函数的显式原型（prototype）
3. 将对象的constructor 指向构造函数本身
4. 构造函数内部this指向新对象
5. 执行构造函数内部代码，给新对象添加属性
6. 返回新对象

```javascript
function Foo() {
    this.name = "limei"
}
const obj = new Foo()
// 上面的代码new干了下面这些事
const o = {}
o.__proto__ = Foo.prototype
o.constructor = Foo
o.name = "limei"
return o
```

## 实现一个new

```javascript
function factory(Fun) {
  let obj = new Object() // 创建一个对象
  const args = [...arguments].slice(1)
  obj.__proto__ = Fun.prototype // 把对象的__proto__指向构造函数的原型
  obj.constructor = Fun // 对象的constructor指向构造函数本身
  Fun.apply(obj,args) // 将构造函数的this指向对象并执行
  return obj // 返回新对象
}
```