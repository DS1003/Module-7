import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, Phone, MapPin, Bell, Camera } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirm_password: '',
    phoneNumber: '',
    address: '',
    gender: '',
    photo: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      photo: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#EAB0B7] to-[#CC8C87]">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#242424]">Threadline</h1>
          <input type="text" placeholder="Rechercher..." className="bg-gray-100 text-[#242424] px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#EAB0B7]" />
          <div className="flex space-x-4">
            <Link to="/" className="text-[#242424] hover:text-[#CC8C87]"><User size={24} /></Link>
            <Link to="/messages" className="text-[#242424] hover:text-[#CC8C87]"><Mail size={24} /></Link>
            <Link to="/notifications" className="text-[#242424] hover:text-[#CC8C87]"><Bell size={24} /></Link>
          </div>
          <button className="bg-[#CC8C87] hover:bg-[#EAB0B7] text-white px-4 py-2 rounded-full transition duration-300">
            Connexion
          </button>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto my-8 px-4">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#242424]">
            Rejoignez l'aventure Threadline !
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstname" className="block text-sm font-medium text-[#242424] mb-1">Prénom</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#CC8C87]" size={18} />
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="pl-10 w-full px-4 py-2 border border-[#EAB0B7] rounded-full focus:ring-[#CC8C87] focus:border-[#CC8C87]"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="lastname" className="block text-sm font-medium text-[#242424] mb-1">Nom</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#CC8C87]" size={18} />
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="pl-10 w-full px-4 py-2 border border-[#EAB0B7] rounded-full focus:ring-[#CC8C87] focus:border-[#CC8C87]"
                  required
                />
              </div>
            </div>
            <div className="col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-[#242424] mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#CC8C87]" size={18} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10 w-full px-4 py-2 border border-[#EAB0B7] rounded-full focus:ring-[#CC8C87] focus:border-[#CC8C87]"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#242424] mb-1">Mot de passe</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#CC8C87]" size={18} />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="pl-10 w-full px-4 py-2 border border-[#EAB0B7] rounded-full focus:ring-[#CC8C87] focus:border-[#CC8C87]"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="confirm_password" className="block text-sm font-medium text-[#242424] mb-1">Confirmer le mot de passe</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#CC8C87]" size={18} />
                <input
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  className="pl-10 w-full px-4 py-2 border border-[#EAB0B7] rounded-full focus:ring-[#CC8C87] focus:border-[#CC8C87]"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-[#242424] mb-1">Numéro de téléphone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#CC8C87]" size={18} />
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="pl-10 w-full px-4 py-2 border border-[#EAB0B7] rounded-full focus:ring-[#CC8C87] focus:border-[#CC8C87]"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-[#242424] mb-1">Adresse</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#CC8C87]" size={18} />
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="pl-10 w-full px-4 py-2 border border-[#EAB0B7] rounded-full focus:ring-[#CC8C87] focus:border-[#CC8C87]"
                  required
                />
              </div>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-[#242424] mb-2">Genre</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="MALE"
                    checked={formData.gender === 'MALE'}
                    onChange={handleChange}
                    className="form-radio text-[#CC8C87]"
                    required
                  />
                  <span className="ml-2 text-[#242424]">Homme</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="FEMALE"
                    checked={formData.gender === 'FEMALE'}
                    onChange={handleChange}
                    className="form-radio text-[#CC8C87]"
                    required
                  />
                  <span className="ml-2 text-[#242424]">Femme</span>
                </label>
              </div>
            </div>
            <div className="col-span-2">
              <label htmlFor="photo" className="block text-sm font-medium text-[#242424] mb-2">Photo de profil (optionnel)</label>
              <div className="flex items-center">
                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-[#EAB0B7]">
                  <Camera className="h-full w-full text-white p-2" />
                </span>
                <label
                  htmlFor="photo"
                  className="ml-5 bg-white py-2 px-3 border border-[#CC8C87] rounded-full shadow-sm text-sm leading-4 font-medium text-[#242424] hover:bg-[#EAB0B7] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CC8C87] cursor-pointer transition duration-300"
                >
                  Changer
                </label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*"
                />
              </div>
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-[#CC8C87] hover:bg-[#EAB0B7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CC8C87] transition duration-300"
              >
                S'inscrire
              </button>
            </div>
          </form>
          <p className="mt-6 text-center text-sm text-[#242424]">
            Vous avez déjà un compte ?{' '}
            <Link to="/login" className="font-medium text-[#CC8C87] hover:text-[#EAB0B7] transition duration-300">
              Se connecter
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Register;