interface IArea {
    length: number;
    width?: number;
 }
 
 function area(data: IArea) {
    if(data.width) return data.length * data.width;
 
    return data.length * data.length;
 } 
 
 console.log(area({length: 50}));
 console.log(area({length: 50, width: 20}));
 