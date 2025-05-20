import React from 'react';
import { Link } from 'react-router-dom';

function Card({ title, image, price, addToCart, isProduct, id, product }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-price">{price}</p>
      {isProduct ? (
        <React.Fragment>
          <Link to={'/products/' + id} className="card-button">
            View Details
          </Link>
          <button
            className="card-button"
            onClick={() => addToCart(product)}
            disabled={product && product.in_stock === false}
          >
            Add to Cart
          </button>
        </React.Fragment>
      ) : (
        <p>Service</p>
      )}
    </div>
  );
}

export default Card;
