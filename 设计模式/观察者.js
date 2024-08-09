class Sub {
  task=[]

  subscribe(func) {
    this.task.push(func)
  }

  on(data){
    this.task.forEach(element => {
      element(data)
    });
  }

  remove(fun) {
    const index = this.task.indexOf(fun)
    if(index > -1) {
      this.task.splice(index,1)
    }
  }
}

function a(str) {
  console.log(str)
}

function b(str) {
  console.log(str)
}

sub = new Sub()
sub.subscribe(a)
sub.subscribe(b)
sub.on('hello,world')
sub.remove(a)
sub.on('hello,world')
