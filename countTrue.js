function countTrue (arr){
    let count = 0
    for(i = 0; i < arr.length; i++){
        if(arr[i] === true){
            count++;
        }
    }
    return count
}

countTrue([true, true, false, true])