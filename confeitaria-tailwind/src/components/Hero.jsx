import imagem from "../assets/imagem-fundo.jpg";

export default function Hero({}) {
    return (
        <div id="Hero" className="relative w-full h-screen">

        {/* Imagem */}
        <div className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${imagem})` }}/>

        {/* Título */}
        <div className="relative z-10 flex py-12 px-80">
            <h1 className="text-6xl text-yellow-900 font-serif">CONFEITAIL</h1>
        </div>

        {/* Descrição */}
        <div className="relative z-10 flex flex-col py-2 px-75 max-w-5xl gap-15 items-center">
            <h2 className="text-yellow-900 font-serif">A Confeitail é uma confeitaria especializada em doces finos, unindo sofisticação, delicadeza e sabor em cada criação.</h2>

        {/* Botão */}
        <button
        className="relative z-10 w-45 bg-rose-300 text-yellow-50 py-3 rounded-2xl transition-colors hover:bg-rose-400 font-serif">Conhecer a Patisserie
        </button>

        </div>
 
        </div>
    )
}
