function isPrime(num) {
  let flag = false
  for (let index = 2; index < num; index++) {
    if(!(num%index)) {
      flag = true
    }
  }

  return flag
}

console.log(isPrime(19))