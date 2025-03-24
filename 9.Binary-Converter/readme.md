if (e.key === "Enter") {}
这里的 Enter 可以替换为键盘上的其他按键

# Decimal to Binary Converter Code Summary

## Overview

This JavaScript code creates a web application that converts decimal numbers to binary. It includes an interactive animation that demonstrates the recursive call stack when converting the number 5 to binary.

## Core Components

### DOM Elements

- `numberInput`: Input field for the decimal number
- `convertBtn`: Button to trigger the conversion
- `result`: Element to display the conversion result
- `animationContainer`: Container for the call stack animation

### Key Functions

#### `decimalToBinary(input)`

A recursive function that converts decimal to binary:

- Base case: If input is 0 or 1, returns the input as a string
- Recursive case: Returns the binary representation of `Math.floor(input / 2)` concatenated with `input % 2`

#### `showAnimation()`

Displays an animation visualizing the recursive call stack for converting 5 to binary:

1. Creates frame elements at specified delays
2. Updates text content to show what each function call returns
3. Removes elements to simulate the call stack unwinding
4. Finally displays the result "101" (binary of 5)

#### `checkUserInput()`

Validates user input and handles the conversion process:

- Checks if input is valid (non-negative decimal number)
- If input is 5, shows the special animation
- Otherwise, converts the number and displays the result

### Event Listeners

- Click event on the convert button
- Enter key press in the input field
- Both trigger the `checkUserInput()` function

## Call Stack Animation Data

The animation uses predefined data for each step in the recursive calculation:

- When converting 5 to binary, the call stack builds up:
  1. `decimalToBinary(5)` calls `decimalToBinary(2)`
  2. `decimalToBinary(2)` calls `decimalToBinary(1)`
  3. `decimalToBinary(1)` returns "1" (base case)
  4. `decimalToBinary(2)` returns "1" + "0" = "10"
  5. `decimalToBinary(5)` returns "10" + "1" = "101"

The animation visually demonstrates how recursion works by showing the call stack building up and then unwinding as each function call returns its result.
