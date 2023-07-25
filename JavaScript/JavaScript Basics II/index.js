// let rectangle ={
//     length:1,
//     breadth:2,

//     draw: function (){
//         console.log('draw rectangle');
//     }
// };




// Object creation 

// 1. Factory Function

function createRectangle(length,breadth) {
    let rectangle = {
        length:length,
        breadth:breadth,
    
        draw: function (){
            console.log('draw rectangle');
        }
    };
    return rectangle;
}


let rectangleObj1 = createRectangle(5,6);
console.log(rectangleObj1.length);


function Rectangle(){
    this.length = 2;
    this.breadth =3;
    this.draw=function(){
        console.log('draw');
    }
}


let createRect = new Rectangle();
console.log(createRect);


createRect.color ='yellow';
console.log(createRect);

delete createRect.color;
console.log(createRect);


let Rectangle1 = new Function(
    'length','breadth',
    `this.length = length;
     this.breadth =breadth;
     this.draw=function(){
        console.log('draw');
    }`
);

// Object Creation using rectangle 1

let rect = new Rectangle1(2 , 6);
console.log(rect);


// Primitive vs Refrence type




let a = 10;
let b =a;

a++;
console.log(a);
console.log(b);

// Because Primitive are copied by their values 

let c = {value:10};
let d =c;

c.value++;

console.log(c.value);
console.log(d.value);


// And Refrence are copied by their addresses


let e =10;

function inc(e){
    e++;
    console.log(e);
}

inc(e);

console.log(e);  // Output ---> 10 because of pass by value concept 


let square = {
    length:256,
    breadth:145,
    draw: function (){
        console.log('draw Square');
    }
};

// For-In Loop

for(let key in square){
    console.log(key);
}

// For-of Loop

for(let key of Object.entries(square)){
    console.log(key);
}


if('color' in square){
    console.log('present');

}
else{
    console.log('absent');
}


// Object Cloning 
// 1.Iteration

let src ={
    a:10,
    b:12,
    c:45

};

let dest ={};

for (let key in src){
    dest[key] = src[key];
}

console.log(dest);



//2.Assign

let src1 ={
    a:10,
    b:20,
    c:30

};

let dest1 = Object.assign({},src1);

console.log(dest1);


// 3.Spread

let src2 ={
    a:102,
    b:212,
    c:215
};

let dest2 ={...src2};

console.log(dest2);
