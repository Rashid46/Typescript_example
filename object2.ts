var myObject : any = {
    firstName: "Rashid",
    lastName: "Shahariar",
    fullName: function() {
        return myObject.firstName + ' ' + myObject.lastName;
    }
}

console.log(myObject.fullName());