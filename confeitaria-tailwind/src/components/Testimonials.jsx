import { depoimentos } from "../cards/CardsD"

export default function Testimonials({}) {
    return (
        <div id="Testimonials" className="bg-rose-300 text-rose-50 py-20 font-serif">
                <h2 className="text-center text-3xl font-semibold mb-8">Depoimentos</h2>
                <div className="grid md:grid-cols-3 gap-15 mx-15 text-center">
                    {depoimentos.map((card, index) => {
                        return (
                            <div key={index} className="p-6 bg-rose-200 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition transform duration-300 flex flex-col items-center text-yellow-950">
                                <img src={card.img} alt={card.name} className="w-25 h-25 object-cover rounded-full mb-4" />
                                <h3 className="text-xl font-semibold mb-4">{card.name}</h3>
                                <p  className="mb-4">{card.description}</p>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}
