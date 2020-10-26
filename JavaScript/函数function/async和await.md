# 异步函数
### async
 - async function 用来定义一个返回 AsyncFunction 对象的异步函数
 - 一个async异步函数可以包含0个或者多个await指令，该指令会暂停异步函数的执行，并等待Promise执行，然后继续执行异步函数，并返回结果。
 - 不阻塞主线程
 
 ### await 关键字只在异步函数内有效。
 - async/await的目的是简化使用多个 promise 时的同步行为
 - 返回隐式promise对象

 ### 使用和不使用异步函数的区别
 ```javascript
 
login(userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('1001');
        }, 600);
    });
}
 
getData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === '1001') {
                resolve('Success');
            } else {
                reject('Fail');
            }
        }, 600);
    });
}
 
// 不使用async/await ES7
doLogin(userName) {
    this.login(userName)
        .then(this.getData)
        .then(result => {
            console.log(result)
        })
}
 
// 使用async/await ES8
async doLogin2(userName) {
    const userId=await this.login(userName);
    const result=await this.getData(userId);
}
 
this.doLogin()// Success
this.doLogin2()// Success

 ```

### 获取异步函数返回值
  - 异步函数返回promise对象。可以通过then获取异步函数的返回值
  ```javascript
	async function charCountAdd(data1, data2) {
		const d1=await charCount(data1);
		const d2=await charCount(data2);
		return d1+d2;
	}
	charCountAdd('Hello','Hi').then(console.log);//通过then获取异步函数的返回值。
	function charCount(data) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(data.length);
			}, 1000);
		});
	}
  ```
### 并发场景可使用Promise.all()提高效率

```javascript
async function charCountAdd(data1, data2) {
    const [d1,d2]=await Promise.all([charCount(data1),charCount(data2)]);
    return d1+d2;
}
charCountAdd('Hello','Hi').then(console.log);
function charCount(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data.length);
        }, 1000);
    });
}
```
### async/await错误处理方式
 - 捕捉整个async/await函数错误
	```javascript
	async function charCountAdd(data1, data2) {
		const d1=await charCount(data1);
		const d2=await charCount(data2);
		return d1+d2;
	}
	charCountAdd('Hello','Hi')
		.then(console.log)
		.catch(console.log);//捕捉整个async/await函数的错误
	```
  - 捕获单个await错误
	```javascript
	async function charCountAdd(data1, data2) {
		const d1=await charCount(data1)
			.catch(e=>console.log('d1 is null'));
		const d2=await charCount(data2)
			.catch(e=>console.log('d2 is null'));
		return d1+d2;
	}
	charCountAdd('Hello','Hi').then(console.log);
	```
  - 捕获多个await表达式错误
	```javascript	
	async function charCountAdd(data1, data2) {
		let d1,d2;
		try {
			d1=await charCount(data1);
			d2=await charCount(data2);
		}catch (e){
			console.log('d1 is null');
		}
		return d1+d2;
	}
	charCountAdd('Hello','Hi')
		.then(console.log);
	
	function charCount(data) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(data.length);
			}, 1000);
		});
	}
	```

