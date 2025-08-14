import React from 'react';

const Projects = (props) => {
  return (
    <section id="projects" className="container mx-auto p-8 my-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Meus Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {props.children} 
      </div>
    </section>
  );
};

export function ItemProject(props){
  return(
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold text-gray-900">{props.titulo}</h3>
          {props.children}
        </div>
        <p className="text-gray-700 mb-4">{props.descricao}</p>
        <a href={props.link} className="text-blue-600 hover:text-blue-800 font-medium" target="_blank" rel="noopener noreferrer">
          Sobre &rarr;
        </a>
      </div>
    </>
  )
  
}

export default Projects;
