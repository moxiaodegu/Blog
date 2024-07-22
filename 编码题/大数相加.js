function add(num1,num2) {
  const len = Math.max(num1.length,num2.length) // 拿到最长值
  const a = num1.padStart(len,0) // 不够的补0
  const b = num2.padStart(len,0) // 不够的补0
  let t = 0 // 位数相加
  let f = 0 // 进位
  let sum = ''  // 总数值
  // 234 456
  for (let index = len-1; index >= 0; index--) { // 从最后一位相加
      t = parseInt(a[index]) + parseInt(b[index]) + f // 两数相加 并且加上进位
      f = Math.floor(t/10) // 进1
      sum = t%10 + sum // 把相加的数加到总数里面
  }
  if(f == 1){ // 进位是1，需要加一位
    sum = "1" + sum;
 }
 console.log(sum,999)
 return sum;

}

add('234','456')