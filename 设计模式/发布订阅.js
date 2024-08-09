class Ev {
  task={}
  on(name,func) {
    if(!this.task[name]) {
      this.task[name] = []
    }
    this.task[name].push(func)
  }
  emit(name,data) {
    if(this.task[name]) {
      this.task[name].forEach(element => {
        element(data)
      });
    }
  }
  remove(name,func) {
    if(!this.task[name]) return
    const index = this.task[name].indexOf(func)
    if(index > -1) {
      this.task[name].splice(index,1)
    }
  }
}

const ev = new Ev()

function a(str) {
  console.log(str+',a')
}

function b(str) {
  console.log(str+',b')
}

ev.on('aa',a)
ev.on('aa',b)
ev.emit('aa','hello')
ev.remove('aa',a)
ev.emit('aa','hello')

