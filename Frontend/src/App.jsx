
import { useEffect, useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import axois from "axios";
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    axios.get("/api/products")
    .then((res)=>{
        setProducts(res.data)
        console.log(products);
        

    }).catch(()=>{
      console.log("Error Occured");
      
    })

  },[])

  return (
    <>
    <h1 style={{background:"black",color:"green"}}>FrontEnd</h1>
    <h2>{products.length}</h2>

    {
        products.map((i)=>(
          
        <div key={i.id}>
        <h3>{i.name}</h3> 
        <h4>{i.price}</h4>
       
        {i.inStock? <p>Available</p>: <p>Not Available</p>}
        </div>))

    }
    
    </>
  )
}

export default App
