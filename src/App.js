import video from './OrangeCake.mp4';
import './App.css';
import { useEffect, useState  } from 'react';
import MyRecipeDessert from './MyRecipeDessert';

function App() {

  const MY_ID = "95bfb45c";
  const MY_KEY = "32dfca94e48743ecbcffddd9bb21878d";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("dessert");

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits);
    }
    getRecipe()
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault()
    setWordSubmitted(mySearch)
  }

  return (
    <div className="App">

      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4"/>
        </video>
        <h1>Dessert Recipe</h1>
      </div>

      <div className='container'>
        <form onSubmit={finalSearch}>
          <input classname='search' onChange={myRecipeSearch} value={mySearch}/>
        </form>
      </div>

      <div className='container'>
        <button onClick={finalSearch}>
          <img src="https://img.icons8.com/?size=512&id=rXA7TNJacKXj&format=png" width="70px" alt="icon"/>
        </button>
      </div>

      {myRecipes.map((element, index) => (
        <MyRecipeDessert key={index}
        label={element.recipe.label}
        image={element.recipe.image}
        calories={element.recipe.calories}
        ingredients={element.recipe.ingredientLines}/>
      ))}
      
    </div>
  );
}

export default App;
