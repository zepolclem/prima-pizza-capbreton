import pizzas from "../data/pizzas";

export default () => {
    const PizzaCard = ({ pizza, index }) => (
        <div 
            className="bg-white p-0 sm:p-4 sm:h-48 flex flex-col border-b-2 border-slate-100 rounded-lg"
            role="article"
            aria-labelledby={`pizza-${index}`}
        >
            {/* 2 colonnes sur tous les écrans (titre/description à gauche, prix à droite) */}
            <div className="flex gap-2 sm:gap-4 h-full">
                <div className="flex-1 sm:flex sm:flex-col sm:justify-center">
                    <div>
                        <h3 
                            id={`pizza-${index}`}
                            className="font-bold text-base text-slate-800 bg-yellow-200 bg-opacity-80 ml-1 mt-1 px-2 py-0 rounded-md inline-block mb-2"
                        >
                            {pizza.name}
                        </h3>
                        <p className="text-xs sm:text-sm px-1 text-slate-600 leading-relaxed">
                            {pizza.recipe}
                        </p>
                    </div>
                </div>
                
                <div className="flex flex-col justify-center items-end text-right px-1">
                    <div className="flex flex-col items-end">
                        <span className="text-lg sm:text-xl font-bold text-green-600 font-mono">
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
        <section aria-labelledby="menu-title">
            <div className="container mx-auto">
                <div className="text-center mb-8">
                    <h2 
                        id="menu-title"
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-2 font-panpizza"
                    >
                        Nos Pizzas
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
                        Toutes nos pizzas sont accompagnées d'olives noires et préparées avec des ingrédients frais
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
                    {pizzas.sort((a, b) => a.price - b.price).map((pizza, index) => (
                        <PizzaCard key={index} pizza={pizza} index={index} />
                    ))}
                </div>
                

            </div>
        </section>
    );
};
