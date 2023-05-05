import { Toast } from "react-bootstrap";


const ToastComponent = ({showToast,setShowToast}) => {
    return (
        <div
      style={{
        position: "sticky",
        top: "50px",
      }}
      className="d-flex justify-content-center"
    >
      <Toast
        onClose={() => setShowToast(false)}
        style={{
          width: "500px",
          position: "sticky",
          top: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        autohide
        show={showToast}
      >
        <Toast.Header className="mr-auto w-100 bg-success text-light text-center">
          <strong className="mr-auto text-white w-100">
            <strong>Success</strong>
          </strong>
          <small></small>
        </Toast.Header>
        <Toast.Body className="fs-4  text-center">
          Recipe is successfully added
        </Toast.Body>
      </Toast>
    </div>
    );
};

export default ToastComponent;