import React from "react";

export default function Product(props) {

    return (
    
    <div className="container row row-cols-1 row-cols-md-3 g-4">
      <div class="card my-4">
        <h5 class="card-header">{props.product.name}</h5>
        <div class="card-body">
          <h5 class="card-title">₹ {props.product.price}</h5>
          <button className="btn btn-outline-secondary mx-1" onClick={()=>props.decrementQuantity(props.index)}>-</button>
          <button className="btn btn-outline-secondary mx-1">{props.product.quantity}</button>
          <button className="btn btn-outline-secondary mx-1" onClick={()=> {props.incrementQuantity(props.index)}}>+</button>
          <p class="card-text mt-1">
            Total Price : ₹{props.product.quantity*props.product.price}
          </p>
        </div>
      </div>
    </div>
  );
}
