export interface MenuItem {
  title: string;
  price: string;
  description?: string;
  popular?: boolean;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export const menuData: MenuSection[] = [
  {
    title: "Entradas",
    items: [
      {
        title: "Nachos",
        price: "5,00 €",
        description: "Os nossos nachos acompanhados de molho cheddar e molho de alho.",
      },
      {
        title: "Caco da Vila",
        price: "8,00 €",
        description: "É a nossa famosa entrada, um bolo do caco com maionese de alho, queijo cheddar, bacon grelhado e cebola crocante.",
      },
      {
        title: "Ovos Rotos À Nossa Maneira",
        price: "8,00 €",
        description: "Batatas fritas com molho cheddar, 2 ovos estrelados e muito bacon e chouriço grelhado",
      }
    ]
  },
  {
    title: "American Line",
    items: [
      {
        title: "Smash",
        price: "10,00 €",
        description: "Pão brioche selado com manteiga, molho artesanal americano, 100 gr carne porco preto, cebola na chapa, pickles e cheddar derretido",
      },
      {
        title: "Smash Duplo",
        price: "14,80 €",
        description: "Pão brioche selado com manteiga, molho artesanal americano, 200 gr carne porco preto, cebola na chapa, pickles e cheddar derretido",
      },
      {
        title: "Smash Bacon",
        price: "12,50 €",
        description: "Pão brioche selado com manteiga, molho artesanal americano, 100 gr carne porco preto, cebola na chapa, pickles, cheddar derretido e bacon",
      }
    ]
  },
  {
    title: "Hamburgueres",
    items: [
      {
        title: "Franciscano",
        price: "12,50 €",
        description: "Pão, molho de alho, alface, tomate 100gr de carne, cheddar e ovo estralado",
        popular: true,
      },
      {
        title: "Saramago",
        price: "12,50 €",
        description: "Pão, molho de alho, rúcula, 100 gr de frango, cheddar, cebola crua e vinagre balsâmico.",
      },
      {
        title: "Barbecue",
        price: "14,50 €",
        description: "Pão, molho de alho, alface e tomate, 100 gr de carne, 2 fatias de bacon, cebola crocante e molho barbacue",
      },
      {
        title: "Da Vila",
        price: "14,50 €",
        description: "Pão, molho de alho, alface, tomate 100gr de carne, cheddar, bacon, cogumelos frescos grelhados em azeite de ervas e ovo estralado",
        popular: true,
      },
      {
        title: "Classic",
        price: "17,50 €",
        description: "Pão, molho de alho, alface, 200 gr carne, 2 fatias de bacon, 2 de cheddar, topping de cebola confitada",
        popular: true,
      },
      {
        title: "Serra",
        price: "15,50 €",
        description: "Pão, molho de alho, rúcula, 200 gr carne, cebola crua, queijo de seia curado, tomatinhos e melh",
      },
      {
        title: "Mafarrico",
        price: "15,50 €",
        description: "Servido em bolo do caco, maionese, alface, 200 gr carne, cheddar derretido, cebola confitada e chouriço grelhado",
      },
      {
        title: "Albacora",
        price: "14,50 €",
        description: "Em Bolo do Caco, molho de alho, rúcula, tomate, bife de atum fresco selado, cebola confitada",
      },
      {
        title: "Vila-Velha",
        price: "14,30 €",
        description: "Em Bolo do Caco, com molho de alho, rúcula, 100 gr de carne, queijo de seia derretido, cebola crocante, chouriço grelhado, cebolinho e picante",
      },
      {
        title: "Frade",
        price: "12,00 €",
        description: "Pão Brioche selado com manteiga, couve roxa e maionese de alho, panado de frango, queijo cheddar e Bacon",
      }
    ]
  },
  {
    title: "Vegetariano",
    items: [
      {
        title: "Baltazar Sete Sois",
        price: "10,00 €",
        description: "Pão, molho de alho, alface, tomate, hambúrguer de bulgur e milho painço, ovo estrelado",
      },
      {
        title: "Blimunda",
        price: "10,00 €",
        description: "Pão, molho de alho, rúcula, tomate, cebola, queijo panado com espinafres com topping de couve roxa.",
      },
      {
        title: "Alheira À Nossa Maneira",
        price: "13,00 €",
        description: "Pão, molho de alho, alface, tomate, 100 gr de alheira vegetariana, cheddar e ovo estrelado",
      }
    ]
  },
  {
    title: "Extras",
    items: [
      {
        title: "Batatas da Vila",
        price: "6,50 €",
        description: "Batatas fritas com maionese de alho, molho de queijo e cebola crocante",
      },
      {
        title: "Batata Frita",
        price: "3,70 €",
        description: "Dose da nossa Batata Frita com oregãos",
      }
    ]
  }
];
