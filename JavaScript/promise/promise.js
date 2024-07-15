
const promise = new Promise((resolve,reject)=>{
  reject('reject')
}).catch((e)=>e)
Promise.all([Promise.resolve('resolve'),promise]).then(e=>{
  console.log(e,'我是返回resolve')
}).catch((e)=>{
  console.log(e,'我是返回reject')
})

const resolved = Promise.resolve(42);
const rejected = Promise.resolve(-1);

const allSettledPromise = Promise.allSettled([resolved, rejected]);

allSettledPromise.then(function (results) {
  console.log(results);
});

async function asy() {
  const a = await rejected.catch(a=>a)
  const b = await function() {return 2}()
  console.log(a,b)
}

asy()

const fun = ()=> {}


console.log((async ()=> fun)())






