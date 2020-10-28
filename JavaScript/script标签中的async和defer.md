# async 
 - 不影响其他资源加载的同时，异步执行这个文件
 - 只对外部脚本有效
# defer
 - 延迟加载
 - 只对外部文本有效


Defer异步加载：<script src="" defer></script>(顺序加载，渲染完再执行)
Async异步加载：<script src="" async></script>(乱序加载，下载完就执行)
