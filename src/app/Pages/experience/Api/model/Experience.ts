export interface Iexperiencia {
  titulo: string;
  cargo: string;
  descricao: string;
  linguagem: string[];
  ano: number;
}

export const experiencia: Iexperiencia[] = [
  {
    titulo: 'Compass.uol',
    cargo: 'Desenvolvedor Front End Estagio',
    descricao:
      'Na Compass, atuei no desenvolvimento de um sistema de e-commerce, utilizando React com TypeScript para construção da interface. Implementei testes unitários com Jest para garantir a qualidade do código e utilizei Tailwind CSS para estilização ágil e responsiva.  No deploy da aplicação, configurei uma  instância EC2 com Apache para hospedagem  na nuvem AWS, além de integrar um bucket S3  para armazenamento das imagens do projeto.  Minha experiência combina desenvolvimento front-end moderno com práticas de cloud computing, sempre buscando soluções eficientes e escaláveis.',
    linguagem: [
      'React',
      'Html',
      'Css',
      'Javascript',
      'Typescript',
      'Aws',
      'git & github',
      'Scrum',
    ],
    ano: 2024,
  },
  {
    titulo: 'Compass.uol',
    cargo: 'Desenvolvedor Front End',
    descricao:
      'Migração de Aplicação VB6 para React + .NET Atuei na modernização de uma aplicação legada em VB6, migrando seu front-end para React com integração ao back-end em .NET.Responsável pelo layout (UI) e pela lógica do front-end, garantindo uma experiência fluida e alinhada com as necessidades do usuário. Colaborei na transição de uma arquitetura tradicional para uma solução moderna, melhorando a manutenibilidade e performance da aplicação.  Testes e Otimização em Google Cloud (Agentspace) (2 meses – Avenue Code) Integrei um time focado em análise e testes dos conectores do Agentspace (Google Cloud), identificando bugs e propondo melhorias. Elaborei relatórios técnicos detalhando configurações ideais para maximizar a eficiência da ferramenta. Contribuí para a qualidade do produto através de documentação clara e sugestões de otimização com base nos testes realizados.',
    linguagem: [
      'React',
      'Html',
      'Css',
      'Javascript',
      'Typescript',
      'git & github',
      'Scrum',
    ],
    ano: 2025,
  },
];
