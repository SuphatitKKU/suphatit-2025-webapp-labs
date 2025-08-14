// ===== PART 1: ARROW FUNCTIONS FOR INPUT VALIDATION (3 POINTS) =====

/**
 * Arrow function to check if input is a valid number
 * Handles edge cases: empty strings, null, undefined, NaN, Infinity
 */
const isValidNumber = (input) => {
  // Check for null, undefined, or empty string
  if (input === null || input === undefined || input === '') {
    return false;
  }
  
  // Convert to string and trim whitespace
  const str = String(input).trim();
  
  // Check if empty after trimming
  if (str === '') {
    return false;
  }
  
  // Parse the number
  const num = parseFloat(str);
  
  // Check if it's a valid finite number
  return !isNaN(num) && isFinite(num);
};

/**
 * Arrow function to parse valid number or return null
 */
const parseValidNumber = (input) => {
  if (!isValidNumber(input)) {
    return null;
  }
  return parseFloat(String(input).trim());
};

/**
 * Comprehensive validation with error messages
 * Returns object with structure: { valid: boolean, message?: string, value?: number }
 */
const validateNumberInput = (input) => {
  // Check for null or undefined
  if (input === null || input === undefined) {
    return { valid: false, message: "Invalid number format" };
  }
  
  // Convert to string and trim
  const str = String(input).trim();
  
  // Check for empty string
  if (str === '') {
    return { valid: false, message: "Please enter a number" };
  }
  
  // Try to parse the number
  const num = parseFloat(str);
  
  // Check if it's a valid number
  if (isNaN(num) || !isFinite(num)) {
    return { valid: false, message: "Invalid number format" };
  }
  
  return { valid: true, value: num };
};

// ===== PART 2: FUNCTION EXPRESSIONS FOR ARITHMETIC OPERATIONS (3 POINTS) =====

/**
 * Addition using function expression
 */
const add = function (a, b) {
  return a + b;
};

/**
 * Subtraction using function expression
 */
const subtract = function (a, b) {
  return a - b;
};

/**
 * Multiplication using function expression
 */
const multiply = function (a, b) {
  return a * b;
};

/**
 * Division using function expression with division by zero handling
 */
const divide = function (a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
};

/**
 * Operation resolver using function expression
 * Returns the corresponding function for the given operation name
 */
const getOperationFunction = function (operation) {
  const operations = {
    'add': add,
    'subtract': subtract,
    'multiply': multiply,
    'divide': divide
  };
  
  return operations[operation] || null;
};

// ===== PART 3: CALLBACK FUNCTIONS FOR MULTIPLE NUMBER PROCESSING (4 POINTS) =====

/**
 * Applies operation callback to array of numbers using reduce pattern
 * Handles edge cases: empty array, single number
 */
const performCalculationOnNumbers = function (numbers, operationCallback) {
  // Check for empty array
  if (!numbers || numbers.length === 0) {
    throw new Error("No numbers provided for calculation");
  }
  
  // If only one number, return it
  if (numbers.length === 1) {
    return numbers[0];
  }
  
  // Use reduce to apply the operation sequentially
  return numbers.reduce((accumulator, currentValue) => {
    return operationCallback(accumulator, currentValue);
  });
};

/**
 * Combines operation selection with callback processing
 * Uses getOperationFunction and performCalculationOnNumbers
 */
const calculateWithCallback = function (numbers, operation) {
  // Get the operation function
  const operationFunc = getOperationFunction(operation);
  
  // Check if operation is valid
  if (!operationFunc) {
    throw new Error("Invalid operation");
  }
  
  // Perform calculation using callback
  return performCalculationOnNumbers(numbers, operationFunc);
};

// ===== UI FUNCTIONALITY (PROVIDED - DO NOT MODIFY) =====
// The following code handles the user interface
// You do not need to modify this section, but should understand how it works

// Global variables for application state
let selectedMultiOperation = "";
let numbersList = [];
let selectedTwoNumberOperation = "";

// Initialize the application
initializeTwoNumberCalculator();
initializeMultipleNumberCalculator();
console.log("Dual Calculator Application Loaded");
console.log(
  "Features: Arrow Functions, Function Expressions, Callback Functions"
);

// Two Number Calculator Initialization
function initializeTwoNumberCalculator() {
  // Event listeners for operator buttons
  document.querySelectorAll(".operator-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll(".operator-btn")
        .forEach((b) => b.classList.remove("selected"));
      this.classList.add("selected");
      selectedTwoNumberOperation = this.dataset.op;
    });
  });

  // Form submission handler
  document
    .getElementById("twoNumberForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      handleTwoNumberCalculation();
    });
}

// Handle two number calculation
function handleTwoNumberCalculation() {
  const num1Input = document.getElementById("num1").value;
  const num2Input = document.getElementById("num2").value;
  const resultDiv = document.getElementById("twoNumberResult");

  try {
    // Use your arrow functions for validation
    const validation1 = validateNumberInput(num1Input);
    const validation2 = validateNumberInput(num2Input);

    if (!validation1.valid) {
      throw new Error("First number: " + validation1.message);
    }
    if (!validation2.valid) {
      throw new Error("Second number: " + validation2.message);
    }
    if (!selectedTwoNumberOperation) {
      throw new Error("Please select an operation");
    }

    // Use your function expressions for calculation
    const operationFunc = getOperationFunction(selectedTwoNumberOperation);
    const result = operationFunc(validation1.value, validation2.value);

    displayTwoNumberResult(
      validation1.value,
      validation2.value,
      result,
      selectedTwoNumberOperation
    );
  } catch (error) {
    displayError(resultDiv, error.message);
  }
}

