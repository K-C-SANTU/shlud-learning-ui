/**
 * Array Methods
 *      ForLoop
 *      ForEach
 *      Map
 *      Filter
 *      Push
 *      Pop
 *      Shift
 *      Unshift
 *      Slice
 *      Splice
 *      Reduce   
 */
const method = (value, index) => {
    console.log(value);
    console.log(index);
    return value + index;
}

const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
array.forEach(
    (value, index) => {
        console.log(value);
        console.log(index);
        return value + index;
    }
)


const filteredArray1 = array.filter(
    (value, index) => {
        const remainder = index % 2;
        console.log(remainder);
        if (remainder === 1) {
            return true
        } else {
            return false
        }
    }
)
console.log(filteredArray1);

const filteredArray = array.filter(
    (value, index) => index % 2
)
console.log(filteredArray);

const newValue = array.map(
    method
)
console.log(newValue);