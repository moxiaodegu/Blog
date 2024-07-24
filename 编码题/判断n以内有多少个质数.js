var countPrimes = function(n) {
  const arr = new Array(n).fill(true)
  for(let i = 2;i < n;i++) {
     if(arr[i]) {
       for(let j = i * 2; j < n; j+=i) {
        console.log(j,i)
           arr[j]= false
       }
     }
  }

 let count = 0
  for(let i = 2;i < n;i++) {
    if(arr[i]) {
       count++
    }
  }
  return count
};
countPrimes(20)