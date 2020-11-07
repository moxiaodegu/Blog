### async
 - 异步函数
 - async function 用来定义一个返回 AsyncFunction 对象的异步函数
 - 一个async异步函数可以包含0个或者多个await指令，该指令会暂停异步函数的执行，并等待Promise执行，然后继续执行异步函数，并返回结果。
 - 不阻塞主线程
 
 ### await 关键字只在异步函数内有效。
 - async/await的目的是简化使用多个 promise 时的同步行为
 - 返回隐式promise对象
