export interface Pizza { name: string; ingredients: string[]; price: number; }
const pizzas: Pizza[] = [
  { name: "La Margarita", ingredients: ["Tomate", "Fromage", "Olives"], price: 8 },
  { name: "La Romaine", ingredients: ["Tomate", "Jambon", "Fromage", "Olives"], price: 8.5 },
  { name: "La Reine", ingredients: ["Tomate", "Jambon", "Champignons", "Fromage", "Olives"], price: 9.5 },
  { name: "L’Espagnole", ingredients: ["Tomate", "Chorizo", "Poivrons", "Fromage", "Olives"], price: 10 },
  { name: "L'Orientale", ingredients: ["Tomate", "Merguez", "Poivrons", "Fromage", "Olives"], price: 10 },
  { name: "La Sicilienne", ingredients: ["Tomate", "Anchois", "Câpres", "Fromage", "Olives"], price: 11 },
  { name: "La Flamiche", ingredients: ["Crème fraiche", "Lardons", "Oignons", "Fromage", "Olives"], price: 10 },
  { name: "La 4 Saisons", ingredients: ["Tomate", "Jambon", "coeurs d'Artichaud", "Champignons", "Poivrons", "Fromage", "Olives"], price: 12 },
  { name: "La 4 Fromages", ingredients: ["Tomate", "bleu", "mozzarella", "chèvre", "emmental", "olives"], price: 11 },
  { name: "La Pêcheur", ingredients: ["Tomate", "Thon", "Persillade", "Fromage", "Crème fraîche", "Olives"], price: 10 },
  { name: "La Provençale", ingredients: ["Tomate", "Jambon", "Oignons", "Lardons", "Persillade", "Fromage", "Olives"], price: 12 },
  { name: "La Végétarienne", ingredients: ["Tomate ou Crème Fraiche", "Champignons", "Coeur d'artichaut", "Oignons", "Poivrons", "Fromage", "Olives"], price: 12 },
  { name: "La Kebab", ingredients: ["Base Crème Fraiche ou Tomate", "Viande Kebab", "Poivrons", "Oignons", "Fromage", "Persillade", "Olives"], price: 12.5 },
  { name: "La Tropicale", ingredients: ["Crème Fraiche", "Jambon", "Ananas", "Fromage", "Olives"], price: 10.5 },
  { name: "L'India", ingredients: ["Crème Fraiche", "Poulet", "Champignons", "Curry", "Fromage", "Olives"], price: 12.5 },
  { name: "La Biquette", ingredients: ["Crème Fraiche", "Jambon", "Chèvre", "Miel", "Fromage", "Olives"], price: 11 },
  { name: "La Même Pas Cap", ingredients: ["Crème Fraiche", "Jambon", "Oignons", "Tartiflette", "Fromage", "Olives"], price: 12.5 },
  { name: "La Fruits de Mer", ingredients: ["Tomate", "Crevette", "Moules", "Calamars", "Crème fraiche", "Persillade", "Fromage", "Olives"], price: 13.5 },
  { name: "La Campagne", ingredients: ["Tomate", "Viande hâchée", "Persillade", "Fromage", "Olives"], price: 12.5 },
  { name: "La Marcelo", ingredients: ["Tomate", "Magret", "Lardons", "Poivrons", "Persillade", "Fromage", "Olives"], price: 14 },
  { name: "La Dauphiné-Savoyarde", ingredients: ["Tomate", "Jambon", "Lardons", "Tartiflette", "Pomme de Terre", "Fromage", "Olives", "Crème Fraiche"], price: 13.5 },
  { name: "La Cht'i", ingredients: ["Crème fraiche", "Épaule", "Maroilles", "Champignons", "Fromage", "Olives"], price: 13.5 }
];
export default pizzas;