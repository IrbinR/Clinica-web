import Image from "next/image";
import location from '../../assets/location.svg'
import phone2 from '../../assets/phone2.svg'
import email from '../../assets/email.svg'
import clock from '../../assets/clock.svg'

export default function ContactMain() {
  return (
    <main className="flex flex-col flex-1 items-center bg-cyan-600 h-screen">
      <h1 className="text-2xl w-80 text-center">Estamos a tu disposición en nuestros canales de atención</h1>
      <div className="flex items-center flex-1">
        <div className="flex gap-14">
          <div className="flex flex-col">
            <div className="relative"><p className="after:content-[''] after:absolute after:bg-cyan-950 after:w-6 after:bottom-[-4px] after:left-0 after:h-1">Dirección</p></div>
            <p className="flex gap-3 items-center mt-7"><Image src={location} className="w-7"/>Calle San Miguel 225, Urb. Santa Isabel</p>
          </div>
          <div className="flex flex-col">
            <div className="relative"><p className="after:content-[''] after:absolute after:bg-cyan-950 after:w-6 after:bottom-[-4px] after:left-0 after:h-1">Número de Contacto</p></div>
            <p className="flex items-start gap-3 mt-7 mb-3"><Image src={phone2} className="w-7"/><div className="flex flex-col"><span>Celular: 922063820</span><span>Fijo: (073) 524267</span></div></p>
            <p className="flex gap-3 items-center"><Image src={email} className="w-7"/>informes@clinicaherrera.com</p>
          </div>
          <div className="flex flex-col">
            <div className="relative"><p className="after:content-[''] after:absolute after:bg-cyan-950 after:w-6 after:bottom-[-4px] after:left-0 after:h-1">Horarios de atención</p></div>
            <p className="flex items-start gap-3 mt-7">
              <Image src={clock} className="w-7"/>
              <div className="flex flex-col">
                <div className="flex justify-between gap-9"><span>Lunes - Viernes</span><span>08:00 a.m. - 04:00 p.m.</span></div>
                <div className="flex justify-between gap-9"><span>Sábado</span><span>08:00 a.m. - 02:00 p.m.</span></div>
                <div className="flex gap-[5.5rem]"><span>Domingo</span><span>Cerrado</span></div>
              </div>
            </p>
          
          </div>
        </div>
      </div>
      
    </main>
  )
}
