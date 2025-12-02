console.log("copy right");

//  Original Js code
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year?.setAttribute("datetime", thisYear);
// year?.textContent = thisYear;

// 2nd variation
const year = document.getElementById("year") as HTMLSpanElement;
const thisYear: string = String(new Date().getFullYear());
console.log(year);
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
