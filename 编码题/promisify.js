const  promisify = func=> (...args)=>{
  return new Promise((resolve,reject)=>{
    func.apply(null,[...args,(...args)=>{resolve(args)}])
  })
}

const foo = (a,b,callBack)=> {
  callBack(a,b)
}

const fun = promisify(foo)

fun('1','2').then(data=>{
  console.log(data)
})

