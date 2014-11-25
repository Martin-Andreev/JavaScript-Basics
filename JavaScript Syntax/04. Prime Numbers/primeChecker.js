function isPrime(num) {
    var isPrime = false;

    if (num == 1) {
        isPrime = false;
    } else if (num == 2 || num == 3) {
        isPrime = true;
    } else {
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            } else {
                isPrime = true;
            }
        }
    }

    return isPrime;
}

console.log(isPrime(7));
console.log(isPrime(254));
console.log(isPrime(587));