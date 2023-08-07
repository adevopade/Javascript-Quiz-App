# Javascript-Quiz-App
Created with CodeSandbox


```
# Quiz App

Quiz App is a simple web application built with React that allows users to take a quiz and see their scores at the end. The app fetches quiz data from a data file and presents questions with multiple-choice options to the users. It also provides feedback with a happy or sad emoji based on the user's performance.

![Quiz App Screenshot](screenshot.png)

## Features

- Multiple-choice quiz with a set of questions and options.
- Real-time scoring system that updates as users select answers.
- Percentage-based scoring and emoji feedback at the end of the quiz.
- Restart option to retake the quiz.

## Demo

You can try out the live demo of the Quiz App [here](https://7djjmr-3000.csb.app/).

## Installation

1. Clone the repository:

```
git clone https://github.com/adevopade/Javascript-Quiz-App.git

cd quiz-app
```

2. Install dependencies:

```
npm install
```

3. Run the development server:

```
npm start
```

The app should now be running on `http://localhost:3000`.

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. You will be presented with the first question and a list of options.
3. Click on the option you think is correct. The app will automatically move to the next question.
4. At the end of the quiz, your score will be displayed along with a happy or sad emoji based on your performance.
5. If you wish to retake the quiz, simply click on the "Restart Quiz" button.

## Customization

You can customize the quiz questions by modifying the `QuizData.js` file in the `src` directory. The data file contains an array of objects, each representing a question with its options and the correct answer.

```js
// src/QuizData.js
const QuizData = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Rome"],
    correctAnswer: "Paris",
  },
  // Add more questions here...
];
export default QuizData;
```

Feel free to add or remove questions, change options, and set the correct answers accordingly.
I will be implementing additional features soon
## Contributing

If you find any issues or have suggestions for improvements, feel free to create a pull request or open an issue in this repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
