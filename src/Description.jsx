import { useParams, Link, useNavigate } from "react-router-dom";
import "./App.css";

function Description(props) {
  const parameters = useParams();
  const productID = props.products.find((p) => p.id === parameters.id);
  console.log(parameters, productID);
  const handelClick = () => {
    navigate(-1);
  };
  const navigate = useNavigate();
  return (
    <div className="moreInfo">
      <h2>
        <span>Name:</span> {productID.name}{" "}
      </h2>
      <img src={productID.image} alt={productID.name} />
      <ul>
        <li>
          <span> Product id :</span> {productID.id}{" "}
        </li>
        <li>
          <span>Price : </span>
          {productID.price}{" "}
        </li>
        <li>
          <p>
            <span>Description : </span> {productID.description}{" "}
          </p>
        </li>
      </ul>
      <button onClick={handelClick}>back</button>
      <Link to="/producter/">Back</Link>
    </div>
  );
}
export default Description;

/*
  <button
        onClick={() => {
          navigate("/producter/", { replace: true });
        }}
      >
        back
      </button>
      
      */
