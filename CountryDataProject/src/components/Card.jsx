import style from './Card.module.css';
// import './Card.css';
import CardData from './CardData';
import { useState , useEffect } from 'react'

const Card = ()=>{
     const [countries , setcountries] = useState([]);

  useEffect(()=>{
    //https://countriesnow.space/api/v0.1/countries
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
  .then(res => res.json()).then(data => setcountries(data)).catch(err => console.log(err))
  },[])
    
    return(
        <>
        <div className={style.cardWrapper}>
        {
            countries.map((data , index)=>{
                return <CardData key={index} countriesData = {data} />
            })}
        </div>
        </>
    )
}
export default Card;

