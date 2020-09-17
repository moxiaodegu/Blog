/**
 * 1. event loop 考察
 * 结果：start end 1 2 3 7 8 
*/
console.log("start")
async function asyncFun() {
	await new Promise((resolve, reject) => {
		setTimeout( () => {
			console.log(22222)
			resolve()
		}, 0 )
	}).then( () => {
		console.log(33333)
	})

	console.log(eeeee)
}
asyncFun()

new Promise( (resolve,reject) => {
	console.log(44444444)
	resolve()
}).then( () => {
	console.log(55555555555)
})
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

/** 
 * 原型链
*/
var arr = Array()
arr.__proto__
// [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}__proto__: Object
arr.__proto__ === Array.prototype === arr.constructor.prototype
// true
Array.prototype.__proto__ === Object.prototype
// true
Object.prototype.__proto__
// null

var restoreString = function(s, indices) {
    var map = new Map();
    let str = '';
    Array.prototype.forEach.call(s,(e,i)=> {
        map.set(indices[i],e)
    })
	let len = map.keys()
	console.log(len)
	len.sort( (a, b) => a-b).forEach( e => {
        str += map.get(e)
    })
    
    return str
    
};

var restoreString = function(s, indices) {
	let arr = new Array(s.length);
	console.log(arr)
    for (let i = 0; i < indices.length; i++) {
		console.log(arr[indices[i]],s[i])
		arr[indices[i]] = s[i]
	};
    return arr.join("");
};

var smallerNumbersThanCurrent = function(nums) {
    const sorter = (a,b) => a-b;
    const mapper = (v,i) => [v,i];
	const tempMap = new Map([...nums].sort(sorter).map(mapper).reverse());
	console.log(nums)
	console.log([...nums])
	console.log([...nums].sort(sorter))
	console.log([...nums].sort(sorter).map(mapper))
	console.log([...nums].sort(sorter).map(mapper).reverse())
	console.log(tempMap)
    return nums.map(x => tempMap.get(x));
};

sod