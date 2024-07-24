function urlParams (url) {
  const urlArr = url.split('?') 
  const map = new Map()
  if (urlArr.length <2) return map

  const arr = urlArr[1].split('&')
  arr.forEach(str => {
    const strArr = str.split('=')
    map.set(strArr[0],strArr[1])
  });

  return map
}

console.log(urlParams(''))