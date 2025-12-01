console.log("copy right");
//  Original Js code
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year?.setAttribute("datetime", thisYear);
// year?.textContent = thisYear;
// 2nd variation
const year = document.getElementById("year");
const thisYear = String(new Date().getFullYear());
console.log(year);
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
export {};
//# sourceMappingURL=copyright.js.map