import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { projetosData } from "../data/projetosData";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function SobreProjects(){
  const local = useLocation()
  const [Projeto, setProjeto] = useState(null);
  const [Error, setError] = useState(null); 

  useEffect(() => {
    const parametro = new URLSearchParams(local.search);
    const id = parametro.get('projeto');

    if(id){
       
      const dadosDoProjeto = projetosData[id];

      if(dadosDoProjeto){
        setProjeto(dadosDoProjeto);
      }else{
        setError('Error ao obter dados')
        setProjeto(null);
      }
    }else{
      setError('Error ao obter parametro')
    }  

  }, [local.search]);

  if(Error){
    console.log(Error)
  }

  const decricaoRef = useRef(null);

  useEffect(() => {
    
    if(Projeto && Projeto.descricao){
      decricaoRef.current.innerHTML = Projeto.descricao;
      document.title = `${Projeto.titulo} | Guilherme Project`;
    }

  }, [Projeto])


  const Botoes = () => {
    if(!Projeto || !Projeto.links){
      return;
    }

    return Projeto.links.map((botao, index) => {
      let iconeBotao;
      if(botao.tipo === "github"){
        iconeBotao = "bi bi-github"
      }
      
      if(botao.tipo === "external"){
        iconeBotao = "bi bi-arrow-up-right-square-fill"
      }

      return (
        <Link key={index} className="bg-gray-800 flex justify-center items-center text-center px-[5px] py-[3px] rounded-sm hover:bg-gray-900" to={botao.url}><i className={`text-white ${iconeBotao}`}></i></Link>
      );

    })
  } 
  


  return(
    <>
      <Header ul="hidden" />
        
        <main className="w-full">
          {Projeto && (
            <>
              <div className="Fotos w-full bg-gray-100 dark:bg-gray-800 py-4 sm:py-6 md:py-8">
                <div className="max-w-7xl mx-auto px-2 sm:px-4">
                  <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} className="rounded-lg w-full overflow-hidden">
                    {Projeto.imagens.map((imagem, index) =>(

                      <div key={index} className="aspect-[21/9]">
                        <img src={imagem} alt={`Imagem: ${index +1} de ${Projeto.titulo}`} className="h-full w-full object-contain rounded-lg" />
                      </div>

                    ))

                    }
                  </Carousel>
                </div>
              </div>

              <div className="Content flex flex-col">
                <div className="Brand w-full px-[5rem] pt-[1rem] mt-[5rem] flex justify-start items-center">
                  <h1 className="text-2xl font-bold cursor-default">{Projeto.titulo}</h1>
                </div>
                <div className="px-[4rem] pt-[0.5rem] pb-[5rem] lg:px-[5rem] lg:pt-[1rem] lg:pb-[6rem]" ref={decricaoRef}/>
                <div className="w-full bg-gray-100 flex justify-between p-[4rem]">
                  <span className="font-bold cursor-default text-2xl">Ver Projeto</span>
                  <div className="flex justify-start gap-1 items-center">
                    {Botoes()}
                  </div>
                </div>
              </div>
            </>
          )}
        </main>
        
      <Footer />
    </>
  )
}
