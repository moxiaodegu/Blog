
# proxy

代理对象 = new Proxy(目标对象，处理程序对象)

代理对象上执行的所有操作，都会无障碍传播到目标对象上

## 捕获器

在处理对象程序上可以定义多个捕获器，当代理对象执行操作到目标对象之前，都会调用捕获器进行拦截修改相应的行为

```javascript
    const target = {
      foo: 'bar'
    };
    const handler = {
      // 捕获器在处理程序对象中以方法名为键
      get() {
        return 'handler override';
      }
    };
    const proxy = new Proxy(target, handler);
    console.log(target.foo);                         // bar
    console.log(proxy.foo);                          // handler override
    console.log(target['foo']);                     // bar
    console.log(proxy['foo']);                       // handler override
    console.log(Object.create(target)['foo']);   // bar
    console.log(Object.create(proxy)['foo']);    // handler override
```

## Reflect

开发者不需要手动重建原始行为，通过全局Reflect对象上的同名方法重建

```javascript
    const target = {
      foo: 'bar'
    };
    const handler = {
      get() {
        return Reflect.get(...arguments) 等同于 Reflect.get
      }
    };
    const proxy = new Proxy(target, handler);
    console.log(proxy.foo);    // bar
    console.log(target.foo);   // bar
```

反射API为开发者准备好了样板代码，在此基础上开发者可以用最少的代码修改捕获的方法

```javascript
   const target = {
      foo: 'bar',
      baz: 'qux'
    };
    const handler = {
      get(trapTarget, property, receiver) {
        let decoration = '';
        if (property === 'foo') {
          decoration = '!!!';
        }
        return Reflect.get(...arguments) + decoration;
      }
    };
    const proxy = new Proxy(target, handler);
    console.log(proxy.foo);    // bar!!!
    console.log(target.foo);   // bar
    console.log(proxy.baz);    // qux
    console.log(target.baz);   // qux
```

## 撤销代理

revoke()

撤销代理的操作是不可逆的，撤销代理的操作是不可逆的

```javascript
    const target = {
      foo: 'bar'
    };
    const handler = {
      get() {
        return 'intercepted';
      }
    };
    const { proxy, revoke } = Proxy.revocable(target, handler);
    console.log(proxy.foo);    // intercepted
    console.log(target.foo);   // bar
    revoke();
    console.log(proxy.foo);    // TypeError
```

## this问题

虽然 Proxy 可以代理针对目标对象的访问，但它不是目标对象的透明代理，即不做任何拦截的情况下，也无法保证与目标对象的行为一致。主要原因就是在 Proxy 代理的情况下，目标对象内部的this关键字会指向 Proxy 代理。

有些原生对象的内部属性，只有通过正确的this才能拿到，所以 Proxy 也无法代理这些原生对象的属性。

```javascript
const target = new Date();
const handler = {};
const proxy = new Proxy(target, handler);

proxy.getDate();
// TypeError: this is not a Date object.
```