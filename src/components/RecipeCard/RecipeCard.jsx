import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import ToastComponent from "../ToastComponent/ToastComponent";

const RecipeCard = ({ recipe }) => {
  console.log(recipe);
  const { name, ingredients, method, rating } = recipe;
  const [favourite, setFavourite] = useState(false);
const [showToast,setShowToast]=useState(false)

  const favButtonHandler = () => {
    setFavourite(true);
    setShowToast(true);
  };

  return (
    <div>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>{recipe.name}</Card.Title>
            <ul>
              {ingredients.map((ingredient,index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p>Method: {method}</p>
            <p>rating: {rating}</p>
            <div>
              {favourite === !true ? (
                <Button onClick={favButtonHandler} variant="warning">
                  favourite
                </Button>
              ) : (
                <Button  variant="success">
                  favourite
                </Button>
              )}
            </div>
          </Card.Body>
        </Card>
        <ToastComponent showToast={showToast} setShowToast={setShowToast} ></ToastComponent>
      </Col>
    </div>
  );
};

export default RecipeCard;
