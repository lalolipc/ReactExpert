import React from 'react'
import HeroList from '../hero/HeroList'

export const MarvelScreen = () => {
    return (
        <div className="container mt-5">
             <h1>Soy Marvel screen</h1>
            <HeroList publisher={'Marvel Comics'}/>
        </div>
    )
}

