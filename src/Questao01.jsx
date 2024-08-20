import React from 'react';

// Componente Questao01A utilizando arrow function
const Questao01A = () => {

  // Lista de objetos a ser passada via props para o componente Questao01B
  const lista = [
    { a: 10, b: 3, c: 7 },
    { a: 5, b: -3, c: 9 },
    { a: 1, b: 9, c: 40 }
  ];

  // Retorna o JSX que renderiza o componente Questao01B e passa a 'lista' como props
  return (
    <div>
      <Questao01B lista={lista} />
    </div>
  );
}

// Componente Questao01B utilizando a função clássica (function)
function Questao01B(props) {

  // Acessa a lista recebida via props e mapeia para encontrar o maior número em cada objeto
  const maiores = props.lista.map((objeto, index) => {
    return (
      <div key={index}>
        <p>Maior valor do objeto {index + 1}: {Math.max(objeto.a, objeto.b, objeto.c)}</p>
      </div>
    );
  });

  // Retorna o JSX que renderiza os maiores números encontrados
  return (
    <div>
      <h1>Questão 01</h1>
      <h2>Maiores Números</h2>
      {maiores}
    </div>
  );
}

export default Questao01A;
