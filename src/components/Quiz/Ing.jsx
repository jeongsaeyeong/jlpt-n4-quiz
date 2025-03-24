import React, { useState } from 'react';
import quizData from '../../assets/js/quizdata.json'; // JSON import

const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const Ing = ({ setStart, setScore, setEnd }) => {
    const [shuffledQuiz] = useState(() => shuffleArray(quizData)); // ← 랜덤 셔플!
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);

    const current = shuffledQuiz[currentIndex];

    const handleCheckAnswer = () => {
        if (selected !== null) {
            setShowExplanation(true);
            if (selected === current.answer) {
                setScore((prev) => prev + 1);
            }
        }
    };

    const handleNextQuestion = () => {
        if (currentIndex + 1 < quizData.length) {
            setCurrentIndex((prev) => prev + 1);
            setSelected(null);
            setShowExplanation(false);
        } else {
            setEnd(true)
        }
    };

    return (
        <div className='Ing_wrap'>
            <div className='ing_quiz'>
                <h4>{currentIndex + 1}. {current.question}</h4>
                <div className="choose">
                    {current.choices.map((choice, idx) => (
                        <p
                            key={idx}
                            onClick={() => setSelected(choice)}
                            className={selected === choice ? "selected" : ""}
                        >
                            ({idx + 1}) {choice}
                        </p>
                    ))}
                </div>
                {!showExplanation && <button onClick={handleCheckAnswer}>정답 확인하기</button>}
            </div>

            {showExplanation && (
                <div className="ing_explanation">
                    <div>
                        <div>
                            <h1>{selected === current.answer ? "정답!" : "오답!"}</h1>
                            <p className="explanation">{current.explanation}</p>
                        </div>
                        <button onClick={handleNextQuestion}>다음 문제</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Ing;
