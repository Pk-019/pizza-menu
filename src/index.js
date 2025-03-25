import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useState, useEffect } from "react";

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
// root.render(<App />);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//BELOW IS THE HEADER COMPONENT
function Header() {
  //   const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

//BELOW FUNCTION IS THE MENU COMPONENT
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div className="pizzas">
        {/* Conditional Rendering (ternary operator) */}
        {pizzas.length > 0 ? (
          pizzas.map((pizza) => <Pizza PizzaObje={pizza} key={pizza.name} />)
        ) : (
          <p>We are working on our Menu , and we will back soon!!!</p>
        )}

        {/* Conditional Rendering (&& operator) */}
        {/* {pizzas.length > 0 &&
          pizzas.map((pizza) => (
            // <Pizza
            //   name={pizza.name}
            //   incridentsName={pizza.ingredients}
            //   photoName={pizza.photoName}
            //   price={pizza.price}
            //   soldOut={pizza.soldOut}
            // />
            <Pizza PizzaObje={pizza} key={pizza.name} />
          ))} */}

        {/* {BELOW IS THE STATIC PASSING OF THE PROPS} */}
        {/* <Pizza
          name="Pizza Spinaci"
          photoName="pizzas/spinaci.jpg"
          incridentsName="Tomato, mozarella, spinach, and ricotta cheese"
          price="100"
        />
        <Pizza
          name="Focaccia"
          photoName="pizzas/focaccia.jpg"
          incridentsName="Bread with italian olive oil and rosemary"
          price="200"
        />

        <Pizza
          name="Focaccia"
          photoName="pizzas/focaccia.jpg"
          incridentsName="Bread with italian olive oil and rosemary"
          price="200"
        /> */}
      </div>
    </main>
  );
}

//BELOW IS THE FUNCTION WHERE PROPS CARRY DATA FROM MENU COMPONENT AS OBJECT AND PASS AS ARGUMENT
function Pizza(props) {
  // console.log(props);
  if (props.PizzaObje.soldOut) return null; //Muliple return on conditonal rendering.

  return (
    <div className="pizza">
      <img src={props.PizzaObje.photoName} alt={props.PizzaObje.name} />
      <div>
        <h3>{props.PizzaObje.name}</h3>
        <p>{props.PizzaObje.incridentsName}</p>
        <span>{props.PizzaObje.price}</span>
        <span>{props.PizzaObje.soldOut}</span>
      </div>
    </div>
  );
}

//OUR DATA FOR PIZZA LISTING
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

//BELOW IS THE FOOTER COMPONENT
function Footer() {
  const hour = new Date().getHours();
  const openhour = 1;
  const closehour = 22;
  const isopen = hour >= openhour && hour <= closehour;

  // console.log(hour + " " + openhour);
  // if (hour >= openhour && hour <= closehour) {
  //   alert("we are currently open!!");
  // } else {
  //   alert(" sorry , we are closed now!!");
  // }

  return (
    <div>
      {/* BELOW IS THE ONE OF APPROACH */}
      {/* // <footer className="footer">
    //   {new Date().toLocaleDateString()} We are currently Open
    // </footer> */}

      <footer className="footer">
        {/* BELOW IS THE ONE OF APPROACH 2 SHOWING THE && CONDITIONAL REDENRING */}
        {/* {isopen && (
          <div className="order">
            <p>
              We are open until {openhour} : 00 . Come and visit us or order
              online
            </p>
            <button className="btn">Order</button>
          </div>
        )} */}

        {/* BELOW IS THE ONE OF APPROACH 3 SHOWING THE TERNARY CONDITIONAL REDENRING */}
        {isopen ? (
          <Order openhour={openhour} />
        ) : (
          <p>We will come back soon during {openhour}:00 !!!!</p>
        )}
      </footer>
    </div>
  );
}

//BELOW IS THE ORDER COMPONENT WHICH IS USED IN FOOTER COMPONENT
function Order(props) {
  console.log(props);
  return (
    <div className="order">
      <p>
        We are open until {props.openhour}:00. Come and visit us or order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
