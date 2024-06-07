import React, { useState } from 'react';
import styles from './AddQuiz.module.css';

const AddQuiz = ({ addQuestion }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [answer, setAnswer] = useState('');

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question && options.every(opt => opt) && answer) {
      addQuestion({ question, options, answer });
      setQuestion('');
      setOptions(['', '', '', '']);
      setAnswer('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className={styles.addQuiz}>
      <h2 className={styles.title}>Add a New Question</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>
            Question:
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className={styles.formControl}
            />
          </label>
        </div>
        {options.map((option, index) => (
          <div key={index} className={styles.formGroup}>
            <label>
              Option {index + 1}:
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                className={styles.formControl}
              />
            </label>
          </div>
        ))}
        <div className={styles.formGroup}>
          <label>
            Correct Answer:
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className={styles.formControl}
            />
          </label>
        </div>
        <button type="submit" className={styles.btn}>Add Question</button>
      </form>
    </div>
  );
};

export default AddQuiz;
