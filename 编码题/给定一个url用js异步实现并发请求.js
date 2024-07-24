function fun(urls) {
  return Promise.all(urls.map(url=>{
    return new Promise((resolve,reject)=>{
      fetch(url).then(res=>resolve(res)).catch(err=>reject(err))
    }).catch(err=>err)
  }))
}
