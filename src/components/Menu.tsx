const pizzas = [
  {
    name: "La Margarita",
    recipe: "Tomate, Fromage, Olives",
    price: 8.0,
  },
  {
    name: "La Romaine",
    recipe: "Tomate, Jambon, Fromage, Olives",
    price: 8.5,
  },
  {
    name: "La Reine",
    recipe: "Tomate, Jambon, Champignons, Fromage, Olives",
    price: 9.5,
  },
  {
    name: "L'Espagnole",
    recipe: "Tomate, Chorizo, Poivrons, Fromage, Olives",
    price: 9.5,
  },
  {
    name: "L'Orientale",
    recipe: "Tomate, Merguez, Poivrons, Fromage, Olives",
    price: 10,
  },
  {
    name: "La Sicilienne",
    recipe: "Tomate, Anchois, Câpres, Fromage, Olives",
    price: 9.5,
  },
  {
    name: "La Flamiche",
    recipe: "Crème fraiche, Lardons, Oignons, Fromage, Olives",
    price: 10,
  },
  {
    name: "La 4 Saisons",
    recipe:
      "Tomate, Jambon, coeurs d'Artichaud, Champignons, Poivrons, Fromage, Olives",
    price: 11,
  },
  {
    name: "La 4 Fromages",
    recipe: "Tomate, roquefort, mozzarella, chèvre, emmental, olives",
    price: 10.5,
  },
  {
    name: "La Pêcheur",
    recipe: "Tomate, Thon, Persillade, Fromage, Crème fraîche, Olives",
    price: 10,
  },
  {
    name: "La Provençale",
    recipe: "Tomate, Jambon, Oignons, Lardons, Persillade, Fromage, Olives",
    price: 11,
  },
  {
    name: "La Végétarienne",
    recipe:
      "Tomate ou Crème Fraiche, Champignons, Cur d'artichaut, Oignons, Poivrons, Fromage, Olives",
    price: 11,
  },
  {
    name: "La Kebab",
    recipe:
      "Base Crème Fraiche ou Tomate, Viande Kebab, Poivrons, Oignons, Fromage, Persillade, Olives",
    price: 12,
  },
  {
    name: "La Tropicale",
    recipe: "Crème Fraiche, Jambon, Ananas, Fromage, Olives",
    price: 10.5,
  },
  {
    name: "L'India",
    recipe: "Crème Fraiche, Poulet, Champignons, Curry, Fromage, Olives",
    price: 12,
  },
  {
    name: "La Biquette",
    recipe: "Crème Fraiche, Jambon, Chèvre, Miel, Fromage, Olives",
    price: 11,
  },
  {
    name: "La Même Pas Cap",
    recipe: "Crème Fraiche, Jambon, Oignons, Raclette, Fromage, Olives",
    price: 12,
  },
  {
    name: "La Fruits de Mer",
    recipe:
      "Tomate, Crevette, Moules, Calamars, Crème fraiche, Persillade, Fromage, Olives",
    price: 13,
  },
  {
    name: "La Campagne",
    recipe: "Tomate, Viande hâchée, Persillade, Fromage, Olives",
    price: 12.5,
  },
  {
    name: "La Marcelo",
    recipe: "Tomate, Magret, Lardons, Poivrons, Persillade, Fromage, Olives",
    price: 13,
  },
  {
    name: "La Dauphiné-Savoyarde",
    recipe:
      "Tomate, Jambon, Lardons, Reblochon, Raclette, Pomme de Terre, Fromage, Olives, Crème Fraiche",
    price: 13,
  },
  {
    name: "La Cht'i",
    recipe: "Crème fraiche, Jambon, Maroilles, Champignons, Fromage, Olives",
    price: 13,
  },
];

export default () => {
  const PizzaList = () => {
    return (
      <ul className="flex flex-col pb-3">
        {pizzas.map((pizza) => (
          <li className="flex flex-row mt-3 items-end shadow bg-slate-200">
            <div className="flex-1 p-3">
              <strong className="font-bold uppercase">{pizza.name}</strong>
              <p className="font-light">{pizza.recipe}</p>
            </div>
            <div className="p-3">
              <strong className="font-mono">{pizza.price} €</strong>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="overflow-auto">
      <PizzaList />
    </div>
  );
};
