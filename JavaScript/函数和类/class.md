# class

- class是es6新增的语法糖，es5都能实现。类相当于实例的原型

```javascript
// es5
var Person = function() {
  this.name ='limei'
  this.age = 18
}
Person.prototype.sayHi = function(){
  console.log('hi')
}

// es 6
class Person {
  constructor() {
    this.name ='limei'
    this.age = 18
  }
  sayHi() {
      console.log('hi')
  }
}

等同于

Person.prototype = {
  constructor() {},
  sayHi() {},
};

class Point {
  constructor(){
    // ...
  }
}

//Object.assign 可以给类添加多个原型方法
Object.assign(Point.prototype, {
  toString(){},
  toValue(){}
});

```

- class 其实就是构造函数的另一种写法,可以通过instanceof判断 实例对象和类的关系

```javascript
class Person {}
console.log(Person.prototype.constructor === Person) // true
console.log(typeof Person) // function

```

- class立即调用

```javascript
new class Person1{
  constructor(x){
    console.log(x)
  }
}('lll') // lll
```

## 构造函数 和 class的区别

- 函数声明可以提升，类声明不能提升
- 函数受函数作用域控制，类受块级作用域限制
- 构造函数不使用new调用，this会把全局（浏览器window对象）作为内部对象。类会抛出异常
- 类是一种特殊函数
- 类的内部所有定义的方法，都是不可枚举的。构造函数原型上的方法是可以枚举的

## class的构成

> 类的组成不是必须的，空类也可以执行

- 构造函数方法 constructor （构造函数函数体
- 实例方法 （ 构造函数定义在prototype上的方法
- 获取函数
- 设置函数
- 静态方法

## constructor

- 通过new创建实例时，自动调用该方法
- 直接new操作赋实例化class，其实就是在实例化class的构造函数constructor。当构造函数没有的时候，默认构造函数为空函数

```javascript
class Point {
}

// 等同于
class Point {
  constructor() {}
}
```

- 如果不需要参数，后面括号可不➕

```javascript
class Point {
}

// 等同于
const aa = new Point
```

- 默认返回this对象，如果返回其他对象，this会销毁，通过instanceof检测不出来和类有关联.因为这个对象的指针并没有被修改
- 每次new 都会调用constructor 生成新的实例对象

```javascript
class Person {
  constructor() {
    this.name ='limei'
    this.age = 18
  }
  sayHi() {
      console.log('hi')
  }
}
const person = new Person() 等同于 const person = new Person.constructor()

class Person1 {
  constructor() {
    return { // 这个对象的prototype 是object 不是person1
      name:'name'
    }
  }
}
 
const person = new Person1()
console.log(person instanceof Person1 ) // false 
console.log(person.__proto__ == Object.prototype) // true
```

## 原型方法

- 实例之间可以共享的方法，类语法块中定义的方法被称为原型方法
- 类的所有实例共享一个原型对象。
- 原型上也可以设置get set函数

```javascript
class Person {
  constructor() {
    this.name ='limei'
    this.age = 18
  }
  sayHi() { // 原型方法
      console.log('hi')
  }

  set name(newName) {
    this.name_ = newName;
  }
  get name() {
    return this.name_;
  }
}
```

## 静态方法

- class静态方法用static做前缀
- this引用类自身
- 类的方法前有static关键字，表示这个方法不能被实例继承
- 父类静态方法可以被子类继承，也可以在子类静态方法中通过super对象调用

```javascript
// 适用于工厂函数
    class Person {
      constructor(age) {
        this.age_ = age;
      }
      sayAge() {
        console.log(this.age_);
      }
      static create() {
        // 使用随机年龄创建并返回一个Person实例
        return new Person(Math.floor(Math.random()＊100));
      }
    }
    console.log(Person.create()); // Person { age_: ... }
```

## class的继承extends

```javascript

class A {
}

class B extends A {
}

B.__proto__ === A // true
B.prototype.__proto__ === A.prototype // true

继承原理：
class A {
}

class B {
}

// B 的实例继承 A 的实例
Object.setPrototypeOf(B.prototype, A.prototype);

// B 继承 A 的静态属性
Object.setPrototypeOf(B, A);

const b = new B();

setPrototypeOf实现原理：

Object.setPrototypeOf = function (obj, proto) {
  obj.__proto__ = proto;
  return obj;
}

Object.setPrototypeOf(B.prototype, A.prototype);
// 等同于
B.prototype.__proto__ = A.prototype;

Object.setPrototypeOf(B, A);
// 等同于
B.__proto__ = A;

```

- 既可以继承类，也可以继承构造函数
- 派生类可以通过原型链访问到类和原型上的方法

```javascript
    class Vehicle {
      identifyPrototype(id) {
        console.log(id, this);
      }
      static identifyClass(id) {
        console.log(id, this);
      }
    }
    class Bus extends Vehicle {}
    let v = new Vehicle();
    let b = new Bus();
    b.identifyPrototype('bus');         // bus, Bus {}
    v.identifyPrototype('vehicle');    // vehicle, Vehicle {}
    Bus.identifyClass('bus');           // bus, class Bus {}
    Vehicle.identifyClass('vehicle'); // vehicle, class Vehicle {}
```

## super

- super只能在派生类构造函数和静态方法中使用，用于使用父类构造方法或静态函数
- 不能单独引用super关键字，要么用它调用构造函数，要么用它引用静态方法。
- 调用super()会调用父类构造函数，并将返回的实例赋值给this。
- 在类构造函数中，不能在调用super()之前引用this。
- 子类必须在constructor()方法中调用super()，否则就会报错。这是因为子类自己的this对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，添加子类自己的实例属性和方法。如果不调用super()方法，子类就得不到自己的this对象。
- super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。
- super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。

```javascript
class A {
  p() {
    return 2;
  }
}

class B extends A {
  constructor() {
    super();
    console.log(super.p()); // 2
  }
}

let b = new B();
```

- 在子类普通方法中通过super调用父类的方法时，方法内部的this指向当前的子类实例。 通过super对某个属性赋值，这时super就是this

```javascript
class A {
  constructor() {
    this.x = 1;
  }
  print() {
    console.log(this.x);
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
  }
  m() {
    super.print();
  }
}

let b = new B();
b.m() // 2
```

- 如果super作为对象，用在静态方法之中，这时super将指向父类，而不是父类的原型对象

## 实例属性新写法

- 实例属性现在除了可以定义在constructor()方法里面的this上面，也可以定义在类内部的最顶层。
- 加static 会变成类的静态属性

```javascript
class Person {
  name = 6 等同于 constructor(){
                    this.name='6'
                  }

  // static name 类的静态属性
  getname() {
    return this.name
  }
}
const aa1 = new Person
console.log(aa1.name);
console.log(aa1.getname());
```

## 类的私有属性

在属性和方法名前加#
不能被继承

```javascript
class Person {
  #name = 2 // 私有属性
}
```