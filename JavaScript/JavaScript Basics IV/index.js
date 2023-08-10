run();

// Function Declaration

function run(){
    console.log('Running'); //we don't need to write call function the declaration because of Hoisting( Hoisting is the process of moving function declarations to the top of the file.)
}

// Named Function Assignment
let stand = function walk(){
   console.log('walking');
}

stand();

// Anonymous Function Assignment
let stand2 = function(){
    console.log('walking');
 }

stand2();

function sum(a,b) {
    let total = 0;
    for(let value of arguments)
        total = total + value;
    return total;
}


let ans = sum(1,2,2,3,4,5,7,5,8,5);
console.log(ans); 


function intrest(p,r=5,y=9){
    return p*r*y/100;
}

console.log(intrest(1000));


// Getter / Setter


let person ={
    fName:'Amit',
    lName:'Singh',
    get fullName(){
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value){
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};


// Error Handling ---> Try & Catch

try{
    person.fullName = 1;

}

catch (e){
    alert('you must have provided a number in fullname field');
}

console.log(person.fullName);


