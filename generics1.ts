function genetics<T>(args:T):T {
    return args;
 }
 
 let stringType = genetics<string>("Rashid");
 
 let numberType = genetics<number>(46);
 
 console.log(stringType, numberType);