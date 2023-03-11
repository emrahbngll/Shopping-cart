import React from "react";

function Navbar() {
  return (
    <header>
      <div className="overlay"> </div>
      <nav>
        <h2>shop</h2>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li className="cart">
            <a href="#">
              <ion-icon name="basket-outline"></ion-icon>
              cart
              <span>0</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
