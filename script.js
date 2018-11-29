'use strict';

let money = prompt("Ваш бюджет на месяц?"),
	time = prompt("Введите дату в формате YYYY-MM-DD"),
	expenses,
	optionalExpenses,
	income,
	savings = false;

for (let i = 0; i < 2; i++ ) {
	expenses = {
		x : prompt("Введите обязательную статью расходов в этом месяце"),
		y : prompt("Во сколько обойдется?")
	}
}

let arr = [money, time, expenses, optionalExpenses, income, savings];

alert(arr);

// let something = prompt("xxx");
// console.log(something);
//
// let person ={
// 	name: "John",
// 	age: 25,
// 	isMarried: false
// };
//
// console.log(person.name);
//
// let arr = ["plum.png", "org.jpg", "apple.bmp"];
//
// console.log(arr[1]);


