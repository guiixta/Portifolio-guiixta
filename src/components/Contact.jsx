import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto p-8 my-8 bg-white rounded-lg shadow-md">
      <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Contato</h2>
      <p className="text-lg text-gray-700 leading-relaxed text-center max-w-2xl mx-auto mb-6">
        Ficou interessado(a) no meu trabalho? Sinta-se à vontade para entrar em contato!
      </p>
      <div className="flex flex-col items-center space-y-4">
        <a 
          href="mailto:guiferreirapessoa3@gmail.com" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Enviar E-mail
        </a>
        <p className="text-gray-600">Ou me encontre em:</p>
        <div className="flex space-x-6">
          <a href="www.linkedin.com/in/guilherme-ferreira-2b9a302a8" className="text-blue-600 hover:text-blue-800 text-xl" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/guiixta/" className="text-gray-800 hover:text-gray-600 text-xl" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
