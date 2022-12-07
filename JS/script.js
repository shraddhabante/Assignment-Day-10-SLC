// implicit conversion
console.log('A' - 1);//Nan
console.log('A' + 1);//A1
console.log(2 + '2' + '2');//222
console.log('hello' + 'world' + 89);//helloworld89
console.log('hello' - 'world' + 89);//Nan
console.log('hello' + 78);//hello78
console.log('78' - 90 + '2');//-122
console.log(2 - '2' + 90);//90
console.log(89 - '90' / 2);//44
console.log(2 + '2' + null);//22null
console.log((true == false) > 2);//false
console.log((89 + 'hello' + 90 / 9));//89hello10

// 3.	Datatypes:
var str = ' gfuh ieiuei ';
console.log(str.slice(1, 6)); //extract first five letters from a string (' gfuh ieiuei ')

var strTwo = 'hduej dij';
console.log(strTwo.length);
console.log(strTwo.toUpperCase());// get the length of a string and make it uppercase ('hduej dij')

var strThree = '   biji jdo   ';
console.log(strThree.toLowerCase()); //take a string, make it lowercase and trim it ('   biji jdo   ')
console.log(strThree.trim());

var _str4 = ' html is used create structure of the website';
console.log(_str4.replace('html', 'HTML')); //replace specified word in a string ('', '')

console.log((89 + 'hello' + 90 / 9)); //89hello10

// 	create an object for car.
var car = {
    model: "toyota",
    carColor: 'red',
    speed: 100,
    year: 2000,
    price: 200000,

}
var cObj = Object.create(car);
console.log(cObj.model);
console.log(cObj.price);
console.log(cObj);






