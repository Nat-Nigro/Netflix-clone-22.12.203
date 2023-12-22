import { Col } from "react-bootstrap";

const SingleMovie = (props) => (
  <Col>
    <img className="w-100" src={props.imageUrl} />
  </Col>
);

export default SingleMovie;
