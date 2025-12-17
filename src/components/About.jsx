import React from 'react';

const About = () => {
  return (
    <section id="about" className="container mx-auto p-8 my-8 bg-white rounded-lg shadow-md">
      <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Sobre Mim</h2>
      <div className="text-lg text-gray-700 leading-relaxed text-justify max-w-3xl mx-auto">
        
        <p className="mb-4">
          Olá e bem-vindo(a) ao meu portfólio! Sou um estudante de Análise e Desenvolvimento de Sistemas movido pela paixão de resolver problemas com código. Minha jornada técnica começou no desenvolvimento web Full Stack com <strong>React, JavaScript e PHP</strong>, mas recentemente expandi minhas competências para a <strong>Análise de Dados com Python</strong>.
        </p>

        <p className="mb-4">
          Hoje, além de construir aplicações, dedico-me a criar dashboards interativos e scripts de automação (utilizando Pandas e Dash), transformando dados brutos em visualizações estratégicas. Estou em busca de um estágio onde possa aplicar essa versatilidade técnica — seja no front-end, no back-end ou na inteligência de dados — e continuar aprendendo em um ambiente desafiador.
        </p>

        <p>
          Vamos construir algo incrível juntos? Explore meus projetos e vamos conversar!
        </p>

      </div>
    </section>
  );
};

export default About;
