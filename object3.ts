var myObject : any = {
    firstName: "Rashid",
    lastName: "Shahariar",
    fullName: function() {
        return myObject.firstName + ' ' + myObject.lastName;
    },
    pet: []
}

myObject.pet.push('Cat','Dog','Snake');
console.log(myObject.pet);