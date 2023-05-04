import { useLoaderData, useParams } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";
import { Row } from "react-bootstrap";


const Recipe = () => {
    // const { id } = useParams();
    const chef = useLoaderData();
    const {
        chef_picture,
        chef_name,
        bio,
        likes,
        numbers_of_recipes,
        years_of_experience,
        recipes
      } = chef;
    // console.log(id);
    // console.log(recipe);
    return (
        <div>
            <img src={chef_picture} alt="" />
            <p>{chef_name}</p>
            <p>Bio: {bio}</p>
            <p>Likes: {likes}</p>
            <p>Number of Recipes: {numbers_of_recipes}</p>
            <p>Experience: {years_of_experience}</p>
            <Row xs={1} md={3} className="g-4">
            {
                recipes.map(recipe=><RecipeCard key={recipe.name} recipe={recipe}></RecipeCard>)
            }
            </Row>
        </div>
    );
};

export default Recipe;