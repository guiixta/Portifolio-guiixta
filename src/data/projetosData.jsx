export const projetosData = {
    "Mercanota": {
      titulo: "Mercanota | Em desenvolvimento",
      descricao: `<p class="text-justify cursor-default">
Aplicação local para a criação de relatórios de expedição de mercadorias, focada em automação de tarefas e registro inteligente de dados de produtos. O projeto foi iniciado para resolver uma necessidade real de otimização de trabalho e para aprofundar meus conhecimentos práticos em React e PHP.<br>

-<span class="font-bold text-start ml-[5px]">Tecnologias:</span> React, PHP, SQLite.<br>
-<span class="font-bold text-start ml-[5px]">Ferramentas:</span> Vite, Parcel, Git/GitHub, Termux (para usabilidade mobile).<br><br>

<span class="font-bold text-3xl">Arquitetura e Funcionalidades Chave:</span><br>

-<span class="font-bold text-start ml-[5px]">Desenvolvimento Full-Stack:</span> Fui responsável por todo o ciclo do projeto, desde a concepção e modelagem do banco de dados até o desenvolvimento da API em PHP e da interface com o usuário em React.<br>
-<span class="font-bold text-start ml-[5px]">Persistência de Dados Local:</span> Utilizei SQLite para criar um banco de dados local e leve, que armazena informações de produtos (incluindo valores e atributos), eliminando a necessidade de consultas manuais repetitivas.<br>
-<span class="font-bold text-start ml-[5px]">Atributos Dinâmicos:</span> Projetei o sistema para que os atributos dos produtos sejam totalmente configuráveis pelo usuário, tornando a aplicação adaptável a diferentes tipos de mercadorias.<br>
-<span class="font-bold text-start ml-[5px]">Geração de Relatórios Flexível:</span> A aplicação gera relatórios de entrega em formato JSON, com uma arquitetura planejada para permitir a fácil conversão para outros formatos, como PDF.<br>
-<span class="font-bold text-start ml-[5px]">Ambiente de Desenvolvimento Moderno:</span> Configurei o projeto utilizando Vite para uma experiência de desenvolvimento front-end rápida e eficiente.<br>
</p>`,
      imagens : [
        "/assets/Mercanota/Imagen1.png", "/assets/Mercanota/Imagen2.png", "/assets/Mercanota/Imagen3.png", "/assets/Mercanota/Imagen4.png", "/assets/Mercanota/Imagen5.png", "/assets/Mercanota/Imagen6.png", "/assets/Mercanota/Imagen7.png",
      ],
      links: [
        {tipo: "github", url: "https://github.com/guiixta/Mercanota"},
      ],
    },

    "BancoAcademico": {
      titulo: "Banco Academico | Online",
      descricao: `<p class="text-justify cursor-default">Plataforma web desenvolvida para a gestão de grupos e centralização de entregas de atividades acadêmicas. O sistema foi criado para otimizar a organização dos trabalhos em grupo, simplificando o processo de submissão tanto para alunos quanto para professores.<br>

-<span class="font-bold text-start ml-[5px]">Tecnologias:</span> PHP, MySQL, JavaScript, HTML5, CSS3, Bootstrap.<br>
    
-<span class="font-bold text-start ml-[5px]">Ferramentas:</span> phpMyAdmin, FileZilla.<br>
    
-<span class="font-bold text-start ml-[5px]">Duração:</span> 4 meses.<br>
    
-<span class="font-bold text-start ml-[5px]">Equipe:</span> 2 pessoas.<br><br>
    

<span class="font-bold text-3xl">Minhas Responsabilidades e Implementações:</span><br>

-<span class="font-bold text-start ml-[5px]">Desenvolvimento do Módulo do Aluno:</span> Fui o principal responsável por construir toda a experiência do aluno dentro da plataforma.<br>
  
-<span class="font-bold text-start ml-[5px]">Sistema de Grupos:</span> Implementei a lógica de criação e gerenciamento de grupos, permitindo que alunos criassem um grupo (tornando-se líder) ou solicitassem entrada em grupos existentes na mesma turma.<br>
    
-<span class="font-bold text-start ml-[5px]">Painel de Atividades (Dashboard):</span> Criei um painel de controle intuitivo onde o aluno pode visualizar e filtrar suas atividades com base em seu status: "Não Iniciada", "Em Andamento (com grupo)", "Concluída" ou "Atrasada".<br>
    
-<span class="font-bold text-start ml-[5px]">Lógica de Submissão:</span> Garanti que apenas um membro do grupo (o líder) pudesse realizar o upload dos arquivos da atividade, centralizando a entrega.<br>
    
-<span class="font-bold text-start ml-[5px]">Colaboração no Back-end:</span> Participei da modelagem do banco de dados MySQL e da implementação de funcionalidades essenciais como o sistema de login e a gestão de turmas e usuários.</p>`,
      imagens: [
        "/assets/BancoAcademico/Imagen1.png", "/assets/BancoAcademico/Imagen2.png", "/assets/BancoAcademico/Imagen3.png", "/assets/BancoAcademico/Imagen4.png", "/assets/BancoAcademico/Imagen5.png", "/assets/BancoAcademico/Imagen6.png", "/assets/BancoAcademico/Imagen7.png", "/assets/BancoAcademico/Imagen8.png", "/assets/BancoAcademico/Imagen9.png", "/assets/BancoAcademico/Imagen10.png", "/assets/BancoAcademico/Imagen11.png", "/assets/BancoAcademico/Imagen12.png",
      ],
      links: [
        {tipo: "external", url: "http://bancoacademico.educacao.ws/"},
      ],
    },
    "DashSEEG": {
      titulo: "Dashboard de Emissões de GEE | Online",
      descricao: `<p class="text-justify cursor-default">
Dashboard interativo para a visualização de dados sobre a emissão de gases de efeito estufa (GEE) no Brasil. O projeto foi desenvolvido para permitir a exploração e análise de dados históricos de emissões, com foco na criação de uma interface dinâmica e informativa.<br>

-<span class="font-bold text-start ml-[5px]">Tecnologias:</span> Python, Dash, Plotly, Pandas, Tailwind CSS.<br>
-<span class="font-bold text-start ml-[5px]">Fonte dos Dados:</span> Sistema de Estimativas de Emissões (SEEG), via Base dos Dados.<br><br>

<span class="font-bold text-3xl">Funcionalidades Chave:</span><br>

-<span class="font-bold text-start ml-[5px]">Visualização Dinâmica de Dados:</span> Implementei gráficos de barras, linhas e pizza que se atualizam em tempo real, respondendo de forma interativa às seleções do usuário.<br>
-<span class="font-bold text-start ml-[5px]">Sistema de Filtros Detalhados:</span> Desenvolvi uma lógica de filtragem que permite analisar os dados por múltiplas dimensões, como setor, tipo de gás, atividade econômica e intervalo de anos.<br>
-<span class="font-bold text-start ml-[5px]">Cards de Métricas Relevantes:</span> Criei componentes visuais que destacam informações importantes, como a emissão total no período selecionado e os anos de maior e menor emissão.<br>
-<span class="font-bold text-start ml-[5px]">Manipulação de Dados:</span> Utilizei a biblioteca Pandas para o tratamento e a análise eficiente do conjunto de dados, garantindo a performance da aplicação.<br>
-<span class="font-bold text-start ml-[5px]">Interface Responsiva:</span> A interface foi estilizada com Tailwind CSS para garantir uma experiência de uso consistente em diferentes tamanhos de tela.<br>
</p>`,
      imagens: ["/assets/DashSEEG/Dash1.png", "/assets/DashSEEG/Dash2.png", "/assets/DashSEEG/Dash3.png", "/assets/DashSEEG/Dash4.png",],
      links: [
        {tipo: "external", url: "https://dash-efeitoestufa-seeg.vercel.app/"},
      {tipo: "github", url: "https://github.com/guiixta/dash-emissao-gas-seeg"}
    ]
    }
  }
