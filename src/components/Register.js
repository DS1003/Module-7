import React from 'react';
import { Chrome, Github, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 py-12">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-6">Rejoignez Threadline</h2>
            <h3 className="text-xl font-semibold mb-4">S'inscrire</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Prénom</label>
                <input type="text" placeholder="Entrez votre prénom" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Nom</label>
                <input type="text" placeholder="Entrez votre nom" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" placeholder="Entrez votre email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
                <input type="password" placeholder="Créez votre mot de passe" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Adresse</label>
                <input type="text" placeholder="Entrez votre adresse" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Téléphone</label>
                <input type="tel" placeholder="Entrez votre numéro de téléphone" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date de naissance</label>
                <input type="date" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sexe</label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input type="radio" name="gender" value="male" className="form-radio" />
                    <span className="ml-2">Homme</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="gender" value="female" className="form-radio" />
                    <span className="ml-2">Femme</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="gender" value="other" className="form-radio" />
                    <span className="ml-2">Autre</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Pays</label>
                <input type="text" placeholder="Entrez votre pays" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Ville</label>
                <input type="text" placeholder="Entrez votre ville" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Code postal</label>
                <input type="text" placeholder="Entrez votre code postal" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Photo de profil</label>
                <input type="file" accept="image/*" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                S'inscrire
              </button>
            </form>
            <div className="mt-6">
              <p className="text-center text-sm text-gray-600">ou s'inscrire avec</p>
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
              Vous avez déjà un compte ? <Link to="/login" className="font-medium text-blue-600 hover:underline">Se connecter</Link>
            </p>
          </div>
        </div>
      );
};

export default Register;

