import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

function App() {
 const [strDrink, SetstrDrink] = useState('')
 const [strInstructions, SetstrInstructions ] = useState('')
 const [strGlass, SetstrGlass ] = useState('')
 const [strDrinkThumb, SetDrinkThump ] = useState('')



 useEffect(() => {
  axios.get(URL)
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
    <h3> Cocktail of the day: </h3>
    <p>{strDrink}</p>


    <h3>Instructions:</h3>
    <p>{strInstructions}</p>

    <h3>glass:</h3>
    <p>{strGlass}</p>

    <img src={strDrinkThumb} alt=""/>

  </div>
 

);
}
export default App;
