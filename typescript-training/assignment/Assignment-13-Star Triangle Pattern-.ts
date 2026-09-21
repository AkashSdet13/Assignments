let rows: number = 5;

for (let i = 1; i <= rows; i++) {

    let pattern: string = "";

    for (let j = 1; j <= i; j++) {
        pattern = pattern + "*";
    }

    console.log(pattern);
}