
export function getTextArray() {
    var text1 = "How much do I need to put aside to reach my goal?";
    var text2 = "How soon will I reach my goal?";
    var text3 = "How much do I need to put aside to reach my financial freedom?";
    return [text1, text2, text3];
}

export function getPoints() {
    var result = {
        labels: [0,1,2,3,4,5,6,7,8,9,10],
        datasets: [{
            data:
        }]
    }
}

//How soon I would reach my goal
//D(n) = (starting D)*(1.0025)^n (D = the number after I plan to save and invest)
//B(n) = B(n-1) + D(n-1) (B = the number after I have ____ amount of savings and investments, graph this)
//
//How Much I need to save for financial freedom
//D(n) =
