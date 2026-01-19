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
          <div className='bg-blue-500 rounded-lg shadow p-3 w-full'>
            <div className='w-full flex flex-col mb-3'>
              <h1 className='m-0 font-bold text-white text-2xl'>ReactJS</h1>
              <span className='p-[0.5px] bg-white w-full flex'></span>
            </div>
            <div className='flex flex-col gap-2'>
              <ItemProject titulo="Mercanota" descricao="Plataforma web local para criação de relatórios de envio de mercadoria." link="/sobre?projeto=Mercanota">
                <Link className="bg-gray-800 flex justify-center items-center text-center px-[5px] py-[3px] rounded-sm hover:bg-gray-900" to="https://github.com/guiixta/Mercanota"><i className="text-white bi bi-github"></i></Link>  
              </ItemProject>
              <ItemProject titulo="Banco Academico" descricao="Plataforma para entrega centralizada de atividades escolares." link="/sobre?projeto=BancoAcademico"> 
                <Link className="bg-gray-800 flex justify-center items-center text-center px-[5px] py-[3px] rounded-sm hover:bg-gray-900" to="http://bancoacademico.educacao.ws/"><i className="text-white bi bi-arrow-up-right-square-fill"></i></Link>
              </ItemProject>
            </div>
          </div>

          <div className='bg-amber-500 rounded-lg shadow p-3 w-full'>
            <div className='w-full flex flex-col mb-3'>
              <h1 className='m-0 font-bold text-2xl'>Python</h1>
              <span className='p-[0.5px] bg-black w-full flex'></span>
            </div>
            <div className='flex flex-col gap-2'>
              <ItemProject titulo="Dashboard GEE" descricao="Dashboard interativo para visualização de emissões de gases de efeito estufa." link="/sobre?projeto=DashSEEG">
                <Link className="bg-gray-800 flex justify-center items-center text-center px-[5px] py-[3px] rounded-sm hover:bg-gray-900" to="https://github.com/guiixta/dash-emissao-gas-seeg"><i className="text-white bi bi-github"></i></Link> 
                <Link className="bg-gray-800 flex justify-center items-center text-center px-[5px] py-[3px] rounded-sm hover:bg-gray-900" to="https://dash-efeitoestufa-seeg.vercel.app/"><i className="text-white bi bi-arrow-up-right-square-fill"></i></Link>
              </ItemProject>
              
              <ItemProject titulo="Fiscal Cota Parlamentar" descricao="Dashboard para análise e monitoramento de gastos de deputados federais." link="/sobre?projeto=FiscalDash">
                <Link className="bg-gray-800 flex justify-center items-center text-center px-[5px] py-[3px] rounded-sm hover:bg-gray-900" to="https://github.com/guiixta/fiscalCamara-Dashboard"><i className="text-white bi bi-github"></i></Link> 
                <Link className="bg-gray-800 flex justify-center items-center text-center px-[5px] py-[3px] rounded-sm hover:bg-gray-900" to="https://fiscal-camara-dashboard.vercel.app/"><i className="text-white bi bi-arrow-up-right-square-fill"></i></Link>
              </ItemProject>
            </div>
          </div>

          <div className='bg-yellow-600 rounded-lg shadow p-3 w-full'>
            <div className='w-full flex flex-col mb-3'>
              <h1 className='m-0 font-bold text-2xl'>Power BI</h1>
              <span className='p-[0.5px] bg-black w-full flex'></span>
            </div>
            <div className='flex flex-col gap-2'>
              <ItemProject titulo="Painel de Gestão Orçamentária Municipal (SICONFI)" descricao="Dashboard interativo para visualização de emissões de gases de efeito estufa." link="/sobre?projeto=PainelSICONFI">
                <Link className="bg-gray-800 flex justify-center items-center text-center px-[5px] py-[3px] rounded-sm hover:bg-gray-900" to="https://github.com/guiixta/Dashboard-de-Gestao-Orcamentaria-Municipal"><i className="text-white bi bi-github"></i></Link> 
              </ItemProject>  
            </div>
          </div>
        </Projects>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
