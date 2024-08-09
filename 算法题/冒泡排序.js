function fun(arr) {
  const len = arr.length
  if(len.length) return
  let left = 0,right=len
  while(left <= right) {
    const p = Math.floor((left + right)/2)
    if (arr[right] < arr[p]) {
      left = p + 1
    } else if(arr[right] > arr[p]) {
      right= p
    } else {
      right--
    }
  }
  return arr[left]
}

console.log(fun([3,4,5,1,2]))

// 456123