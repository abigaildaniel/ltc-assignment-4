const myName = 'insert name here';
const mentorName = 'insert mentor here';

const totalCourses = 0; // Total amount of courses in the OpenSesame catalog
const courses10Min = 0; // Amount of courses 1-10 min (assume 10 min for calculation)
const courses30Min = 0; // Amount of courses 11-30 min (assume 30 min for calculation)
const courses59Min = 0; // Amount of courses 31-59 min (assume 59 min for calculation)
const courses1HourPlus = 0; // Amount of courses 1 hour+ (assume 3 hours for calculation)

// Feel free to add code here for the calculation

const totalHoursOfAllCourses = 0; // Amount of time to view all courses (measured in HOURS). DO NOT HARDCODE!

// Only change code ABOVE this line!

const totalDaysOfAllCourses = Math.floor(totalHoursOfAllCourses / 24);
console.log(`\nName: ${myName}`);
console.log(`Mentor name: ${mentorName}`);

console.log(`\n=====COURSE CATALOG ANALYSIS=====\n`);
console.log(`There are ${totalCourses} total courses in the OpenSesame catalog.`);
console.log(`${courses10Min} are 1-10 min long. For calculation, we'll assume that they're all 10 min.`)
console.log(`${courses30Min} are 11-30 min long. For calculation, we'll assume that they're all 30 min.`)
console.log(`${courses59Min} are 31-59 min long. For calculation, we'll assume that they're all 59 min.`)
console.log(`${courses1HourPlus} are longer than an hour. For calculation, we'll assume that they're all 3 hours.`)
console.log(`Using these estimates, it would take about ${totalHoursOfAllCourses} hours to take all of the courses that OpenSesame offers! That's ${totalDaysOfAllCourses} days!`)
