//Create a function that takes an array of non-negative 
//integers and strings and return a new array without the strings.
function filterStrings(arr){
    //loop through array and find the string
    //Once you have the index where the string is remove it
    //Return the array minus the string
    for(i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'string'){
            arr.splice(i, 1)

        
        }
    }
  console.log(arr)
}
filterStrings([1, 2, 3, 'hi', 4, 5])

