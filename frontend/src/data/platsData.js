// Structure de données centralisée pour tous les plats du restaurant

export const platsData = {
  entrees: [
    {
      id: "salade-verte",
      nom: "Salade fraîche",
      description: "Salade croquante, vinaigrette maison",
      prix: 6,
      image: "/salade.jpg",
      vegetarien: true,
      allergenes: []
    },
    {
      id: "salade-mechouia",
      nom: "Salade méchouia",
      description: "Poivrons grillés, tomates, épices",
      prix: 7,
      image: "/salade_mechouia.jpg",
      vegetarien: true,
      allergenes: []
    },
    {
      id: "batbout",
      nom: "Batbout au poulet",
      description: "Petit pain farci au poulet mariné",
      prix: 8,
      image: "/batbout_poulet.jpg",
      vegetarien: false,
      allergenes: ["gluten"]
    },
    {
      id: "pain-maison",
      nom: "Pain maison",
      description: "Pain traditionnel moelleux",
      prix: 3,
      image: "/pain.jpg",
      vegetarien: true,
      allergenes: ["gluten"]
    }
  ],

  plats: [
    {
      id: "couscous-poulet",
      nom: "Couscous au poulet",
      description: "Semoule fine, légumes, poulet fermier",
      prix: 14,
      image: "/couscous_poulet.jpg",
      vegetarien: false,
      allergenes: ["gluten"]
    },
    {
      id: "couscous-boeuf",
      nom: "Couscous au bœuf",
      description: "Semoule fine, légumes, bœuf tendre",
      prix: 15,
      image: "/couscous_boeuf.jpg",
      vegetarien: false,
      allergenes: ["gluten"]
    },
    {
      id: "couscous-merguez",
      nom: "Couscous aux merguez",
      description: "Semoule, légumes, merguez grillées",
      prix: 14,
      image: "/couscous_merguez.jpg",
      vegetarien: false,
      allergenes: ["gluten"]
    },
    {
      id: "tajine",
      nom: "Tajine marocain",
      description: "Poulet, légumes, olives et citron confit",
      prix: 13,
      image: "/tajine.jpg",
      vegetarien: false,
      allergenes: []
    },
    {
      id: "amekful",
      nom: "Amekful berbère",
      description: "Plat traditionnel à base de légumes et semoule",
      prix: 12,
      image: "/amekful.jpg",
      vegetarien: true,
      allergenes: ["gluten"]
    }
  ],

  desserts: [
    {
      id: "mesmen",
      nom: "Msemen nature",
      description: "Crêpe feuilletée traditionnelle",
      prix: 4,
      image: "/mesmen.jpg",
      vegetarien: true,
      allergenes: ["gluten"]
    },
    {
      id: "mesmen-sucre",
      nom: "Msemen sucré",
      description: "Servi avec miel ou sucre",
      prix: 5,
      image: "/mesmen_sucre.jpg",
      vegetarien: true,
      allergenes: ["gluten"]
    },
    {
      id: "crepes",
      nom: "Crêpes maison",
      description: "Accompagnées de chocolat ou confiture",
      prix: 5,
      image: "/crepes.jpg",
      vegetarien: true,
      allergenes: ["gluten", "œufs", "lactose"]
    }
  ],

  boissons: [
    {
      id: "eau",
      nom: "Eau plate / gazeuse",
      description: "Bouteille 50cl",
      prix: 2,
      image: "/placeholder-food.jpg",
      vegetarien: true,
      allergenes: []
    },
    {
      id: "the-menthe",
      nom: "Thé à la menthe",
      description: "Traditionnel, servi chaud",
      prix: 3,
      image: "/placeholder-food.jpg",
      vegetarien: true,
      allergenes: []
    },
    {
      id: "cafe",
      nom: "Café",
      description: "Expresso ou allongé",
      prix: 2,
      image: "/placeholder-food.jpg",
      vegetarien: true,
      allergenes: []
    },
    {
      id: "jus-frais",
      nom: "Jus de fruits frais",
      description: "Orange, pomme ou cocktail maison",
      prix: 4,
      image: "/placeholder-food.jpg",
      vegetarien: true,
      allergenes: []
    },
    {
      id: "boissons-gazeuses",
      nom: "Boissons gazeuses",
      description: "Coca-Cola, Fanta, Sprite",
      prix: 3,
      image: "/placeholder-food.jpg",
      vegetarien: true,
      allergenes: []
    }
  ]
};

export const formulesData = [
  {
    id: "sandwich-accompagnement",
    nom: "Formule Sandwich",
    description: "Sandwich au choix + Accompagnement",
    prix: 11,
    plats: ["Sandwich au choix", "Accompagnement"],
    image: "/formule_normale.jpg"
  },
  {
    id: "sandwich-accompagnement-boisson",
    nom: "Formule Complète",
    description: "Sandwich au choix + Accompagnement + Boisson",
    prix: 13,
    plats: ["Sandwich au choix", "Accompagnement", "Boisson"],
    image: "/formule_gourmande.jpg"
  }
];
