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
        <Card className="shadow-lg">
          <div >
            <img style={{height:"300px"}} className = "img-fluid rounded" src={chef_picture} alt="" />
          </div>
          <Card.Body>
            <Card.Title>{chef_name}</Card.Title>
            <Card.Text>Years of experience: {years_of_experience}</Card.Text>
            <Card.Text>Numbers of recipes: {numbers_of_recipes}</Card.Text>
            <Card.Text>Likes {likes}</Card.Text>
            <button className="border-0 rounded bg-dark p-2 ">
              <Link
                className="text-decoration-none text-white"
                to={`/chefs/${id}`}
              >
                View Recipe
              </Link>
            </button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Chef;
