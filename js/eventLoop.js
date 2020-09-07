console.log("start")
setTimeout(()=>{
    console.log('1')
    new Promise(function(resolve){
     console.log(" 2 ")
      resolve();
}).then(function() {
        console.log('3')
    })
}, 0)

new Promise( () => {
	console.log('4')
}).then( () => {
	console.log('5')

})

setTimeout(()=>{
    console.log('7')
    Promise.resolve().then(function() {
        console.log('8')
    })
}, 0)
console.log("end")