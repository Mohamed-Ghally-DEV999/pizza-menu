import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import pizzaya from './pizzas/spinaci.jpg';
import fungaya from './pizzas/funghi.jpg';
import margerita from './pizzas/margherita.jpg';
import prosciutto from './pizzas/prosciutto.jpg';
import salamino from './pizzas/salamino.jpg';
import focaccia from './pizzas/focaccia.jpg';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: focaccia,
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: margerita,
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: pizzaya,
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: fungaya,
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: salamino,
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: prosciutto,
    soldOut: false,
  },
];

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = [pizzaData];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic.
            all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => <Pizza pizzaObj={pizza} key={pizza.name} />)}
          </ul>
        </>
      ) : <p> We're still working on our menu. Please come back later :)</p>}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach"
        photoName={pizzaya}
        price={10}
      />

      <Pizza
        name="Pizza Fungi"
        ingredients="Tomato, tany tany"
        photoName={fungaya}
        price={12}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {

  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 2;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? < Order closeHour={closeHour} openHour={openHour} />
        : <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>}
    </footer >
  );
}

function Order({ closeHour, openHour }) {
  return <div className="order">
    <p>We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.</p>
    <button className="btn">Order</button>
  </div>
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
  <App />
</React.StrictMode>)