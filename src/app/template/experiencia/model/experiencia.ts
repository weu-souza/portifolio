export interface Iexperiencia {
  titulo: string
  cargo: string
  descricao: string
  linguagem: string[]
  ano: number

}


export const experiencia: Iexperiencia[] = [
  {
    titulo: 'Lanchonete',
    cargo: 'Desenvolvedor Full Stack',
    descricao: 'eu projetei o caso de uso, front end e e alguns componentes do back end, e um site voltado\n' +
      '        para vendas de comidas em Fast Food para facilitar o trabalho do cliente\n' +
      '        tanto na compra quanto venda de seu produto para saber mais vá em',
    linguagem: ['angular', 'scss', 'spring', 'Bootstrap'],
    ano: 2023
  },
  {
    titulo: 'Cook book',
    cargo: 'Desenvolvedor Front End',
    descricao: 'Desenvolvido com o objetivo de simplificar o processo de registro e a visualização de receitas,' +
      ' o projeto Cook Book oferece uma experiência intuitiva e eficiente. ' +
      'Com uma interface amigável, nossa plataforma foi projetada para tornar' +
      ' o cadastro de suas receitas favoritas rápido e descomplicado. Além disso, proporciona uma visualização clara e acessível,' +
      ' permitindo que você explore e reproduza suas criações culinárias com facilidade, para saber mais vá em',
    linguagem: ['angular', 'scss', '.NET', 'PrimeNG'],
    ano: 2023
  },
]
