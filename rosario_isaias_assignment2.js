// Isaias Rosario
// 7/18/13
// Project 2
// School Lunch Money

var lunchText1 = " I will have $",
	lunchText2 = " left for lunch this week."
	lunchMoney = 10,
	lunchDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
	
;
	
// console.log (lunchText1, lunchMoney, lunchDays);

// Procedure Function****

var iHaveMoney = function (money) {
	console.log(
	"Mom gave me $" + 
	lunchMoney + 
	" for lunch this week. Each day I have to pay $2 for lunch.");

};

iHaveMoney (lunchMoney)

// Boolean Function****

var momGaveMoney = function (){
	if (lunchMoney === 0){
	console.log("I have no money for lunch this week");
	} else {
	console.log("I now have $" +
	lunchMoney +
	" for lunch this week. That should be enough for the week.");
	}
	return lunchMoney
};

var howMuchMoney = momGaveMoney ();

// Number Function****

var moneyPerDay = function (lunchMoneyLeft){
	var moneyPerDay = howMuchMoney,
		i = 0
	while (moneyPerDay > 0, i < lunchDays.length){
	console.log("I will have $" + moneyPerDay + " on " + lunchDays[i] + "." );
	moneyPerDay = moneyPerDay - 2;
	i = i + 1;
	}
	return i;
};

moneyPerDay(howMuchMoney)

// String Function****

var moneyString = function (money, text){
	var today = " today for school lunch, ",
		myMom = "My mom "
	console.log(myMom + "gave me $" + money + today + text );
	return myMom;
};

moneyString(howMuchMoney, "she is the best!")

// Array Function 

var moneyDaysLeft = function (money, day){
	var i = 0
	for(var money = howMuchMoney; money > 0; money = money - 2){
	console.log("On " + day[i] + lunchText1 + money + lunchText2);
	i = i + 1
	}
	return lunchDays[i]
};

moneyDaysLeft(howMuchMoney, lunchDays)

console.log("I used up all the $" + lunchMoney + " for lunch this week.");



