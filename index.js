// Write your solution in this file!
let employee = {
    name: "Jack",
    streetAddress: "abc street"
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    let newObj = {...obj};
    newObj[key] = value;
    return newObj;
}

console.log(updateEmployeeWithKeyAndValue(employee, "age", 25));
console.log(employee);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "email", "123@email.com"));
console.log(employee);

function deleteFromEmployeeByKey(obj, key) {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}
console.log(deleteFromEmployeeByKey(employee, "streetAddress"));
console.log(employee);

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}

console.log(destructivelyDeleteFromEmployeeByKey(employee, "name"));