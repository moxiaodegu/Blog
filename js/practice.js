/**
 * 1. event loop 考察
 * 结果：start end 1 2 3 7 8 
*/
console.log("start")
setTimeout(()=>{
    console.log('1')
    new Promise(function(resolve){
     console.log(" 2 ")
      resolve();
}).then(function() {
        console.log('3')
    })
}, 0)
setTimeout(()=>{
    console.log('7')
    Promise.resolve().then(function() {
        console.log('8')
    })
}, 0)
console.log("end")

/**
 * 字符串颠倒输出
 */
 Array.prototype.reduce.call('abcdefg', (prve, cur) => cur + prve)

 /** 
  * 数组交集 并集
 */

 let temp1 = [2,3,4,5,6,7,8];
 let temp2 = [1,3,5,6,7,9,8,2]
 
 // 交集
 temp1.filter( e => new Set(temp2).has(e))
 // 差集
 temp1.filter( e => !(new Set(temp2).has(e)))
 //  并集
 new Set([...temp1, ...temp2])

 /** 
  * 数组去重
 */
let repeat1 = [1,2,1,2,4,5,6,4,6,7,8,7,6]
let repeat2 = [...new Set(repeat1)]


