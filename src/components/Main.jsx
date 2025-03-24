import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Quiz from './Quiz/Quiz'

const Main = () => {
    return (
        <div className='container Main_wrap'>
            <Header />
            <div className='quiz'>
                <Quiz />
            </div>
            <Nav />
        </div>
    )
}

export default Main