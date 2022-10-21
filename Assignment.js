//Question No 1
//To list the properties of a js object & get the length of objects
let object={
    name : "Ram",
    sclass : 10,
    rollno : 1
};
console.log(object);
delete object.rollno;
console.log(object);
// console.log(Object.keys(object));
var size = Object.keys(object).length;
console.log(size);

//Question No 2
//To get the volumne of cylinder 
const pi=3.141592653589793238;
function cylinder(h, r) {
    height = h;
    radius = r;
   }
   volume = function () {
    //  var radius = diameter / 2;
     return height * pi * radius * radius;
   }
cylinder(11,2);
console.log('volume =', volume().toFixed(4));

//Question No 3
//To make clock in js
setInterval(() => {
  let date = new Date()
  console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);//gethours ,getminutes & getseconds returns the respective value
}, 1000);//Here 1000 means 1 second

//Question No 4
//To find all the methods in js
function FindAllMethods(obj) {
    return Object.getOwnPropertyNames(obj).filter(function(property) {
        return typeof obj[property] == "function";
    });
}
console.log(FindAllMethods(Math));

//Question No 5
//Function to convert an object into a list of [keys,value]
let student={
    name:"Ram",
    age:19,
    address:"ktm",
    class:12,
    rollno:2
};
const entries=Object.entries(student);
console.log(entries);

//Question No 6
//To reverse a specific number in js
function reverse(no)
{
	no = no + "";//number to string
	return no.split("").reverse().join("");//split() splits a string object into an array
}
var rev=reverse(1245);
console.log(rev);

//Question No 7
//To generates all the combination of string
function possible (w) {
    let array = [];
    for(i=0;i<w.length;i++) {
        for(j=i+1;j<w.length+1;j++) {
            array.push(w.slice(i, j));
        }
    }
    return array;
 }
 console.log(possible("cat"));

//Question No 8
//To find the alphabetical order of any string
function alphaorder(s){
    return s.split("").sort().join("");
}
console.log(alphaorder("webmaster"));

//Question No 9
//To find out the longest word in the given string
function longestword(str)
{
  var ar1 = str.match(/\w[a-z]{0,}/gi);
  var ar2 = ar1[0];

  for(var i = 1 ; i < ar1.length ; i++)
  {
    if(ar2.length < ar1[i].length)
    {
    ar2 = ar1[i];
    } 
  }
  return ar2;
}
var result=longestword('web Development Tutorial');
console.log(result);
var toupper=result.toUpperCase();
console.log(toupper);//

//Question No 10
//Programs to count the number of vowels in the given string
function vowel(str)
{
  var vowellist = 'aeiouAEIOU';
  var c = 0;//to count the vowel
  for(var i = 0; i < str.length ; i++)
  {
    if (vowellist.indexOf(str[i]) !== -1)
    {
      c += 1;
    }
  }
  return c;
}
var result = vowel("I live in New York ");
console.log('The number  vowel present is', (result));

//Question No 11
//Program to find the factorial of random number
const a = Math.floor(Math.random() * (10 - 1)) + 1;//generating random number between 1 - 10
console.log('the random number is',a);
function factorialize(a) {
if (a < 0) 
        return -1;
  else if (a == 0) 
      return 1;
  else 
      return (a * factorialize(a - 1)); //recursion method 
}
console.log(factorialize(a));

//Question No 12
//Program to check any number is 50 0r the sum is 50 , if this is correct return True
function check(var1,var2){
  x=var1;
  y=var2;
  if(x == 50 || y==50 || x+y == 50)
  {
    return true;
  }
  else
  {
    return false;
  }
}
var result = check(23,25);
console.log(result);

//Question No 13
//Program to convert string in upper case if string length is less than 3 
function result(str){
  if(str.length<3)
  {
    return str.toUpperCase();
  }
  front=(str.substring(0,3)).toLowerCase();//substring(start,end)
  back=str.substring(3,str.length);
  return front + back;
}
console.log(result("PYThon"));
console.log(result("ab"));
console.log(result("coLLEGE"));

//Question No 14
//Program to find the vowel & consonants in the given string And sort the vowel & consonant array 
function voco(word){
  vowellist=['a','e','i','o','u']
  let vowel=[];
  let consonant=[];
  for(let i=0; i<word.length;i++)
  {
    if(vowellist.includes(word[i]))//return 'true' if it find value in the vowellist
    vowel.push(word[i]);
    else
    consonant.push(word[i]);
  }
  vowel.sort();
  consonant.sort();
  return {vowel,consonant};
}
let {vowel,consonant}=voco("hellofriend");
console.log(vowel,consonant);













