import React from 'react';
import { Link } from "react-router";
import Header from './components/Header';
import About from './components/About';
import Projects, {ItemProject} from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      <Header />
      <main>
        <About />
        <Projects> 
          <ItemProject titulo="Mercanota" descricao="Plataforma web local para criação de relatórios de envio de mercadoria." link="/sobre?projeto=Mercanota">
            <Link className="bg-gray-800 flex justify-center items-center text-center px-[5px] py-[3px] rounded-sm" to="https://github.com/guiixta/Mercanota"><i className="text-white bi bi-github"></i></Link>  
          </ItemProject>
          <ItemProject titulo="Banco Academico" descricao="Plataforma para entrega centralizada de atividades escolares." link="/sobre?projeto=BancoAcademico"> 
            <Link className="bg-gray-800 flex justify-center items-center text-center px-[5px] py-[3px] rounded-sm" to="http://bancoacademico.educacao.ws/"><i className="text-white bi bi-arrow-up-right-square-fill"></i></Link>
          </ItemProject>
        </Projects>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
