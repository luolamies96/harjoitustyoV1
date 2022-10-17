import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { json } from 'react-router-dom';
//import { Link } from 'react-router-dom';






    export default function Random() {
 const [strDrink, SetstrDrink] = useState('')
 const [strInstructions, SetstrInstructions ] = useState('')
 const [strGlass, SetstrGlass ] = useState('')
 const [strDrinkThumb, SetDrinkThump ] = useState('')
 const  URL ='https://www.thecocktaildb.com/api/json/v1/1/random.php'
 var searchURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
 const [search, setsearch] =useState ('');
 var address = URL;
 
 
 function searchFunction(){
  address= searchURL + search;
  axios.get(address)
  .then((response) => {
    console.log(address)
    console.log(response.data)
    SetstrDrink(response.data.drinks[0].strDrink);
    SetstrInstructions(response.data.drinks[0].strInstructions);
    SetstrGlass(response.data.drinks[0].strGlass);
    SetDrinkThump(response.data.drinks[0].strDrinkThumb);
  }
  
  
  ). catch(error=>{
    console.log(error)
    alert("getting cocktail failed ")
  })
 
} 
 useEffect(() => {
  
  axios.get(address)
  .then((response) => {
    console.log(response.data)
    SetstrDrink(response.data.drinks[0].strDrink);
    SetstrInstructions(response.data.drinks[0].strInstructions);
    SetstrGlass(response.data.drinks[0].strGlass);
    SetDrinkThump(response.data.drinks[0].strDrinkThumb);
  
  
  }). catch(error=>{
    console.log(error)
    alert("getting cocktail failed ")
  })

}, [])
return (
  <div>

    <h3> search for drink</h3>
    <div>
      <form id="form" onsubmit="return false;">
        <input type ="text" value={search} onChange={e=>setsearch(e.target.value)}/>
        <button type="button" onClick={searchFunction}>Search</button>
        </form>
    </div>
  <div>
    <h3> Cocktail of the day: </h3>
    <p>{strDrink}</p>


    <h3>Instructions:</h3>
    <p>{strInstructions}</p>

    <h3>glass:</h3>
    <p>{strGlass}</p>

    <img src={strDrinkThumb} alt=""/>

  </div>
  </div>
);
}
