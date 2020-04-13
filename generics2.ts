class customArray<T> {
    arr: T[] = [];
  
    getItmes() : T[] {
      return this.arr;
    }
  
    addItem(item:T) {
     this.arr.push(item);
    }
  }
 
  let numObj = new customArray<number>();
 numObj.addItem(10);
 
 console.log(numObj.getItmes());
 
 let strObj = new customArray<string>();
 strObj.addItem('Rashid');
 
 console.log(strObj.getItmes());