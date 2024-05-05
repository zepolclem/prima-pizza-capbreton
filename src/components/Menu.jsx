import React, { useEffect, useState } from 'react';

export default () => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        const fetchPizzas = async () => {
            try {
                const response = await fetch('https://directus.prima-pizza-capbreton.fr/items/pizza', {
                    method: 'GET',
                });
                if (response.ok) {
                    const data = await response.json();
                    setPizzas(data.data);
                } else {
                    throw new Error('Failed to fetch pizzas');
                }
            } catch (error) {
                console.error('Failed to fetch pizzas:', error);
            }
        };
        fetchPizzas();
    }, []);

    const PizzaList = () => {
        return (
            <ul className="flex flex-col pb-3">
                {pizzas.map((pizza, index) => (
                    <li className="flex flex-row mt-3 items-end border-t-2" key={index}>
                        <div className="flex-1 p-3">
                            <strong className="font-bold uppercase bg-slate-200 p-1 rounded font-serif">
                                {pizza.name}
                            </strong>
                            <p className="text-sm md:text-base font-light pt-2">
                                {pizza.recipe}
                            </p>
                        </div>
                        <div className="p-3">
                            <strong className="font-mono text-lg">{pizza.price} €</strong>
                        </div>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="p-3 md:border-4 border-double">
            <h2 className="font-bold text-2xl">Nos pizzas</h2>
            <p className="text-xs text-slate-800">
                Toutes nos pizzas sont accompagnées d'olives noires.<br />
                Prix TTC.
            </p>
            <PizzaList />
        </div>
    );
};
