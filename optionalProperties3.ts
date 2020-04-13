
function area(height: number, width?: number) {
    if(!width) width = height;
    return height*width;
 } 
 
 console.log(area(50));
 console.log(area(50,20));
 