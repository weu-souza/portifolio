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
      'Na compass eu participei de 3 projetos por 3 meses o primeiro com html css e javascript, o segundo react e typescript e o terceiro projeto react, typescript, vitest e deploy no ec2 e imagens num bucket do s3 da aws e os outros 3 meses foram estudando para conseguir a certificação aws cloud pratictioner, clf C02.',
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
];
