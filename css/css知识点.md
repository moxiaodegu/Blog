### 权重
	元素 < 类选择器 < class < id选择器 < !impartant 
### dispaly和visibility区别
	display 不加载到渲染树，visibility 加载到渲染树
	也可以说，visibility保留位置
### overflow 
	visible 默认值不操作
	auto 超出显示滚动条
	hidden 超出隐藏
	scroll 不管超出不超出全部显示滚动条
### 多行溢出
	overflow: hidden;  
	text-overflow: ellipsis;  
	display: -webkit-box;  
	-webkit-line-clamp: 3;  
	-webkit-box-orient: vertical
### 伪元素
	after before
	本质是插入一个行内元素
### 垂直居中的几种方式
1. 已知宽高
	```css
	.one{ 
		position: relative; 
		width: 100%; 
		height: 500px;
	}
	.two{   // 第一种
		position: absolute; 
		left: 50%; 
		top:50%; 
		margin-left: -100px; 
		margin-top: -100px; 
		background-color: #a00; 
		width: 200px; 
		height: 200px; 
	}
	.two{  // 第二种
		position: absolute; 
		top: 50%; 
		left: 50%; 
		transform: translate(-50%,-50%);
		background-color: #a00; 
		width: 200px; 
		height: 200px;  
	}
	```
2. 未知宽高
   - transform
	```css
	.two{ 
		position: absolute; 
		top: 50%; 
		left: 50%; 
		transform: translate(-50%,-50%);
		background-color: #a00; 
		width: 200px; 
		height: 200px;  
	}
	```
	- flex布局
	```css
	.one{ 
		margin:0 auto;
		width: 100%; 
		height: 500px; 
		display: flex;/*设置外层盒子display为flex*/
		justify-content:center;/*设置内层盒子的水平居中*/
		align-items:center;/*设置内层盒子的垂直居中*/ 
	}
	.two{ 
		display: inline-block; 
		background-color: #a00; 
		width: 200px; 
		height: 200px;  
	}
	```
### flex布局，两个居左，一个居右
```css
.box {
	display: flex;
	justify-content: flex-start;
}

.block {
	width: 100px;
	height: 100px;
	border:1px solid black;
}
```
```html
<div class="block">块1</div>
<div class="block">块2</div>
	// 此地margin-left:auto；自动填充了剩余空间
<div class="block" style="margin-left: auto;">块3</div> 
```

