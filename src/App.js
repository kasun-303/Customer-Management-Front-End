
import './App.css';

import NavBar from './components/NavBar';

import CodeformInterview from './components/CustomerManagementSystem';


import {BrowserRouter, Routes,Route} from 'react-router-dom';
import AddCustomer from './components/AddCustomer';
import AllCustomers from './components/AllCustomers';
import EditCustomer from './components/EditCustomer';


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
   <Route path='/' element={<CodeformInterview/>}/>
   <Route path='/add' element={<AddCustomer />}/>
    <Route path='/all' element={<AllCustomers/>}/>
    <Route path='/edit/:id' element={<EditCustomer/>}/>
   </Routes>
    </BrowserRouter>
  );
}

export default App;
