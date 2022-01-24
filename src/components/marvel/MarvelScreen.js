import React from 'react'
import HeroList from '../hero/HeroList'

export const MarvelScreen = () => {
    return (
        <div className="container mt-5">
             <h1>Movies Marvel</h1>
            <HeroList publisher={'Marvel Comics'}/>
        </div>
    )
}

