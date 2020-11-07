### import
> 导入另一个模块的可导出文件
- 同步导入
	1. 整个模块 import * as myModule from '/modules/my-module.js';
	2. 部分模块 import {foo, bar} from '/modules/my-module.js';
	3. 重命名模块 import {reallyReallyLongModuleExportName as shortName}
  from '/modules/my-module.js';
	4. 默认模块（defaultexport） import myDefault from '/modules/my-module.js';  // 不需要括号
- 动态导入

		(async () => {
			if (somethingIsTrue) {
				const { default: myDefault, foo, bar } = await import('/modules/my-module.js');
			}
		})();

		import('/modules/my-module.js')
		.then((module) => {
			// Do something with the module.
		});


### export
> 导出的模块都处于严格模式，export不可以用于嵌入式脚本中
- 命名导出
- 默认导出