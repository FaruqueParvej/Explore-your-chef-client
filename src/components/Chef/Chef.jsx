import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const {
    id,
    chef_picture,
    chef_name,
    likes,
    numbers_of_recipes,
    years_of_experience,
  } = chef;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <img src={chef_picture} alt="" />
            <Card.Title>{chef_name}</Card.Title>
            <Card.Text>
              <div>
              <p>Years of experience: {years_of_experience}</p>
                </div>
              <div>
                <p><p>Numbers of recipes: {numbers_of_recipes}</p></p>
              </div>
              <div>
                <p>Likes {likes}</p>
              </div>
            </Card.Text>
            <button><Link to={`/chefs/${id}`}>View Recipe</Link></button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Chef;