class List {
    static count: number = 0;
    static list: any[] = [];
    addName(name:string) {
       List.count++;
       List.list.push(name);
    } 
 }
 
 var newList = new List();
 newList.addName('Rashid');
 newList.addName('Shahariar');
 
 console.log(List.list);
 console.log(List.count);