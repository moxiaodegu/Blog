function flat(arr,type = 1,returnArr = [], num = 1) {
  if(!Array.isArray(arr)) return new Throw('参数错误')
  if(type <=0) return arr // 数组负值不扁平
  const flag = parseInt(type) ? num <= type : !isFinite(type) ? true : false //如果值是infinity,直接返回true
  arr.forEach(e=>{
    if(Array.isArray(e) && flag) {
      num++
      flat(e,type,returnArr,num)
    } else if(e) { // 数组空位过滤
      returnArr.push(e)
    }
  })

  return returnArr
}

console.log(flat([2,3,'',[3,5,[6,7,[7,8]]]],Infinity))