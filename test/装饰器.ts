
function doc<T extends { new (...args: any[]): {} }>(constructor: T)  {
  return class extends constructor {
    name = 'haha';
    constructor(...args: any) {
      super(...args);
      console.log(this.name);
    }
  }
}
@doc
class C {
  _length = 0;
  age;
  name: any;
  constructor(age: number) {
    this.age = age;
  }
  get length() {
    return this._length;
  }
  set length(value: number) {
    this._length = value;
  }
}

const c = new C(10);
c._length = 10
console.log(c);