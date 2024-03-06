import medicinaIntensiva from '../../../assets/medicinaIntensiva.svg'
import medicinaPediatrica from '../../../assets/medicinaPediatrica.svg'
import nefrologia from '../../../assets/nefrologia.svg'
import neumologia from '../../../assets/neumologia.svg'
import neurologia from '../../../assets/neurologia.svg'
import odontologia from '../../../assets/odontologia.svg'
import Image from 'next/image'
export default function SpecialtiesPage3() {
  return (
    <section className='grid grid-cols-3 gap-32 justify-items-center content-center h-2/3'>
        <article className='flex flex-col items-center text-xl'><Image src={medicinaIntensiva} className='w-24'/>Medicina intensiva</article>
        <article className='flex flex-col items-center text-xl'><Image src={medicinaPediatrica} className='w-24'/>Medicina pediátrica</article>
        <article className='flex flex-col items-center text-xl'><Image src={nefrologia} className='w-24'/>Nefrología</article>
        <article className='flex flex-col items-center text-xl'><Image src={neumologia} className='w-24'/>Neumología</article>
        <article className='flex flex-col items-center text-xl'><Image src={neurologia} className='w-24'/>Neurología</article>
        <article className='flex flex-col items-center text-xl'><Image src={odontologia} className='w-24'/>Odontología</article>
    </section>
  )
}
