var arr1 = [1, 1, 1, 1, 4]
var arr2 = [1, 1, 1, 1, 1]
var diff;


var objArr = [
    {
        choices: [2, 1, 1, 1, 1]
    },
    {
        choices: [1, 1, 1, 1, 1]
    },
    {
        choices: [4, 1, 1, 1, 1]
    },
    {
        choices: [1, 1, 1, 1, 1]
    }
]
var objSum;
var difference;
var totalDifference;

function myFunc(total, num) {
    return total + num
}

for (var i = 0; i < objArr.length; i++) {
    //console.log("this is this " + this)
    objSum = objArr[i].choices.reduce(myFunc);

    difference = objSum - sum1
    totalDifference = Math.abs(difference);
    //console.log(Math.min(totalDifference))
}



objArr.forEach(function (element) {

    var choices = element.choices
    console.log(choices);
    var sum = choices.reduce(myFunc);
    console.log(sum)

})