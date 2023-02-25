import "./App.css";

function SearchResult(props) {
  let product = props.product;
  const moreInfo = () => {
    console.log("more information ");
    //product.description;
  };
  return (
    <div className="product">
      <div className="product-img">
        <img className="img" src={product.image} alt="" />
        <div>
          <h3>{product.name}</h3>
          <a href="" onClick={moreInfo}>
            More information
          </a>
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
