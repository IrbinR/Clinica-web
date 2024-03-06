import Image from "next/image";
import phone from '../../assets/phone.svg'

export default function Footer() {
  return (
    <footer className="bg-cyan-700 flex justify-between items-center px-16 h-12 text-cyan-200">
        <div>Copyright &#169; | Todos los derechos reservados</div>
        <div className="flex gap-2">Para casos de Emergencia <Image src={phone} className="w-6"/>9173177920</div>

    </footer>
  )
}
