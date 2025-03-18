import { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
  {
    id: 4001,
    question: "What hook is used for side effects in React?",
    answer: "useEffect",
  },
  {
    id: 5678,
    question: "What is the virtual DOM?",
    answer: "A lightweight copy of the real DOM",
  },
  {
    id: 6789,
    question: "What is the purpose of React Router?",
    answer: "Handle navigation in single-page applications",
  },
  {
    id: 7890,
    question: "What is the difference between props and state?",
    answer:
      "Props are immutable and passed from parent to child; state is mutable and managed locally",
  },
  {
    id: 8901,
    question: "What is a functional component?",
    answer: "A JavaScript function that returns JSX",
  },
  {
    id: 9012,
    question: "What is a class component?",
    answer: "A React component defined using a JavaScript class",
  },
  {
    id: 9123,
    question: "What does the useState hook return?",
    answer: "An array with the current state and a function to update it",
  },
  {
    id: 9234,
    question: "What is a React fragment?",
    answer:
      "A wrapper that allows returning multiple elements without adding extra nodes to the DOM",
  },
  {
    id: 9345,
    question: "How to handle events in React?",
    answer: "Using event handlers like onClick",
  },
  {
    id: 9456,
    question: "What is prop drilling?",
    answer: "Passing props through multiple levels of components",
  },
  {
    id: 9567,
    question: "What is the Context API?",
    answer:
      "A way to pass data through the component tree without prop drilling",
  },
  {
    id: 9678,
    question: "What is the useContext hook?",
    answer: "A hook that allows consuming context values directly",
  },
  {
    id: 9789,
    question: "What is the purpose of useRef?",
    answer:
      "To access and persist values across renders without causing re-renders",
  },
  {
    id: 9890,
    question: "What is reconciliation in React?",
    answer:
      "The process of updating the virtual DOM and applying changes efficiently",
  },
  {
    id: 9991,
    question: "What does React.memo do?",
    answer:
      "It optimizes functional components by memoizing the result to prevent unnecessary re-renders",
  },
  {
    id: 1111,
    question:
      "What is the difference between controlled and uncontrolled components?",
    answer:
      "Controlled components manage their state via React, while uncontrolled components use the DOM for state",
  },
  {
    id: 2222,
    question: "What is the useReducer hook?",
    answer: "A hook used for managing complex state logic in React",
  },
  {
    id: 3333,
    question: "How can you optimize performance in React applications?",
    answer:
      "Using React.memo, useCallback, useMemo, and avoiding unnecessary renders",
  },
  {
    id: 4444,
    question: "What is React.lazy?",
    answer:
      "A function that allows lazy loading of components for better performance",
  },
  {
    id: 5555,
    question: "What is the Suspense component?",
    answer:
      "A component that allows showing fallback UI while loading lazily loaded components",
  },
  {
    id: 6666,
    question: "What is an HOC (Higher-Order Component)?",
    answer:
      "A function that takes a component and returns a new enhanced component",
  },
  {
    id: 7777,
    question: "What are React hooks?",
    answer:
      "Functions that let you use state and other React features in functional components",
  },
  {
    id: 8888,
    question: "What is the use of useCallback?",
    answer:
      "It memoizes a function so that it does not get recreated on every render",
  },
  {
    id: 9999,
    question: "What is the useMemo hook?",
    answer: "It memoizes a value to prevent unnecessary computations",
  },
  {
    id: 1010,
    question: "What is an event in React?",
    answer:
      "A synthetic event that wraps native events for cross-browser compatibility",
  },
  {
    id: 2020,
    question: "What is React Fiber?",
    answer:
      "A new reconciliation algorithm in React for improved rendering performance",
  },
  {
    id: 3030,
    question: "How do you handle errors in React?",
    answer: "Using error boundaries",
  },
  {
    id: 4040,
    question: "What is an error boundary?",
    answer:
      "A React component that catches JavaScript errors in child components",
  },
  {
    id: 5050,
    question: "What is Redux?",
    answer: "A state management library for JavaScript applications",
  },
  {
    id: 6060,
    question: "What is the purpose of the connect function in Redux?",
    answer: "To connect React components to the Redux store",
  },
  {
    id: 7070,
    question: "What is the difference between Redux and Context API?",
    answer:
      "Redux is more powerful for large-scale state management, while Context API is simpler and built into React",
  },
  {
    id: 8080,
    question: "What is a Redux action?",
    answer:
      "A plain JavaScript object describing a change in the application state",
  },
  {
    id: 9090,
    question: "What is a Redux reducer?",
    answer:
      "A pure function that determines how state changes in response to actions",
  },
  {
    id: 10101,
    question: "What is a Redux store?",
    answer: "A centralized location for managing application state",
  },
  {
    id: 20202,
    question: "What is middleware in Redux?",
    answer:
      "A function that sits between dispatching an action and the reducer",
  },
  {
    id: 30303,
    question: "What is the difference between useEffect and useLayoutEffect?",
    answer:
      "useLayoutEffect runs synchronously after DOM updates, while useEffect runs asynchronously",
  },
  {
    id: 40404,
    question: "What is Server-Side Rendering (SSR) in React?",
    answer:
      "Rendering React components on the server before sending HTML to the client",
  },
  {
    id: 50505,
    question: "What is hydration in React?",
    answer:
      "The process of attaching event handlers to the pre-rendered HTML on the client",
  },
  {
    id: 60606,
    question: "What is Next.js?",
    answer:
      "A React framework for server-side rendering and static site generation",
  },
  {
    id: 70707,
    question: "What is Gatsby?",
    answer: "A React-based framework for building static websites",
  },
];

export default function Flashcard() {
  const [selectedId, setSelectedId] = useState(null);
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
