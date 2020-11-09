 # 事件循环机制（event loop）
 整个Event Loop的执行顺序如下：
1. 执行一个宏任务（栈中没有就从事件队列中获取）
2. 执行过程中如果遇到微任务，就将它添加到微任务的任务队列中,如果遇到宏任务任务，就将它添加到宏任务的任务队列中
3. 宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）
4. 当前宏任务执行完毕，开始检查渲染，然后GUI线程接管渲染
5. 渲染完毕后，JS线程继续接管，开始下一个宏任务（从事件队列中获取，也就是 callbacke queue）

## 宏任务
1.settimeout
2.setInterval
3.setImmediate
4. I/O （node）
## 微任务
1.promise
	```javascript
		console.log('script start')

		// 这边的 await 可能不太好理解，我换成了另一种写法
		async function async1() {
			await async2().then(res => {
				console.log('async1 end')
				setTimeout(function() {
					console.log('setTimeout222222')
				}, 0)
			})

			console.log('gggggggggggggggggggg')
		}
		function async2() {
			console.log('async2 end')
			return Promise.resolve(undefined);
		}

		async1()

		setTimeout(function() {
		console.log('setTimeout')
		}, 0)

		new Promise(resolve => {
		console.log('Promise')
		resolve()
		})
		.then(function() {
			console.log('promise1')
		})
		.then(function() {
			console.log('promise2')
		})

		console.log('script end')
		<!-- <!-- script start async2 end Promise script end async1 end promise1 promise2 setTimeout setTimeout222222 -->
	```