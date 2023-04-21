class Dog {
    constructor(name: string) {
        this.name = name
    } 
    public name: string = 'dog'
    run() {}
    //私有成员
    private pri() {}
}
let dog = new Dog('tom')

class Husky extends Dog{
    constructor(name: string, color: string) {
        super(name)
        this.color = color;
    }
    color: string
}

