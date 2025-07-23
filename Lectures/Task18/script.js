
// Question - 1
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.map((num) => {
//   console.log(num * num);
// })

//------------------------------------------------------------

// Question - 2
// const score = 90;
// const grade = (score) => {
//   score > 90 ? console.log("A") :
//     score > 80 ? console.log("B") :
//       score > 60 ? console.log("C") :
//         score > 33 ? console.log("D") :
//           console.log("F");
// };
// grade(score);

//------------------------------------------------------------


// Question - 3

// const car = {
//   companyName: 'BMW',
//   model: 'XR6',
//   year: '2025'
// }
// carModifier(car)
// function carModifier(car) {
//   car.year = '2023'
// }
// const {companyName: name, model, year} = car;
// console.log(`Model : ${model}\nYear : ${year}`);

//------------------------------------------------------------


// Question - 4

// const nums = [10, 12, 13, 2, 5, 7, 9, 18, 17, 19, 37, 31, 41, 67];
// const primeArray = nums.filter((num) => {
//   if (num > 1) {
//     let count = 0;
//     for (let i = 1; i <= num; i++) {
//       if (num % i == 0) count++;
//     }
//     if(count == 2){
//       return num;
//     }
//   }
// })
// console.log(...primeArray);

//------------------------------------------------------------


// Question - 5

// map - we use map() to modify the elements of our array like squaring all the elements of our array.
// filter - we use filter() to filter out the required elements based on our provided condition from an array and then put it into a new array. Like getting only prime numbers from an array.
// reduce - we use reduce() to combine all the elements of an array into a single value by using a function. Like summing all the elements of an array.


const nums = [10, 12, 13, 2, 5, 7, 9, 18, 17, 19, 37, 31, 41, 67];

//map() :-
// nums.map((num) => {
//   console.log(num * num);
// })

// filter() :-
// const primeArray = nums.filter((num) => {
//   if (num > 1) {
//     let count = 0;
//     for (let i = 1; i <= num; i++) {
//       if (num % i == 0) count++;
//     }
//     if(count == 2){
//       return num;
//     }
//   }
// })
// console.log(...primeArray);

//reduce() :-

// const sum = nums.reduce((a, b) => a + b, 0)
// console.log(sum);

//------------------------------------------------------------

// Question - 6

// const fetchData = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const data = await response.json();
//     console.log(data);
//     console.log(`UserId : ${data.userId}\nId : ${data.id}\nTitle : ${data.title} \nCompleted : ${data.completed}`);
//   } catch (error) {
//     console.error('Error fetching Data : ', error);
//   }
// }

// fetchData();
//------------------------------------------------------------



// Question - 7

const person = {
  name: 'Amaresh[Phoenix]',
  address: {
    city:'Bhubaneswar',
    State: 'ODISHA',
    Country:'INDIA'
  },
  contact: {
    mobile:'123-456-7890',
    email :'amareshsahoo950@gmail.com'
  }
}

console.log(person.contact?.phone);

