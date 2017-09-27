let isDone :boolean = false;
console.log(isDone);

let decima:number =6;
console.log(decima);

let string:string = "Hello word";
console.log(string);

let nam:string = "Nam";
let age:number = 1993;
let sentense:string = `Hello , I'm Nguyen Thanh ${ nam } and I'm ${ 2017 - age } years old`
console.log(sentense);

let list:Array<number> = [1,2,3];
let lists:Array<string> = ['1','2','3'];
let listlist:[string,string,number] = ['1','2',3];
let x = [1,"av"];
console.log(list);
console.log(lists);
console.log(listlist);
console.log(x[1]);

enum Color {Red = 1, Green = 2, Blue = 4}
let c:Color = Color.Green;
console.log(c);