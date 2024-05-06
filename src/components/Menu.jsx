export default ({ pizzaData }) => {

    const PizzaList = () => {
        return (
            <ul className="flex flex-col pb-3">
                {pizzaData.data.map((pizza, index) => (
                    <li className="flex flex-row mt-3 items-end border-t-2" key={index}>
                        <div className="flex-1 p-3">
                            <strong className="font-bold uppercase bg-red-200 p-1">
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
            <div className="flex flex-row justify-between">
                <h2 className="font-bold text-2xl min-w-200">Nos Piiiizzas 🤌 </h2>
                <p className="text-xs text-slate-800 text-right">
                    Toutes nos pizzas sont accompagnées d'olives noires.<br />
                    Prix TTC.
                </p>
            </div>
            <PizzaList />
        </div>
    );
};
