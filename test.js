var arr1 = [1, 1, 1, 1, 1]
var arr2 = [1, 1, 1, 1, 1]
var diff;


var objArr = [
    {
        name: "one",
        choices: [2, 12, 2, 1, 1]
    },
    {
        name: "two",
        choices: [1, 1, 1, 1, 1]
    },
    {
        name: "three",
        choices: [4, 1, 1, 1, 1]
    },
    {
        name: "four",
        choices: [1, 1, 1, 1, 1]
    }
]

var difference;
var totalDifference;

function myFunc(total, num) {
    return total + num
}

var lowestNum = 50;
var matchIndex = -1;
objArr.forEach(function (element, index) {
    var allChoices = element.choices

    var diffArray = [];
    for (var i = 0; i < arr1.length; i++) {
        difference = Math.abs(arr1[i] - allChoices[i])
        diffArray.push(difference)

    }

    totalDifference = (diffArray.reduce(myFunc))

    if (totalDifference < lowestNum) {
        lowestNum = totalDifference;
        matchIndex = index;
    }

})
console.log(matchIndex)
console.log(objArr[matchIndex])



