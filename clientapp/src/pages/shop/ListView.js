import React from "react";
import { NavLink } from "react-router-dom";

function ListView({ products }) {
  return (
    <div className="section">
      <div className="container grid">
        {products.map((curElem) => {
          const { id, name, image, price, description } = curElem;
          return (
            <div className="card grid grid-two-column">
              <figure>
                <img src={image} alt={name} />
              </figure>

              <div className="card-data">
                <h3>{name}</h3>
                <p>
                  {price}
                </p>
                <p>{description.slice(0, 90)}...</p>

                <NavLink to={`/product/${id}`} className="btn-main">
                  <button className="btn">Read More</button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListView;
