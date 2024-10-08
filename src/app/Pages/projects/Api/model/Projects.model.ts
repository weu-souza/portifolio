export interface Iprojetos {
  imagem: string;
  titulo: string;
  descricao: string;
  link: string;
}

export const projetos: Iprojetos[] = [
  {
    imagem: '/lanchonete.png',
    titulo: 'Lanchonete',
    descricao:
      'O site oferece uma interface que simula o cardápio de uma lanchonete com 2 tipos de usuários, um usuário que\n' +
      '      vai a fazer a compra do produto e um usuário que vai fazer a adição dos itens do cardápio o sistema permite\n' +
      '      adicionar uma categoria para cada produto, adicionar os produtos em suas categorias e adicionar promoções,\n' +
      '      itens que o cliente desejar adicionar têm como adicionar os produtos no carrinho e fazer o cadastro dos dois\n' +
      '      tipos de usuário.',
    link: 'https://weu-souza.github.io/lanchonete/',
  },
  {
    imagem: '/img-login.jpg',
    link: 'https://github.com/weu-souza/cook-book',
    descricao:
      'Já se viu em casa, em um tranquilo domingo, desejando preparar uma refeição diferenciada, mas sem saber onde encontrar inspiração ou como personalizar receitas de acordo com seu gosto? Ou ainda, ao deparar-se com uma receita online, sentiu a falta de um local adequado para organizá-la?\n' +
      '\n' +
      'Apresento o projeto Cook Book, uma solução pensada para entusiastas da culinária que desejam uma abordagem mais moderna. Chega de livros de receitas empoeirados na prateleira! Com o Cook Book, oferecemos um espaço intuitivo para salvar e explorar receitas sempre que a vontade de experimentar algo novo bater. Desperte sua paixão pela culinária.',
    titulo: 'cook book',
  },
];
