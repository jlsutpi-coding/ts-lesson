console.log("Lesson 7");
// Index Signatures
// interface TransitionObj {
//   readonly [index: string]: number;
// }

interface TransitionObj {
  // readonly [index:  string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

const todayTransitions: TransitionObj = {
  Pizza: -10,
  Books: -12,
  Job: -2,
};

// console.log(todayTransitions.Pizza);
// console.log(todayTransitions["Pizza"]);

let prop: string = "Pizza";

// console.log(todayTransitions[prop]);

// const todayNet = (transition: TransitionObj): number => {
//   let total = 0;
//   for (const element in transition) {
//     // using keyof keyword and assertion
//     total += transition[element as keyof typeof todayTransitions] ?? 0;
//   }
//   return total;
// };
// console.log(todayNet(todayTransitions));
type TransitionKeys = keyof typeof todayTransitions;

// const todayNet = (transition: Record<TransitionKeys, number>): number => {
//   let total = 0;
//   for (const key of Object.keys(transition) as TransitionKeys[]) {
//     total += transition[key];
//   }
//   return total;
// };
const todayNet = (transition: TransitionObj): number => {
  let total = 0;
  for (const key in transition) {
    total += transition[key as TransitionKeys];
  }
  return total;
};

// console.log(todayNet(todayTransitions));

/////////////////////////////////////////////////////////////////////

interface Student {
  // declare index signature
  // [index: string]: number | string | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Jl Sut Pi",
  GPA: 3.5,
  classes: [100, 200],
};

// Object.keys(student).map((key) =>
//   // declare using assetiton(as) with keyof(typescript) and typeof(js) studnet(obj)
//   // console.log(student[key as keyof typeof student])
// );

// //  keyof can use in funciton
const logStudnetKey = (student: Student, key: keyof Student): void => {
  // console.log(`Student ${key}: ${student[key]} `);
};

logStudnetKey(student, "GPA");

///

interface Salary {
  [index: string]: number;
}
const salary: Salary = {
  income: 3000,
};
// Becareful with index Signature it can cuase error
// console.log(salary.ihome);

type Streams = "salary" | "bonus" | "sidehustle";
type Incomes = Record<Streams, number>;

const monthlyIncome: Incomes = {
  salary: 500,
  bonus: 30,
  sidehustle: 34,
};

for (const revenue in monthlyIncome) {
  console.log(monthlyIncome[revenue as keyof typeof monthlyIncome]);
}

// console.log(monthlyIncome);

interface Works {
  [index: string]: number;
  cleanError: number;
  coolMeal: number;
  developFrontend: number;
}

// for
const salaryForToday: Works = {
  cleanError: 40,
  coolMeal: 20,
  developFrontend: 30,
};

let total = 0;
for (const salary in salaryForToday) {
  console.log(salaryForToday[salary]);
}
console.log(salaryForToday);
