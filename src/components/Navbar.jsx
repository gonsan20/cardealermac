import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-red-400">
      <ul className="flex w-full justify-between my-3">
        <li>logo</li>
        <li>navegación 1</li>
        <li>navegación 2</li>
        <li>navegación 3</li>
        <li className="px-3">
          <Link to="/login">
            <button className="bg-indigo-500 p-2 text-white rounded-lg shadow-md hover:bg-indigo-700">
              Iniciar Sesión
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
