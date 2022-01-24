import React from 'react'
import HeroList from '../hero/HeroList'

export const DcScreen = () => {
    return (
        <div className="container mt-5">
            <h1>Movies DC</h1>
            <HeroList publisher={'DC Comics'}/>
        </div>
    )
}

