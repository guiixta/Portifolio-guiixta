import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} <a href='http://github.com/guiixta/'>guiixta</a>. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
