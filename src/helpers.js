export function getTextArray() {
    var text1 = "How much do I need to put aside to reach my goal?";
    var text2 = "How soon will I reach my goal?";
    var text3 = "How much do I need to put aside to reach my financial freedom?";
    return [text1, text2, text3];
}

export function getPoints() {
    var result = [];
    result.push({x: 1, y: 1});
    result.push({x: 2, y: 15});
    result.push({x: 3, y: 1});
    result.push({x: 4, y: 0});
    return result;
}

export function option1Formula(initInvestments, goal, monthInvestment, years, option) {
    var balance = [];
    balance.push(initInvestments);

    var multiplier = 0;
    if (option === "aggressive")
        multiplier = .09 / 12;
    else if (option === "moderate")
        multiplier = .07 / 12;
    else
        multiplier = .04 / 12;

    var growth = [];
    growth.push(initInvestments * multiplier);
    var addition = [];
    addition.push(monthInvestment);

    for (let i = 1; i <= (years * 12); i++) {
        balance.push(balance[i - 1] + growth[i - 1] + addition[i - 1]);
        growth.push(balance[i - 1] * multiplier);
        addition.push(addition[i - 1] * 1.0025);
    }

    return balance;
}

export function option1FinalFormula(initInvestments, option, goal, years) {
    var result = [];
    var monthInvestment = 0;
    do {
        result = option1Formula(initInvestments, goal, monthInvestment, years, option);
        monthInvestment = monthInvestment + 0.1;
    }
    while (result[result.length - 1] < goal);

    return result;
}

export function option2Formula(initInvestments, option, goal, monthInvestment) {
    var balance = [];
    balance.push(initInvestments);

    var multiplier = 0;
    if (option === "aggressive")
        multiplier = .09 / 12;
    else if (option === "moderate")
        multiplier = .07 / 12;
    else
        multiplier = .04 / 12;

    var growth = [];
    growth.push(initInvestments * multiplier);
    var addition = [];
    addition.push(monthInvestment);

    var counter = 1;
    while (balance[balance.length - 1] < goal) {
        console.log("ITEM COUNTER: " + counter);
        balance.push(balance[counter - 1] + growth[counter - 1] + addition[counter - 1]);
        growth.push(balance[counter - 1] * multiplier);
        addition.push(addition[counter - 1] * 1.0025);
        counter++;
    }

    return balance;
}

export function option3Final(initInv, option,  yrs,  expense) {
    let monthInv = 0.0;
    let result;
    do {
        result = option3Formula(initInv, yrs, monthInv, option, expense);
        monthInv += 1;
    }
    while (result.length <= 600);

    console.log(monthInv);
    return result;
}

function option3Formula(initInv,yrs, monthInv, option, expense) {
    let balance = [];
    balance.push(initInv);

    let multiplier = 0;
    if (option === "aggressive")
        multiplier = .09 / 12;
    else if (option === "moderate")
        multiplier = .07 / 12;
    else
        multiplier = .04 / 12;

    let growth = [];
    growth.push(initInv * multiplier);
    let addition = [];
    addition.push(monthInv);
    let expenses = [];
    expenses.push(expense);

    let counter = 1;
    while (balance[(balance.length - 1)] > 0) {
        if (counter <= yrs * 12)
            balance.push(balance[(counter - 1)] + growth[(counter - 1)] + addition[(counter - 1)]);
        else
            balance.push(balance[(counter - 1)] + growth[(counter - 1)] - expenses[(counter - 1)]);

        growth.push(balance[counter] * multiplier);
        addition.push(addition[counter - 1] * 1.0025);
        expenses.push(expenses[(counter - 1)] * 1.0025);
        counter++;
    }
    balance[balance.length - 1] =  0.0;
    return balance;
}


export function checkOrientation() {
    if (window.innerHeight > window.innerWidth) {
        console.log("This website is optimized for landscape view. Please rotate your device and try again.");
        document.body.style.setProperty("-webkit-transform", "rotate(90deg)", null);
        document.body.style.width = "100vh";
        document.body.style.height = "100vw";
        document.getElementById("main").style.width = "100vh";
        document.getElementById("main").style.height = "100vw";
        document.getElementById("wrapChart").style.width = "100vh";
        document.getElementById("wrapChart").style.height = "100vw";
    }
}

//How soon I would reach my goal
//D(n) = (starting D)*(1.0025)^n (D = the number after I plan to save and invest)
//B(n) = B(n-1) + D(n-1) (B = the number after I have ____ amount of savings and investments, graph this)
//
//How Much I need to save for financial freedom
//D(n) =
