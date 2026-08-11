import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer({ }) {
    return (
        <footer className="bg-rose-200 text-yellow-950 h-30 flex items-center justify-center font-serif gap-45">
                <p className="">Copyright © 2026 Confeitail. Todos os direitos reservados.</p>
                <p className="text-xl font-semibold">Confeitail</p>
                <p className="flex items-center gap-2"><FaInstagram className="text-2xl" />@Confeitail</p>
                <p className="flex items-center gap-2"><FaWhatsapp className="text-2xl" />(19)98765-4321</p>
        </footer>
    )
}
