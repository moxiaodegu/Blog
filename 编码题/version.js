function version (version1,version2) {
  const v1 = version1.split('.').join('')
  const v2 = version2.split('.').join('')
  const num = Math.max(v1.length,v2.length)
  const str1 = v1.padEnd(num,0)
  const str2 = v2.padEnd(num,0)

  if (Number(str1) == Number(str2)) return 0
  return Number(str1) > Number(str2) ? -1  : 1
}

console.log(version('1.1.3','1.1.0'))
console.log(version('1.1','1.1.0'))
console.log(version('1.1','1.1.7'))