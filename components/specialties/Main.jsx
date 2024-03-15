import Page1 from './specialtiesPage/SpecialtiesPage1'
import Page2 from './specialtiesPage/SpecialtiesPage2'
import Page3 from './specialtiesPage/SpecialtiesPage3'
import Page4 from './specialtiesPage/SpecialtiesPage4'
import Page5 from './specialtiesPage/SpecialtiesPage5'

import Image from 'next/image'
import previus from '../../assets/previus.svg'
import next from '../../assets/next.svg'

export default function EspecialtiesMain() {
  return (
    <main className="bg-cyan-600 flex flex-col flex-1 justify-around">
      <h1 className='text-center text-3xl px-52 mx-auto font-medium'>Somos un hospital que nos preocupamos en brindar servicios de salud confiables 
        y seguros, con profesionales médicos altamente calificados.</h1>
      {/*<Page1/>
      <Page2/>
      */}
      <Page5/>

      <section className='flex justify-center items-center gap-5 border border-blue-700 h-10'>
        <button><Image src={previus} className='w-5'/></button>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <button><Image src={next} className='w-5'/></button>
      </section> 
    </main> 
    
  )
}
