// const Q1 = prompt ('Q1? Choose number your answer 1....; 2....; 3....');
// const Q2 = prompt ('Q2? Choose number your answer your answer 1....; 2....; 3....');
// const Q3 = prompt ('Q3? Choose number your answer your answer 1....; 2....; 3....');
// if (Q1 == 3 && Q2 == 2 && Q3 == 1) {
//   alert ('Yuor result:' + ' ' + 2*3)
// } else if (Q1 == 3 && Q2 == 2 && Q3 != 1) {
//   alert ('Yuor result:' + ' ' + 2*2)
// } else if (Q1 == 3 && Q2 != 2 && Q3 == 1) {
//   alert ('Yuor result:' + ' ' + 2*2)
// } else if (Q1 != 3 && Q2 == 2 && Q3 == 1) {
//   alert ('Yuor result:' + ' ' + 2*2)
// } else if (Q1 == 3 && Q2 != 2 && Q3 != 1) {
//   alert ('Yuor result:' + ' ' + 2)
// } else if (Q1 != 3 && Q2 == 2 && Q3 != 1) {
//   alert ('Yuor result:' + ' ' + 2)
// } else if (Q1 != 3 && Q2 != 2 && Q3 == 1) {
//   alert ('Yuor result:' + ' ' + 2)
// } else { alert ('Yuor result:' + ' ' + 0)}
// const N = prompt ('Enter number');
// alert(N.length);
// //  let q = 1;
//  let result;
// do {
//   let n1 = +prompt ('enter number');
//   let n2 = +prompt ('enter number');
//   result = n1 + n2;
//   alert (+result);
//   let q = prompt ('repeat 1-yes; 2-no');
// } while (+q == 1);
// function insertionSort(arr) {
//   let count = 0;
 
//   for (let i = 1; i < arr.length; i++) {
//     const keyItem = arr[i];
//     let j = i - 1;
 
//     while (j >= 0 && keyItem < arr[j]) {
//       const temp = arr[j + 1];
//       arr[j + 1] = arr[j];
//       arr[j] = temp;
//       count += 1;
//       j--;
//     }
//   }
//  return count;
// }
 
// const initData = [124, 235, 456, 123, 756, 476, 285, 998, 379, 108];
// console.log(`Initial array:`, initData);
// const iterationsTestData = insertionSort(initData);
// console.log(`The number of permutations is: ${iterationsTestData}`, `\nSorted array:`, initData);

// function simpelN(num){
//   if (num === 1) {
//   return 'Not simpel number';
// }
// if (num === 2) {
//   return 'Simpl number';
//   }
//   i=2
//   while (i<num) {
//     if (num % i === 0) {
//       return 'Not simpel number';
//     }
//     i++
//   }
//   return 'Simpel number';
// }
// console.log (simpelN (1000000));
// class Building {
//     constructor(purpose, address, floorsNumber, wallMaterial) {
//       this.purpose = purpose;
//       this.address = address;
//       this.floorsNumber = floorsNumber;
//       this.__wallMaterial = wallMaterial;
//     }
   
//     toString() {
//       return `The purpose is ${this.purpose}. Address: ${this.address}. Number of floors: ${this.floorsNumber} and wall material is ${this.__wallMaterial}`;
//     }
//   }
   
//   const cafe = new Building(
//     "organization of recreation",
//     "London, Baker Street",
//     2,
//     "brick"
//   );
   
//   console.log("Information about the cafe:");
//   console.log(cafe.toString());
   
//   const shop = new Building(
//     "organization of shopping",
//     "London, Crawford street",
//     1,
//     "wood"
//   );
   
//   console.log("Information about the shop:");
//   console.log(shop.toString());

//   const school = new Building(
//      "educational institution",
//     "London, Queen Victoria Street",
//     4,
//     "brick"
//   )
//   console.log("Information about the school:")
//   console.log(school.toString());
// const car1 = {
//     brand: 'BMW',
//     model: 'X5',
//     year: '2021',
//     midellSped: '120',
// }
// car2 = {
//     brand: 'Mercedes',
//     model: 'E320',
//     year: '2019',
//     midellSped: '150',
// }
// function timeInRoad (object, s) {
// let t = s/+object.midellSped;
// let numberofstop = 0;
// for (i=4; i<t; i+=4) {
//     numberofstop ++;    
// }
// finalTime = (t+numberofstop);
// return console.log(`${object.brand}, ${object.model}, ${object.year}, If distance ${s} time in the road: ${finalTime}`);
// }
// timeInRoad(car1,1000);
// timeInRoad(car2,1000);

// const displayTime = {
//     hours:10,
//     minutes:45,
//     seconds:10,
// }

// function changeSec(object,num) {
//     let secp = object.seconds+num;
    
//     if (secp < 60) {
//         return console.log(`${object.hours}:${object.minutes}:${secp}`);
//     }let secF=secp%60;
//     let minp = object.minutes+(secp-secF)/60;
//     if (minp < 60 && secF==0) {
//         return console.log(`${object.hours}:${minp}:00`);
//     }
//     if (minp<60 && secF!=0){
//         return console.log(`${object.hours}:${minp}:${secF}`);
//     }
//     let minF = minp%60;
//     hourF = object.hours+(minp-minF)/60;
//     if (minF==0 && secF==0) {
//         return console.log(`${hourF}:00:00`);
//     }
//     if (minF==0 && secF!=0) {
//     return console.log(`${hourF}:00:${secF}`);
//     } return console.log(`${hourF}:${minF}:${secF}`);
// }
// function changeMin(object,num2) {
//     let minP = object.minutes+num2;
    
//     if (minP < 60) {
//         return console.log(`${object.hours}:${minP}:${object.seconds}`);
//     }
//     let minF=minP%60;
//     let hourF=object.hours+(minP-minF)/60;
//     if (minF==0) {
//         return console.log(`${hourF}:00:${object.seconds}`);
//     }
//     return console.log(`${hourF}:${minF}:${object.seconds}`);

// }
// function changeHour (object,num3) {
//     const hourF=object.hours+num3;
//     return console.log(`${hourF}:${object.minutes}:${object.seconds}`);
// }

// changeSec (displayTime,890);
// changeMin (displayTime,450);
// changeHour (displayTime,6);

// let chars = ['A', 'B', 'A', 'C', 'B'];
// let uniqueChars = [...new Set(chars)];

// console.log(uniqueChars);
let chars = ['A', 'B', 'A', 'C', 'B','D',1,3,5,1,5,3];

let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});
console.log(uniqueChars);
