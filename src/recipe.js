import React from 'react';

const Recipe = ({title, calories, image, cuisine, ingredients})=> {
    return(
        <div className='food-items'>
            <h1>{title}</h1>
            <img src={image}/>
            <h3>Cuisine : {cuisine}</h3>
            <p>Calories : {calories}</p>
            <ul>
                {ingredients.map(ingredient =>(
                    
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            
        </div>
    )
}



export default Recipe;