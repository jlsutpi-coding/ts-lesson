console.log("Lesson -9");
//  utility type

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

/////////////////////////////////////////////////////////////////////////////////
// Partial
const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign: Assignment = {
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
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  return assign;
};

const assignVerified: Readonly<Assignment> = {
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
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Student = "Jl Sut Pi" | "Arkar";
type LetterGrades = "A" | "B" | "C" | "D" | "E" | "U";

const finalGrade: Record<Student, LetterGrades> = {
  "Jl Sut Pi": "C",
  Arkar: "A",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Student, Grades> = {
  Arkar: { assign1: 70, assign2: 90 },
  "Jl Sut Pi": { assign1: 50, assign2: 70 },
};
///////////////////////////////////////////////////////////////////////////////////
// Pick and Omit
// Pick will pick the proterty and create obj with that pick property
type AssignmentResult = Pick<Assignment, "studentId" | "grade">;

// Omit will omit the property that we provide after the Assignment type
type AssignmentPreview = Omit<Assignment, "verified" | "grade">;

const score: AssignmentResult = { studentId: "1", grade: 12 };

const preview = { studentId: "1", title: "Typescript" } as AssignmentPreview;

// Exclude and Extract | only works with string literal union type !!!!not going work with interface

type AdjustedGrade = Exclude<LetterGrades, "U">; // output type expect U => A, B, C, D, E
type HighGrade = Extract<LetterGrades, "A" | "B">; // it will only A, B

///////////////////////////////////////////////////////////////////////////////////////////

// NonNullAble type

type AllGrades = "Dave" | "John" | undefined | null;

type nameOnly = NonNullable<AllGrades>;
////////////////////////////////////////////////////////////////////////////////
// Return type and Parameter type

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utlitity type", 3);
console.log(tsAssign);

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 100];

// i can pass this assignArgs to the createNewAssign Function

const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// Awaited Utility Type ( newer utility type compare to another types )
// Awaited type - helps us with the ReturnType of a Promise

interface User {
  name: string;
  id: number;
  userName: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .catch((err) => {
      if (err instanceof Error) {
        console.log(err.message);
      }
    });
  return data;
};

type FetchUserReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));
