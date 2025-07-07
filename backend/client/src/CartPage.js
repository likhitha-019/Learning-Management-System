import React from "react";

function CartPage({ cart }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No videos added yet.</p>
      ) : (
        <ul>
          {cart.map((c) => (
            <li key={c.id}>
              {c.title} - {c.hours} hrs
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
