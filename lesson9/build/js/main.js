console.log("Lesson -9");
/////////////////////////////////////////////////////////////////////////////////
// Partial
const updateAssignment = (assign, propsToUpdate) => {
    return { ...assign, ...propsToUpdate };
};
const assign = {
    studentId: "1",
    title: "Typescript",
    grade: 10,
};
updateAssignment(assign, { grade: 12 });
console.log(updateAssignment(assign, { grade: 12 }));
// console.log("hi");
const assignGraded = updateAssignment(assign, { grade: 7 });
console.log(assignGraded);
//////////////////////////////////////////////////////////////////////////////
// Required and ReadOnly | it needs all the porperty even optional property
const recordAssignment = (assign) => {
    return assign;
};
const assignVerified = {
    ...assignGraded,
    verified: true,
};
// cannot assign to 'grade' because it is a read-only property.
// assignVerified.grade = 9
// it will work
recordAssignment({ ...assignGraded, verified: true });
//////////////////////////////////////////////////////////////////////////////////
// Record type
// <string, string> = the object key will be string and the value will also be string
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrade = {
    "Jl Sut Pi": "C",
    Arkar: "A",
};
const gradeData = {
    Arkar: { assign1: 70, assign2: 90 },
    "Jl Sut Pi": { assign1: 50, assign2: 70 },
};
const score = { studentId: "1", grade: 12 };
const preview = { studentId: "1", title: "Typescript" };
////////////////////////////////////////////////////////////////////////////////
// Return type and Parameter type
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utlitity type", 3);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
// i can pass this assignArgs to the createNewAssign Function
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .catch((err) => {
        if (err instanceof Error) {
            console.log(err.message);
        }
    });
    return data;
};
fetchUsers().then((users) => console.log(users));
export {};
//# sourceMappingURL=main.js.map