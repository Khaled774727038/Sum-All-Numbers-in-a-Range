function sumAll(arr) {
    // Determine the minimum and maximum values 
    var min = (arr[0] < arr[1]) ? arr[0] : arr[1];
    var max = (arr[0] > arr[1]) ? arr[0] : arr[1];
  
    // Initialize the sum variable
    var sum = 0;
  
    // Iterate through the range and add each number to the sum
    for (var i = min; i <= max; i++) {
      sum += i;
    }
  
    return sum;
  }
  
  console.log(sumAll([1, 4]));   // that will print: 10
  console.log(sumAll([4, 1]));   // that will print: 10
  console.log(sumAll([5, 10]));  // that will print: 45
  