import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const nayoks = ['Anowar', 'Jafor', 'Salman', 'Manna', 'Bobi', 'Alomgir']
  const products = [
    { name: "Photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$60.99" },
    { name: "PDF Reader", price: "$6.98" },
    { name: "Primer Elements", price: "$246.98" },
  ];
  const myFriends = ['Ovi', 'Rana', 'Samiul', 'Alom', 'Momin', 'Raisul'];

  return (
    <div className="App">
      <header className="App-header">
        <h2>I am react Person</h2>
        <Setup></Setup>
        <Counter></Counter>
        <Users></Users>
        <Photos></Photos>

        <ul>
          {
            myFriends.map( f => <h2>{f}</h2>)
          }
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
       
        <Person name="Munna" job="Football" ticket="456"></Person>
        <Person name="Arham" job="Dorshok" ticket="987"></Person>
        <Person name="Masud" job="Refarey" ticket="876"></Person>
        <Person name="Rana" job="Bit" ticket="543"></Person>
        
      </header>
    </div>
  );
}

function Setup (){
  const [count, setNumber] = useState(30);
  const styleCountBtn = {
    backgroundColor: 'lightgray',
    color: 'red',
    padding: '5px 30px',
    borderRadius: '5px',
    marginRight: '10px'
  }
 
  return <div>
    <h2>Setup Number: {count}</h2>
    <button onClick={() => setNumber(count + 1)} style={styleCountBtn}>Plus</button>
    <button onClick={() => setNumber(count-1)} style={styleCountBtn}>Minus</button>
  </div>
}

function Counter() {
  const [count, setCount] = useState(10)
 
  // const handleIncrease = () =>  setCount(count + 1);

  // const decrease = () => setCount(count - 1);
    return <div>
      <h2>Count:{count}</h2>
      <button onMouseMove={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
}

function Users () {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>Daynamic Users: {users.length}</h2>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Photos(){
  const [photos, setPhotos] = useState([]);

 useEffect(() =>{
  fetch('https://jsonplaceholder.typicode.com/photos')
  .then(res => res.json())
  .then(data => setPhotos(data))
 },[])

  return (
    <div>
     <h2>Daynamic Photos: {photos.length}</h2>
     <ul>
       {
         photos.map(photo => <li>{photo.url}</li>)
       }
     </ul>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left",
  }
const {name, price} = props.product;  

  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  );
}

function Person(props) {
  return (
    <div style={{ border: "1px solid yellow", width: "400px", margin: "10px" }}>
      <h3>My name: {props.name}</h3>
      <p>My profession: {props.job}</p>
      <p>
        <em>Ticket: {props.ticket}</em>
      </p>
    </div>
  );
}

export default App;
