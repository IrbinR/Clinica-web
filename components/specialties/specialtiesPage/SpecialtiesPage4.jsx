import oftalmologia from '../../../assets/oftalmologia.svg'
import ortopedia_Traumatologia from '../../../assets/ortopedia_Traumatologia.svg'
import otorrinolaringologia from '../../../assets/otorrinolaringologia.svg'
import psicologia from '../../../assets/psicologia.svg'
import psiquiatria from '../../../assets/psiquiatria.svg'
import radiologia from '../../../assets/radiologia.svg'
import Image from 'next/image'
export default function SpecialtiesPage4() {
  return (
    <section className='grid grid-cols-3 gap-32 justify-items-center content-center h-2/3'>
        <article className='flex flex-col items-center text-xl'><Image src={oftalmologia} className='w-24'/>Oftalmología</article>
        <article className='flex flex-col items-center text-xl'><Image src={ortopedia_Traumatologia} className='w-24'/>Ortopedia y traumatología</article>
        <article className='flex flex-col items-center text-xl'><Image src={otorrinolaringologia} className='w-24'/>Otorrinolaringología</article>
        <article className='flex flex-col items-center text-xl'><Image src={psicologia} className='w-24'/>Psicología</article>
        <article className='flex flex-col items-center text-xl'><Image src={psiquiatria} className='w-24'/>Psiquiatría</article>
        <article className='flex flex-col items-center text-xl'><Image src={radiologia} className='w-24'/>Radiología</article>
    </section>
  )
}
