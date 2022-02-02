//UC_2//
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

//UC_3//
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;            
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}
//UC_5//
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() *10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}
//UC_6//
let empWage = calcDailyWage(totalEmpHrs);
console.log( "TotalDays: " + totalWorkingDays+ "Total Hrs: " + totalEmpHrs + "Emp Wage: " +empWage);

//UC_8//
console.log(empDailyWageMap);
function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}
//UC_7//

let totalEmpWage = 0;
function sum(dailyWage){
 totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("Total Days: " +totalWorkingDays+ "Total Hrs: " + totalEmpHrs + " Emp Wage: " +totalEmpWage);

function totalWages(totalWage,dailyWage){
  return totalWage+dailyWage;
}

console.log("Emp wage using reduced method : "+empDailyWageArr.reduce(totalWages,0));

//show day along with daily wage

let dailyCntr = 0;
function mapDayWithWage(dailyWage){
  dailyCntr++;
  return dailyCntr + " = "+dailyWage; 
}

let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("Daily wage map");
console.log(mapDayWithWageArr);

// show days when employee worked full time
function fulltimeWage(dailyWage){
   return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("Daily wage filter when employee worked full time :");
console.log(fullDayWageArr);

// find first day occurence when worked full time

function findFulltimeWage(dailyWage){
return dailyWage.includes("160");
}
 console.log(" First full time wage occurence : "+mapDayWithWageArr.find(findFulltimeWage));

 
 // check if every element of full time wage array includes fulltime wage("160")

function isAllFulltimeWage(dailyWage){
  return dailyWage.includes("160");
}
console.log(" check all elements have full time wage: "+fullDayWageArr.every(isAllFulltimeWage));

// check if there is any part time wage 

function isAnyParttimeWage(dailyWage)
{
  return dailyWage.includes("80");
}
console.log("Check if any PartTime wage : "+mapDayWithWageArr.some(isAnyParttimeWage));


// find the number of days the employee worked

function totalDaysWorked(numOfDays,dailyWage)
{
   if(dailyWage >0) return numOfDays+1;
   return numOfDays;
}

console.log("Number of days emp worked : " + empDailyWageArr.reduce(totalDaysWorked,0));
