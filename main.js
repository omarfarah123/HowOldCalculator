// Write your function here:
const howOld = (age, year) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const yearDifference = year - currentYear;
  const newAge = age + yearDifference;
  
  
if(newAge > age){    
    return `You will be ${newAge} in the year ${year}`;
}else if(newAge < 0){
  return `The year ${year} was ${-newAge} years before you were born`;
} else {
  return `You were ${newAge} in the year ${year}`;
  }
      
  

  }

console.log(howOld(20, 2000));




// Once your function is written, write function calls to test your code!
