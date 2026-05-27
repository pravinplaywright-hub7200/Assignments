function bankLoan(customerName: string, creditScore: number, income: number, isEmployed: boolean, debtToIncomeRatio: number)
 {
    if (creditScore >= 750) {
        return `${customerName} bankLoan approved`;
    } else if (creditScore > 650) {
        console.log("additional checks are performed");

        if (income >= 50000) {
            console.log("bankLoan considered");

            if (isEmployed) {
                console.log(`customer is employed and the customer name is ${customerName}`);

                if (debtToIncomeRatio < 40) {
                    return `${customerName} bankLoan approved`;
                } else {
                    return `${customerName} bankLoan denied because high DTI`;
                }
            } else {
                return `${customerName} bankLoan denied as customer is unemployed`;
            }
        } else {
            return `${customerName} bankLoan denied because income is less`;
        }
    } else {
        return `${customerName} bankLoan denied`;
    }
}

console.log(bankLoan("Pravin Yadav", 680, 56000.0, true, 70.0));