function getNetSalary (basicSalary, benefits) {
    const grossSalary = basicSalary +benefits //gross salary
    

    //calculating PAYE per month
    let payePerMonth;
    if (grossSalary <= 24000) {
        payePerMonth = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        payePerMonth = grossSalary * 0.25;
    } else if (grossSalary <= 500000) {
        payePerMonth = grossSalary * 0.3;
    } else if (grossSalary <= 800000) {
        payePerMonth = grossSalary * 0.325;
    } else {
        payePerMonth = grossSalary * 0.35;
    }
    
    
    //Calculating NHIF
    let nhif;
    if(grossSalary <= 5999) {
        nhif = 150
    }
    else if(grossSalary <= 7999){
        nhif = 300
    }
    else if(grossSalary <=11999) {
        nhif = 400
    }
    else if (grossSalary <= 14999) {
        nhif = 500;
    } 
    else if (grossSalary <= 19999) {
        nhif = 600;
    } 
    else if (grossSalary <= 24999) {
        nhif = 750;
    } 
    else if (grossSalary <= 29999) {
        nhif = 850;
    } 
    else if (grossSalary <= 34999) {
        nhif = 900;
    } 
    else if (grossSalary <= 39999) {
        nhif = 950;
    }
    else if (grossSalary <= 44999) {
        nhif = 1000;
    } 
    else if (grossSalary <= 49999) {
        nhif = 1100;
    }
    else if (grossSalary <= 59999) {
        nhif = 1200;
    }
    else if (grossSalary <= 69999) {
        nhif = 1300;
    }
    else if (grossSalary <= 79999) {
        nhif = 1400;
    }
    else if (grossSalary <= 89999) {
        nhif = 1500;
    }
    else if (grossSalary <= 99999) {
        nhif = 1600;
    }
    else {
        nhif = 1700;
    }
    
    

// Calculating NSSF
    let nssf = grossSalary * 0.06;
    
    //Total deductions
    let totalDeductions = payePerMonth + nhif + nssf;
    const netSalary = grossSalary - totalDeductions; // net salary

    return{
        grossSalary,
        payePerMonth,
        nhif,
        nssf,
        netSalary

}
}

console.log(getNetSalary()); //calling the function and displaying the output

  
