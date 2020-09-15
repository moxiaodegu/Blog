## interface
 - 定义一个约束
#### 可选属性

		interface SquareConfig {
			color?: string;
			width?: number;
		}
#### 只读属性
		interface Point {
			readonly x: number;
			readonly y: number;
		}

#### 可索引类型
		interface NotOkay {
			[x: number]: Animal;
			[x: string]: Dog;
		}
#### 类类型
		interface ClockInterface {
			currentTime: Date;
		}

		class Clock implements ClockInterface {
			currentTime: Date;
			constructor(h: number, m: number) { }
		}
#### 继承接口
		interface Shape {
			color: string;
		}

		interface Square extends Shape， 可继承多个 {
			sideLength: number;
		}
#### 接口可继承类