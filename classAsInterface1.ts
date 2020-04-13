class MyClass {
    a: number;
    b: string;
  }
 
  class MyOtherClass extends MyClass {
    c: number;
  }
 
  let x = new MyOtherClass();
 
  x.a = 10;
  x.b = 'a';
  x.c = 2;
 
  console.log(x);
 