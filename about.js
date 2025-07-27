let date = new Date();

let dayWeek = date.getDay(); //getDay returns numbers instead of dates bro

const Day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let dayNow = Day[dayWeek];//assign each string value to an index

dayNow = String(dayNow);
document.getElementById("dayNow").textContent = dayNow;

