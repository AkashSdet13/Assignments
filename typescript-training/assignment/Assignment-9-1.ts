function pow(x: number, n: number): number {
    let result: number = 1;

    if (n >= 0) {
        for (let i = 1; i <= n; i++) {
            result = result * x;
        }
    } else {
        for (let i = 1; i <= -n; i++) {
            result = result * x;
        }

        result = 1 / result;
    }

    return result;
}

// Examples
console.log(pow(2, 10));   // 1024
console.log(pow(2.1, 3));  // 9.261
console.log(pow(2, -2));   // 0.25