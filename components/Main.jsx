import Image from 'next/image'
import calendar from '../assets/calendar.svg'
import doctor from '../assets/doctor.webp'
const Main = () => {
  return (
    <main className="flex items-center justify-center h-screen gap-6 px-10 bg-cyan-600">
        <section className='w-[29rem]'>
            <h2 className="uppercase">centro médico familiar online</h2>
            <h1 className="text-4xl my-3 font-semibold">Cuidamos tu salud en tiempos difíciles</h1>
            <p>Accede a los mejores servicios de la red médica online</p>
            <p>Estaremos contigo en todo el proceso de agendamiento</p>
            <button className="uppercase bg-cyan-950 text-white h-12 w-48 flex justify-center items-center gap-2 mt-7"><Image src={calendar} alt="Calendar.svg"/><span>agendar cita</span></button>
        </section>
        <section>
            {
            //https://w0.peakpx.com/wallpaper/315/432/HD-wallpaper-medical-hospital.jpg
            }
            <Image src={doctor} alt="Medicos.jpg" className='w-[39rem] rounded-lg' />
        </section>
    </main>
  )
}

export default Main