import React from 'react';

const Projects = (props) => {
  return (
    <section id="projects" className="container mx-auto p-8 my-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Meus Projetos</h2>
      <div className="flex flex-col gap-2 w-full flex-grow overflow-y-auto max-h-120">
        {props.children} 
      </div>
    </section>
  );
};

export function ItemProject(props){
  return(
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl/30 transition-shadow duration-300">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold text-gray-900">{props.titulo}</h3>
          <div className='flex items-center gap-1'> 
            {props.children}
          </div>
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
