1. type 可以声明基本类型别名，联合类型，元组等类型
2. interface可以合并同名接口，type不可以
3. type不能出现在声明右侧的任何地方。
4. interface创建了一个新的名字，可以在其它任何地方使用。 类型别名并不创建新名字
5. type不能被 extends和 implements（自己也不能 extends和 implements其它类型）