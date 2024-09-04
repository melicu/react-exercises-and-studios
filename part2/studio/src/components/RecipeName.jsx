import recipedata from "./recipe.json";

function RecipeName() {
  let recipeName = recipedata.map((recipe) => (
    <div key={recipe.name}>
      <h1>{recipe.name}</h1>
    </div>
  ));
  return <div>{recipeName}</div>
}

export default RecipeName;

//import return the name of the recipe as a level 1 header