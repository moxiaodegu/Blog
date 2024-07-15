function mySettled(arr) {
  // 判断参数是否是数组
  if(!Array.isArray(arr)) throw ('参数错误')

  // 用于存放返回值，长度和传入参数一致
  const retArr = new Array(arr.length)

  // 用于全部异步函数都执行完毕
  let num = 0 

  // allsettled 返回一个promise对象
  return new Promise ((resolve)=>{
    // 遍历传入的值
    arr.forEach((promiseFun,index)=>{
      // 确保不是promise的对象可执行
      promiseFun =  promiseFun instanceof Promise ? promiseFun : Promise.resolve(promiseFun)
      // 当异步函数返回resolve执行
      promiseFun.then((data)=>{
        num++ // 标记+1
        // 将返回值对应下标存储好
        retArr[index]= {state:'fulfilled',
          value:data
        }
        // 如果num和传入数组长度一致，说明全部异步函数执行完毕。promise返回这个结果函数
        if(num == arr.length) {
          resolve(retArr)
        }
      })
      // 当异步函数返回reject执行
      .catch((data)=>{
        retArr[index]= {state:'rejected',
          value:data
        }

        num++
        if(num == arr.length-1) {
          resolve(retArr)
        }
      })
    })
})
}


mySettled([Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
  99,
  Promise.resolve(77)
  ]).then((data)=>{
    console.log(data)
  })

Promise.allSettled([Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
  99,
  Promise.resolve(77)
  ]).then((data)=>{
    console.log(data)
  })



