import imagem from "../assets/imagem-fundo.jpg";

export default function Hero({}) {
    return (
        <div id="Hero" className="relative w-full h-screen">

        {/* Imagem */}
        <div className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${imagem})` }}/>

        {/* Título */}
        <div className="relative z-10 flex py-12 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-65 2xl:px-80">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-yellow-900 font-serif">CONFEITAIL</h1>
        </div>

        {/* Descrição */}
        <div className="relative z-10 flex w-[55%] sm:w-[55%] md:w-[60%] lg:w-[63%] xl:w-[65%] 2xl:w-[70%] flex-col py-2 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-30 gap-8 items-center">
            <h2 className="text-sm sm:text-base md:text-lg text-yellow-900 font-serif text-center max-w-xl">A Confeitail é uma confeitaria especializada em doces finos, unindo sofisticação, delicadeza e sabor em cada criação.</h2>

        {/* Botão */}
        <a href="#Products" className="relative z-10 flex items-center justify-center w-41 sm:w-45 bg-rose-400 text-yellow-50 py-3 rounded-2xl transition-colors hover:bg-rose-300 font-serif">Conhecer a Patisserie</a>

        </div>
 
        </div>
    )
}
