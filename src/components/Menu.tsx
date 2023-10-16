const pizzas = [
  {
    name: "La Margarita",
    description: "Tomate, Fromage, Olives",
    price: 8.0,
    ingredients: ["tomate", "fromage", "olives"],
  },
  {
    name: "La Romaine",
    description: "Tomate, Jambon, Fromage, Olives",
    price: 8.5,
    ingredients: ["tomate", "jambon", "fromage", "olives"],
  },
  {
    name: "La Reine",
    description: "Tomate, Jambon, Champignons, Fromage, Olives",
    price: 9.5,
    ingredients: ["tomate", "jambon", "champignons", "fromage", "olives"],
  },
  {
    name: "L'Espagnole",
    description: "Tomate, Chorizo, Poivrons, Fromage, Olives",
    price: 9.5,
    ingredients: ["tomate", "chorizo", "poivrons", "fromage", "olives"],
  },
  {
    name: "L'Orientale",
    description: "Tomate, Merguez, Poivrons, Fromage, Olives",
    price: 10,
    ingredients: ["tomate", "merguez", "poivrons", "fromage", "olives"],
  },
  {
    name: "La Sicilienne",
    description: "Tomate, Anchois, Câpres, Fromage, Olives",
    price: 9.5,
    ingredients: ["tomate", "anchois", "capres", "fromage", "olives"],
  },
  {
    name: "La Flamiche",
    description: "Crème fraiche, Lardons, Oignons, Fromage, Olives",
    price: 10,
    ingredients: ["creme_fraiche", "lardons", "oignons", "fromage", "olives"],
  },
  {
    name: "La 4 Saisons",
    description:
      "Tomate, Jambon, coeurs d'Artichaud, Champignons, Poivrons, Fromage, Olives",
    price: 11,
    ingredients: [
      "tomate",
      "jambon",
      "coeurs_d_artichaud",
      "champignons",
      "poivrons",
      "fromage",
      "olives",
    ],
  },
  {
    name: "La 4 Fromages",
    description: "Tomate, roquefort, mozzarella, chèvre, emmental, olives",
    price: 10.5,
    ingredients: [
      "tomate",
      "roquefort",
      "mozzarella",
      "chevre",
      "emmental",
      "olives",
    ],
  },
  {
    name: "La Pêcheur",
    description: "Tomate, Thon, Persillade, Fromage, Crème fraîche, Olives",
    price: 10,
    ingredients: [
      "tomate",
      "thon",
      "persillade",
      "fromage",
      "crème_fraîche",
      "olives",
    ],
  },
  {
    name: "La Provençale",
    description:
      "Tomate, Jambon, Oignons, Lardons, Persillade, Fromage, Olives",
    price: 11,
    ingredients: [
      "tomate",
      "jambon",
      "oignons",
      "lardons",
      "persillade",
      "fromage",
      "olives",
    ],
  },
  {
    name: "La Végétarienne",
    description:
      "Tomate ou Crème Fraiche, Champignons, Cur d'artichaut, Oignons, Poivrons, Fromage, Olives",
    price: 11,
    ingredients: [
      "tomate",
      "creme_fraiche",
      "champignons",
      "cur_d_artichaut",
      "oignons",
      "poivrons",
      "fromage",
      "olives",
    ],
  },
  {
    name: "La Kebab",
    description:
      "Base Crème Fraiche ou Tomate, Viande Kebab, Poivrons, Oignons, Fromage, Persillade, Olives",
    price: 12,
    ingredients: [
      "base_creme_fraiche",
      "tomate",
      "viande_kebab",
      "poivrons",
      "oignons",
      "fromage",
      "persillade",
      "olives",
    ],
  },
  {
    name: "La Tropicale",
    description: "Crème Fraiche, Jambon, Ananas, Fromage, Olives",
    price: 10.5,
    ingredients: ["creme_fraiche", "jambon", "ananas", "fromage", "olives"],
  },
  {
    name: "L'India",
    description: "Crème Fraiche, Poulet, Champignons, Curry, Fromage, Olives",
    price: 12,
    ingredients: [
      "creme_fraiche",
      "poulet",
      "champignons",
      "curry",
      "fromage",
      "olives",
    ],
  },
  {
    name: "La Biquette",
    description: "Crème Fraiche, Jambon, Chèvre, Miel, Fromage, Olives",
    price: 11,
    ingredients: [
      "creme_fraiche",
      "jambon",
      "chèvre",
      "miel",
      "fromage",
      "olives",
    ],
  },
  {
    name: "La Même Pas Cap",
    description: "Crème Fraiche, Jambon, Oignons, Raclette, Fromage, Olives",
    price: 12,
    ingredients: [
      "creme_fraiche",
      "jambon",
      "oignons",
      "raclette",
      "fromage",
      "olives",
    ],
  },
  {
    name: "La Fruits de Mer",
    description:
      "Tomate, Crevette, Moules, Calamars, Crème fraiche, Persillade, Fromage, Olives",
    price: 13,
    ingredients: [
      "tomate",
      "crevette",
      "moules",
      "calamars",
      "creme_fraiche",
      "persillade",
      "fromage",
      "olives",
    ],
  },
  {
    name: "La Campagne",
    description: "Tomate, Viande hâchée, Persillade, Fromage, Olives",
    price: 12.5,
    ingredients: ["tomate", "viande_hâchée", "persillade", "fromage", "olives"],
  },
  {
    name: "La Marcelo",
    description:
      "Tomate, Magret, Lardons, Poivrons, Persillade, Fromage, Olives",
    price: 13,
    ingredients: [
      "tomate",
      "magret",
      "lardons",
      "poivrons",
      "persillade",
      "fromage",
      "olives",
    ],
  },
  {
    name: "La Dauphiné-Savoyarde",
    description:
      "Tomate, Jambon, Lardons, Reblochon, Raclette, Pomme de Terre, Fromage, Olives, Crème Fraiche",
    price: 13,
    ingredients: [
      "tomate",
      "jambon",
      "lardons",
      "reblochon",
      "raclette",
      "pomme_de_terre",
      "fromage",
      "olives",
      "creme_fraiche",
    ],
  },
  {
    name: "La Cht'i",
    description:
      "Crème fraiche, Jambon, Maroilles, Champignons, Fromage, Olives",
    price: 13,
    ingredients: [
      "creme_fraiche",
      "jambon",
      "maroilles",
      "champignons",
      "fromage",
      "olives",
    ],
  },
];

