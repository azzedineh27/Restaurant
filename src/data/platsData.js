// Structure de données centralisée pour tous les plats du restaurant

export const platsData = {
  entrees: [
    {
      id: "veloute-potimarron",
      nom: "Velouté de potimarron",
      description: "Crème d'amande, croûtons maison",
      prix: 8,
      image: "/poulet.jpg",
      vegetarien: true,
      allergenes: ["gluten"]
    },
    {
      id: "carpaccio-legumes",
      nom: "Carpaccio de légumes",
      description: "Courgette, betterave, feta, vinaigrette miel",
      prix: 9,
      image: "/placeholder-food.jpg",
      vegetarien: true,
      allergenes: ["lactose"]
    },
    {
      id: "salade-chevre",
      nom: "Salade de chèvre chaud",
      description: "Mélange de salades, chèvre, noix, miel",
      prix: 10,
      image: "/placeholder-food.jpg",
      vegetarien: true,
      allergenes: ["lactose", "fruits à coque"]
    },
    {
      id: "terrine-maison",
      nom: "Terrine de campagne",
      description: "Terrine maison, cornichons, pain grillé",
      prix: 11,
      image: "/placeholder-food.jpg",
      vegetarien: false,
      allergenes: ["gluten"]
    },
    {
      id: "gazpacho",
      nom: "Gazpacho andalou",
      description: "Tomates, concombres, basilic, huile d'olive",
      prix: 7,
      image: "/placeholder-food.jpg",
      vegetarien: true,
      allergenes: []
    }
  ],

  plats: [
    {
      id: "poulet-roti",
      nom: "Poulet rôti aux herbes",
      description: "Pommes grenailles, jus au thym",
      prix: 16,
      image: "/poulet.jpg",
      vegetarien: false,
      allergenes: []
    },
    {
      id: "lasagnes-vege",
      nom: "Lasagnes végétariennes",
      description: "Légumes grillés & mozzarella fondue",
      prix: 14,
      image: "/lasagnes.jpg",
      vegetarien: true,
      allergenes: ["gluten", "lactose"]
    },
    {
      id: "curry-lentilles",
      nom: "Curry de lentilles corail",
      description: "Lait de coco, coriandre fraîche",
      prix: 13,
      image: "/placeholder-food.jpg",
      vegetarien: true,
      allergenes: []
    },
    {
      id: "saumon-grille",
      nom: "Saumon grillé",
      description: "Risotto aux légumes, sauce citron",
      prix: 18,
      image: "/placeholder-food.jpg",
      vegetarien: false,
      allergenes: ["poisson"]
    },
    {
      id: "boeuf-bourguignon",
      nom: "Bœuf bourguignon",
      description: "Carottes, champignons, vin rouge",
      prix: 19,
      image: "/placeholder-food.jpg",
      vegetarien: false,
      allergenes: ["alcool"]
    },
    {
      id: "burger-maison",
      nom: "Burger maison",
      description: "Pain brioché, sauce du chef, frites",
      prix: 15,
      image: "/placeholder-food.jpg",
      vegetarien: false,
      allergenes: ["gluten", "lactose"]
    },
    {
      id: "pates-truffe",
      nom: "Pâtes à la truffe",
      description: "Tagliatelles, crème de truffe",
      prix: 17,
      image: "/placeholder-food.jpg",
      vegetarien: true,
      allergenes: ["gluten", "lactose"]
    },
    {
      id: "couscous-agneau",
      nom: "Couscous d'agneau",
      description: "Légumes, pois chiches, merguez",
      prix: 16,
      image: "/placeholder-food.jpg",
      vegetarien: false,
      allergenes: ["gluten"]
    }
  ],

  desserts: [
    {
      id: "tarte-pommes",
      nom: "Tarte fine aux pommes",
      description: "Boule de vanille artisanale",
      prix: 7,
      image: "/tarte.jpg",
      vegetarien: true,
      allergenes: ["gluten", "lactose"]
    },
    {
      id: "fondant-chocolat",
      nom: "Fondant chocolat",
      description: "Cœur coulant & crème anglaise",
      prix: 8,
      image: "/placeholder-food.jpg",
      vegetarien: true,
      allergenes: ["lactose"]
    },
    {
      id: "tiramisu",
      nom: "Tiramisu maison",
      description: "Mascarpone, café, cacao",
      prix: 9,
      image: "/placeholder-food.jpg",
      vegetarien: true,
      allergenes: ["lactose", "œufs"]
    },
    {
      id: "creme-brulee",
      nom: "Crème brûlée",
      description: "Vanille bourbon, caramel",
      prix: 8,
      image: "/placeholder-food.jpg",
      vegetarien: true,
      allergenes: ["lactose", "œufs"]
    },
    {
      id: "tarte-citron",
      nom: "Tarte au citron",
      description: "Meringue italienne, zestes",
      prix: 7,
      image: "/placeholder-food.jpg",
      vegetarien: true,
      allergenes: ["gluten", "œufs"]
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
      id: "the-glace",
      nom: "Thé glacé maison",
      description: "Pêche, menthe, citron",
      prix: 3.5,
      image: "/placeholder-food.jpg",
      vegetarien: true,
      allergenes: []
    },
    {
      id: "vin-bio",
      nom: "Verre de vin bio",
      description: "Rouge, blanc ou rosé",
      prix: 5,
      image: "/placeholder-food.jpg",
      vegetarien: true,
      allergenes: ["alcool"]
    },
    {
      id: "jus-fruits",
      nom: "Jus de fruits frais",
      description: "Orange, pomme, carotte",
      prix: 4,
      image: "/placeholder-food.jpg",
      vegetarien: true,
      allergenes: []
    },
    {
      id: "cafe",
      nom: "Café / Espresso",
      description: "Arabica équitable",
      prix: 2.5,
      image: "/placeholder-food.jpg",
      vegetarien: true,
      allergenes: []
    }
  ]
};

// Formules complètes
export const formulesData = [
  {
    id: "dejeuner",
    nom: "Formule Déjeuner",
    description: "Entrée + Plat ou Plat + Dessert",
    prix: 18,
    plats: [
      "Velouté du jour",
      "Plat du marché",
      "Dessert maison"
    ],
    economie: 3
  },
  {
    id: "gourmande",
    nom: "Formule Gourmande",
    description: "Entrée + Plat + Dessert",
    prix: 23,
    plats: [
      "Salade de chèvre chaud",
      "Poulet rôti ou Lasagnes végé",
      "Tarte fine ou Fondant"
    ],
    economie: 5
  },
  {
    id: "vegetarienne",
    nom: "Formule Végétarienne",
    description: "Entrée + Plat + Dessert",
    prix: 21,
    plats: [
      "Carpaccio de légumes",
      "Curry de lentilles",
      "Fondant chocolat"
    ],
    economie: 4
  },
  {
    id: "familiale",
    nom: "Formule Familiale",
    description: "Pour 4 personnes",
    prix: 65,
    plats: [
      "2 Entrées au choix",
      "4 Plats au choix",
      "2 Desserts au choix",
      "Boissons incluses"
    ],
    economie: 15
  },
  {
    id: "decouverte",
    nom: "Formule Découverte",
    description: "Menu dégustation",
    prix: 35,
    plats: [
      "3 Entrées mini",
      "3 Plats mini",
      "3 Desserts mini",
      "Accompagnement vin"
    ],
    economie: 8
  }
];
