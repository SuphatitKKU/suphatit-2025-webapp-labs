function isPositiveInteger(input) {
    const num = Number(input);
    return Number.isInteger(num) && num > 0;
}

function isNegativeInteger(input) {
    const num = Number(input);
    return Number.isInteger(num) && num < 0;
}

function readInput() {
    const list = [];
    while (true) {
        let input = prompt("Enter a positive integer (or negative integer to finish):");

        if (input === null) {
            break;
        }

        if (isPositiveInteger(input)) {
            list.push(Number(input));
        } else if (isNegativeInteger(input)) {
            break;
        } else {
            continue;
        }
    }
    return list;
}
function displayStats(list) {

    const average = list.length === 0 ? 0 : list.reduce((a, b) => a + b, 0) / list.length;
    const min = list.length === 0 ? 0 : Math.min(...list);
    const max = list.length === 0 ? 0 : Math.max(...list);


    const listString = list.length === 0 ? "empty list" : list.join(',');

    alert(`For the list ${listString} the average is ${average.toFixed(2)}, the minimum is ${min}, and the maximum is ${max}`);

    const contentDiv = document.getElementById('content');
    contentDiv.style.display = "block";
}



window.onload = function() {
    const numbers = readInput();
    displayStats(numbers);
};
