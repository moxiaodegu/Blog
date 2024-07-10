## http1.0

请求一个资源都要建立一个tcp链接，并且串行，导致页面加载慢。

## http1.1

解决1.0问题

1.增加keep-alive，长链接。

2.支持pipeline网络传输，不必等第一个请求返回就可以发起请求

3.更新了缓存机制（强制缓存增加cache-ccontrol代替expries，协商缓存etag代替last-modified/if-none-match替换if-modified-since）

4.加入了options，用于cors

## http2.0

解决1.1仍然没有解决的串行请求

1.二进制协议，增加传输效率

2.一个tcp链接中可以使用多个请求（1.1串行优化）

3.压缩请求头（请求头相同不需要都传）

4.允许客户端cache（请求x，x会用到y，服务器可以把y缓存到浏览器）

## http3.0

2.0若干个请求共用一个tcp链接，如果发生丢包，所有请求都需要等包传回来才会返回数据。

1.tcp替换成udp，udp丢包不会阻塞
