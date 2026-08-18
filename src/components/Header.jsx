import logo from "../assets/Logo.png";

export default function Header({ }) {
    return (
        <header className="bg-rose-300 text-rose-50 relative z-50">
            <div className="flex flex-col md:flex-row items-center justify-between py-3 px-5 md:px-7">

                {/* Logo */}
                <img src={logo} alt="Logo" className="h-16 w-auto rounded"/>


                {/* Menu */}
                <nav>
                    <ul className="flex flex-wrap md:flex-nowrap gap-7 sm:gap-15 md:gap-15 lg:gap-35  text-sm md:text-lg font-serif pt-4">
                        <li><a href="#Hero" className="hover:text-rose-400">Início</a></li>
                        <li><a href="#Benefits" className="hover:text-rose-400">Benefícios</a></li>
                        <li><a href="#Products" className="hover:text-rose-400">Produtos</a></li>
                        <li><a href="#Testimonials" className="hover:text-rose-400">Depoimentos</a></li>
                    </ul>
                </nav>

                {/* Botão de desaque */}
                <a href="#Products" className="px-4 bg-yellow-900 text-rose-50 font-semibold py-3 rounded-2xl transition-colors hover:bg-rose-400 font-serif flex items-center justify-center mt-3 md:mt-0">Patisserie</a>
                
            </div>
        </header>
    )
}
