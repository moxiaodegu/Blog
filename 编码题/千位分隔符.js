function numFormat(str) {
  if(typeof str != 'string' && !!str) return

  strArr = str.split('.') // 小数点拆分
  const arr = strArr[0].split(''); // 拆分整数
  const reduceArr = arr.reverse().reduce((pre,cur,index)=>{ //反转数组
    const len = index + 1

     if (!(len % 3) && len<arr.length) { // 3的倍数 并且第一位不用加
      return pre = [...pre,cur,',']
    } else {
      return pre = [...pre,cur]
    }
  }, []);

  const xs = strArr[1] ? `.${strArr[1]}` : ''
  return reduceArr.reverse().join('') + xs
}

console.log(numFormat('22123456789.55555'))