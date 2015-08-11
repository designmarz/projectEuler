// Simple ruduce loop for adding up array's //
var reduce = function(arg) {
	var total = 0;
	for ( var i = 0; i < arg.length; i++ ){
    	total += arg[i];
	} return total;	
};



// 1
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


// 2
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




// 3
// Largest prime factor // What is the largest prime factor of the number 600851475143?
// https://www.khanacademy.org/math/pre-algebra/factors-multiples/prime_factorization/v/prime-factorization-exercise //

var targetPrime = 600851475143;

var primeFactor = function(n) {

// Build function of prime factor tree
	// 100 / {2} = 50 (not prime),
	//  50 / {2} = 25 (not prime),
	//  25 / {5} = {5} (prime)
	// 		  ^ as 2 and 3 don't divide evenly) etc etc.
}



// This based on this https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
// Sieve of Eratosthenes

// Builds an array of prime numbers up to n //
var primeGen = function(n) {
	var starterArray = []
	var notPrime = [];
	var isPrime = [];

// Build an array of all the numbers upto n //
	for (var i = 2; i <= n; i++) {
		starterArray.push(i);
	};

	for (var i = 0; i < starterArray.length; i++) {
		// move first index to controlNum to use for compairison
		var controlNum = starterArray.splice(0, 1)
			// inner loop that check to see if an of the numbers
			// are divisible by the control. //
			for (var j = 0; j < starterArray.length; j++) {
				// if j is divisible by the control remove from starter array
				// and push into notPrime array //
				if ( starterArray[j] % controlNum == 0) {
					console.log('If check passed!')
					console.log(starterArray[j])
					var pos = starterArray.indexOf(starterArray[j])
					notPrime.push(starterArray.splice(pos, 1))
				};
				// resets loop if starter array is not empty //
				if (starterArray.length !== 0){
					i = -1;
				}
			};
			// moves controlNum into isPrime, as this starts on a prime number 
			// this should always end up being a prime number
		isPrime.push(parseInt(controlNum));	
	};

	console.log( "StarterArray " + starterArray);
	console.log( "notPrime " + notPrime);
	console.log( "isPrime " + isPrime);
	return isPrime;
}

