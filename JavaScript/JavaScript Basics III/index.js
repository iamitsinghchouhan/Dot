//  Built-in Objects 

// Math Function

let a = Math.random(); //it will genrate a random number between 0 to 1.
console.log(a);


let b =Math.PI
console.log(b);


let c =Math.round(1.18545);
console.log(c);


let d =Math.max(23,14,554,578,6,484,5584,16516,31151,31,44);
console.log(d);

let e =Math.min(21,545,4851,2212,654,23,5,2,245,4212,2565,21,212,121,1212,11,2);
console.log(e);


// Creating a Object String

let lastName = new String('Amit')

let f = typeof(lastName);

console.log(f);

let message = 'this is my first message';

let words = message.split(' ');

console.log(words);

// Template Literals

let message2 = `this
 is
  my
   first
    message`;

console.log(message2);

// Placeholder

let name1 = `Amit Singh ${message}`; // with the help ${} we place any variable or something

console.log(name1);


// Arrays

let numbers = [1,2,3,4,5,6];
console.log(numbers);

numbers.push(9);
console.log(numbers);

numbers.unshift(8);
console.log(numbers);

numbers.splice(2,0,'a','b','c','d');
console.log(numbers);

// Searching in Arrays

if(numbers.indexOf(4) != -1){
    console.log("present")
}
else{
    console.log("Absent")
}                        //searching with if-else



console.log(numbers.includes(8)); // 1. method

console.log(numbers.indexOf(4,2)); // 2. method

// Callback function for searching in object/refrence



let courses= [      //object array for perform searching
    {no:1,name:'computer science'},
    {no:2,name:'mechanical '}
];

console.log(courses);

let course = courses.find(function(course){
            return course.name ==='computer science';   // Callback Function
});

console.log(course);


// Removing Element in Array 

let arr = [1,2,3,4,5,6]
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.splice(2,1);
console.log(arr);


// Enpyting an Array

let arr1 = [0,12,3,4,545,87,515];
let arr2 = arr1;

arr1.length =0;     // Method ---> 1

console.log(arr1);
console.log(arr2);

arr1.splice(0,arr1.length);  // Method ---> 2 
console.log(arr1);


// Combining and slicing in Arrays
let first = [1,2,3];
let second = [4,5,6];

let combined = first.concat(second);    //Concat Method 
console .log(combined);

let combined2 = [...first,...second]; // spread method


// Slice an Array

let sliced = combined.slice(2,4);
console.log(sliced);

// Iterating an Array

let arr3 =[22,3,54,65,8,454,84];

// For-of Loop
for(let value of arr3){
    console.log(value);
}


// For-each loop

arr3.forEach(function(number){      //But for-each loop we need to use the callback function
    console.log(number);
})


// Sorting Array

 let num = [245,54,8,5564,62,54,25,2];
 num.sort();

 console.log(num);

 num.reverse();
 console.log(num);

//  Filtering Array

let filter1 =[1,5,4,-5,-48,-54,4,5,2,-1,-9,10];

let filtered = filter1.filter(function(value){
    return value >= 0;
});

console.log(filtered);


// Maping Array

let map1 = [7,8,9,10];
console.log(map1);

let items = map1.map(function(value){
    return 'student_no'+ value;
});

console.log(items)
 
// Mapping with Object

let fil2 = [1,2,-1,-6];

let filtered1 = fil2.filter(value => value >= 0);

let item = filtered1.map(function(num){
    return {value : num};
});

console.log(item);

