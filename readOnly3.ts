interface IEmployee {
    readonly empCode: number;
    empName: string;
 }
 
 let empObj:IEmployee = {
    empCode : 1,
    empName : "Rashid"
 }
 
 empObj.empName = 'Shahariar';
 
 console.log(empObj);