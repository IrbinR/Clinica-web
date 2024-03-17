import cirugiaGeneral from '../../../assets/cirugiaGeneral.svg'
import anestesiologia from '../../../assets/anestesiologia.svg'
import cardiologia from '../../../assets/cardiologia.svg'
import dermatologia from '../../../assets/dermatologia.svg'
import endocrinologia from '../../../assets/endocrinologia.svg'
import gastroenterologia from '../../../assets/gastroenterologia.svg'
import Image from 'next/image'

export default function SpecialtiesPage1() {
  {/*<section className='grid grid-cols-3 gap-32 justify-items-center content-center h-2/3'>
      <article className='flex flex-col items-center text-xl'><Image src={anestesiologia} className='w-24'/>Anestesiología</article>
      <article className='flex flex-col items-center text-xl'><Image src={cardiologia} className='w-24'/>Cardiología</article>
      <article className='flex flex-col items-center text-xl'><Image src={cirugiaGeneral} className='w-24'/>Cirugía General</article>
      <article className='flex flex-col items-center text-xl'><Image src={dermatologia} className='w-24'/>Dermatología</article>
      <article className='flex flex-col items-center text-xl'><Image src={endocrinologia} className='w-24'/>Endocrinología</article>
      <article className='flex flex-col items-center text-xl'><Image src={gastroenterologia} className='w-24'/>Gastroenterología</article>
</section>*/}
  return (
    <section className='grid grid-cols-3 gap-5 justify-items-center content-center'>
      <article className='flex flex-col items-center w-64 text-justify rounded-lg shadow-3xl shadow-slate-700'>
        <div className='w-full bg-slate-300 flex flex-col items-center rounded-t-lg py-2'>
          <Image src={anestesiologia}/>
          <p>Anestesiología</p>
        </div>
        <p className='bg-slate-400 rounded-b-lg p-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </article>

      <article className='flex flex-col items-center w-64 text-justify rounded-lg shadow-3xl shadow-slate-700'>
        <div className="w-full bg-slate-300 flex flex-col items-center rounded-t-lg py-2">
          <Image src={cardiologia}/>
          <p>Cardiología</p>
        </div>
        <p className='bg-slate-400 rounded-b-lg p-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </article>

      <article className='flex flex-col items-center w-64 text-justify rounded-lg shadow-3xl shadow-slate-700'>
        <div className='w-full bg-slate-300 flex flex-col items-center rounded-t-lg py-2'>
          <Image src={cirugiaGeneral}/>
          <p>Cirugía General</p>
        </div>
        <p className='bg-slate-400 rounded-b-lg p-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </article>

      <article className='flex flex-col items-center w-64 text-justify rounded-lg shadow-3xl shadow-slate-700'>
        <div className='w-full bg-slate-300 flex flex-col items-center rounded-t-lg py-2'>
          <Image src={dermatologia}/>
          <p>Dermatología</p>
        </div>
        <p className='bg-slate-400 rounded-b-lg p-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </article>

      <article className='flex flex-col items-center w-64 text-justify rounded-lg shadow-3xl shadow-slate-700'>
        <div className='w-full bg-slate-300 flex flex-col items-center rounded-t-lg py-2'>
          <Image src={endocrinologia}/>
          <p>Endocrinología</p>
        </div>
        <p className='bg-slate-400 rounded-b-lg p-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </article>

      <article className='flex flex-col items-center w-64 text-justify rounded-lg shadow-3xl shadow-slate-700'>
        <div className='w-full bg-slate-300 flex flex-col items-center rounded-t-lg py-2'>
          <Image src={gastroenterologia}/>
          <p>Gastroenterología</p>
        </div>
        <p className='bg-slate-400 rounded-b-lg p-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </article>

    </section>
  )
}
