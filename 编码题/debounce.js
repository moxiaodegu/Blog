function debounce(fun,time) {
  let timer
  return function() {
    const that = this;
    const  args = arguments
    clearTimeout(timer)
    timer = setTimeout(()=>{
      fun.apply(that,args)
    },time)
  }
}