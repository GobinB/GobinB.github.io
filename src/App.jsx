import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/toggle";


const App = () => {
  return(
   <div>
    <Toggle/>
    <Intro/>
    <About/>
    <ProductList/>
    <Contact/>
  </div>

  );
};

export default App;