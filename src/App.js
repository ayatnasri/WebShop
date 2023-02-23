import { useState } from "react";
import "./App.css";
import products from "./products.json";

function App() {
  const [state, setState] = useState(products.products);
  console.log(state);
  return (
    <div className="App">
      <table>
        <thead></thead>
        <tbody>
          {state.map((e, i) => {
            return [
              <tr key={i}>
                <td>
                  <img className="img" src={e.image} alt="" />{" "}
                </td>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.price}</td>
                <td>{e.description}</td>
              </tr>,
            ];
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
