/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  userScore: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'What is JavaScript?',
      answers: {
        a: 'A programming language for creating web pages.',
        b: 'A type of coffee.',
        c: 'A browser extension.',
        d: 'A game development framework.',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Mozilla Developer Network (MDN)',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          text: 'W3Schools',
          href: 'https://www.w3schools.com/js/js_intro.asp',
        },
      ],
    },
    {
      text: 'What does DOM stand for?',
      answers: {
        a: 'Document Object Model',
        b: 'Data Object Model',
        c: 'Dynamic Object Model',
        d: 'Document Order Model',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Mozilla Developer Network (MDN)',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model',
        },
        {
          text: 'W3Schools',
          href: 'https://www.w3schools.com/js/js_intro.asp',
        },
      ],
    },
    {
      text: 'What is an arrow function in JavaScript?',
      answers: {
        a: 'A function with a curved shape.',
        b: 'A function with a special arrow syntax (=>).',
        c: 'A function that always returns true.',
        d: 'A function that cannot be called.',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'MDN Web Docs',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions',
        },
      ],
    },
    {
      text: 'What is the purpose of the "this" keyword in JavaScript?',
      answers: {
        a: 'To refer to the next element in an array.',
        b: 'To declare a variable.',
        c: 'To refer to the current object or context.',
        d: 'To create a new object.',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'MDN Web Docs',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this',
        },
      ],
    },
    {
      text:
        'What is the difference between "let," "const," and "var" in JavaScript for variable declaration?',
      answers: {
        a:
          '"let" is used for variables that never change, "const" is used for variables that change frequently, and "var" is used for function declarations.',
        b:
          '"let" has block scope, "const" is used for function declarations, and "var" has global scope.',
        c:
          '"let" and "const" have block scope, while "var" has function scope.',
        d: '"let" and "const" are interchangeable, and "var" is deprecated.',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'MDN Web Docs',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let',
        },
        {
          text: 'MDN Web Docs',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const',
        },
        {
          text: 'MDN Web Docs',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var',
        },
      ],
    },
    {
      text: 'What is a closure in JavaScript?',
      answers: {
        a: 'A way to close a web page.',
        b:
          'A function that has access to variables from its outer function even after the outer function has finished executing.',
        c: 'A special type of loop.',
        d: 'A way to create an infinite loop.',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'MDN Web Docs',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures',
        },
        {
          text: 'JavaScript.info',
          href: 'https://javascript.info/closure',
        },
      ],
    },
    {
      text:
        'What is the purpose of the "async" and "await" keywords in JavaScript?',
      answers: {
        a: 'To make functions asynchronous.',
        b: 'To declare variables.',
        c: 'To stop the execution of code.',
        d: 'To create a new class.',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'MDN Web Docs',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function',
        },
        {
          text: 'JavaScript.info',
          href: 'https://javascript.info/async-await',
        },
      ],
    },
    {
      text: 'What is the purpose of the "fetch" API in JavaScript?',
      answers: {
        a: 'To fetch food recipes.',
        b: 'To fetch data from a server using HTTP requests.',
        c: 'To fetch images from the internet.',
        d: 'To fetch user input from a form.',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'MDN Web Docs',
          href: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API',
        },
        {
          text: 'JavaScript.info',
          href: 'https://javascript.info/fetch',
        },
      ],
    },
    {
      text:
        'What is an IIFE (Immediately Invoked Function Expression) in JavaScript?',
      answers: {
        a: 'A function that is invoked after a delay.',
        b: 'A function that is automatically invoked as soon as it is defined.',
        c: 'A function that is invoked when a button is clicked.',
        d: 'A function that cannot be invoked.',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'JavaScript.info',
          href:
            'https://javascript.info/closure#immediately-invoked-function-expression-iife',
        },
      ],
    },
    {
      text: 'What is the purpose of the JavaScript "map" method?',
      answers: {
        a: 'To create a map visualization on a web page.',
        b:
          'To iterate over an array and transform its elements, returning a new array.',
        c: 'To add markers to a Google Map.',
        d: 'To create a mapping between two arrays.',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'MDN Web Docs',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
        },
        {
          text: 'JavaScript.info',
          href: 'https://javascript.info/array-methods#map',
        },
      ],
    },
  ],
};
