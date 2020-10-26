# class
 - class是基于原型的继承的语法糖
 - class 声明没有提升
 - 类不能继承常规对象
 - class实现继承更加易读，易理解
 - 更后端语法很像
 - class在语法上更贴合面向对象的写法
 - class实现继承更加易读，易理解
 - 更后端语法很像
 - 本质还是语法糖，使用prototype

## 创建class
1. class className {}
2. var className = class {}

## constructor
 - 一个class只允许有一个构造函数
 - 在构造函数里可以使用super()调用一个父类的构造函数

## 静态方法 static
 - 不能通过类的实例调用静态方法

## 实例属性
 - 实例属性必须定义在类的方法里

## 字段声明
 - 公有
	```javascript
	class test{
		height;
	}
	```
 - 私有 
	```javascript
	class test{
		#height;
	}
	```
## 通过 extends 创建子类
 - 如果子类中定义了构造函数，那么它必须先调用 super() 才能使用 this 。
	```javascript
	class temp{

	}

	class temp1 extends temp {

	}
	```
## super 调用超类
```javascript
class Rectangle {
	constructor() {}
	static logNbSides() {
		return 'I have 4 sides';
	}
}

class Square extends Rectangle {
	constructor() {}
	static logDescription() {
		return super.logNbSides() + ' which are all equal';
	}
}
```