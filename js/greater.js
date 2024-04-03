// function max (a,b){
// 	if (a > b){
// 		return a;
// 	}
// 	else {
// 		return b;
// 	}
// }
// var result = max (11, 20);
// max (11, 20);
// console.log("the greater number is "+ result);


// function maxThree (a, b, c){
// 	if (a >b && a > c) {
// 		return a;
// 	}
// 	else if (b > a && b >c){
// 		return b;
// 	}
// 	else {
// 		return c;
// 	}
// }
// var result = maxThree(1, 5, 8);
// var section = document.getElementById("result_section");
// var x = document.querySelector(".result_multiple");
// section.innerHTML = "the max number is "+ result;
// var section_result = document.getElementsByClassName("result_multiple");
// // section_result.innerHTML = ("result");
// section.innerHTML = "print" + x.innerHTML;


// function vowel (x){
// 	var yes;
// 	switch (x) {
// 		case 'a':
// 		yes = "vowel";
// 		return yes;
// 		break;
// 		case 'e':
// 		yes = "vowel";
// 		return yes;
// 		break;
// 		case 'i':
// 		yes = "vowel";
// 		return yes;
// 		break;
// 		case 'o':
// 		yes = "vowel";
// 		return yes;
// 		break;
// 		case 'u':
// 		yes = "vowel";
// 		return yes;
// 		break;
// 		default:
// 		yes = "not vowel";
// 		return yes;
// 		break;
// 	}
// }
// var vow = prompt("enter a letter");
// vowel (vow);
// var result = vowel (vow);
// var section = document.getElementById("result_section");
// section.innerHTML = "letter is " + result;


// function sumadd(s) {
// 	var total = 0;
// 	for (i =0; i < 4; i++) {
// 		total += s[i];
// 	}
// 	return total
// }
// function multiply(m) {
// 	var totalMulti = 1;
// 	for (i = 0;i < 4;i++){
// 		totalMulti *= m[i];
// 	}
// 	return totalMulti;
// }
// var sum = [1,2,3,4];
// var multi =[1,2,3,4];
// var total, totalMulti;
// var totaladd = sumadd(sum);
// var total_multi = multiply(multi);
// var section = document.getElementById("result_section");
// section.innerHTML = "Total sum is " + totaladd;
// var multiply_result = document.getElementById("result_multiple");
// multiply_result.innerHTML = "Total multiply is " + total_multi;


// function findLongWords(x) {
// 	word = 0;
// 	name = null;
// 	for (i = 0;i < 4; i++) {
// 		if (word < x[i].length) {
// 			word = x[i].length;
// 			name = x[i];
// 		}
// 	}
// 	return name;
// }
// var n =["avishek", "sulochan", "sajar", "pulami", "boom"];
// result = findLongWords(n);
// finalResult = document.getElementById("result_section");
// result_section.innerHTML= "longest name is " + result;

//---------------------------------------------------------------------------------------------------------

// function filterLongWords(a) {
// 	var j = prompt("Enter a number");
// 	var flag = '  ';
// 	for(i = 0;i < 4; i++) {
// 		if (j < a[i].length) {
// 			flag += a[i];
// 		}
// 	}
// 	return  flag;
// }
// var a =["avishek", "sulochan", "sajar","pulami", "boom"];
// // var i = "avika";
// result = filterLongWords(a);
// finalResult = document.getElementById("result_section");
// result_section.innerHTML= "the array of words that are longer then i is "+ result;

//-------------------------------------------------------------------------------------------------------------

// function primeNumbers(x, y){
// 	flag = ' ';
// 	con = 1;
// 	for (i = 2; i <=10; i++){
// 		for (j = x; j <= y; j++){
// 			if (j % i != 0){
// 				flag += j;
// 				break;
// 			}
// 			else {
// 			con++;	
// 			}
// 		}
// 	}
// 	return flag;
// }
// var a = prompt("Enter the first number");
// var b = prompt("Enter the second number");
// result = primeNumbers(a, b);
// finalResult = document.getElementById("result_section");
// result_section.innerHTML = "the prime numbers are " + result;

//--------------------------------------------------------------------------------------------------------------------------------

// function swap(num){
// 	var black;
// 	for (i = 0, i < 7; i++){
// 		for (j = 0; j < 7; i++){
// 			if (num[i] < num[j]){
// 				black = num[i];
// 				num[i] = num[j];
// 				num[j] = black;
// 			} 
// 		}
// 	}

// }
// var data = [12,242,67,43,65,87,90,34];
// result = swap(data);
// finalResult = document.getElementById("result_section");
// result_section.innerHTML = "after swaping" + result;

//----------------------------------------------------------------------------------------------------------------------------------

// function multiplication (x,y){
// 	result = [];
// 	var multi;
// 	for (i = 1; i < y; i++){
// 		multi = i * x;
// 		result.push(multi); 
// 	}
// 	return result;
// }
// var data_1 = prompt("Enter a number");
// var data_2 = prompt("Enter second number");
// final = multiplication (data_1 , data_2);
// result = document.getElementById("result_section");
// result.innerHTML = "after multiplication " + final;

//-------------------------------------------------------------------------------------------------------------------------------------

// function even (x,y) {
// 	array = [];
// 	for (i = x; i < y; i++) {
// 		if (i % 2 == 0) {
// 			array.push(i);
// 		}
// 	}
	
// 	return array;
// }

// function odd (x,y) {
// 	array1 = [];
// 	for (i = x; i < y; i++) {
// 		if (i % 2 != 0) {
// 			array1.push(i);
// 		}
// 	}
	
// 	return array1;
// }
// result = even (1,100);
// result1 = odd (1,100);
// final = document.getElementById("result_section");
// final1 = document.getElementById("result_multiple");
// final.innerHTML = "even number are "+ result;
// final1.innerHTML = "odd numbers are "+ result1;