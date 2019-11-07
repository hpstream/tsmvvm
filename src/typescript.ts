interface CallMeWithNewToGetString {
  new (): string;
}


// 使用
declare const Foo: CallMeWithNewToGetString;
const bar = new Foo(); // bar 被推断为 string 类型
console.log(bar);
