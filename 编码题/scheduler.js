class Scheduler {
  constructor(num){
    this.max = num // 最大执行数
    this.work = [] // 任务队列
    this.waitWork = [] // 等待队列
  }

  add(promise) {
    // 判断当前任务队列是否超过最大执行数
    if(this.work.length < this.max) {
      //没超过，执行，并将数据放到执行队列
      this.work.push(promise);
      this.runTask(promise)
    } else {
      // 超过，放到等待队列
      this.waitWork.push(promise)
    }
  }

  // 执行函数
  runTask(promise) {
    promise().then((data)=>{
      console.log(data) // 执行结果
    }).finally(()=>{
      const index = this.work.indexOf(promise)  // 找到执行数据下标
      this.work.splice(index,1) // 删除worker
      if(!!this.waitWork.length){ // 如果有等待队列，继续执行
        this.add(this.waitWork.shift())
      }
    })
  }
}

const scheduler = new Scheduler(2)


scheduler.add(()=>{ return new Promise((resolve)=>setTimeout(()=>{resolve(1)},3000))})
scheduler.add(()=>{ return new Promise((resolve)=>setTimeout(()=>{resolve(2)},2000))})
scheduler.add(()=>{ return new Promise((resolve)=>setTimeout(()=>{resolve(3)},5000))})
scheduler.add(()=>{ return new Promise((resolve)=>setTimeout(()=>{resolve(4)},500))})




