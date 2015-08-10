
// Find the sums from 0 upto a num(agument) of all the numbers divisible by 3 or 5 //
function numCheck(num) {
	var results = []
	var total = 0
	for (var i = 0; i < num; i++) {
		if (i % 3 == 0) {
			console.log(i + " is divisible by 3!");
			results.push(i);
		} else if (i % 5 == 0) {
			console.log(i + " is divisible by 5!");
			results.push(i);
		}	
	}
	for ( var i = 0; i < results.length; i++ ){
    	total += results[i];
	}
	return total;	
}


// Even Fibonacci Numbers - Adds up all even Fib numbers up to a total value cap //

var evenFibsSum = function(num, cap) {
	var fibArray = []
	var evenArray = []
	var a = 0, b = 1, f = 1;
	for (var i = 2; i <= num; i++) {
		f = a + b;
		a = b;
		b = f;
		fibArray.push(a);
		if (f % 2 == 0) {
			evenArray.push(f);
		};

		if (f > cap) {
			return reduce(evenArray);
		};

	};
	console.log(fibArray);
	return f;
}

var reduce = function(arg) {
	var total = 0;
	for ( var i = 0; i < arg.length; i++ ){
    	total += arg[i];
	} return total;	
};
