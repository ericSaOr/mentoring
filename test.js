// function makeNumArray(num){
// 	//take the num from the above function and add every index to an array.
// 	// if num is 5 the array should be [1, 2, 3, 4, 5]
// 	// if num = 3 the array should be [1, 2 ,3]
// 	// convert the number into it's parts index 0 === 1 index 1 === 2
// 	let array = []

// 	for(i=0; i < num; i++){
// 		 array[i] = i + 1
// 	}
//     console.log(array)
// 	return array
// }

// Scott's hint
// function addUp(num) { 
//     let array = []
// 	let sum = 0
//   for(i=0; i < num; i++){
//         console.log(array)
//         array[i] = i + 1
// 	let addNext = array[i]
//         sum = addNext + sum
// 	}
// 	return sum
// }



function addUp(num) { 
    let array = []
	let sum = 0
    let addNext = array[i]
  for(i=0; i < num; i++){
        addNext = i + 1
        sum = addNext + sum
	}
	return sum
}

console.log(addUp(10))

// function addUp(num) { 
//   let array = []
// let sum = 0
// for(i=0; i < num; i++){
//       console.log(array)
//       array[i] = i + 1
// let addNext = array[i]
//       sum = addNext + sum
// }
// return sum
// }