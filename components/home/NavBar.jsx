import Image from 'next/image'
import hospital from '../../assets/hospital.svg'
import Link from 'next/link'
export default function NavBar() {
  return (
    <nav className='h-16 flex flex-col justify-center px-12 bg-cyan-600 text-cyan-300 font-bold'>
        <ul className='flex justify-between items-center uppercase'>
            <li><Image src={hospital} alt="Hospital.svg" className='w-10' /></li>
            <div className='flex gap-4'>
                {/*<li className='after:content-[""] after:absolute after:bottom-0 after:left-[17.2rem] after:bg-cyan-950 after:w-[3.4rem] after:h-1'>inicio</li>*/}
                <li className='relative'><span className='after:content-[""] after:absolute after:bottom-[-0.2rem] after:left-0 after:bg-cyan-950 after:w-full after:h-1 cursor-pointer'>inicio</span></li>
                <li className='relative'><span className='after:content-[""] after:absolute after:bottom-[-0.2rem] after:left-0 after:bg-cyan-950 after:w-full after:h-1 after:hidden hover:after:inline cursor-pointer'><Link href='/specialties'>especialidades</Link></span></li>
                <li className='relative'><span className='after:content-[""] after:absolute after:bottom-[-0.2rem] after:left-0 after:bg-cyan-950 after:w-full after:h-1 after:hidden hover:after:inline cursor-pointer'><Link href='/doctors'>doctores</Link></span></li>
                <li className='relative'><span className='after:content-[""] after:absolute after:bottom-[-0.2rem] after:left-0 after:bg-cyan-950 after:w-full after:h-1 after:hidden hover:after:inline cursor-pointer'>horarios</span></li>
                <li className='relative'><span className='after:content-[""] after:absolute after:bottom-[-0.2rem] after:left-0 after:bg-cyan-950 after:w-full after:h-1 after:hidden hover:after:inline cursor-pointer'><Link href='/contact'>contacto</Link></span></li>
                <li className='relative'><span className='after:content-[""] after:absolute after:bottom-[-0.2rem] after:left-0 after:bg-cyan-950 after:w-full after:h-1 after:hidden hover:after:inline cursor-pointer'>mi cuenta</span></li>
            </div>
            <li className='border border-green-300 p-2 px-3 cursor-pointer hover:text-cyan-100'>servicio online</li>
        </ul>
    </nav>
  )
}
