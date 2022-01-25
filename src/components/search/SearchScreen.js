import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import HeroCard from "../hero/HeroCard";
import { getHeroesByName } from "../selectors/getHeroesByName";
import querystring from 'query-string'
import { useMemo } from "react";
export const SearchScreen = () => {
    const location=useLocation(); 
    //q si no viene sea igual a vacio
   const {q=''}=querystring.parse(location.search)
    const [formValues, handleInputChange ] = useForm({
        searchText: q
    });
    const navigate=useNavigate();
    const {searchText}=formValues;
    const handleSearch=(e)=>
    {
            e.preventDefault()
            navigate(`?q=${searchText}`)   
   
    }
  
 
    const heroesFiltered=useMemo(() => getHeroesByName(q), [q]);
    return (
        <div>
            <h1>Movies Search screen</h1>
            <div className="row">
                <div className="col-5">
                    <form
                    onSubmit={handleSearch}>
                        <input
                        type="text"
                        placeholder="insert text"
                        className="form-control"
                        name="searchText"
                         autoComplete="off"
                         value={searchText}
                        onChange={handleInputChange}
                        ></input>
                        <button className="btn btn-outline-primary mt-1" type="submit">Buscar...</button>
                    </form>
                </div>
                <div className="col-5">
                    {
                    q === '' 
                     ?<div className="alert alert-info">Puedes Buscar un heroe</div>
:
                (heroesFiltered.length===0) &&
                
                 <div className="alert alert-danger">No hay resultados </div>
                 }
                {heroesFiltered.map(hero=>(
                    <HeroCard
                    key={hero.id}
                    {...hero}
                    />
                ))}
                </div>
            </div>
        </div>
    )
}
