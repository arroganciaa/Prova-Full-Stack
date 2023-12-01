import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export const LoginCadastro = () => {
  const [userName, setUser] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate();


  const handleAuthentication = async (userData) => {
    const userAdim = 'admin';
    const senhaAdmin = 'abcd=1234';

    if (userAdim === userName && senha === senhaAdmin){
      navigate('/PaginaInicial')
    } else {
      alert('Usuario ou senha incorretos')
    }
   
  };
  
  
  

  return (
    <div className='container'>
      
      <div className="inputs">
        <div className="input">
          <input
            type="text"
            name="userName"
            placeholder="Nome de usuário"
            value={userName}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        
        <div className="input">
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
      </div>
      <div className="submit-container">
        <div className="submit" onClick={handleAuthentication}>
          {"Login"}
        </div>
      </div>
    </div>
  );
};

export default LoginCadastro;