import { PieChart } from "react-minimal-pie-chart";
import React, { useState } from "react";

interface PizzaProps {
  name: string;
  description: string;
  price: number;
  ingredients: string[];
}

interface PieData {
  title: string;
  value: number;
  color: string;
}

const ingredientColors: { [key: string]: { color: string; size: number } } = {
  tomate: { color: "#f44336", size: 50 },
  fromage: { color: "#ffeb3b", size: 45 },
  olives: { color: "black", size: 2 },
  jambon: { color: "#ff5722", size: 30 },
  champignons: { color: "#795548", size: 20 },
  chorizo: { color: "#c62828", size: 25 },
  poivrons: { color: "#8bc34a", size: 20 },
  merguez: { color: "#ff3d00", size: 30 },
  anchois: { color: "#78909c", size: 10 },
  capres: { color: "#9e9e9e", size: 5 },
  creme_fraiche: { color: "#fafafa", size: 40 },
  lardons: { color: "#ffab40", size: 30 },
  oignons: { color: "#ffea00", size: 20 },
  coeurs_d_artichaud: { color: "#66bb6a", size: 15 },
  roquefort: { color: "#5c6bc0", size: 30 },
  mozzarella: { color: "#fff9c4", size: 40 },
  chèvre: { color: "#ffecb3", size: 30 },
  emmental: { color: "#ffca28", size: 40 },
  thon: { color: "#0277bd", size: 35 },
  persillade: { color: "#558b2f", size: 10 },
  viande_kebab: { color: "#4e342e", size: 50 },
  ananas: { color: "#ffcc80", size: 20 },
  poulet: { color: "#ffab91", size: 40 },
  curry: { color: "#ff6f00", size: 10 },
  miel: { color: "#ffd54f", size: 5 },
  raclette: { color: "#a1887f", size: 40 },
  crevette: { color: "#ff5252", size: 30 },
  moules: { color: "#26a69a", size: 25 },
  calamars: { color: "#546e7a", size: 25 },
  viande_hâchée: { color: "#3e2723", size: 45 },
  magret: { color: "#6d4c41", size: 40 },
  reblochon: { color: "#bcAAA4", size: 40 },
  pomme_de_terre: { color: "#ffe082", size: 35 },
  maroilles: { color: "#a1887f", size: 40 },
};

const getPieChartDataFromIngredients = (
  ingredients: string[]
): { data: PieData[]; totalValue: number } => {
  let totalValue = 0;
  const data: PieData[] = [];

  ingredients.forEach((ingredient) => {
    const ingredientInfo = ingredientColors[ingredient];
    if (ingredientInfo) {
      totalValue += ingredientInfo.size;
      data.push({
        title: ingredient,
        value: ingredientInfo.size,
        color: ingredientInfo.color,
      });
    }
  });

  return { data, totalValue };
};

const Pizza: React.FC<PizzaProps> = ({
  name,
  description,
  price,
  ingredients,
}) => {
  const { data: pieChartData, totalValue } =
    getPieChartDataFromIngredients(ingredients);

  const [displayChart, setDisplayChart] = useState(false); //State to handle chart visibility

  const handleItemClick = () => {
    setDisplayChart(!displayChart); //Change the value of displayChart when item is clicked
  };

  return (
    <li
      onClick={handleItemClick}
      className="flex flex-row mt-3 items-end border-t-2"
    >
      <div className="flex-1 p-3">
        <strong className="font-bold uppercase bg-slate-200 p-1 rounded font-serif">
          {name}
        </strong>
        <p className="text-sm md:text-base font-light pt-2">{description}</p>
      </div>

      <div className="p-3 flex flex-row items-center">
        {displayChart && (
          <PieChart data={pieChartData} radius={7} totalValue={totalValue} />
        )}
        <strong className="font-mono text-lg ml-3">{price} €</strong>
      </div>
    </li>
  );
};

export default function PizzaList() {
  return (
    <ul className="flex flex-col pb-3">
      {pizzas.map((pizza: PizzaProps) => (
        <Pizza key={pizza.name} {...pizza} />
      ))}
    </ul>
  );
}
