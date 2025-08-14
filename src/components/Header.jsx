import React from 'react';

const Header = (props) => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">Guilherme Ferreira</a>
        <ul className={`flex space-x-4 ${props.ul}`}>
          <li><a href="#about" className="hover:text-gray-400">Sobre</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projetos</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
