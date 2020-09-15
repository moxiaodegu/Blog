# class
	- 和js基于原型继承不同，基于类的面向对象
#### 继承
1. 类从基类继承了属性和方法

		class Animal {
			name: string;
			constructor(theName: string) { this.name = theName; }
			move(distanceInMeters: number = 0) {
				console.log(`${this.name} moved ${distanceInMeters}m.`);
			}
		}

		class Snake extends Animal {
			constructor(name: string) { super(name); }
			move(distanceInMeters = 5) {
				console.log("Slithering...");
				super.move(distanceInMeters);
			}
		}

		class Horse extends Animal {
			constructor(name: string) { super(name); }
			move(distanceInMeters = 45) {
				console.log("Galloping...");
				super.move(distanceInMeters);
			}
		}

		let sam = new Snake("Sammy the Python");
		let tom: Animal = new Horse("Tommy the Palomino");

		sam.move();
		tom.move(34);

		<!-- Slithering...
		Sammy the Python moved 5m.
		Galloping...
		Tommy the Palomino moved 34m. -->

2. 修饰符
 - public（默认）
 - private：不能在声明他的类外部访问
 - protected: 和pirvate类似，但是在派生类可以使用
 - readonly： 只读
 - static：只有类被实例化，才会初始化的属性，这些属性存在于类的实例上面，而不是类上面
3. 把类当接口使用
		class Point {
			x: number;
			y: number;
		}

		interface Point3d extends Point {
			z: number;
		}
