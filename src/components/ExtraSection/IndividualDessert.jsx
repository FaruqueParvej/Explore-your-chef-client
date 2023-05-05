import { Col } from "react-bootstrap";


const IndividualDessert = ({dessert}) => {
    const {id,src,caption,description}=dessert;
    return (
        <div className="my-2 text-center">
            <Col><img
        style={{height:"200px"}}
          className="img-fluid w-50"
          src={
            src
          }
          alt=""
        />
        <h5 className="border border-1 px-1 py-2 m-2 rounded">{caption}</h5>
       
           </Col>
        </div>
    );
};

export default IndividualDessert;