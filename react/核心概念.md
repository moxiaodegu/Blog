**jsx**

react没有采用逻辑和标记语言分离到不同文件，而是采用二者共同存放在组件中
- jsx是html和javaScript的結合，是JavaScript的语法扩展
- 大括号内可以放置任意有效的js代码
    ```<h1>{name}</h1>```
- 建议使用括号包裹jsx代码，避免遇到自动插入分号陷阱
- 编译后，jsx表达式会被解析成普通的JavaScript函数调用，并对其取值得到对象。也就是说jsx可以作为参数、值等
    > babel 会把jsx转义为React.createElement()函数调用
    下面两种完全等效
    ```javaScript
    const element = (
        <div>
            <h1>我是一个jsx</h1>
        </div>
    )
    等价于
    const h1 = React.createElement('h1',{text:'我是一个jsx'})
    const element = React.createElement(
        'div',null,h1
    )
    ```
- {}字面量内可以通过大括号传递字面量或属性值或JavaScript表达式
- react dom 使用小驼峰命名
- <strong>jsx防止xss攻击</strong>，react dom 在渲染输入内容时，会自动做转义
 
**元素渲染**

dom标签和自定义组件都是react元素
### 将一个元素渲染成dom元素
在index页面里，```<div id="root"></div>```是react的根dom节点，根dom节点里的所有内容由react dom 管理，如果想react元素渲染到根dom节点可通过ReactDOM.render()
```javascript
const element = <h1>hello,world</h1>
ReactDOM.render(element,document.getElementById('root'))
```
### 更新已渲染的元素
react元素是不可变对象，一旦创建就无法更改。更新ui的唯一方式就是重新创建一个元素，并传入ReactDOM.render()

### react 只更新需要更新的部分
react会将元素和上次的元素进行对比，只会进行必要的更新

**组件&props**





