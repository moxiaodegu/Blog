# promise
 - Promise 对象用于表示一个异步操作的最终完成 (或失败), 及其结果值.
 - 异步调用
 - 在本轮事件循环结束之前，回调函数不会被调用
 - 链式调用
## promise 状态
 - padding 初始状态
 - fulfilled 成功
 - rejected 失败

## 属性
 - Promise.length
 - Promise.prototype

## 方法
 - Promise.all([Promise1,Promise2]) 处理多个Promise 对象
 - Promise.reject(reason) 返回失败的promise对象
 - Promise.resolve(value) 返回一个状态由给定value决定的Promise对象。

## promise 原型
 - 属性
	- promise.prototype.constructor
 - 方法
	- catch 失败回调
	- then(onFulfilled, onRejected) 成功失败都会回调
	- finally(onFinally) 不管成功失败完成promise 就回调


