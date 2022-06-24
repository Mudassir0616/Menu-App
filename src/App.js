import React, { useEffect, useState} from 'react';
import './App.css';
import Recipe from './recipe';

const App = ()=> {

  const APP_ID = '30a39a10';
  const APP_KEY = '14c269129039d57da841a9db7b00d987';

  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState('');

  const [query, setQuery] = useState('Mutton');
  

  useEffect(()=> {
   getRecipe();
  },[query]);


  const getRecipe = async ()=>{
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const Data = await response.json();
  setRecipes(Data.hits);
  console.log(Data.hits)
}

  const UpdateSearch = e => {
  setSearch(e.target.value);
 }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }

  return(
      <div className='App'>
        <h1 className='title-app'>~ Deliure & the Eatrium ~</h1>
        <h5>A place to Relax and Enjoy the company of Family and Friends and to Restore Energy....</h5>
        <p>For Placing Order Contact - 8928519499 / 9870212082</p>

    <form className='srch-form' onSubmit={getSearch}>

        <input className='srch-input'
         type="text"
         value= {search} 
         onChange= {UpdateSearch}/>

        <button className='srch-btn' type='submit'>Search</button>

      </form>
      <div className='item-list'>

        {recipes.map( recipe =>(
        <Recipe 
         key={recipe.recipe.label}

         title= {recipe.recipe.label}

         calories={recipe.recipe.calories} 

         image= {recipe.recipe.image} 

         cuisine={recipe.recipe.cuisineType}
         
         ingredients= {recipe.recipe.ingredients}/>
         
      ))}
      </div>
      
    </div>
  );
}

export default App;
