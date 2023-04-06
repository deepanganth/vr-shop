import {Routes,Route} from 'react-router-dom'
import Home from './Home';
import Product from './Product'
function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
    </Routes>
  );
}

export default App;
