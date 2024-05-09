import React, { useState } from 'react';
import styles from './Quizes.module.css'; // Import your CSS module

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [numCorrect, setNumCorrect] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const quizData = [
        {
            question: "What is the capital of France?",
            answers: [
                { text: "New York", correct: false },
                { text: "Paris", correct: true },
                { text: "London", correct: false },
                { text: "Madrid", correct: false },
            ],
        },
        {
            question: "What is the highest mountain in the world?",
            answers: [
                { text: "Kilimanjaro", correct: false },
                { text: "Everest", correct: true },
                { text: "Denali", correct: false },
                { text: "Fuji", correct: false },
            ],
        },
        {
            question: "What is the largest country by land area?",
            answers: [
                { text: "Russia", correct: true },
                { text: "China", correct: false },
                { text: "Canada", correct: false },
                { text: "USA", correct: false },
            ],
        },
    ];

    const checkAnswer = (selectedAnswer) => {
        const isCorrect = quizData[currentQuestionIndex].answers.find(answer => answer.text === selectedAnswer).correct;
        if (isCorrect) {
            setNumCorrect(numCorrect + 1);
        }
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        if (currentQuestionIndex === quizData.length - 1) {
            setShowResults(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setNumCorrect(0);
        setShowResults(false);
    };

    return (
        <div>
            {!showResults ? (
                <div>
                    <header className={styles.quizesHeader}>
                        <h1>Quiz Example</h1>
                    </header>
                    <main>
                        <section className={styles.quizesQuestions}>
                            <h2>Questions</h2>
                            <p>{quizData[currentQuestionIndex].question}</p>
                            <ul>
                                {quizData[currentQuestionIndex].answers.map((answer, index) => (
                                    <li key={index}>
                                        <button className={styles['answer-btn']} onClick={() => checkAnswer(answer.text)}>{answer.text}</button>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </main>
                </div>
            ) : (
                <div>
                    <header className={styles.quizesHeader}>
                        <h1>Quiz Results</h1>
                    </header>
                    <main>
                        <section className={styles.quizesResults}>
                            <h2>Results</h2>
                            <p>You got <span id="correct">{numCorrect}</span> out of <span id="total">{quizData.length}</span> correct!</p>
                            <button id="restart" className={styles.button} onClick={restartQuiz}>Restart Quiz</button>
                        </section>
                    </main>
                </div>
            )}
        </div>
    );
};

export default Quiz;
