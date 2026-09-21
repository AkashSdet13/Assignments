let n: number = 5;

// Upper half
for (let i = 1; i <= n; i++) {
    let row: string = "";

    // Spaces
    for (let j = i; j < n; j++) {
        row += "  ";
    }

    // Stars
    for (let j = 1; j <= i; j++) {
        row += " * ";
    }

    console.log(row);
}

// Lower half
for (let i = n - 1; i >= 1; i--) {
    let row: string = "";

    // Spaces
    for (let j = i; j < n; j++) {
        row += "  ";
    }

    // Stars
    for (let j = 1; j <= i; j++) {
        row += " * ";
    }

    console.log(row);
}