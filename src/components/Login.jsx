import React from 'react';
import { Link } from 'react-router-dom';
import { Chrome, Github, Facebook, Mail, Lock } from 'lucide-react';

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#CC8C87] to-[#EAB0B7]">
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Threadline</h1>
        </div>
      </header>
      
      <main className="flex-grow flex justify-center items-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md transform transition-all duration-300 ease-in-out hover:scale-105">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Bienvenue sur Threadline</h2>
          <h3 className="text-xl font-semibold mb-4 text-center text-gray-700">Se connecter</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Adresse Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="email" 
                  placeholder="Entrez votre email" 
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 ease-in-out" 
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mot de Passe</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="password" 
                  placeholder="Entrez votre mot de passe" 
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 ease-in-out" 
                />
              </div>
              <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors duration-300 ease-in-out">Mot de passe oublié ?</a>
            </div>
            <button 
              type="submit" 
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
            >
              Se connecter
            </button>
          </form>
          <div className="mt-8">
            <p className="text-center text-sm text-gray-600">ou continuer avec</p>
            <div className="mt-4 flex justify-center space-x-4">
              {[Chrome, Github, Facebook].map((Icon, index) => (
                <button 
                  key={index}
                  className="p-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Icon size={24} className="text-gray-600" />
                </button>
              ))}
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-gray-600">
            Vous n'avez pas de compte ? {' '}
            <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-300 ease-in-out">
              S'inscrire
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;