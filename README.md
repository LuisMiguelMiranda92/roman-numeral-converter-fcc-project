# Roman Numeral Converter 🏛️

A sleek, responsive web application that converts Hindu-Arabic numerals (1-3999) into Roman Numerals. This project was built as part of the **freeCodeCamp JavaScript Algorithms and Data Structures** certification.

## 🚀 Live Demo
[View the Live Project Here](https://luismiguelmiranda92.github.io/roman-numeral-converter-fcc-project/)

## 🧠 Technical Overview
The core conversion logic utilizes a **recursive approach** combined with a mapping object. By identifying the largest possible Roman value that fits into the current number, the function prepends the symbol and calls itself with the remainder until the value reaches zero.

### Key Features
* **Recursive Algorithm:** Efficiently handles conversion without deeply nested loops.
* **Input Validation:** Prevents invalid entries (0, negative numbers, or numbers $\ge$ 4000).
* **Modern UI:** Features a glassmorphism aesthetic with gold-accented outputs.

## 🛠️ Built With
* **HTML5** - Semantic structure.
* **JavaScript (ES6+)** - Logic, DOM manipulation, and recursion.
* **CSS3 & Gemini AI** - The styling and Glassmorphism UI were co-created with Gemini to ensure a modern, responsive user experience.

## 📖 Usage
1. Enter a number between 1 and 3999 in the input field.
2. Click the "Convert to Roman" button.
3. The Roman Numeral equivalent will appear instantly in the output box.

---
*Created by **Luis Miguel Miranda** as part of the freeCodeCamp curriculum. UI/CSS assistance provided by Gemini.*
