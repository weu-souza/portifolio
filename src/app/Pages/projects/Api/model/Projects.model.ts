export interface Iprojetos {
  imagem: string;
  titulo: string;
  descricao: string;
  link: string;
  video: string;
}

export const projetos: Iprojetos[] = [
  {
    imagem: '/lanchonete.png',
    titulo: 'Lanchonete',
    video: '/video/Lanchonete',
    descricao:
      'O site oferece uma interface que simula o cardápio de uma lanchonete com 2 tipos de usuários, um usuário que\n' +
      '      vai a fazer a compra do produto e um usuário que vai fazer a adição dos itens do cardápio o sistema permite\n' +
      '      adicionar uma categoria para cada produto, adicionar os produtos em suas categorias e adicionar promoções,\n' +
      '      itens que o cliente desejar adicionar têm como adicionar os produtos no carrinho e fazer o cadastro dos dois\n' +
      '      tipos de usuário.',
    link: 'https://github.com/weu-souza/lanchonete',
  },
  {
    imagem: '/img-login.jpg',
    link: 'https://github.com/weu-souza/cook-book',
    video: '/video/cook-book',
    descricao:
      'Já se viu em casa, em um tranquilo domingo, desejando preparar uma refeição diferenciada, mas sem saber onde encontrar inspiração ou como personalizar receitas de acordo com seu gosto? Ou ainda, ao deparar-se com uma receita online, sentiu a falta de um local adequado para organizá-la?\n' +
      '\n' +
      'Apresento o projeto Cook Book, uma solução pensada para entusiastas da culinária que desejam uma abordagem mais moderna. Chega de livros de receitas empoeirados na prateleira! Com o Cook Book, oferecemos um espaço intuitivo para salvar e explorar receitas sempre que a vontade de experimentar algo novo bater. Desperte sua paixão pela culinária.',
    titulo: 'cook book',
  },
  {
    imagem: '/Dog_Img.png',
    link: 'https://github.com/weu-souza/sprint2-project',
    video: '/video/doacao-animal',
    descricao:
      'Primeiro desafio criado na compass, o site e sobre um site de doação animal feito com html css e javascript',
    titulo: 'Doacao animal',
  },
  {
    imagem: '/bg-login.png',
    link: 'https://github.com/weu-souza/compass-video',
    video: '/video/compass-video',
    descricao:
      'Segundo desafio criado na compass, o site e um sistema de streaming feito com react consumindo uma api do tmdb.',
    titulo: 'Compass video',
  },
  {
    imagem: '/Furniro-logo.png',
    link: 'https://github.com/weu-souza/Furniro',
    video: '/video/furniro',
    descricao:
      'terceiro desafio criado na compass, o site e e-commerce feito com react e testado com vitest, o site foi feito com um json criado por nos de produtos encontrados na internet para ser consumido com json server, as imagens foram guardadas em um bucket do amazon S3, e o site hospedado no amazon ec2',
    titulo: 'Furniro',
  },
];
