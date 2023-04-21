
interface List {
    readonly id: number; //只读属性 
    name: string;
    add?: number; //可选属性
}
interface Result {
    data: List[]
}
function render(result: Result){
    result.data.forEach((value) => {
        console.log(value.id, value.name)
    })
}

let result = {
    data: [
        {id: 1, name: 'A'},
        {id: 2, name: 'B'}
    ]
}
render(result)


// 定义字符串数组
interface StringArray {
    [index: number]: string
}
let chars: StringArray = ['A', 'B']

interface Names {
    [x:string]: string;
    [z:number]: string
}


// 函数定义写法
// 1
function add1(x:number, y:number){
    return x+y;
}
// 2
let add2: (x:number, y:number) => number
// 3
interface Add3{
    (x: number, y: number):number
}
// 4
type Add = (x: number, y: number) => number
let add4: Add = (a, b) => a+b


//混合类型接口
interface Lib{
    (): void;
    version: string;
    doSomething(): void;
}

function getLib(){
    let lib: Lib =(() =>{}) as Lib;
    lib.version = '1.0'
    lib.doSomething = () =>{}
    return lib;
}

let lib1 = getLib()
lib1();
lib1.doSomething();
let lib2 = getLib()


//函数可选参数(可选参数必须位于必选参数之后)
function sum(x: number, y?:number){
    return y? x+y : y
}
//剩余参数
function sum2(x: number, ...rest: number[]){
    return x + rest.reduce((pre, cur) => pre + cur)
}

//函数重载
function fn(...rest:number[]):number;
function fn(...rest:string[]):string;
function fn(...rest:any[]):any{
    let first = rest[0]
    if(typeof first === 'string'){
        return rest.join('')
    }
    if(typeof first === 'number'){
        return rest.reduce((pre, cur)=>pre + cur)
    }
}


