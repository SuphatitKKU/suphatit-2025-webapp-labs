function validateInput(input) {
            const num = parseInt(input);
            return !isNaN(num) && num > 0 && num.toString() === input.trim();
        }

        function findPrimes(limit) {
            const primes = [];
        
            for (let i = 2; i <= limit; i++) {
                let isPrime = true;
                
                for (let j = 2; j < i; j++) {
                    if (i % j === 0) {
                        isPrime = false;
                        break;
                    }
                }
                
                if (isPrime) {
                    primes.push(i);
                }
            }
            
            return primes;
        }

        function displayPrimes(primes, limit) {
            alert(`For n = ${limit} prime numbers are ${primes.join(',')}`);

            const contentDiv = document.getElementById('content');
            contentDiv.style.display = "block";

    
        }

        window.onload = function() {
            let userInput;

            inputLoop: while (true) {
                userInput = prompt("Enter a positive integer:");

                if (userInput === null) {
                    break inputLoop;
                }

                if (validateInput(userInput)) {
                    break inputLoop;
                }
            }

            if (userInput !== null && validateInput(userInput)) {
                const limit = parseInt(userInput);
                const primes = findPrimes(limit);
                displayPrimes(primes, limit);
            }
        };