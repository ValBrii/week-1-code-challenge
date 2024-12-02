function studentGrade(marks) {
    
    
    if(marks < 0 || marks > 100 ) { //If marks entered is less than 0 or greater than 100
        return 'Invalid marks entered. Please insert a number between 0 and 100'
    } 
    else if(marks > 79) {
        return 'Grade A'
    }
    else if(marks >= 60) {
        return 'Grade B'
    }
    else if(marks >= 50) {
        return 'Grade C'
    }
    else if(marks >= 40) {
        return 'Grade D'
    }
    else {
        return 'Grade E'
    }


}

 console.log(studentGrade()); //calling the function and displaying the results