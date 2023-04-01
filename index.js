// findMatching- This function takes an array of drivers' names and a string as arguments, 
// and returns the matching list of drivers. The function should be case insensitive.
function findMatching(driversNamesArray, nameToFind){
    return driversNamesArray.filter(name => { 
        if(name.toLowerCase() === nameToFind.toLowerCase()){
            return name
        }
    });
}

// fuzzyMatch - This function takes an array of drivers' names and a string as arguments 
// for querying the array, and returns all drivers whose names begin with the provided letters.
function fuzzyMatch(driversNamesArray, letters){
    return driversNamesArray.filter(name => name.startsWith(letters));
}

// matchName - This function takes an array of driver objects and a string as arguments. 
// Each driver object has two properties: name and hometown. The function should return each 
// element whose name property matches the provided string argument.
function matchName(driverObjArray, nameToFind){
    return driverObjArray.filter(driverObj => {
        if(driverObj.name.toLowerCase() === nameToFind.toLowerCase()){
            return driverObj;
        }
    });
}