import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer({ }) {
    return (
        <footer className="bg-rose-200 text-yellow-950 min-h-30 py-6 px-4 flex flex-col items-center justify-center font-serif gap-5 md:flex-row md:gap-8 lg:gap-16 xl:gap-40">
                <p className="text-center">Copyright © 2026 Confeitail. Todos os direitos reservados.</p>
                <p className="text-xl font-semibold">Confeitail</p>
                <p className="flex items-center gap-2"><FaInstagram className="text-2xl" />@Confeitail</p>
                <p className="flex items-center gap-2"><FaWhatsapp className="text-2xl" />(19)98765-4321</p>
        </footer>
    )
}
