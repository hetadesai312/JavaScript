//1
//Reverse the string

const revString = reverseString("Desai");

console.log(revString);

function reverseString(str){
	// solution 1
  return str.split("").reverse().join(""); 
  
  // solution 2
  let strRev = "";
  for(i=str.length-1;i>= 0;i--){
  	strRev = strRev + str[i];
  }
  return strRev;
  
  // solution 3
	let strRev = "";
  for(let i of str){
  	strRev = i + strRev; 
  }  
  return strRev;
  
  // solution 4
  let strRev = "";
  str.split("").forEach(char=>{
  	strRev = char + strRev;
  });
  return strRev;
  
  // solution 5
  return str.split("").reduce((revStr, cVal)=>cVal + revStr ,'')
}
//2
//Check if string is plaindrome "racecar" =  true  & hello = false

const palindrome = isPalindrome("heta");

console.log(palindrome);

function isPalindrome(str){
	let strRev = str.split("").reverse().join("");
  console.log(strRev);
 	return strRev === str;
}
//3
//Reverse integer value

const revstr = reverseInt(-13235);

console.log(revstr);

function reverseInt(int){
	let strRev = int.toString().split("").reverse().join("");
  console.log(strRev);
 	return parseInt(strRev) * Math.sign(int);
}
//4
//Capitalize first letter of string

// solution 1
const revstr = capitalizeLetters("I love javascript");

console.log(revstr);

function capitalizeLetters(str){
	let strArr = str.toLowerCase().split( ' ');
  console.log(strArr);
  
  for(let i=0;i < strArr.length;i++){
  	strArr[i] = strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1);
   
  }
  return strArr.join(' ')
}

// solution 2

const revstr = capitalizeLetters("heta rajan desai");

console.log(revstr);

function capitalizeLetters(str){
	return str.toLowerCase()
          	.split(' ')
          	.map((word)=>word[0].toUpperCase() + word.substr(1))
				  	.join(" ");
}

//5
//Find Maximum number of character in string

const maxChar = maxCharacter("heta desai");

console.log(maxChar);

function maxCharacter(str){
  const charMap = {};
  let maxLen = 0;
  let maxChar = '';
  
  str.split('').forEach((char)=>{    	
  	if(charMap[char]){
    	charMap[char]++;
    } else {
    	charMap[char] = 1;
    }
  })
  
 for(let char in charMap){
 	if(charMap[char] >= maxLen){
  	maxLen = charMap[char];
    maxChar = char;
  } 
 		
 }
 return maxChar;
}

//6
//Fizzbuzz print fizz for multiple of 3 , print buzz for multiple of 5 and print fizzbuzz for multiple of 3 and 5 both

fizzBuzz();

Function fizzBuzz(){
	For(i=1;i<=100;i++){
		If(I % 3  && I % 5 ){
			Console.log("fizzbuzz");
		} else if (I % 3){
			Console.log("fizz");
		} else if ( I % 5) {
			Console.log("buzz");
		} else {
			Console.log(i);
		}
	}
}

//7
//Longest word in the sentence written word if only one word in longest or return array of longest words if multiple words are longest

const maxChar = lengestWord("heta rajan desai");

console.log(maxChar);

function lengestWord(sen){
	const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  
  
  const sorted = wordArr.sort((a,b)=>{
  	return b.length - a.length;
  })
    
  const longestWordArr = sorted.filter((cVal)=>{
  	console.log(cVal.length , sorted[0].length);
  	return cVal.length === sorted[0].length
  })
  
    
  if(longestWordArr.length === 1 ){
  	return longestWordArr[0];
  } else {
  	return longestWordArr;
  }
}
//8
//Array chucking

const maxChar = chunkArray([4,3,3,2,1,4,5,6], 2);

console.log(maxChar);

function chunkArray(arr, len){
	// Solution 1
  /*const chunkedArr = [];
  let i = 0;
  while (i < arr.length){
  	chunkedArr.push(arr.slice(i, i+len))
    i += len;
  }
  return chunkedArr;*/
  
  // solution 2
  
  const chunkedArr = [];
  arr.forEach((val)=>{
  	const last = chunkedArr[chunkedArr.length - 1];   
    console.log("last :::: "+ last);     
    if(!last || last.length === len){
       console.log( val + " va :: "+ chunkedArr )
    	chunkedArr.push([val]);
      console.log(val + " val "+ [val])
    } else {
    	last.push(val);
      console.log("in else " + last);
    }
     // console.log(last);
  })
  console.log(chunkedArr );
  return chunkedArr;
}

