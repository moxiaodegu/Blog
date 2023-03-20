
## 1. object

- object 数值属性会自动转化成字符串
- 在使用字面量表示定义对象的时候，并不会实际调用Object构造函数
- object是基础类型，所有引用类型都继承了它的基本行为

## 2. 创建object

### var obj = {}  
   var obj = new Object()
### Object.create()

   1. Object.create(proto,[propertiesObject])
      1. proto 没有的话传入null，原型为null，
      2. {} === Object.create(Object.prototype)
      3. propertiesObject参数选。类似于Object.defineProperties(obj, props)第二个参数

         ```javascript
            // 创建一个以另一个空对象为原型,且拥有一个属性p的对象
            o = Object.create({}, { p: { value: 42 } })

            // 省略了的属性特性默认为false,所以属性p是不可写,不可枚举,不可配置的:
            o.p = 24
            o.p
            //42

            o.q = 12
            for (var prop in o) {
            console.log(prop)
            }
            //"q"

            delete o.p
            //false

            //创建一个可写的,可枚举的,可配置的属性p
            o2 = Object.create({}, {
            p: {
                value: 42,
                writable: true,
                enumerable: true,
                configurable: true
            }
            });
         ```

   2. 用于继承一个对象，并添加到原型链中

### 工厂模式

   ```javascript
      function createPerson(name, age, job) {
        let o = new Object();
        o.name = name;
        o.age = age;
        o.job = job;
        o.sayName = function() {
          console.log(this.name);
        };
        return o;
      }
      let person1 = createPerson("Nicholas", 29, "Software Engineer");
      let person2 = createPerson("Greg", 27, "Doctor");
   ```

   解决了批量创建对象，但是没解决新对象的什么类型

### 构造函数模式

- 构造函数与普通函数唯一的区别就是调用方式不同
- 如果用普通方式调用构造函数，属性和方法会被添加到windows对象上
- 在实例化时，如果不想传参数，那么构造函数后面的括号可加可不加

   ```javascript
    function Person(name, age, job){
      this.name = name;
      this.age = age;
      this.job = job;
      this.sayName() {
        console.log(this.name);
      };
    }
    let person1 = new Person("Nicholas", 29, "Software Engineer");
    let person2 = new Person("Greg", 27, "Doctor");
    person1.sayName();   // Nicholas
    person2.sayName();   // Greg
   ```

#### 构造函数和工厂模式区别

   1. 没有显式创建对象
   2. 没有return
   3. 属性和方法直接赋值给this
   4. 构造函数可以标识对象类型（obj instanceof ObjCur）

#### 构造函数原理/new到底做了什么

   1. 在内存新建一个空对象
   2. 把这个对象的[[Prototype]]也就是_proto_指到构造函数的Prototype上
   3. this指向新对象
   4. 执行构造函数内部代码给新函数赋值
   5. 返回这个新对象

#### 新对象的constructor属性指向构造函数，constructor用户标记对象类型

#### 构造函数的问题

构造函数定义的方法会在每个实例上都创建一遍，解决办法是把构造函数的方法放在狗仔函数外部定义,但是会把全局环境搞乱

   ```javascript
    function Person(name, age, job){
      this.name = name;
      this.age = age;
      this.job = job;
      this.sayName = sayName;
    }
    function sayName() {
      console.log(this.name);
    }
    let person1 = new Person("Nicholas", 29, "Software Engineer");
    let person2 = new Person("Greg", 27, "Doctor");
    person1.sayName();   // Nicholas
    person2.sayName();   // Greg
   ```

### 原型模式

```javascript
    function Person() {}
    Person.prototype.name = "Nicholas";
    Person.prototype.age = 29;
    Person.prototype.job = "Software Engineer";
    Person.prototype.sayName = function() {
      console.log(this.name);
    };
    let person1 = new Person();
    let person2 = new Person();
    person1.name = "Greg";
    console.log(person1.name);   // "Greg"，来自实例
    console.log(person2.name);   // "Nicholas"，来自原型
```

### 原型模式的问题

1. 弱化了像构造函数传递初始参数的能力
2. 修改原型的属性，实例对象会拥有相同的属性值

```javascript
    function Person() {}
    Person.prototype = {
      constructor: Person,
      name: "Nicholas",
      age: 29,
      job: "Software Engineer",
      friends: ["Shelby", "Court"],
      sayName() {
        console.log(this.name);
      }
    };
    let person1 = new Person();
    let person2 = new Person();
    person1.friends.push("Van");
    console.log(person1.friends);   // "Shelby,Court,Van"
    console.log(person2.friends);   // "Shelby,Court,Van"
    console.log(person1.friends === person2.friends);   // true
```
## 3. 对象的属性

1. 数据属性
   - configurable 是否可以修改删除，默认为true，更改为false后，这个属性再也能更改了
   - enumerable 是否可以通过for-in循环，默认为true
   - writable 是否可以修改，默认为true
   - value 对象的值
    >修改属性的默认属性必须通过Object.defineProperty()方法。

2. 访问器属性--getter 获取函数/getter 设置函数
   - configurable
   - Get
   - Set
   - 初始化
   >修改属性的默认属性可以Object.defineProperty()方法或者初始化。

    ```javascript
        const info = {
          name1:'lili',
          age:11,
          get name(){
            return this.name1
          },
          set name(n){
            this.name1 = n+'8888'
          },
        }
        info.name = '3333'
        console.log(info.name,info.age)

        Object.defineProperty(o, 'b',{
            get: function () { return this.a + 1; } ,
            set: function (x) { this.a = x / 2; } 
        });
    ```

