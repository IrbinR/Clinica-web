import cirugiaGeneral from '../../../assets/cirugiaGeneral.svg'
import anestesiologia from '../../../assets/anestesiologia.svg'
import cardiologia from '../../../assets/cardiologia.svg'
import dermatologia from '../../../assets/dermatologia.svg'
import endocrinologia from '../../../assets/endocrinologia.svg'
import gastroenterologia from '../../../assets/gastroenterologia.svg'
import Image from 'next/image'

export default function SpecialtiesPage1() {
  return (
    <section className='grid grid-cols-3 gap-32 justify-items-center content-center h-2/3'>
        <article className='flex flex-col items-center text-xl'><Image src={anestesiologia} className='w-24'/>Anestesiología</article>
        <article className='flex flex-col items-center text-xl'><Image src={cardiologia} className='w-24'/>Cardiología</article>
        <article className='flex flex-col items-center text-xl'><Image src={cirugiaGeneral} className='w-24'/>Cirugía General</article>
        <article className='flex flex-col items-center text-xl'><Image src={dermatologia} className='w-24'/>Dermatología</article>
        <article className='flex flex-col items-center text-xl'><Image src={endocrinologia} className='w-24'/>Endocrinología</article>
        <article className='flex flex-col items-center text-xl'><Image src={gastroenterologia} className='w-24'/>Gastroenterología</article>
    </section>
  )
}
