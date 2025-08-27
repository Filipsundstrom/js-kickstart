# JS Kickstart: A Beginner's Guide to JavaScript

> Beginner-friendly JavaScript textbook with exercises and automated tests.  


## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- A code editor (VS Code recommended)

### Setup

#### Option 1: Clone with Git (Recommended)
1. **Open a terminal/command prompt**
2. **Navigate to where you want the project** (e.g., your Desktop or Documents folder):
   ```bash
   cd Desktop
   ```
3. **Clone the repository** (this creates a `js-kickstart` folder automatically):
   ```bash
   git clone https://github.com/r-/js-kickstart.git
   ```
4. **Enter the project folder**:
   ```bash
   cd js-kickstart
   ```
5. **Install dependencies**:
   ```bash
   npm install
   ```

#### Option 2: Download ZIP
1. Click the green "Code" button on GitHub
2. Select "Download ZIP"
3. Extract the ZIP file to your desired location
4. Open a terminal in the extracted folder
5. Install dependencies:
   ```bash
   npm install
   ```

### Running Exercises

**IMPORTANT: Always run commands from the main project folder (where package.json is located), not from inside exercise folders!**

1. Navigate to an exercise folder (e.g., `exercises/02-sequence/03-day-plan/`)
2. Edit the `script.js` file in that folder
3. Test your script by running it directly:
   ```bash
   node exercises/02-sequence/03-day-plan/script.js
   ```
4. When ready, test your solution with the automated tests:
   ```bash
   npm test
   ```

### Running Specific Tests

To run tests for a specific exercise (run from main project folder):
```bash
npm run test:one -- 02-sequence
```

### Step-by-Step Workflow

1. **Read** the exercise instructions in the exercise folder's README.md
2. **Edit** the `script.js` file in that exercise folder
3. **Run** your script directly: `node exercises/[chapter]/[exercise]/script.js`
4. **Test** with automated tests: `npm test` or `npm run test:one -- [chapter]`
5. **Check** the `solution.js` file if you get stuck (for teachers and reference)

### For Input/Output Exercises

Some exercises require user input. For these:
1. Install the prompt library (one time only):
   ```bash
   npm run setup:prompt
   ```
2. Follow the exercise instructions

## 📚 Course Structure

### Chapters
1. **Intro & Setup** - Getting started with Node.js and VS Code
2. **Sequence** - Step-by-step programming
3. **Variables & Datatypes** - Storing and using data
4. **Operators** - Arithmetic, comparison, and logic
5. **Input & Output** - Interacting with users
6. **Selections** - Making decisions with `if` statements
7. **Iterations** - Repeating code with loops
8. **Functions** - Organizing code into reusable blocks
9. **Arrays** - Working with lists of data
10. **Mini Project** - Putting it all together

### Exercise Structure
- Each chapter contains 3-5 practical exercises
- Every exercise has automated tests for instant feedback
- Early chapters use simple scripts, later chapters introduce functions

## 🧪 Testing

### For Students
- **Run all tests**: `npm test`
- **Run specific test**: `npm run test:one -- <exercise-path>`

These commands test your `script.js` files to check your progress.

### For Instructors/Developers
- **Test all solutions**: `npm run test:solutions`
- **Test specific solution**: `npm run test:solutions:one -- <exercise-path>`

These commands test the reference `solution.js` files for validation.

## 🎯 Learning Goals

By completing this course, you will understand:
- Basic programming concepts (sequence, selection, iteration)
- JavaScript syntax and best practices
- How to write and test code
- Problem-solving through programming

## 📖 How to Use This Course

1. **Read** the chapter material in `book/chapters/`
2. **Practice** with exercises in `exercises/`
3. **Test** your solutions with `npm test`
4. **Reflect** on what you've learned

## 🆘 Getting Help

- Check the exercise README for specific instructions
- Review the chapter material for concepts
- Look at error messages from tests for hints
- Ask your teacher or study group for support

## 🤝 Contributing

We welcome contributions! Whether you want to:
- Report a bug or typo
- Suggest improvements to exercises
- Add new learning materials
- Fix documentation

Please see our [Contributing Guide](CONTRIBUTING.md) for detailed instructions on how to get involved.

## 📄 License

MIT License - feel free to use and adapt for educational purposes.

---

**Happy coding!** 🎉

JavaScript is a trademark of Oracle Corporation. This project is not affiliated with or endorsed by Oracle.
