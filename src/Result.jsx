import "./App.css";
import { Link } from "react-router-dom";

function SearchResult(props) {
  let product = props.product;

  return (
    <div className="product">
      <div className="product-img">
        <img className="img" src={product.image} alt={product.name} />
        <div>
          <h3>{product.name}</h3>
          <Link to={`/producter/${product.id}`}>More information</Link>
        </div>
      </div>

      <div className="product-price">
        <span>{product.price}</span>
        <button>Add to card</button>
      </div>
    </div>
  );
}

export default SearchResult;

//
// <Route path="/moreInfo/:id" element={<Description more={product.description} />} />

/*
   const moreInfo = () => {
    console.log("more information ");

    <a href="" onClick={moreInfo}>

    </a>

<NavLink
            to="/moreInfo"
            element={<Description more={product.description} />}
          >
            {" "}
            More information
          </NavLink>
   };
   */

/*

   
  const filterData = product.filter((p) => {
    if (search === "") {
      return p;
    } else {
      return (
        p.name.toLowerCase().includes(search) || p.description.match(search)
      );
    }
  });

      
      <ul>
        {filterData.map((e) => (
          <li key={e.id}>{e.name}</li>
        ))}
      </ul>*/
