function throttle(fun,time) {
  let flag
  return function() {
    if(!flag) {
      flag = true
      fun.apply(this,arguments)
      setTimeout(()=>{
        flag = false
      },time)
    }
  }
}

function throttle1(fun,time) {
  let lastTime = 0
  const newTime = Date.now()
  if (newTime-lastTime > time) {
    const that = this
    const args =  arguments
    fun.apply(that,args)
    lastTime=newTime
  }
}