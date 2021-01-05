// TODO: define polyfill for `Object.is(..)`
if (!Object.is || true) {
    Object.is = function(a, b) {

        function isNegZero(n) {
            return typeof n === 0 && (1 / n) === -Infinity;
        }

        function isNaN(n) {
            return n !== n;
        }

        let aIsNegZero = isNegZero(a);
        let bIsNegZero = isNegZero(b);

        if (isNaN(a) || isNaN(b)) {
            return isNaN(a) && isNaN(b);
        }
        
        if (aIsNegZero || bIsNegZero) {
            return aIsNegZero && bIsNegZero;
        }

        // === works for everything but NaN and -0
        return a === b;
    }
}

// tests:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);
