const red = () => {
  console.log('red')
}

const yellow = () => {
  console.log('yellow')
}

const green = () => {
  console.log('green')
}

const taskList = [
  {
    fn:red,
    time:3000
  },
  {
    fn:yellow,
    time:2000
  },
  {
    fn:green,
    time:1000
  }
]

const light = (obj) => {
  const {fn,time} = obj
  return new Promise((resolve,reject)=>{
     setTimeout(()=>{
      fn()
      resolve(true)
     },time)
  })
}

const task = async ()=>{
 for (let index = 0; index < taskList.length; index++) {
  const element = taskList[index];
  await light(element)
 }
 await task()
}

task()