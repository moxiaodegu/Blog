# cookie
 - 通过请求和响应报文中写入cookies进行客户端状态管理
 - 服务器通过set-cookie首部字段告诉客户端保存cookie
### 防止跨站脚本攻击（csrf）
 设置cookie的httpOnly 属性 只允许http请求获取。javascript脚本无法访问
### secure 只有https连接时，才可以发送cookie