## 4. 修改对象属性

- Object.defineProperty(obj, prop, descriptor) 直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

```javascript
    const object1 = {};

    Object.defineProperty(object1, 'property1', {
    value: 42,
    writable: false
    });

    object1.property1 = 77;
    // throws an error in strict mode

    console.log(object1.property1);
    // expected output: 42
```

- Object.defineProperties(obj, props) 定义或修改多个对象属性

```javascript
    var obj = {};
    Object.defineProperties(obj, {
    'property1': {
        value: true,
        writable: true
    },
    'property2': {
        value: 'Hello',
        writable: false
    }
    // etc. etc.
    });
```

## 5. 读取对象属性
- Object.getOwnPropertyDescriptor(对象名，属性名)
- Object.getOwnPropertyDescriptors(对象名)

## 6.合并对象
- Object.assign(目标对象,...多个合并对象)
> 该方法接收多个参数，第一个参数为目标对象，后面多个参数为源对象，源对象中可枚举（Object.propertyIsEnumerable()返回true）且 自有（Object.hasOwnProperty()返回true）的属性复制到目标对象，并返回这个对象。复制原理其实就是调用源对象的[get]方法获取到符合条件的属性，调用目标对象的[set]方法保存到目标对象

特点：

- 浅拷贝
- 相同属性名后面的值覆盖前面的值

如：Object.assign(a,b)合并b对象到a,返回合并后对象，相同键名后面覆盖前面，浅拷贝，引用类型数据拷贝的是可枚举属性值。

## 7.类似于 === 的 Object.is(a,b)

对比两个值是否相等

## 8. 枚举一个 object 的所有属性

> 枚举顺序 数值键 字符串键 symbol

1. for...in 枚举一个对象及其原型链中所有可枚举属性

    ```javascript
    for(let i in objectName) {
        if (objectName.hasOwnProperty(i)) { // 只关注自身属性

        }
    }
    ```

2. Object.keys(objectName) 返回对象自身（不包含原型链）的所有可枚举属性名称的数组
3. Object.getOwnPropertyNames(objectName) 返回对象自身（不包含原型链）的所有可枚举不可枚举的属性名称的值
4. Object.getOwnPropertySymbols() 返回不可枚举的属性名称数组
5. Object.getOwnPropertyDescriptors(obj) 返回所有自身属性描述符

## 9. 对象迭代

1. Object.entries(objName) 返回自身 key value 的二级数组
   1. 浅拷贝
   2. 非字符串转字符串
   3. 忽略不可迭代属性

    ```javascript
    for(let [key,value] of Object.entries(obj1)){
        console.log(`key: ${key} value:${value}`)
    }
    ```

2. Object.values(objName) 返回自身（不包含继承）属性的所有值的数组
   1. 浅拷贝



## 10. 继承

- js对象最少继承一个对象，被继承的对象称为原型，可通过构造函数prototype找到

## 11. 删除object

- delete

## 12. es6新增语法糖

- 对象属性简写

    ```javascript
    const name='Ming',age='18',city='Shanghai';

    // es5
    const student = {
        name: name,
        age:age,
        city:city
    };

    // es6     
    const student = {
        name,
        age,
        city
    };
    console.log(student); // {name: "Ming", age: "18", city: "Shanghai"}
    ```

- 简写方法名

  ```javascript
    // es5
    const obj = {
        sayName: function (name) {
            console.log(name)
        }
    }
    // es6
    const obj = {
        sayName(name) {
            console.log(name)
        }
    }
  ```

- 可计算属性

    ```javascript
        const name = "limei"
        const name1 = "limei1"
        const obj = {
            [name1]:"999"
            [name](){

            }
        }

        // {limei:"matt"}
    ```

- 对象解构

    > null 和 undefined 不可以被解构
    > 浅拷贝

    ```javascript
        const obj = {name: "test",age:"22"}
        const {name,age:age1} = obj
        console.log(name) // test
        console.log(age1) // 22
        // 结构不要求变量在结构表达式中声明，但是事先声明的标量复制，要包含在一对括号里面去
        let personName,personAge;
        const obj = {
            name:"person",
            age:"22"
        }
        ({name:personName,age:personAge} = obj)
        
        // 如果a对象想要b对象的部分属性
        let a = {}
        let b = {
            name: "tast",
            age: "22",
            ...
        }
        ({name:a.name} = b)
    ```

  - 嵌套解构
  
     > 外层属性没有定义的情况下不可以使用嵌套语句

    ```javascript
        const obj = {
            name:"test",
            age:"22",
            friends: {
                title: "tit"
            }
        }
        let {friends: person} = obj 
        // obj的friends属性的值是引用类型,如果修改person会影响到obj的属性

        person.title = "浅拷贝"
        console.log(obj.friends) // 浅拷贝

        // 嵌套属性结构
        let {friends: {title} } = obj // 创建一个title变量并赋值obj.friends.title
        let {friends: {title：tit } = obj // 创建一个tit变量并赋值obj.friends.title

    ```

  - 部分解构

    - 如果多个解构，解构成功一部分后解构失败，只能成功一部分
  
  - 参数上下文匹配
    - 函数参数也可以参与解构
