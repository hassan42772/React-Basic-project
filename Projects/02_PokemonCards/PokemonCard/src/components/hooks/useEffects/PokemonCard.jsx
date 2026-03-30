import { useEffect, useState } from "react"
import Cards from "./Cards";
import styles from "./Pokemon.module.css";


function PokemonCard() {
  const API = "https://pokeapi.co/api/v2/pokemon?limit=100";
  const [pokeData , setPokemonData] = useState([]);
  const [input , Setinput] = useState("");

  useEffect(() => {
    fetch(API)
    .then((response)=> response.json())
    .then((data)=> data.results)
    .then((results) => results.map((item) => item.url))
    .then((urls) => {
    const promises = urls.map((url) =>
      fetch(url).then((res) => res.json())
    );
    return Promise.all(promises);
    })
    .then((AllPoke)=>setPokemonData(AllPoke))
    .catch((error)=> console.log(error))
  }, [])

  console.log(pokeData)
const filteredPokemon = pokeData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(input.toLowerCase())
  );

  
  return (
    <>
       <h1 className={styles.Heading1}>Pokemon Cards</h1>
      <input className={styles.SearchInput} type="text" value={input} onChange={(e)=>Setinput(e.target.value)} placeholder="Enter The Name" />
    <div className={styles.MainContainer} >
      {filteredPokemon.map((pokemon) => {

       return <Cards key={pokemon.id} PokemonName = {pokemon.name} PokemonUrl = {pokemon.sprites.front_default}/>
      }
        
        //pokemon.id , pokemon.name , pokemon.sprites.front_default
       
      )}
    </div>
    </>
  )
}

export default PokemonCard