//9
//Flatten the array

const maxChar = flattenArray([[4,3,3],[2,1,4],[5,6]]);

console.log(maxChar);

function flattenArray(arr){
    // solution 1
	  /*return arr.reduce((a, cVal)=>{
        return a.concat(cVal);
    })*/
  // solution 2
  //return [].concat.apply([], arr);
  // solution 3
  return [].concat(...arr);
}

//10
//Anagram
//Elbow == below
//Dirty room  === dormitory

const maxChar = anagram("elbow", "below");

console.log(maxChar);

function anagram(str1, str2){
  return formatstr(str1) === formatstr(str2); 
}

//helper function
function formatstr(str){
  return str
          .replace(/[^\w]/g, '')
          .toLowerCase()
          .split('')
          .sort()
          .join('');
}

//11
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'


const maxChar = letterCganges("elbow test zest");
console.log(maxChar);

function letterCganges(str){
  let newStr = str.toLowerCase().replace(/[a-z]/gi, (char)=>{
    if(char === "z" || char === "Z"){
      return 'a';
    } else {
      return String.fromCharCode(char.charCodeAt() + 1)
    }
  }) 
  
  newStr = newStr.replace(/a|e|i|o|u/gi, (v) => v.toUpperCase())
  return newStr;
}

//12
//addAll(3,5,6,7) == 21

console.log(addAll(2,4,6,7));

// solution 1 - es5 arguments & foor loop
/*function addAll(){
  var args = Array.prototype.slice.call(arguments);
  var total = 0;
  for(i=0;i<args.length;i++){
    total += args[i];
  }
  return total;
}*/

//solution 2 - ES6 ...rest operator & forEach/reducer
function addAll(...params){  
  return params.reduce((total, cVal) =>  total + cVal);  
}

//12
//Sum all prime


// 1,2,3,4,5,6,7,8,9,10
console.log(sumAllPrimes(10));

// solution 1 - es5 arguments & foor loop

function sumAllPrimes(num){
  let total = 0;
  
  function checkForPrime(i){
      for(let j = 2; j< i ; j++){
        console.log(j);
        if(i % j === 0){
          return false;
        }        
      }
    return true;
  }
  
  for(let i=2; i<= num ; i++){
      if(checkForPrime(i)){
        total += i;
      }
  }
  
  return total;
}

//13
//See and destroy from array

// 1,2,3,4,5,6,7,8,9,10
console.log(seekAndDestory([2,4,5,6,6,'hello',2,7,6], 2,6));

// solution 1 - arguments, indexof, filter

/*function seekAndDestory(arr){
  const args = Array.from(arguments)
  
  function filterArr(arr){
    return args.indexOf(arr) === -1;
  }  
  
  return arr.filter(filterArr)
}*/

//solution 2 ... rest , filter, includes
function seekAndDestory(arr, ...rest){
 
  return arr.filter(val => rest.includes(val))
  
}

//14
//Sort by height

function sortByHeight(a){
  const arr1 = []; // sotre negative postion
  const arr2 = []; // store number position
  
  a.forEach((val, i)=> val === -1 ? arr1.push(i) : arr2.push(val));
  
  const sortArr = arr2.sort((a,b) => a-b);
  arr1.forEach((val, i)=> sortArr.splice(arr1[i], 0, -1));
  
  return sortArr;
}

const a = [-1,150,190,160,-1,-1,170,140];
console.log(sortByHeight(a));

//15
//Missing Letter
function missingLetters(str){
  let compare = str.charCodeAt(0);
  
  let missing;
  str.split('').map((char, i)=>{
    if(str.charCodeAt(i) == compare){
      ++compare;
    } else {
      missing = String.fromCharCode(compare);      
    }
  });
  return missing;
}

const a = 'abcdfghijk'
console.log(missingLetters(a));

//16
//Even or Odd sum
function evenOddSum(arr){
  let oddTotal = 0;
  let evenTotal = 0;
  
  arr.forEach((val, i)=> (val % 2 === 0) ? evenTotal += val : oddTotal += val)
  return  [ evenTotal, oddTotal];   
}


const a = [50, 60, 60, 45,71]
console.log(evenOddSum(a));


