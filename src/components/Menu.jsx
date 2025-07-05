import pizzas from "../data/pizzas";

export default () => {
    const PizzaCard = ({ pizza, index }) => (
        <div 
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 border border-slate-200"
            role="article"
            aria-labelledby={`pizza-${index}`}
        >
            <div className="flex flex-col h-full">
                <div className="flex-1">
                    <h3 
                        id={`pizza-${index}`}
                        className="font-bold text-lg mb-2 text-slate-800 bg-yellow-200 bg-opacity-80 px-2 py-1 rounded-md inline-block"
                    >
                        {pizza.name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                        {pizza.recipe}
                    </p>
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-green-600 font-mono">
                            {pizza.price}€
                        </span>
                        <span className="text-xs text-slate-500 uppercase tracking-wide">
                            TTC
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="py-8" aria-labelledby="menu-title">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 
                        id="menu-title"
                        className="text-3xl sm:text-4xl md:text-5xl font-bold font-dancing text-red-600 mb-2"
                    >
                        Nos Pizzas
                    </h2>
                    <div className="text-4xl mb-4">🍕</div>
                    <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
                        Toutes nos pizzas sont accompagnées d'olives noires et préparées avec des ingrédients frais
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
                    {pizzas.map((pizza, index) => (
                        <PizzaCard key={index} pizza={pizza} index={index} />
                    ))}
                </div>

                <div className="text-center bg-slate-50 rounded-lg p-4 sm:p-6">
                    <h3 className="text-xl font-bold font-dancing text-slate-800 mb-2">
                        Pour commander
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">
                        Appelez-nous pour passer commande ou organiser une livraison
                    </p>
                    <a 
                        href="tel:+33558749495"
                        className="btn-touch inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-base sm:text-lg"
                        aria-label="Appeler Prima Pizza pour commander"
                    >
                        <span className="mr-2" aria-hidden="true">📞</span>
                        05 58 74 94 95
                    </a>
                </div>
            </div>
        </section>
    );
};
