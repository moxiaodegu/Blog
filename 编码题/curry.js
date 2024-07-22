function curry(...args) {
  return (...newArgs) => {
    if(newArgs.length) {
      return curry(...args,...newArgs)
    } else {
      return args.reduce((pre,cur)=>pre+cur,0);
    }
  }
 
}
const add = curry()
console.log(add(1)(2)(3)())


