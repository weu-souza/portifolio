export interface Iprojetos {
  imagem: string
  titulo: string
  descricao: string
  link: string
}

export const projetos: Iprojetos[] = [
  {imagem: './assets/img/lanchonete.jpg', titulo: 'Lanchonete', descricao: 'O site oferece uma interface que simula o cardápio de uma lanchonete com 2 tipos de usuários, um usuário que\n' +
      '      vai a fazer a compra do produto e um usuário que vai fazer a adição dos itens do cardápio o sistema permite\n' +
      '      adicionar uma categoria para cada produto, adicionar os produtos em suas categorias e adicionar promoções,\n' +
      '      itens que o cliente desejar adicionar têm como adicionar os produtos no carrinho e fazer o cadastro dos dois\n' +
      '      tipos de usuário.', link: 'https://weu-souza.github.io/lanchonete/'},
]
