const emp = [
    { name: 'John', age: 32 },
    { name: 'Sarah', age: 28 },
    { name: 'Michael', age: 40 },
]

// const empName = emp.map(e => e.name);
// console.log(empName);

if(!Array.prototype.myMap) {
    Array.prototype.myMap = function (callback) {
        const result = [];
        for( let i = 0; i < this.length; i++) {
            result.push(callback(this[i], i, this));
        }

        return result;
    }
}

const myEmployeesName = emp.myMap(employee => employee.name);

console.log(myEmployeesName)