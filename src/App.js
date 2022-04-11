import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Orders from './components/Orders/Orders';
import Product from './components/Product/Product';
import Signin from './components/Signin/Signin';
import { Toaster } from 'react-hot-toast';



function App() {
 

  return (
    <div className="App">
      <Header></Header>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signin></Signin>}></Route> 
        <Route path='*' element={ <NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
