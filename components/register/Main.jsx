import Image from 'next/image'
import Link from 'next/link'
import registroSalud from '@/assets/registroSalud.png'

export default function RegisterMain() {
  return (
    <main className='bg-cyan-600 flex flex-1 justify-center items-center'>
        <div className='w-1/2'>
          <Image src={registroSalud} className='bg-cover'/>
        </div>
        <form className='flex flex-col gap-4 w-1/2 py-4 px-20'>
            <h1 className='text-3xl text-center'>Ingrese sus datos</h1>
            <div className='flex flex-col'>
                <label>DNI</label>
                <input type='text' className='rounded-lg h-10 px-3'/>
            </div>

            <div className='flex flex-col'>
              <label>Nombre</label>
              <input type='text' className='rounded-lg h-10 px-3'/>
            </div>

            <div className='flex flex-col'>
              <label>Apellido</label>
              <input type='text' className='rounded-lg h-10 px-3'/>
            </div>

            <div className='flex flex-col'>
              <label>Género</label>
              <select name='genero' className='rounded-lg h-10 px-3'>
                <option value='m' selected>Masculino</option>
                <option value='f'>Femenino</option>
              </select>
            </div>

            <div className='flex flex-col'>
              <label>Fecha de nacimiento</label>
              <input type='date' className='rounded-lg h-10 px-3'/>
            </div>

            <div className='flex gap-2'>
              <input type='checkbox' className='w-7'/>
              <label>Acepto los <span className='text-blue-800'>Términos y Condiciones</span> y la <span>Política de Privacidad</span></label>
            </div>

            <div className='flex gap-2'>
              <input type='checkbox' className='w-7'/>
              <label> Acepto recibir <span className='text-blue-800'>beneficios, ofertas, publicidad y novedades</span></label>
            </div>
            <button className='bg-cyan-800 rounded-full h-10 text-white font-semibold'>Registrar</button>
            <div className='flex gap-2 justify-center'>
              <p>¿Ya tienes una cuenta?</p>
              <p><Link href={'/login'} className='text-blue-800'>Inicia sesión</Link></p>
            </div>
        </form>
    </main>
  )
}
