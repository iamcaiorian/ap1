import React, { useState, useEffect } from 'react';

const Questao04 = () => {
  // Utiliza o estado para armazenar as capitais de maior e menor população
  const [menorCapital, setMenorCapital] = useState('');
  const [maiorCapital, setMaiorCapital] = useState('');

  // Promise simulando o retorno de dados de uma API
  const fetchCapitalsPromise = () => {
    return new Promise((resolve) => {
      // Simula um retorno de dados após um tempo (1 segundo)
      setTimeout(() => {
        resolve([
          { "capital": ["Dublin"], "population": 4994724 },
          { "capital": ["Nicosia"], "population": 1207361 },
          { "capital": ["Madrid"], "population": 47351567 }
        ]);
      }, 1000); // Atraso de 1 segundo para simular requisição assíncrona
    });
  };

  // Função assíncrona para usar a Promise criada
  const fetchCapitals = async () => {
    try {
      // Obtém os dados resolvidos pela Promise
      const data = await fetchCapitalsPromise();
      
      // Ordena os países pelo tamanho da população
      const sortedData = data.sort((a, b) => a.population - b.population);
      
      // Define a capital com menor e maior população
      setMenorCapital(sortedData[0].capital[0]);
      setMaiorCapital(sortedData[sortedData.length - 1].capital[0]);
    } catch (error) {
      console.error('Erro ao obter os dados:', error);
    }
  };

  // useEffect para chamar a função de busca ao montar o componente
  useEffect(() => {
    fetchCapitals();
  }, []);

  // Renderiza na tela as capitais com maior e menor população
  return (
    <div>
      <h1>Questão 4</h1>
      <h2>Capitais com Maior e Menor População</h2>
      <p><strong>Capital com Menor População:</strong> {menorCapital}</p>
      <p><strong>Capital com Maior População:</strong> {maiorCapital}</p>
    </div>
  );
}

export default Questao04;
