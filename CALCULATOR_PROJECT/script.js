document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.getElementById('inputBox');  // Get the input box element
    const buttons = document.querySelectorAll('.same_circle');  // Get all buttons

    let currentInput = '';  // Initialize the input string

    // Function to update the input box and currentInput
    const updateInput = (value) => {
        currentInput += value;  // Append the clicked or typed value
        inputBox.value = currentInput;  // Update the input box
    };

    // Handle button clicks
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent.trim();  // Get the value on the button and trim it

            if (value === 'AC') {
                currentInput = '';  // Clear the input when 'AC' is pressed
                inputBox.value = '';  // Update the input box to empty
            } else if (value === 'DEL') {
                currentInput = currentInput.slice(0, -1);  // Remove the last character on 'DEL'
                inputBox.value = currentInput;  // Update the input box
            } else if (value === '=') {
                try {
                    currentInput = eval(currentInput).toString();  // Evaluate the expression
                    inputBox.value = currentInput;  // Update the input box with the result
                } catch {
                    inputBox.value = 'Error';  // Display 'Error' if the expression is invalid
                    currentInput = '';  // Reset the input string
                }
            } else {
                updateInput(value);  // Add value to input
            }
        });
    });

    // Handle keyboard input
    document.addEventListener('keydown', (event) => {
        const key = event.key;  // Get the key pressed

        // Handle the keys for numbers, operators, and other special keys
        if (key >= '0' && key <= '9') {
            updateInput(key);  // If the key is a number, update input
        } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
            updateInput(key);  // If the key is an operator, update input
        } else if (key === 'Enter' || key === '=') {
            // If the Enter key or '=' is pressed, evaluate the expression
            try {
                currentInput = eval(currentInput).toString();
                inputBox.value = currentInput;
            } catch {
                inputBox.value = 'Error';
                currentInput = '';
            }
        } else if (key === 'Backspace') {
            // If Backspace is pressed, remove the last character
            currentInput = currentInput.slice(0, -1);
            inputBox.value = currentInput;
        } else if (key === 'Escape') {
            // If Escape is pressed, clear the input
            currentInput = '';
            inputBox.value = '';
        }
    });
});
