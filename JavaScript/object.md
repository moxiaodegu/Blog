### 枚举一个 object 的所有属性
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
4. Object.values(objName) 返回自身（不包含继承）属性的所有值的数组
5. Object.entries(objname) 返回自身 key value 的二级数组
	```javascript
	for(let [key,value] of Object.entries(obj1)){
		console.log(`key: ${key} value:${value}`)
	}
	```
6. Object.getOwnPropertyDescriptors(obj) 返回所有自身属性描述符

### 比较两个值是否相同
 - Object.is(value1, value2); // 返回Boolean

### 创建对象
1. var obj = {}
2. 构造函数
   function ObjCur(name, age) {
      this.name = name;
	  this.age = age;
   }
   var obj = new ObjCur('limi', 30)
   
3.Object.create()

### 继承
 - js对象最少继承一个对象，被继承的对象称为原型，可通过构造函数prototype找到

### getters 和 setters
 - 初始化
	```javascript
	var o = {
		a: 7,
		get b() { return this.a + 1; },
		set c(x) { this.a = x / 2; }
	};
	```
 - Object.defineProperties
 	```javascript
	Object.defineProperties(o, {
		"b": { get: function () { return this.a + 1; } },
		"c": { set: function (x) { this.a = x / 2; } }
	});
	```
### 删除object
 - delete

### 比较对象
 - js中 对象是引用类型，两个独立声明的对象永远也不会相等

### 方法
  - Object.create()
  - Object.assign(a,b)合并b对象到a,返回合并后对象，相同键名后面覆盖前面，浅拷贝，引用类型数据拷贝的是可枚举属性值。

### 对象属性简写（es6新增）
```javascript
const name='Ming',age='18',city='Shanghai';
        
const student = {
    name,
    age,
    city
};
console.log(student); // {name: "Ming", age: "18", city: "Shanghai"}
```
