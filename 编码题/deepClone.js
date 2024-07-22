function deepClone (copyVal) {
  if(typeof copyVal != 'object' || copyVal == null) return copyVal
  
  const returnArr = Array.isArray(copyVal) ? [] : {}

  for (const key in copyVal) {
    if (Object.hasOwnProperty.call(copyVal, key)) {
      returnArr[key] = copyVal[key];
    }
  }

  return returnArr
}

const a = ['ssss','88888']

const b = a
console.log(a==b)
console.log(deepClone(a) == a)