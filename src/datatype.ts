// 原始类型
let bool: boolean = true
let num: number = 123
let str: string = 'abc'

// 数组
let arr1: number[] = [1,2,3]
let arr2: Array<number> = [1,2,3]
let arr3: Array<number | string> = [1,2,3,'4']

// 元组(特殊的数组，限制了数组元素的个数和类型)
let tuple: [number,string] = [0,'1']
// 可以为元组push新数据，但仍旧不能进行越界访问
tuple.push(2) // 不报错
console.log(tuple)
// tuple[2] // 报错

// 函数
let add = (x: number,y: number): number => x + y

// 对象
let obj: {x: number, y: number} = {x:1, y:2}
obj.x= 3

// symbol
let s1: symbol = Symbol()
let s2: symbol = Symbol()
console.log(s1 === s2) // false

// undefined, null
// strictNullChecks配置定义是否严格检查，非严格检查下，undefined和null是其他类型的子类型
let un: undefined = undefined
let nu: null = null

// void
let noReturn = ()=> {}

// any
let x

// never 永远不会有返回值（抛异常和死循环）
let error = () =>{
    throw new Error('error')
}
let endless = () =>{
    while(true) {}
}




