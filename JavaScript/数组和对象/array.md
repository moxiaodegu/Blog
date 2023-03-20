
js数组是一组有序的数据，每个槽位可以存储任意类型的数据，动态大小，随数据增加动态增长。


## 创建数组的几种方法

### 构造函数

- 构造函数可以接收一个或多个值，如果只有一个值并类型为数值，会创建一个以数值为长度的数组，否则会创建一个以一个值或多个值的数组
- 也可省略 new 关键字

```javascript
  let array1 = new Array()
  console.log(array1) // []

  let array2 = new Array(8)
  console.log(array2) // 创建一个包含八个元素的数组，值都为undefined

  let array3 = new Array("array")
  console.log(array3) // ["array"]

  let array4 = new Array("array", "object", "string")
  console.log(array4) // ["array" ,"object", "string"]
```

### 数组字面量

- 字面量创建数组不会调用Array构造函数

```javascript
let array = [];
let array = ["array" ,"object", "string"];
```

### from()

- es6新增
- form() 将类数组结构转化成数组实例，第一个参数为类数组对象
    > 类数组对象 就是任何可以迭代的结构、或有length属性和可索引元素的结构
- 第二个参数是可选参数，新数组的每一个值 都会调用该函数
- 第三个选参数可以指定this<strong>对象</strong>，但在箭头函数中不适用
- 参数是数组可浅拷贝数组

```javascript
  let array = Array.from("array") // ["a","r","r","a","y"]

  const set = new Set(['foo', 'bar', 'baz', 'foo']);
  Array.from(set);
  // [ "foo", "bar", "baz" ]

  const map = new Map([[1, 2], [2, 4], [4, 8]]);
  Array.from(map);
  // [[1, 2], [2, 4], [4, 8]]

  function f() {
    return Array.from(arguments);
  }
  f(1, 2, 3); // [ 1, 2, 3 ]

  Array.from([1, 2, 3], x => x + x);
  // [2, 4, 6]

  Array.from({length: 5}, (v, i) => i);
  // [0, 1, 2, 3, 4]

```

### of()

- es6新增
- of() 将一组参数转化成数组实例
- 代替es5的 Array.prototype.slice.call(args)
  
```javascript
let array = Array.of(1) // [1]
let array = Array.of(1,2) // [1,2]
let array = Array.of(undefined) // [undefined]

// 兼容旧环境
if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
  };
}
```

## 数组空位和索引

### 数组空位

- es6 新增方法普遍将空位当做值为undefined的元素，之前的会忽略
- map会跳过空位
- join会视为空字符串
  
```javascript
  let arr = new Array(7)
  let arr = [1,,,,,,7]
  arr.map(() => 6) // [6,undefined,undefined,undefined,undefined,undefined,6]
  arr.join("-")  // "1-----7"
```

### 数组索引

- 数组length 可以修改，可以通过设置length的长度末尾删除或添加数组

```javascript
  let arr = [1,3,5,7]
  arr.length = 5 
  console.log(arr) // [1,3,5,7,undefined]
  arr.length = 2 
  console.log(arr) // [1,3]

```

## 迭代器方法

- keys()  返回数组索引迭代器
- values() 数组元素迭代器
- entries() 数组 索引/值对的迭代器

```javascript
const arr = [1, 2, 3]
for (const iterator of arr.entries()) {
  console.log(iterator)
}
```

- 可以使用Array.from()转化成数组

## 复制和充填方法

下面这两个方法都是不会改变数组的大小，开始索引必填，结束索引非必填

