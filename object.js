// let- allow reassaign
// const- do not allow reassaign 

// let name = 'Asha';
// name = 'Tani';
// console.log(name);

// const name = 'Asha';
// name = 'Tripty'
// console.log(name);

// array
const present_stu = ['Asha', 'Mendi', 'Rohul', 'Dipu']
present_stu.push('All are present')
present_stu.pop()
present_stu.unshift('Welcome Today')
// console.log(present_stu);


// for of
for(const  name of present_stu){
    // console.log(name + ' ' + 'Mondol');
}

const student = { name : "Asha", age : 21, class: "Diploma"}
// const storer = student.name
const storer = student['name']

const storer1 = student.age
const storer2 = student.class
// console.log(storer);
// console.log(storer1);
// console.log(storer2);

student['ID'] = 184083;
// console.log(student);

// // keys or property
// const Developer = { name : 'ASha', Designation : 'Developer', Salary : '30000'}
// const keyorpropertyname = Object.keys(Developer)
// const valuename = Object.values(Developer)
// console.log('Property Name', keyorpropertyname);
// console.log('Property Name', valuename);



// loop > conditions fullfilled  > repeating

// // let const
// // function
// function displayname(){
//     console.log('Lets view my own name');
// }

// displayname();




function dhoDaloSaleko(){
    console.log('battamissjj');
}

dhoDaloSaleko();





function add() {
    console.log(2 + 3);
}
add();


function jogKorbo(value1, value2) {
    console.log(value1 + value2);
}

jogKorbo(15, 50);


function multiply(value3, value4) {
    console.log(value3 * value4);
}
multiply(12, 10);