import { produtos } from "../cards/CardsP"

export default function Products({}) {
    return (
        <div id="Products" className="bg-rose-200 text-rose-400 py-20 font-serif h-screen">
                <h2 className="text-center text-4xl font-semibold mb-15">Nossos Produtos</h2>
                <div className="grid md:grid-cols-4 gap-10 mx-30 text-center">
                    {produtos.map((card, index) => {
                        return (
                            <div key={index} className="p-6 bg-rose-300 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition transform duration-300 flex flex-col items-center text-yellow-950">
                                <img src={card.img} alt={card.name} className="w-full h-48 object-cover rounded-md mb-4" />
                                <h3 className="text-xl font-semibold mb-4">{card.name}</h3>
                                <p  className="mb-5">{card.description}</p>
                                <button 
                                className="w-35 bg-rose-400 text-yellow-50 py-3 rounded-2xl transition-colors hover:bg-yellow-900">Encomendar
                                </button>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}
