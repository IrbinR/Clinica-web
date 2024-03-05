import Footer from '../../components/Footer'
import cirugiaGeneral from '../../assets/cirugiaGeneral.svg'
import anestesiologia from '../../assets/anestesiologia.svg'
import cardiologia from '../../assets/cardiologia.svg'
import dermatologia from '../../assets/dermatologia.svg'
import endocrinologia from '../../assets/endocrinologia.svg'
import Image from 'next/image'

export default function EspecialtiesMain() {
  return (
    <>
      <main className="h-screen bg-cyan-600">
        <h1 className='text-center text-3xl w-[40rem] mx-auto font-medium'>Somos un hospital que nos preocupamos en brindar servicios de salud confiables 
          y seguros, con profesionales médicos altamente calificados.</h1>
        <section className='grid grid-cols-3 gap-4 justify-items-center content-center border h-96'>
          <article><Image src={anestesiologia}/>Anestesiología</article>
          <article><Image src={cardiologia}/>Cardiología</article>
          <article><Image src={cirugiaGeneral}/>Cirugía General</article>
          <article>Cirugía Torácica y cardiovascular</article>
          <article><Image src={dermatologia}/>Dermatología</article>
          <article><Image src={endocrinologia}/>Endocrinología</article>
        </section>
              
      </main>
      <Footer/>
    </>
    
  )
}
