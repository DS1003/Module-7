import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Facebook, Mail, Lock, User, Linkedin, Github, Phone, Home, Calendar, Globe, Building, Mail as Envelope, Camera } from 'lucide-react';

const styles = `
  .form-container {
    transition: all 0.6s ease-in-out;
  }
  .overlay-container {
    transition: transform 0.6s ease-in-out;
  }
  .overlay {
    transition: transform 0.6s ease-in-out;
  }
  .overlay-left, .overlay-right {
    transition: transform 0.6s ease-in-out;
  }
  .right-panel-active .form-container.sign-up {
    transform: translateX(100%);
    display: block;
    z-index: 5;
    animation: show 0.6s;
  }
  .right-panel-active .form-container.sign-in {
    transform: translateX(100%);
    display: none;
  }
  .right-panel-active .overlay-container {
    transform: translateX(-100%);
  }
  .right-panel-active .overlay {
    transform: translateX(50%);
  }
  .right-panel-active .overlay-left {
    transform: translateX(0);
  }
  .right-panel-active .overlay-right {
    transform: translateX(20%);
  }
  @keyframes show {
    0%, 49.99% {
      opacity: 0;
      z-index: 1;
    }
    50%, 100% {
      opacity: 1;
      z-index: 5;
    }
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    phone: '',
    birthDate: '',
    gender: '',
    country: '',
    city: '',
    postalCode: '',
    profilePicture: null,
  });
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.email === 'seydiop@07' && loginData.password === 'admin') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } else {
      setError('Identifiants incorrects');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Implement registration logic here
    console.log('Registration data:', registerData);
  };

  const handleInputChange = (e, formType) => {
    const { name, value, files } = e.target;
    if (formType === 'login') {
      setLoginData({ ...loginData, [name]: value });
    } else {
      setRegisterData({
        ...registerData,
        [name]: name === 'profilePicture' ? files[0] : value,
      });
    }
  };

  const InputField = ({ icon: Icon, ...props }) => (
    <div className="relative">
      <Icon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
      <input
        {...props}
        className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );

  return (
    <>
      <style>{styles}</style>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className={`relative w-[1000px] h-[600px] bg-white rounded-3xl shadow-xl overflow-hidden ${isRightPanelActive ? 'right-panel-active' : ''}`}>
          {/* Sign In Form */}
          <div className="form-container sign-in absolute top-0 left-0 h-full w-1/2 z-2 p-12 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6 text-blue-600">Connexion</h2>
            <div className="flex justify-center space-x-4 mb-4">
              {[Facebook, Github, Linkedin].map((Icon, index) => (
                <button key={index} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
            <p className="text-center text-gray-500 mb-6">ou utilisez votre email :</p>
            <form onSubmit={handleLogin} className="space-y-4">
              <InputField icon={Mail} type="email" name="email" placeholder="Email" value={loginData.email} onChange={(e) => handleInputChange(e, 'login')} />
              <InputField icon={Lock} type="password" name="password" placeholder="Mot de passe" value={loginData.password} onChange={(e) => handleInputChange(e, 'login')} />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                SE CONNECTER
              </button>
            </form>
          </div>

          {/* Sign Up Form */}
          <div className="form-container sign-up absolute top-0 left-0 h-full w-1/2 hidden z-1 p-12 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6 text-blue-600">Créer un compte</h2>
            <div className="flex justify-center space-x-4 mb-4">
              {[Facebook, Github, Linkedin].map((Icon, index) => (
                <button key={index} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
            <p className="text-center text-gray-500 mb-6">ou inscrivez-vous avec votre email :</p>
            <form onSubmit={handleRegister} className="space-y-4 overflow-y-auto max-h-[400px] pr-4">
              <InputField icon={User} type="text" name="lastName" placeholder="Nom" value={registerData.lastName} onChange={(e) => handleInputChange(e, 'register')} />
              <InputField icon={User} type="text" name="firstName" placeholder="Prénom" value={registerData.firstName} onChange={(e) => handleInputChange(e, 'register')} />
              <InputField icon={Mail} type="email" name="email" placeholder="Email" value={registerData.email} onChange={(e) => handleInputChange(e, 'register')} />
              <InputField icon={Lock} type="password" name="password" placeholder="Mot de passe" value={registerData.password} onChange={(e) => handleInputChange(e, 'register')} />
              <InputField icon={Phone} type="tel" name="phone" placeholder="Téléphone" value={registerData.phone} onChange={(e) => handleInputChange(e, 'register')} />
              <InputField icon={Home} type="text" name="address" placeholder="Adresse" value={registerData.address} onChange={(e) => handleInputChange(e, 'register')} />
              <InputField icon={Calendar} type="date" name="birthDate" placeholder="Date de naissance" value={registerData.birthDate} onChange={(e) => handleInputChange(e, 'register')} />
              <div className="relative flex space-x-4 items-center">
                <label className="text-gray-400">Sexe :</label>
                {['male', 'female'].map((gender) => (
                  <div key={gender} className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value={gender}
                      checked={registerData.gender === gender}
                      onChange={(e) => handleInputChange(e, 'register')}
                    />
                    <label className="ml-2">{gender === 'male' ? 'Homme' : 'Femme'}</label>
                  </div>
                ))}
              </div>
              <InputField icon={Globe} type="text" name="country" placeholder="Pays" value={registerData.country} onChange={(e) => handleInputChange(e, 'register')} />
              <InputField icon={Building} type="text" name="city" placeholder="Ville" value={registerData.city} onChange={(e) => handleInputChange(e, 'register')} />
              <InputField icon={Envelope} type="text" name="postalCode" placeholder="Code postal" value={registerData.postalCode} onChange={(e) => handleInputChange(e, 'register')} />
              <InputField icon={Camera} type="file" name="profilePicture" accept="image/*" onChange={(e) => handleInputChange(e, 'register')} />
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                S'INSCRIRE
              </button>
            </form>
          </div>

          {/* Overlay Container */}
          <div className="overlay-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden z-100">
            <div className="overlay bg-blue-600 text-white relative -left-full h-full w-[200%]">
              <div className="overlay-left absolute top-0 left-0 flex flex-col justify-center items-center w-1/2 h-full -translate-x-[20%] p-12">
                <h2 className="text-4xl font-bold mb-6">Bon retour !</h2>
                <p className="mb-8 text-center">Connectez-vous pour accéder à votre espace personnel</p>
                <button
                  onClick={() => setIsRightPanelActive(false)}
                  className="border-2 border-white px-10 py-2 rounded-lg font-semibold uppercase tracking-wide hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Se connecter
                </button>
              </div>
              <div className="overlay-right absolute top-0 right-0 flex flex-col justify-center items-center w-1/2 h-full translate-x-0 p-12">
                <h2 className="text-4xl font-bold mb-6">Bienvenue !</h2>
                <p className="mb-8 text-center">Créez votre compte et commencez votre voyage avec nous</p>
                <button
                  onClick={() => setIsRightPanelActive(true)}
                  className="border-2 border-white px-10 py-2 rounded-lg font-semibold uppercase tracking-wide hover:bg-white hover:text-blue-600 transition-colors"
                >
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;