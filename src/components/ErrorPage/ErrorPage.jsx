import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="w-50 mx-auto">
        <img
        className="img-fluid"
          src={
            "https://previews.123rf.com/images/aleksorel/aleksorel1703/aleksorel170300002/73468868-error-404-page-with-workers-vector-illustration-on-white-background-broken-web-page-graphic-design.jpg"
          }
          alt=""
        />
      </div>
      <div className="w-50 mx-auto text-center m-3">
        <Button variant="danger">
          <Link className="text-white text-decoration-none" to="/">
            Go to Home Page
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
