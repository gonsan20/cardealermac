import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h2 className="m-3 text-center text-3xl font-extrabold text-gray-900">
        inicia sesion en tu cuenta
      </h2>
      <form action="" className="mt-8 max-w-md">
        <div>
          <input
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500"
            type="email"
            placeholder="cuenta@dominio.com"
            required
          />
          <input
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500"
            type="password"
            required
          />
        </div>
        <div>
          <div className='flex justify-between'>
            <label htmlFor="recuerdame">
              <input type="checkbox" name="recuerdame" />
              Recuérdame
            </label>
          </div>
          <div>
            <Link to="/">Olvidaste tu contraseña</Link>
          </div>
        </div>
        <div>
          <Link to="/admin">
            <button type="submit">Iniciar Sesión</button>
          </Link>
        </div>
        <div>O</div>
        <div>
          <button>Continúa con Google</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
