import { Card, Col, Row } from "react-bootstrap";

const RecipeCard = ({ recipe }) => {
  console.log(recipe);
  const { name, ingredients, method, rating } = recipe;
  return (
    <div>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>{recipe.name}</Card.Title>
            <ul>
              {ingredients.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </ul>
            <p>Method: {method}</p>
            <p>rating: {rating}</p>
            <button>favourite</button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default RecipeCard;
