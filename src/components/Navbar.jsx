import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { AiOutlineSun } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import {useState } from "react";

function Navbar() {
  const [themeMode, setThemeMode] = useState(true)
 
  const themeChanger = () => {
    setThemeMode(!themeMode)
  }
  

  return (
    <div className=" w-full flex justify-between px-5 py-3 bg-green-400">
      <div className="w-10">
        <img src={logo} alt="" className="w-full" />
      </div>
      <ul className="flex gap-10">
        <li>
          <NavLink 
          to="/"
          className={({isActive}) => 
            
          isActive ? "text-sky-900 font-bold underline decoration-orange-600" : "text-sky-800 font-bold"
          }
          >Home</NavLink>
        </li>
        <li>
          <NavLink
          to="/favorites"
          className={({isActive}) => 
            
          isActive ? " text-sky-900 font-bold underline decoration-orange-600" : "text-sky-800 font-bold"
          }
          >Favorites</NavLink>
        </li>
        <li>
          <NavLink
          to="/mealplanner"
          className={({isActive}) => 
            
          isActive ? " text-sky-900 font-bold underline decoration-orange-600" : "text-sky-800 font-bold"
          }
          >Mealplanner</NavLink>
        </li>
      </ul>
      <div>
        <button 
      className=""
      onClick={themeChanger}
      >
        {
          themeMode ? <AiOutlineSun className="text-xl"/> : <MdDarkMode/>
        }
      </button>
      </div>
    </div>
  );
}

export default Navbar;
