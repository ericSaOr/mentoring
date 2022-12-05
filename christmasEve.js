// Christmas Eve is almost upon us, 
// so naturally we need to prepare some milk and cookies for Santa! 
// Create a function that accepts a Date object and returns true 
// if it's Christmas Eve (December 24th) and false otherwise. 
// Keep in mind JavaScript's Date month is 0 based, 
// meaning December is the 11th month while January is 0.

//

// function timeForMilkAndCookies(date){
//    let currentDay = date.getDate()
//    let currentMonth = date.getMonth()
//    let isItTime = '';
//    if(currentMonth === 11 && currentDay === 24){
//      isItTime = true
//      console.log(isItTime)
//    }else{
//     // console.log(false)
//     isItTime = false

//    }
//    return isItTime
// }
function timeForMilkAndCookies(date){
    let currentDay = date.getDate()
    let currentMonth = date.getMonth()
    let isItTime = '';
    if(currentMonth === 11 && currentDay === 24){
      isItTime = true
    }else{
     isItTime = false
 
    }
    return isItTime
 }

timeForMilkAndCookies(new Date(3000, 11, 24))


