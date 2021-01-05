// TODO: write the validation functions
function isValidName(name) {
    if (typeof name !== "string") {
        return false;
    }

    return name.replace(/\s/g, "").length >= 3;
}

function hoursAttended(attended, length) {
    // Check either number or string type
    if (typeof attended !== "string" && typeof attended !== "number") {
        return false;
    }

    if (typeof length !== "string" && typeof length !== "number") {
        return false;
    }

    // Check empty string
    if (typeof attended === "string" && attended.length === 0) {
        return false;
    }

    if (typeof length === "string" && length.length === 0) {
        return false;
    }
    
    attended = Number(attended);
    length = Number(length);

    // Check word strings
    if (Number.isNaN(attended) || Number.isNaN(length)) {
        return false;
    }

    // Check whole numbers
    if (String(attended).match(/\./g)) {
        return false;
    }

    if (String(length).match(/\./g)) {
        return false;
    }

    if (length < 0 || attended < 0) {
        return false;
    }

    return attended <= length;
}


// tests:
console.log(isValidName("Frank") === true);
console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);
