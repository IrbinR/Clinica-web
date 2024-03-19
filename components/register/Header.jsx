import hospital from '@/assets/hospital.svg'
import Image from 'next/image'

export default function RegisterHeader() {
  return (
    <header className="bg-cyan-700 h-16 flex justify-center items-center gap-2">
        <Image src={hospital} alt="Hospital.svg" className='w-10' />
        <p>Cuidamos tu salud y de tu familia</p>
    </header>
  )
}
