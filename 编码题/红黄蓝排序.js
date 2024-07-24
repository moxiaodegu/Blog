function fun (str) {
  const obj = {
    '黄':0,
    '红':1,
    '蓝':2
  }

  return str.split('').sort((a,b)=>obj[a]- obj[b]).join('')
}

console.log(fun('蓝蓝红黄蓝红黄'))