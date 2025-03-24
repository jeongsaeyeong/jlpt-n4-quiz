import React, { useState } from 'react'
import Ing from './Ing'
import Start from './Start'
import End from './End';

const Quiz = () => {
    const [start, setStart] = useState(false);
    const [end, setEnd] = useState(false);
    const [score, setScore] = useState(0);

    return (
        <div className='Quiz_wrap'>
            {end ? (<End score={score} setEnd={setEnd} setStart={setStart} setScore={setScore}/>) : (<>
                {start ? (<Ing setStart={setStart} setEnd={setEnd} setScore={setScore} />) : <Start setStart={setStart} />}
            </>)}
        </div>
    )
}

export default Quiz