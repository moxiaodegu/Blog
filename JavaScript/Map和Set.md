# Map（映射）
 - es6引入了一个新的数据结构来将一个值映射到另一个值上。一个Map集合就是一个简单的键值对映射集合，可以按照数据插入的顺序遍历所有的元素。
 - Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值(对象或者原始值) 都可以作为一个键或一个值
## Map和Object比较
 - Map key可以是任何值， object 只能是string 或 smyblo；
 - Map 默认没有任何key，Object有原型，原型链上有一些默认的属性名
 - Map 的key是有序的， Object 的key是无序的
 - Map可通过size获取键值个数，object只能通过手动计算
 - 在频繁操作键值对场景下Map 表现更好

## Map 对象通过构造函数	Map() 创建
 - var map = new Map()
 - 所有的Map对象都会继承Map.prototype
## Map 有哪些属性
 1.size
 2.constructor
## Map 方法
 1. clear() 移除所有键值对
 2. delete(key) 存在并删除成功 返回true，不存在 false
 3. entries() 返回新的Iterator对象
 4. forEach(callback，[，thisArg]) 为每个Map里的键值对返回一个callback函数
 5. get(key) 返回键值对的值，没有则返回undefined
 6. has(key) 返回布尔值，判断是否有这个键对应的值
 7. keys() 返回Iterator对象,包含Map对象每个元素的键
 8. set(key, val) 设置Map对象值，返回Map对象
 9. values() 返回Iterator对象,包含Map对象每个元素的值

## 迭代Map
for... of 

	for (let [key, value] of myMap) {
		console.log(key + " = " + value);
	}

	for (let key of myMap.keys()) {
		console.log(key);
	}

	for (let value of myMap.values()) {
		console.log(value);
	} 

forEach

	myMap.forEach(function(value, key) {
		console.log(key + " = " + value);
	})

## Map和array的关系
 - Map可以将一个二维键值对数组转化成一个Map对象

		var myMap = new Map([['key1': key1],['key2': key2]]);

 - 使用Array.form()可以把Map对象转化成一个二维键值对数组

		Array.form(myMap) 或者 [...myMap]
 
 ## Map 合并
 - Map对象同数组进行合并时，如果有重复的键值，则后面的会覆盖前面的。

# Set（集合）
 - Set 是值的集合，按照插入顺序迭代元素，set的值是唯一的
## Set对象通过构造函数 Set()创建
	var mySet = new Set()
## Set 属性
 - size
## Set 方法
1. add(val) 末尾添加，返回Set对象
2. clear() 移除所有
3. delete(val) 删除val
4. entries() 返回一个新的迭代器对象
5. forEach()
6. has(val)
7. keys() 与values方法相同，返回新的迭代器对象
8. values()
## Set 迭代方法
 - for...of
 - forEach
## array 和 Set对象 相互转换
	mySet = new Set([1, 2, 3, 4]);
	[...mySet];  
	Array.from(mySet)