![20210707171236](https://cdn.jsdelivr.net/gh/moxiaodegu/ImageHosting/imagesBlogs/20210707171236.png)

- copyWithin() 批量复制，按照指定范围浅复制数组中的部分内容插入到指定索引开始得位置
  
```javascript
let arr = [1,3,4,5,6,7,8]
// 复制从索引0开始到4的值，插入到索引2得位置
arr.copyWithin(2,0,4) // [1,3,1,3,4,5,8]

```

- fill() 充填数组，向一个已有数组插入全部或部分相同的值。

```javascript
let arr = [1,3,4,5,3,7,8]
// 用6 充填索引大于等于 0 小于 4的值
arr.fill(6,0,4) // [6,6,6,6,3,7,8]

```

## 转换方法

数组中 null、undefined 值 在 toString tolocaleString、join中 算空字符串

- toString()
- valueOf()
- toLocaleString()

![20210707174223](https://cdn.jsdelivr.net/gh/moxiaodegu/ImageHosting/imagesBlogs/20210707174223.png)

## 栈方法

栈是后进先出的一种结构，所以删除和添加只能在数组尾部发生

- push() 末尾添加，可接收任意多个参数，依次添加到末尾。返回数组的最新长度。

![20210707185204](https://cdn.jsdelivr.net/gh/moxiaodegu/ImageHosting/imagesBlogs/20210707185204.png)

- pop() 末尾删除，删除数组的最后一项，并返回

![20210707185304](https://cdn.jsdelivr.net/gh/moxiaodegu/ImageHosting/imagesBlogs/20210707185304.png)

## 队列方法

队列是先进先出的形式限制访问，所以在数组末尾添加 push()，在数组开头获取删除
shift + push / unshift + pop 都可作为队列方法

- shift() 删除数组第一项并返回

![20210707185703](https://cdn.jsdelivr.net/gh/moxiaodegu/ImageHosting/imagesBlogs/20210707185703.png)

- unshift() 执行和shift相反操作，在数组开头插入任意多个值，并返回数组长度

![20210707190036](https://cdn.jsdelivr.net/gh/moxiaodegu/ImageHosting/imagesBlogs/20210707190036.png)

## 排序方法

- reverse() 将数组反向排列

![20210707190459](https://cdn.jsdelivr.net/gh/moxiaodegu/ImageHosting/imagesBlogs/20210707190459.png)

- sort() 默认是将元素转化成字符串进行比较。对于数值型排序不很准确，sort函数可接收一个比较函数，解决这个问题

```javaScript
let arr = [1,3,5,50,15]
arr.sort() // [1,15,3,5,50]
正序排列
arr.sort((a,b)=>a-b) // [1,3,5,15,50]
逆序排列
arr.sort((a,b) => b-a) // [50,15,5,3,1]
```

## 操作方法

- concat() 浅拷贝当前数组和其他元素合并生成新数组

![20210707202046](https://cdn.jsdelivr.net/gh/moxiaodegu/ImageHosting/imagesBlogs/20210707202046.png)

```javaScript
  let arr = [1,3,5,50,15]
  arr.concat("ss","dd",["ee"]) // [1, 3, 5, 50, 15, "ss", "dd", "ee"]
```

- slice() 创建包含原数组一个或多个元素的数组，有两个参数：开始索引(包含)和结束索引(不包含)。<strong>不影响原始数组</strong>

```javaScript
  let arr = [1,3,5,50,15]
  arr.slice(4) // [15]
  arr.slice(1,4) // [3,5,50]
```

- splice() 始终返回数组中被删除的元素。（如果没有删除，则返回空数组）
  - 删除：传两个参数--要删除元素的起始位置，和数量
  - 插入：至少传入三个参数--开始位置、0和要插入的元素（可多个）
  - 替换：至少三个参数--开始位置、要删除元素数量和插入值（可多个值）。删除元素数量和插入值数量无需一致

```javaScript
  let arr = [1,3,5,50,15]
  arr.splice(4,1) // 删除索引为4的一个元素

  arr.splice(3,0,"add","add1") // 在索引为3后面插入元素
  arr.splice(3,2,"add","add1") // 在索引为3后面替换元素
```

- flat() 可指定深度便利数组并组合成新数组返回
  - 扁平化嵌套数组

    ```javascript
    var arr1 = [1, 2, [3, 4]];
    arr1.flat();
    // [1, 2, 3, 4]

    var arr2 = [1, 2, [3, 4, [5, 6]]];
    arr2.flat();
    // [1, 2, 3, 4, [5, 6]]

    var arr3 = [1, 2, [3, 4, [5, 6]]];
    arr3.flat(2);
    // [1, 2, 3, 4, 5, 6]

    //使用 Infinity，可展开任意深度的嵌套数组
    var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
    arr4.flat(Infinity);
    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    ```
  - 扁平化与数组空项

    ```javascript
    var arr4 = [1, 2, , 4, 5];
    arr4.flat();
    // [1, 2, 4, 5]
    ```

## 搜索和位置方法

- indexof()/lastindexof() 查找元素在数组中的位置，没有-1，有的话返回对应索引。

- includes() 返回布尔值，至少找到一项返回true

## 断言函数

找到匹配后，立即返回，不再继续搜索

- find()

![20210707204451](https://cdn.jsdelivr.net/gh/moxiaodegu/ImageHosting/imagesBlogs/20210707204451.png)

- findIndex() 返回第一个匹配元素的下标。

## 迭代方法
这些方法都不改变数组本身

- every 每一项返回true，则返回true
- some 一项返回true，就返回true
- forEach 无返回值 相当于for循环
- map 返回值是处理过得数组
- filter 函数返回 true 的值 组成数组返回

## 归并方法

- reduce
- reduceRight

![20210721195019](https://cdn.jsdelivr.net/gh/moxiaodegu/ImageHosting/imagesBlogs/20210721195019.png)

<!-- # 定型数组 -->
