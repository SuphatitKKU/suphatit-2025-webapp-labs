const readline = require('readline');
const args = process.argv.slice(2);

if (args.length === 0) {
    console.log("Please enter two numbers");
    process.exit(1);
}

if (args.length === 1) {
    const num1 = parseFloat(args[0]);
    if (isNaN(num1)) {
        console.log("Please enter two numbers");
    } else {
        console.log("Please enter two numbers");
    }
    process.exit(1);
}

if (args.length === 2) {
    const num1 = parseFloat(args[0]);
    const num2 = parseFloat(args[1]);
    
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Please enter two numbers");
        process.exit(1);
    } else {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        process.stdout.write("add | subtract ");
        
        rl.on('line', (operation) => {
            if (operation === "add") {
                const result = num1 + num2;
                console.log(`${num1} + ${num2} = ${result}`);
            } else if (operation === "subtract") {
                const result = num1 - num2;
                console.log(`${num1} - ${num2} = ${result}`);
            } else {
                console.log("Unknown operator");
            }
            rl.close();
        });
        
        return;
    }
}

const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);
const operation = args[2];

if (isNaN(num1) || isNaN(num2)) {
    console.log("Please enter two numbers");
    process.exit(1);
}

if (operation === "add") {
    const result = num1 + num2;
    console.log(`${num1} + ${num2} = ${result}`);
} else if (operation === "subtract") {
    const result = num1 - num2;
    console.log(`${num1} - ${num2} = ${result}`);
} else {
    console.log("Unknown operator");
}