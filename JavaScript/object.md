# 枚举一个 object 的所有属性
1. for...in 枚举一个对象及其原型链中所有可枚举属性

		for(let i in objectName) {
			if (objectName.hasOwnProperty(i)) { // 只关注自身属性

			}
		}
2.Object.keys(objectName) 返回对象自身（不包含原型链）的所有可枚举属性名称的数组
3.Object.getOwnPropertyNames(objectName) 返回对象自身（不包含原型链）的所有可枚举不可枚举的属性名称的值

# 创建对象
1. var obj = {}
2. 构造函数
   function ObjCur(name, age) {
      this.name = name;
	  this.age = age;
   }
   var obj = new ObjCur('limi', 30)
   
3.Object.create()

# 继承
 - js对象最少继承一个对象，被继承的对象称为原型，可通过构造函数prototype找到
# getters 和 setters
 - 初始化

		var o = {
			a: 7,
			get b() { return this.a + 1; },
			set c(x) { this.a = x / 2; }
		};
 - Object.defineProperties

		Object.defineProperties(o, {
			"b": { get: function () { return this.a + 1; } },
			"c": { set: function (x) { this.a = x / 2; } }
		});
# 删除object
 - delete
# 比较对象
 - js中 对象是引用类型，两个独立声明的对象永远也不会相等