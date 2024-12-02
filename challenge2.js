function speedDetector(speed) {
const speedLimit = 70;
const maxPoints = 12;
const excessSpeed = speed - speedLimit;
const demeritPoints = excessSpeed / 5; //calculation of demerit points
if (speed <= speedLimit) {
    return 'Ok';
} 
else if (demeritPoints > maxPoints) {
    return 'License suspended'; 
}
else {
    return `Points: ${demeritPoints}`;
    }

}    
    
 console.log(speedDetector()); //calling the function annd displaying the output       

