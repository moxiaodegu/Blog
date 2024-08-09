function objEqual(obj1 = {},obj2 = {}) {
  const objLen1 = Object.keys(obj1)
  const objLen2 = Object.keys(obj2)
  
  if(objLen1.length !== objLen2.length) return false

 const flag =  objLen1.every((key,index)=>{
    if(key !== objLen2[index])  return false
    
    if(typeof obj1[key] == 'object' && typeof obj2[objLen2[index]] == 'object') {
      return objEqual(obj1[key],obj2[objLen2[index]])
    }

    return obj1[key] === obj2[objLen2[index]]
  })

  return flag
}

const a = {
  name:'hanmeimei',
  age:'12',
  class:{
    a:'1'
  }
}
const b = {
  name:'hanmeimei',
   age:'12',
   class:{
    a:'2'
  }
}

console.log(objEqual(a,b))