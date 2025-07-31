import './App.css';
import Sidebar from './components/sidebar';
import Topbar from './components/Topbar';
import Card from './components/Card';
import ThemeProvider from './Context/ThemeProvider'
import Middlesection from './components/Middlesection';
import Order from './components/Order';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import Inventory from './components/Inventory';


const data = [
  { product: "Products", amount: 120, view: "View Products", link: "/products" },
  { product: "Orders", amount: 80, view: "View Orders", link: "/orders" },
  { product: "Inventory", amount: 50, view: "View Inventory", link: "/inventory" },
  { product: "Suppliers", amount: 30, view: "View Suppliers", link: "/suppliers" }
];




function Dashboard() {
  return (
    <div className="flex flex-col flex-1 overflow-auto">
      <Topbar />
      <Card objinfos={data} />
      <Middlesection />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
        <ThemeProvider>
        <div className="flex h-screen overflow-hidden relative dark:bg-gray-900 dark:text-white">
          <Sidebar />
          
         
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Orders" element={<Order/>} />
            <Route path="/inventory" element={<Inventory/>} />
          </Routes>
        </div>
        </ThemeProvider>  
       
      
    </BrowserRouter>
  );
}

export default App;