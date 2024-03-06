import radioterapia from '../../../assets/radioterapia.svg'
import reumatologia from '../../../assets/reumatologia.svg'
import urologia from '../../../assets/urologia.svg'
import urologiaGeneral_Oncologica from '../../../assets/urologiaGeneral_Oncologica.svg'
import Image from 'next/image'

export default function SpecialtiesPage5() {
  return (
    <section className='grid grid-cols-3 gap-32 justify-items-center content-center h-2/3'>
        <article className='flex flex-col items-center text-xl'><Image src={radioterapia} className='w-24'/>Radioterapia</article>
        <article className='flex flex-col items-center text-xl'><Image src={reumatologia} className='w-24'/>Reumatología</article>
        <article className='flex flex-col items-center text-xl'><Image src={urologia} className='w-24'/>Urología</article>
        <article className='flex flex-col items-center text-xl'><Image src={urologiaGeneral_Oncologica} className='w-24'/>Urología general y oncológica</article> 
    </section>
  )
}
