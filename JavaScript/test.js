Promise.resolve("Success").then(function(value) {
	console.log(1); // "Success"
  }).then( res => {
	  console.log(2)
  })
  Promise.resolve("Success").then(function(value) {
	console.log(3); // "Success"
  }).then( res => {
	  console.log(4)
  })
  console.log(333)
