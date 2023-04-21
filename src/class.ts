class Dog {
  constructor(name: string) {
    this.name = name;
  }
  public name: string = "dog";
  run() {}
  //私有成员
  private pri() {}
  protected pro() {}
  //只读属性
  readonly legs: number = 4;
  //静态成员
  static food: string = "bones";
}
let dog = new Dog("tom");

class Husky extends Dog {
  constructor(name: string, color: string) {
    super(name);
    this.color = color;
  }
  color: string;
}

// 抽象类 无法被实例，只能被继承
abstract class Animal {
  eat() {}
  //抽象方法
  abstract sleep(): void;
}
class cat extends Animal {
  constructor(name: string) {
    super();
    this.name = name;
  }
  name: string;
  run() {}
  sleep() {
    console.log("cat sleep");
  }
}

//类的链式调用
class WorkFlow {
  step1() {
    return this;
  }
  step2() {
    return this;
  }
}
new WorkFlow().step1().step2();

class MyFlow extends WorkFlow{
    next(){
        return this;
    }
}
new MyFlow().next().step1().next().step2()
