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