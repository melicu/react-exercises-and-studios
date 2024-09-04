import recipedata from "./recipe.json";

function RecipeImage() {
  let recipeImage = recipedata.map((image) => (
    <div key={image.name}>
      <img src={image.recipeImage} alt={image.name} className="recipeImage" />
    </div>
  ));
  return recipeImage
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage

