
import './App.css';
import Navbar from './coponents/Navbar';
import Refernce from './coponents/neck';
import Base from './coponents/Base';
import Plate from './coponents/Baseplate2';
import Footer from './coponents/footer';
import Item1 from './coponents/item1';
import Item2 from './coponents/item2';
import Item3 from './coponents/item3';
import Item4 from './coponents/item4';
import { useSelector } from 'react-redux';




function App() {
  const cart = useSelector(state => state.cart);
  return (
    <div className="App">
      <Navbar/>
      <Refernce/>
      <Item1/>
      <Item2/>
      <Item3/>
      <Item4/>
      <Base/>
      <Plate/>
      <Footer/> 
      <div className='cart'>
      <h5><i>Add to cart</i></h5>
       <div className='counter'>
       
       <p className='con'>{cart.totalQty}</p>
       </div>
      </div>
    </div>
  );
}

export default App;
