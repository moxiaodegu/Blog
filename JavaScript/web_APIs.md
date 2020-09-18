# DOM
1. domcument.querySelector() // 选择节点
2. domcument.createElement() // 创建元素
3. appendChild()  // 添加子节点

		var sect = document.querySelector('section');
		var para = document.createElement('p');
		para.textContent = 'We hope you enjoyed the ride.';
		sect.appendChild(para);
4. removeChild() // 删除
5. 添加样式

		para.style.color = 'white';
6. 添加class

		para.setAttribute('class', 'highlight');
7. 获取浏览器窗口放大缩小

		window.onresize = function() {
			WIDTH = window.innerWidth;
			HEIGHT = window.innerHeight;
			div.style.width = WIDTH + 'px';
			div.style.height = HEIGHT + 'px';
		}
# ajax
