import React from 'react'

const Start = ({setStart}) => {
    return (
        <div className='Start_wrap'>
            <h1>N4</h1>
            <button onClick={()=>{setStart(true)}}>시작하기</button>
        </div>
    )
}

export default Start