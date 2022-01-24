import { heroes } from "../../data/heroes"

export const getHeroByPublisher =(publisher)=>{
    const validPublisher=['Marvel Comics','DC Comics']
    if(!validPublisher.includes(publisher)){
        throw new Error(`${publisher} is no valid`)
    }
    else{
        return heroes.filter(hero=>hero.publisher===publisher)

    }

}