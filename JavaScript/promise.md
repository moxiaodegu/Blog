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
### Promise.all([Promise1,Promise2...]) 处理多个Promise 对象
> Promise.all() 并行执行。按顺序输出	 
 - 如果传入的可迭代对象为空, promise.all会同步返回一个resolved的promise对象，返回结果是空数组
- 如果传入的promise对象都返回resolved，或者了迭代对象里没有promise，promise.all 异步返回promise对象，返回resolve结果是一个包含返回值的数组
 - 如果传入的promise对象有一个返回rejected，orimise.all异步返回第一个返回rejected回调函数，不管其他是否完成

### Promise.allsettled([promise1....]) 
> 并行执行 按顺序输出，不管传入的promise返回结果为resolved 或者 rejected，都会以数组形式返回所有返回值
 - 传入的promise返回resolve(),返回结果{ status: "fulfilled", value: resolve返回值}
 - 传入promise返回reject(),返回结果{ status: "rejected", reason: reject返回值 }
 ### Promise.any([promise1....]) 
 > Promise.all()相反
 ### Promise.race([promise1...])
  - 如果可迭代对象为空，返回的promise将永远等待
  - 返回值与第一个完成的promise返回值一致
  - 如果迭代包含一个或者多个promise对象或肥promise 或有返回值的promise，Promise.race()将解析为迭代找到第一个值
### Promise.resolve(value)
> 返回 给定值解析后的promise

### Promise.reject(value)
> 返回带有拒绝原有的promise


## promise 原型
 - 属性
	- promise.prototype.constructor
 - 方法
 	- then(onFulfilled, onRejected) 成功失败都会回调
	- catch(onRejected) 失败回调，.catch() 其实只是没有给 handleFulfilled 预留参数位置的 .then() 而已
	- finally(onFinally) 不管成功失败完成promise 就回调


