import logo from "../assets/Logo.png";

export default function Header({ }) {
    return (
        <header className="bg-rose-300 text-rose-50 relative z-50">
            <div className="flex items-center justify-around py-3">

                {/* Logo */}
                <img src={logo} alt="Logo" className="h-16 w-auto rounded"/>


                {/* Menu */}
                <nav>
                    <ul className="flex gap-6 text-lg font-serif gap-30">
                        <li><a href="#Hero" className="hover:text-rose-400">Início</a></li>
                        <li><a href="#Benefits" className="hover:text-rose-400">Benefícios</a></li>
                        <li><a href="#Products" className="hover:text-rose-400">Produtos</a></li>
                        <li><a href="#Testimonials" className="hover:text-rose-400">Depoimentos</a></li>
                    </ul>
                </nav>

                {/* Botão de desaque */}
                <button
                className="w-30 bg-yellow-900 text-rose-50 font-semibold py-3 rounded-2xl transition-colors hover:bg-rose-400 font-serif">Patisserie
                </button>
                
            </div>
        </header>
    )
}
