
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import React, {useState} from 'react'

// import Footer from "./components/Footer";

function App() {
  const products = [
    {
      price : 99999,
      name : "iphone x",
      quantity : 0,
    },
    {
      price : 88888,
      name : "iphone 13",
      quantity : 0,
    },
  ]

  
  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

    const incrementQuantity = (index)=>{
      let newProductList = [...productList];
      let newTotalAmount = totalAmount;
      newProductList[index].quantity++;
      newTotalAmount += newProductList[index].price;
      setTotalAmount(newTotalAmount);
      setProductList(newProductList);
    }
 
    const decrementQuantity = (index)=>{
      let newProductList = [...productList];
      let newTotalAmount = totalAmount;
      if (newProductList[index].quantity > 0) {
        newProductList[index].quantity--;
        newTotalAmount -= newProductList[index].price;
      }
      setTotalAmount(newTotalAmount);
      setProductList(newProductList);
      }
    

  return ( 
  <>
  <Navbar/>
  <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>
  {/* <Footer/> */}
  </>
  );
}

export default App;
