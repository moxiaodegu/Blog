
const num = '2222'
function replace(str) {
  return str.replace(/\$\{(.*?)\}/g, function(match,key){
    return eval(key)
  })
}

console.log(replace('123${num}'))



