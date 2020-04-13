interface IName {
    [key: number]: string;
 }
 
 let person: IName = {0:'Rashid', 1:'Shaharair'};
 
 console.log(person[0]);