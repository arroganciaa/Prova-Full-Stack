import React, { useEffect, useState } from 'react';

export const Pedido = () => {

  const [produtoObject, setFormData] = useState({
    nome: '',
    celular: '',
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...produtoObject,
      [name]: value,
    });
  };

  const saveProduct = async () => {
    try {
      console.log('objeto produto', produtoObject)
      const response = await fetch('http://localhost:5009/api/Produto/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(produtoObject),
      });
      if (response.ok) {
        window.location.reload();
      } else {
        console.error('Erro ao cadastrar o produto');
      }
    } catch (error) {
      console.error('Erro ao cadastrar o produto:', error);
    }
  };
  

  return (
    <div className='container'>
      
      <div className="inputs">
        <div className="input">
          <input
            type="text"
            name="produto"
            placeholder="Nome do Produto"
            value={produtoObject.nome}
            onChange={inputChange}
          />
        </div>
        
        <div className="input">
          <input
            type="text"
            name="celular"
            placeholder="Celular"
            value={produtoObject.celular}
            onChange={inputChange}
          />
        </div>
      </div>
      <div className="submit-container">
        <div className="submit" onClick={saveProduct}>
          {"Cadastrar"}
        </div>
      </div>
    </div>
  );
}


export default Pedido;
