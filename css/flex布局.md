# [flex 布局 ](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool)
1. 块级：dispaly: flex; 行内：dispaly:inline-flex;
2. webkit内核需要加上-webkit-flex; 如：safari
3. flex布局后，子元素float、clear、vertical-align 属性将不生效
4. 默认子元素排成一排
## 容器属性
 - flex-direction 决定排列方向
	```
	row: 默认值，水平顺序排列
	row-reverse 水平逆序排列
	column 垂直从上至下
	column-reverse 垂直从下至上
	```
 - flex-warp 换行
	```
	nowrap 默认，不换行
	warp 从上至下换行
	warp-reverse 第一行在下面换行
	```
 - flex-flow
	> flex-direction 和 flex-warp 的简写
	> 默认值 row nowarp
 - justify-content 水平对齐方式
	```
	flex-start 默认值，左对齐
	flex-end 右对齐
	center 居中
	space-between 两端对齐，元素之间间隔相等
	space-around  每个元素两侧间隔相等，所以元素间间隔比元素和边框大一倍
	```
 - align-items 垂直对齐方式
	```
	flex-start 向上对齐
	flex-end 向下对齐
	center 居中对齐
	baseline 项目第一行文字基线对齐
	stretch 默认值 如果元素未设置高度或为auto，将占满整个容器高度
	```
 - align-content  多行对齐方式，只有一行，该属性不起作用
	```
	flex-start 上方对齐
	flex-end 下方对齐
	center 交叉轴的中点对齐
	space-between 两端对齐，间隔平分
	space-around 元素两侧间隔相等，元素之间距离比元素和边框大一倍
	stretch 默认值，占满整个交叉轴
	```
## 容器内项目(子元素)的属性
 - order 项目排序 从小到大
	> order: <integer>
 - flex-grow 放大比例 默认为零
	> flex-grow: <number>
 - flex-shrink  缩小比例 默认1
	> flex-shrink: <number>
 - flex-basis 定义项目在分配多余空间之前，项目占据的主轴空间 默认auto，项目本来的大小
	> flex-basis: <length> | auto
 - flex 
	> 属性 flex-grow flex-shrink flex-basis 缩写 后两个属性可选
	> flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
 - align-self 允许单个项目和其他方式不一样的对齐方式，默认auto，表示继承父元素 algin-items属性，若没有，则等同于stretch
	>  align-self: auto | flex-start | flex-end | center | baseline | stretch;

