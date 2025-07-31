import React from 'react';
import { Themecontexts } from '../Context/Themecontext';
import { useContext } from 'react';

const Topbar = () => {
   const { theme, toggletheme } = useContext(Themecontexts);

  return (

    <div className="w-full bg-white px-6 py-4 shadow flex justify-between items-center ">
      <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search product.."
          className="border px-3 py-2  rounded-md outline-none focus:ring-2 focus:ring-blue-500"
        />


         <div>
           <button
      className="absolute top-4 right-4 z-50 border px-4 py-2 rounded bg-white dark:bg-gray-800 text-black dark:text-white"
      onClick={toggletheme}
    >
      {theme === "dark" ? "🌙 Dark" : "🌞 Light"}
    </button>
 
        </div>
   
        <div className="bg-blue-600 mr-25 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">
          JS
        </div>
       
   
      </div>
    </div>
  );
};
 
export default Topbar;