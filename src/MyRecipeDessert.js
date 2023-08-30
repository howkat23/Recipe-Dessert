function MyRecipeDessert({label, image, calories, ingredients}) {
    return(<div>

        <div className="container">
            <h2>{label}</h2>       
        </div>    
     

        <div className="container">
        <img src={image} alt="dish"/>
        </div>

        <div className="container">
        <p>{calories.toFixed()} calories</p>
        </div>

        <ul className ="container list">
            {ingredients.map((ingredient, index) => (
                <li key={index}>
                    <img src="https://img.icons8.com/?size=512&id=XZY5TrnVET5_&format=png" className="icon" alt="icon"/>
                    {ingredient}</li>
            ))}
        </ul>


    </div>)
}

export default MyRecipeDessert;