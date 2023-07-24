console.log("hello world");

let a = 5;

console.log(a);


let marks = 65;

if (marks>=90){
    console.log('A');
}
else if (marks>=80){
    console.log('B');
}
else if (marks>=70){
    console.log('C');
}
else if(marks>=60){
    console.log('D');
}
else {
    console.log('E');
}

let num = 4;

switch(num){
    case 1: console.log('A');
    break;
    
    case 2: console.log('B');
    break;
    
    case 3: console.log('C');
    break;

    default: console.log('D');
    
}

// For Loop

for(let i =0;i<10;i++){
    console.log(i);
}

// While Loop

let j =0;
while (j<10){
    console.log(j);
    j++;
}

// Do-While Loop

let k = 0;
do{
    console.log(k);
    k++;
}while(k<10);