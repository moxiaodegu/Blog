# bcf (块级格式化上下文)
 > 一个独立的渲染区域
### 规则
1. 内部的box垂直排列
2. 同一个bfc的两个垂直方向的margin会重叠
3. 每个元素的margin box的左边，与包含快的border box 左边相接触
4. bfc区域与外部float box 不会发生重叠
5. bfc容器内外元素不会相互影响
6. bfc内部的浮动元素也计算在bfc的宽度之内
### 生成
1. 根元素
2. float 不是none
3. position为 absolute 或者 fixed
4. display：inline-block/table-cell/table-caption/flex/inline-flex
5. overflow 不为visible