// Display result for two number calculation
function displayTwoNumberResult(num1, num2, result, operation) {
  const resultDiv = document.getElementById("twoNumberResult");
  const operationSymbols = {
    add: "+",
    subtract: "-",
    multiply: "×",
    divide: "÷",
  };

  resultDiv.innerHTML = `
        <div class="result">
            <h3>Calculation Result</h3>
            <p><strong>Expression:</strong> ${num1} ${operationSymbols[operation]} ${num2}</p>
            <div class="result-value">${result}</div>
            <p><em>Calculated using function expressions</em></p>
        </div>
    `;
  resultDiv.style.display = "block";
}

// Multiple Number Calculator Initialization
function initializeMultipleNumberCalculator() {
  // Operation selection
  document
    .getElementById("multiOperator")
    .addEventListener("change", function () {
      selectedMultiOperation = this.value;
    });

  // Add number button
  document
    .getElementById("addNumberBtn")
    .addEventListener("click", function () {
      handleAddNumber();
    });

  // Enter key support for number input
  document
    .getElementById("numberInput")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        handleAddNumber();
      }
    });

  // Calculate button
  document
    .getElementById("calculateMultiBtn")
    .addEventListener("click", function () {
      handleMultipleNumberCalculation();
    });

  // Clear button
  document
    .getElementById("clearNumbersBtn")
    .addEventListener("click", function () {
      clearAllNumbers();
    });
}

// Handle adding a number to the list
function handleAddNumber() {
  const input = document.getElementById("numberInput").value;
  const validation = validateNumberInput(input); // Uses your arrow function

  if (validation.valid) {
    numbersList.push(validation.value);
    document.getElementById("numberInput").value = "";
    updateNumbersList();
  } else {
    // For multiple number calculator, always show "Invalid number format" regardless of the specific error
    alert("Invalid number: Invalid number format");
  }
}

// Handle multiple number calculation
function handleMultipleNumberCalculation() {
  const resultDiv = document.getElementById("multiNumberResult");

  try {
    if (!selectedMultiOperation) {
      throw new Error("Please select an operation");
    }
    if (numbersList.length === 0) {
      throw new Error("Please add at least one number");
    }

    // Use your callback functions for calculation
    const result = calculateWithCallback(numbersList, selectedMultiOperation);
    displayMultipleNumberResult(
      result,
      selectedMultiOperation,
      numbersList.length
    );
  } catch (error) {
    displayError(resultDiv, error.message);
  }
}

// Display result for multiple number calculation
function displayMultipleNumberResult(result, operation, count) {
  const resultDiv = document.getElementById("multiNumberResult");
  const operationNames = {
    add: "Addition",
    subtract: "Subtraction",
    multiply: "Multiplication",
    divide: "Division",
  };

  resultDiv.innerHTML = `
        <div class="result">
            <h3>${operationNames[operation]} Result</h3>
            <div class="result-value">${result}</div>
            <p><em>Calculated using callback functions on ${count} numbers</em></p>
        </div>
    `;
  resultDiv.style.display = "block";
}

// Clear all numbers and reset the interface
function clearAllNumbers() {
  numbersList = [];
  document.getElementById("numberInput").value = "";
  const resultDiv = document.getElementById("multiNumberResult");
  resultDiv.innerHTML = "";
  resultDiv.style.display = "none";
  updateNumbersList();
}

// Update the display of current numbers list
function updateNumbersList() {
  const resultDiv = document.getElementById("multiNumberResult");

  if (numbersList.length > 0) {
    const numbersHtml = numbersList
      .map((num) => `<span class="number-item">${num}</span>`)
      .join("");

    resultDiv.innerHTML = `
            <div class="numbers-list">
                <h4>Current Numbers (${numbersList.length}):</h4>
                ${numbersHtml}
                <p style="margin-top: 10px; font-size: 0.9em; color: #666;">
                    Add more numbers or click "Calculate All Numbers" to perform the operation.
                </p>
            </div>
        `;
    resultDiv.style.display = "block";
  } else {
    resultDiv.innerHTML = "";
    resultDiv.style.display = "none";
  }
}

// Display error message
function displayError(container, message) {
  container.innerHTML = `<div class="error">Error: ${message}</div>`;
  container.style.display = "block";
}

// ===== TESTING SECTION (FOR YOUR REFERENCE) =====
// Uncomment the following code to test your functions in the console

/*
// Test Arrow Functions
console.log('=== Testing Arrow Functions ===');
console.log('isValidNumber("5"):', isValidNumber("5")); // Should be true
console.log('isValidNumber(""):', isValidNumber("")); // Should be false
console.log('isValidNumber("abc"):', isValidNumber("abc")); // Should be false

// Test Function Expressions
console.log('=== Testing Function Expressions ===');
console.log('add(5, 3):', add(5, 3)); // Should be 8
console.log('divide(10, 2):', divide(10, 2)); // Should be 5
console.log('getOperationFunction("add"):', getOperationFunction("add")); // Should return add function

// Test Callback Functions
console.log('=== Testing Callback Functions ===');
console.log('calculateWithCallback([1,2,3], "add"):', calculateWithCallback([1,2,3], "add")); // Should be 6
console.log('calculateWithCallback([10,2], "divide"):', calculateWithCallback([10,2], "divide")); // Should be 5
*/