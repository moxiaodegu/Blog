
// 类装饰器
function doc<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    name = 'haha';
    constructor(...args: any) {
      super(...args);
      console.log(this.name);
    }
  }
}
// 方法装饰器
function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // console.log(target, propertyKey, descriptor);
    descriptor.enumerable = value
  };
}

function ddd(params:any):Ci {
  return {
    length: 0,
    age: params,
    name: '',
    bool: false
  }   
}

@doc
class C {
  _length = 0;
  age: number;
  name: any;
  bool: boolean;
  constructor(age: number) {
    this.age = age;
  }
  get length() {
    return this._length;
  }
  set length(value: number) {
    this._length = value;
  }

  @enumerable(true)
  sayBool(): bb.aa {
    return this.bool
  }
}

const c = new C(10);
c.sayBool()
c._length = 10
console.log(c);