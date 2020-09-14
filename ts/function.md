# function
#### 可选参数 默认参数 剩余参数 必选参数
 - 可选参数必须跟在必选参数后面
 - 可选参数、默认参数，调用函数可省略
 - 默认参数不必放在必选参数后面，放前面调用可传入undefined获取默认值
		function buildName(firstName: string, lastName = "Smith", age?:string , ...restOfName: string[]) {
			return firstName + " " + lastName + restOfName.join(" ");
		}


