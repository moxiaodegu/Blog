
function unique(arr) {
  if(!Array.isArray(arr)) return
  return [...new Set(arr)]
}

console.log(unique([2,2,2,4,4,5,6,4]))

function unique1(arr) {
  if(!Array.isArray(arr)) return
  const returnArr = []
  arr.forEach(e => {
    if(returnArr.indexOf(e) < 0) {
      returnArr.push(e)
    }
  });
  return returnArr
}

console.log(unique1([2,2,4,4,5,6,4,'3']))

function unique2(arr) {
  if(!Array.isArray(arr)) return
  return arr.sort().filter((item,index,array)=>{
    return !index || item !== array[index-1]
  })
}

console.log(unique2([2,2,4,4,5,6,4,'3']))

