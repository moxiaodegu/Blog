# websocket
 > 1. 建立在tcp协议之上
 > 2. 没有同源限制
 > 3. 后端可发起请求
 ```javascript
 var ws = new WebSocket("wss://echo.websocket.org");

ws.onopen = function(evt) { 
  console.log("Connection open ..."); 
  ws.send("Hello WebSockets!");
};

ws.onmessage = function(evt) {
  console.log( "Received Message: " + evt.data);
  ws.close();
};

ws.onclose = function(evt) {
  console.log("Connection closed.");
};    
 ```
### 属性
 - readystate 返回当前状态
	```
	CONNECTING：值为0，表示正在连接。
	OPEN：值为1，表示连接成功，可以通信了。
	CLOSING：值为2，表示连接正在关闭。
	CLOSED：值为3，表示连接已经关闭，或者打开连接失败。
	```
 - onopen 指定链接回调函数
   ```
   ws.onopen = function () {
	ws.send('Hello Server!');
   }
   ```
- onclose 关闭后的回调
- onmessage 收到服务器数据
- send 向服务器发送数据
- bufferedAmount 表示还有多少字节的二进制数据没有发送出去，判断是否发送结束
- onerror 报错回调
