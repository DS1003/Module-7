import React from 'react';
import { Link } from 'react-router-dom';
import { Chrome, Github, Facebook } from 'lucide-react';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Bienvenue sur Threadline</h2>
        <h3 className="text-xl font-semibold mb-4">Se connecter</h3>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Adresse Email</label>
            <input type="email" placeholder="entrez votre email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Mot de Passe</label>
            <input type="password" placeholder="entrez votre mot de passe" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            <a href="#" className="text-sm text-blue-600 hover:underline">Mot de passe oublié ?</a>
          </div>
          <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Se connecter
          </button>
        </form>
        <div className="mt-6">
          <p className="text-center text-sm text-gray-600">ou continuer avec</p>
          <div className="mt-4 flex justify-center space-x-4">
            <button className="p-2 border rounded-md hover:bg-gray-50">
              <Chrome size={24} />
            </button>
            <button className="p-2 border rounded-md hover:bg-gray-50">
              <Github size={24} />
            </button>
            <button className="p-2 border rounded-md hover:bg-gray-50">
              <Facebook size={24} />
            </button>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-gray-600">
          Vous n'avez pas de compte ? <Link to="/register" className="font-medium text-blue-600 hover:underline">S'inscrire</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;