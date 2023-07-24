// let rectangle ={
//     length:1,
//     breadth:2,

//     draw: function (){
//         console.log('draw rectangle');
//     }
// };




// Object creation 

// 1. Factory Function

function createRectangle() {
    let rectangle = {
        length:1,
        breadth:2,
    
        draw: function (){
            console.log('draw rectangle');
        }
    };
    return rectangle;
}


let rectangleObj1 = createRectangle();
console.log(rectangleObj1);


