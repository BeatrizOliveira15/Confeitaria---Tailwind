import { beneficios } from "../cards/CardsB"

export default function Benefits({}) {
    return (
        <div id="Benefits" className="bg-rose-100 text-yellow-900 py-20 font-serif">
                <h2 className="text-center text-3xl font-semibold mb-15">Principais Diferenciais</h2>
                <div className="grid md:grid-cols-3 gap-8 mx-15 text-center">
                    {beneficios.map((card, index) => {
                        const Icon = card.icon
                        return (
                            <div key={index} className="p-6 bg-rose-300 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition transform duration-300 flex flex-col items-center text-yellow-950">
                                <Icon className="text-4xl mb-4" />
                                <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                                <p>{card.description}</p>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}
