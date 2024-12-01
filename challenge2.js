function speedDetector(speed) {
const speedLimit = 70;
const maxPoints = 12;
const excessSpeed = speed - speedLimit;
const demeritPoints = excessSpeed / 5; //calculation of demerit points
if (speed <= speedLimit) {
    console.log('Ok');
} 
else if (demeritPoints > maxPoints) {
    console.log('License suspended'); 
}
else {
    console.log(`Points: ${demeritPoints}`);
    }

}    
    
 speedDetector(); //calling the function       

