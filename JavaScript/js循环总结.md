### while() / do...while
- 条件为真，不断循环代码块
### for
- 条件为真，不断循环代码块
### for...in
- 以任意顺序遍历一个对象的除Symbol以外的可枚举属性（包括继承属性）。
- 可通过hasOwnProperty（key）判断这个属性是否属于自身
- 遍历对象或数组的键的列表
### for...of
- 在可迭代对象上（ Array，Map，Set，String，TypedArray，arguments 对象等等）创建一个循环
- 迭代可迭代对象的值列表
### forEach
- 对数组每个元素执行一次的函数
- arr.forEach(callback(currentValue [, index [, array]])[, thisArg]) 
- 没有返回值（返回undefined）
- 已删除或未初始化会被跳过
- 不改变原数组
### find
 - 返回数组中第一个满足条件的第一个元素的值，否则返回undefined。
 - findIndex()返回满足条件的第一个元素值的索引
 - arr.find(callback（currentValue [, index [, array]]）[, thisArg])
### map
 - 返回新数组
 - 不修改原数组本身
 - var new_array = arr.map(function callback(currentValue[, index[, array]]) {
 // Return element for new_array 
}[, thisArg])
### filter
 - 创建新数组。数组包含通过所提供函数测试的所有元素
### reduce / reduceRight
 - 执行所提供的函数，将结果汇总成单个返回值
### some
### every
### Object.keys()
 - 返回对象自身属性名列表（不包含继承）
### Object.getOwnPropertyNames()
 - 返回对象自身属性名列表（包含继承）

### for...in vs for...of
1. for...in遍历对象的键值，for...of遍历对象的键名
2. for...in遍历对象的原型链，for...of只遍历对象本身
3. fro...in遍历数组返回数组所有可枚举属性，for...of只返回数组下标对应的属性值

### map foreach filter 
1. map foreach filter 在循环中途无法停止
2. foreach没有返回值
3. foreach不会跳过空位


