interface KeyBoolean {
    [key: string]: boolean
 }
 let kv: KeyBoolean = {'FOCUSED': true, 'BLURRED':false};
 console.log(kv);
 console.log(kv['FOCUSED']);