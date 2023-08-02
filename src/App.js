
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
// import Footer from "./components/Footer";

function App() {
  const productList = [
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
  return ( 
  <>
  <Navbar/>
  <ProductList productList={productList}/>
  {/* <Footer/> */}
  </>
  );
}

export default App;
