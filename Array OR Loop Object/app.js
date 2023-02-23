// CHAPTER NO 14 T0 16 START


// QUESTION NO 1

// var array = [];


// QUESTION NO 2

// var object_array = new array ();


// QUESTION NO 3

// var string_array = ["abdullah", "ali", "amjad"]
// console.log(string_array[0])


// QUESTION NO 4

// var num = [1, 2 , 3, 4, 5, 6];
// console.log(num[2]);


// QUESTION NO 5

// var bol = [true, false];
// console.log(bol[1]);


// QUESTION NO 6

// var mix = ["mixarray" , 8 , true, null, undefined];
// console.log(mix[2]);


// QUESTION NO 7

// var qualification = ["SSC <br>", "HSC <br>", "BCS <br>", "BS <br>", "BCOM <br>", "MS <br>", "M. Phil <br>", "PHD"];
// document.write("QUALIFICATION : <br>", qualification);


// QUESTION NO 8

// var student = ["Michale", "Jhon", "Tony"];
// var score = [450, 297, 400];
// var total_marks = 500;
// document.write("Score of ", student[0], "is ", score[0], " Percentage : ", score[0] / total_marks * 100, "% <br>");
// document.write("Score of ", student[1], "is ", score[1], " Percentage : ", score[1] / total_marks * 100, "% <br>");
// document.write("Score of ", student[2], "is ", score[2], " Percentage : ", score[2] / total_marks * 100, "% <br>");


// QUESTION NO 9 A

// var color = ["Red", "Green", "Yellow"];
// alert(color.unshift(prompt("Enter color")));
// console.log(color);


// QUESTION NO 9 B

// var color = ["Red", "Green", "Yellow"];
// alert(color.push(prompt("Enter color")));
// console.log(color);


// QUESTION NO 9 C

// var color = ["Red", "Green", "Yellow"];
// alert(color.unshift("orange", "black"));
// console.log(color);


// QUESTION NO 9 D

// var color = ["Red", "Green", "Yellow"];
// console.log(color.shift());
// console.log(color);


// QUESTION NO 9 E

// var color = ["Red", "Green", "Yellow"];
// console.log(color.pop());
// console.log(color);


// QUESTION NO 9 F

// var color = ["Red", "Green", "Yellow"];
// color.splice(0 , 0, "Orange");
// console.log(color)


// QUESTION NO 9 G

// var color = ["Red", "Green", "Yellow"];
// color.splice(0 , 2);
// console.log(color)


// QUESTION NO 10

// var scores = [320, 230, 480, 120];
// console.log("Score of student is : ",scores,"<br>" );
// console.log("Order scores of student : ", scores.sort());


// QUESTION NO 11

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// console.log(cities);
// var citiesCopy = cities.slice(4,5);
// console.log(citiesCopy);


// QUESTION NO 12

// var arr = ["This", "is", "my", "cat"];
// console.log("Array : " + arr);
// console.log("String : " + arr.join(" "));


// QUESTION NO 13 SAMAJ NAI A RAHA


// QUESTION NO 14 SAMAJ NAI A RAHA


// QUESTION ON 15

// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>")
// for(var i = 0; i<manufacturers.length; i++){
//     document.write("<option>" + manufacturers[i] + "<option/>")
// }


// CHAPTER NO 17 TO 20 START


// QUESTION NO 1

// var emptyarray = [[]];


// QUESTION NO 2

// var array = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1],
// ]
// console.log(array)

// QUESTION NO 3

// for(i = 1; i<= 10; i++){
//     console.log(i)
// }


// QUESTION NO 4

// var num = +prompt("ENTER A NUMBER");
// var length = +prompt("Enter table length")
// for (var i = 1; i <= length; i++)
//     console.log(num + " * " + i + " = " + num * i);


// QUESTION NO 5

// var array = ["apple", "banana", "mango", "orange", "strawberry"];
// for(var i = 0; i <array.length; i++){
//    console.log(array[i]);
// }
// console.log("Element at index ",array.indexOf("apple"), " is ", array[0]);
// console.log("Element at index ",array.indexOf("banana"), " is ", array[1]);
// console.log("Element at index ",array.indexOf("mango"), " is ", array[2]);
// console.log("Element at index ",array.indexOf("orange"), " is ", array[3]);
// console.log("Element at index ",array.indexOf("strawberry"), " is ", array[4]);


// QUESTION NO 6 A

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(var i = 1; i <= array.length; i++){
//     console.log("Counting",i)
// }


// QUESTION NO 6 B

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(var i = 10; i >= 1; i--){
//     console.log("Revierce Counting" ,i)
// }


// QUESTION NO 6 C

// for(var i=0; i <=10; i +=2){
//     console.log("Even", i);
// }


// QUESTION NO 6 D

// for(var i=1; i <=9; i +=2){
//     console.log("Odd", i);
// }


// QUESTION NO 6 E

// for(var i = 2; i <=20; i+=2){
//     console.log("Series", i, "k")
// }


// Question No 7 NOT SOLVE NAI HO RAHA


// QUESTION NO 8

// var array = [24, 53, 78, 91, 12];
// var lar_num = 0
// console.log("ARRAY items", array)
// for( i = 0; i<array.length; i++){
//     if(array[i] > lar_num) {
//         lar_num = array[i];
//     }
// }
// console.log("The largest number is", lar_num);


// QUESTION ON 9

// var array = [24, 53, 78, 91, 12];
// console.log(array);
// var small_num = Math.min(...array)
// console.log("The samllest number is ", small_num)


// QUESTION NO 10

// for(var i = 5; i <=100; i+=5){
//     console.log(i)
// }
