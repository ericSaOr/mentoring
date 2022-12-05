function minMax(arr) {
	let largestNumber = arr[0]
	let smallestNumber = arr[0]
	for(i = 1; i < arr.length; i++){
		//iterate through array
		//check if the int is greater than the next one.
		//if int in array is greater than largest number put in largest container
		//if int in array is smaller than lowest number put in lowest container
		if(arr[i] > largestNumber){
			largestNumber = arr[i]
		}else if(arr[i] < smallestNumber){
			smallestNumber = arr[i]
		}
			
		}
        console.log(largestNumber, smallestNumber)
	}
    minMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
