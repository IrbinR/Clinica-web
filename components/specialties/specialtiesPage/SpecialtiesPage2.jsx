import geriatria from '../../../assets/geriatria.svg'
import ginecologia_Obstetricia from '../../../assets/ginecologia_Obstetricia.svg'
import hematologia from '../../../assets/hematologia.svg'
import infectologia from '../../../assets/infectologia.svg'
import medicinaFisica_Rehabilitacion from '../../../assets/medicinaFisica_Rehabilitacion.svg'
import medicinaGeneral_Oncologica from '../../../assets/medicinaGeneral_Oncologica.svg'
import Image from 'next/image'

export default function SpecialtiesPage2() {
  return (
    <section className='grid grid-cols-3 gap-32 justify-items-center content-center h-2/3'>
        <article className='flex flex-col items-center text-xl'><Image src={geriatria} className='w-24'/>Geriatría</article>
        <article className='flex flex-col items-center text-xl'><Image src={ginecologia_Obstetricia} className='w-24'/>Ginecología y obstetricia</article>
        <article className='flex flex-col items-center text-xl'><Image src={hematologia} className='w-24'/>Hematología</article>
        <article className='flex flex-col items-center text-xl'><Image src={infectologia} className='w-24'/>Infectología</article>
        <article className='flex flex-col items-center text-xl'><Image src={medicinaFisica_Rehabilitacion} className='w-24'/>Medicina física y rehabilitación</article>
        <article className='flex flex-col items-center text-xl'><Image src={medicinaGeneral_Oncologica} className='w-24'/>Medicina general y oncológica</article>
    </section>
  )
}
