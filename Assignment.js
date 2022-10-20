//Question No 1
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
setInterval(() => {
  let date = new Date()
  console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}, 1000);

//Question No 4
function FindAllMethods(obj) {
    return Object.getOwnPropertyNames(obj).filter(function(property) {
        return typeof obj[property] == "function";
    });
}
console.log(FindAllMethods(Math));
//Question No 5
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
function reverse(no)
{
	no = no + "";//number to string
	return no.split("").reverse().join("");
}
var rev=reverse(1245);
console.log(rev);

//Question No 7
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
function alphaorder(s){
    return s.split("").sort().join("");
}
console.log(alphaorder("webmaster"));

//Question No 9
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
//generating a random number between 1 & 10
const a = Math.floor(Math.random() * (10 - 1)) + 1;
console.log('the random number is',a);
function factorialize(a) {
if (a < 0) 
        return -1;
  else if (a == 0) 
      return 1;
  else 
      return (a * factorialize(a - 1));  
}
console.log(factorialize(a));

//Question No 12
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
function result(str){
  if(str.length<3)
  {
    return str.toUpperCase();
  }
  front=(str.substring(0,3)).toLowerCase();
  back=str.substring(3,str.length);
  return front + back;
}
console.log(result("PYThon"));
console.log(result("ab"));
console.log(result("coLLEGE"));

//Question No 14
function voco(word){
  vowellist=['a','e','i','o','u']
  let vowel=[];
  let consonant=[];
  for(let i=0; i<word.length;i++)
  {
    if(vowellist.includes(word[i]))
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













