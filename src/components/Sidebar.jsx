

import { NavLink } from 'react-router-dom';
 
const Sidebar = () => {
  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? 'block bg-blue-700 px-4 py-2 rounded'
      : 'block hover:bg-blue-700 px-4 py-2 rounded';
 
  return (
    <aside className="w-64 bg-blue-800 text-white min-h-screen p-5">
      <h1 className="font-bold text-2xl mb-6">StockMaster</h1>
      <nav className="space-y-2">
        <NavLink to="/" className={getNavLinkClass}>Dashboard</NavLink>
        <NavLink to="/products" className={getNavLinkClass}>Products</NavLink>
        <NavLink to="/Orders" className={getNavLinkClass}>Orders</NavLink>
        <NavLink to="/inventory" className={getNavLinkClass}>Inventory</NavLink>
        <NavLink to="/users" className={getNavLinkClass}>Users</NavLink>
      </nav>
    </aside>
  );
};
 
export default Sidebar;
   