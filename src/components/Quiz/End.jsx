import React from 'react'

const End = ({ score, setStart, setScore, setEnd }) => {
    const onRestart = () => {
        setStart(false)
        setEnd(false)
        setScore(0)
    }

    return (
        <div>
            <h1>{score}점!</h1>
            <button onClick={() => { onRestart() }}>다시하기</button>
        </div>
    )
}

export default End