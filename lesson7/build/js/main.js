console.log("Lesson 7");
const todayTransitions = {
    Pizza: -10,
    Books: -12,
    Job: -2,
};
// console.log(todayTransitions.Pizza);
// console.log(todayTransitions["Pizza"]);
let prop = "Pizza";
// const todayNet = (transition: Record<TransitionKeys, number>): number => {
//   let total = 0;
//   for (const key of Object.keys(transition) as TransitionKeys[]) {
//     total += transition[key];
//   }
//   return total;
// };
const todayNet = (transition) => {
    let total = 0;
    for (const key in transition) {
        total += transition[key];
    }
    return total;
};
const student = {
    name: "Jl Sut Pi",
    GPA: 3.5,
    classes: [100, 200],
};
// Object.keys(student).map((key) =>
//   // declare using assetiton(as) with keyof(typescript) and typeof(js) studnet(obj)
//   // console.log(student[key as keyof typeof student])
// );
// //  keyof can use in funciton
const logStudnetKey = (student, key) => {
    // console.log(`Student ${key}: ${student[key]} `);
};
logStudnetKey(student, "GPA");
const salary = {
    income: 3000,
};
const monthlyIncome = {
    salary: 500,
    bonus: 30,
    sidehustle: 34,
};
for (const revenue in monthlyIncome) {
    console.log(monthlyIncome[revenue]);
}
// for
const salaryForToday = {
    cleanError: 40,
    coolMeal: 20,
    developFrontend: 30,
};
let total = 0;
for (const salary in salaryForToday) {
    console.log(salaryForToday[salary]);
}
console.log(salaryForToday);
export {};
//# sourceMappingURL=main.js.map