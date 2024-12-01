function studentGrade(marks) {
    
    if(marks < 0 || marks > 100 ) { //If marks entered is less than 0 or greater than 100
        console.log('Invalid marks entered. Please insert a number between 0 and 100')
    } 
    else if(marks > 79) {
        console.log('Grade A')
    }
    else if(marks >= 60) {
        console.log('Grade B')
    }
    else if(marks >= 50) {
        console.log('Grade C')
    }
    else if(marks >= 40) {
        console.log('Grade D')
    }
    else {
        console.log('Grade E')
    }


}

studentGrade() // calling the function, insert the marks inside the brackets to  get the grade