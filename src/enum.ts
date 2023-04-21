// 数字枚举
enum Role {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}
// 枚举成员的值为只读类型，不能修改
//Role.Developer =2 // 报错

// 字符串枚举
enum Message {
    Success = '恭喜你，成功了',
    Fail = '抱歉, 失败了'
}

// 异构枚举
enum Answer {
    N,
    Y = 'yes'
}

// 枚举成员
enum Char {
    // const
    a,
    b = Char.a,
    c = 1+3,
    // computed
    d = Math.random(),
    e = '123'.length
}

// 常量枚举
const enum Month{
    Jan,
    Feb,
    Mar
}

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
