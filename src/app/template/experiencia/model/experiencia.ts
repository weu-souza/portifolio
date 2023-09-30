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
    cargo: 'Desenvolvedor full stack',
    descricao: 'eu projetei o caso de uso, front end e e alguns componentes do back end, e um site voltado\n' +
      '        para vendas de comidas em Fast Food para facilitar o trabalho do cliente\n' +
      '        tanto na compra quanto venda de seu produto para saber mais vá em',
    linguagem: ['angular', 'scss', 'spring', 'Bootstrap'],
    ano: 2023
  },
]
