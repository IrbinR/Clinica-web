import Image from 'next/image'
import whatsapp from '@/assets/whatsapp.svg'
import ambulance from '@/assets/ambulance.svg'

export default function LoginFooter() {
  return (
    <footer className='flex bg-cyan-700 h-11'>
        <section className='border-e-2 border-cyan-800 w-1/2 flex items-center justify-center gap-3'><Image src={whatsapp}/><p>Contáctanos +51 922 063 820</p></section>
        <section className='border-s-2 border-cyan-800 w-1/2 flex items-center justify-center gap-3'><Image src={ambulance} className='w-6'/><p>Emergencia (073) 524267</p></section>
    </footer>
  )
}
