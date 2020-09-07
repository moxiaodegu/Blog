# array 方法
1. concat 连接两个数组，并返回一个新数组。
2. join 将数组元素连接成一个字符串。
3. push 末尾添加数组，返回数组长度 （一个或多个）
4. pop 末尾删除数组，返回数组长度
5. shift 移除数组第一个元素，并返回该元素
6. unshift 在数组开头添加一个或者多个元素，返回数组新长度
7. slice 从数组移除或替换一些元素
8. reverse 颠倒数组的顺序
9. sort 数组排序，也可有回调函数，判断如何排序数组
10. indexOf/lastIndexOf 在数组中搜索，并返回索引
11. forEach 在每个数组元素上执行callback
12. map 创建一个新数组，数组元素是元素组通过执行callback得来
13. filter 返回一个在回调函数上返回true的元素的新数组
14. every 当数组的每一个元素在回调函数上都返回true就返回true，否则返回false
15. some 只要一个数组中一个元素返回true就返回true，否则返回false
注：以上回调函数传入三个值，第一个为当前元素，第二个为当前元素索引，第三个为数组本身。
16. reduce 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
    - [10,20,30].reduce( (first, second) => return first + second ) 返回 60；
	- arr.reduce(callback(accumulator（累计器）, currentValue(当前值),[, index（当前索引）[, array（原始数组）]])[, initialValue（初始值）])
	- redeceRight: 和reduce类似，从右至左开始

# foreach 和 map 的区别
 - map分配内存空间存储新数组并返回，forEach()不会返回数据。
 - forEach()允许callback更改原始数组的元素。map()不允许
 - foreach 执行速度快于map

# 类数组对象
 - 外观和行为像数组，但是不共享他们所有的方法
    例如：函数内部可用的arguments对象
 -可以通过array的prototype（原生）方法可以处理类数组对象
 - 例如：
	1. Array.prototype.forEach.call(arguments, item => {
				console.log(item);
			});
	2. Array.prototype.reduce.call("astring", function(all,now) {
				return now+all
			},''); // 字符串倒叙

# 数组推导式
 







