function numberRange(beginning, end) {
    var numbers = [];
    for (; beginning <= end; beginning++) {
        numbers[numbers.length] = beginning; 
    }
    return numbers;
};

console.log(numberRange(4, 10));