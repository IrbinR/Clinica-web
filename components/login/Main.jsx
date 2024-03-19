import Link from 'next/link'

export default function LoginMain() {
  return (
    <main className="flex flex-col justify-center items-center bg-cyan-600 flex-1 gap-5">
     <h1 className='text-5xl font-semibold'>Inicia sesión</h1>
     <form className='flex flex-col w-96 gap-8 text-xl'>
        <div className='flex flex-col gap-2'>
            <label htmlFor="email">Correo electrónico</label>
            <input type='email' id='email' placeholder='Ingresa tu correo electrónico' className='h-14 rounded-[0.3rem] px-3'/>
        </div>

        <div className='flex flex-col gap-2'>
            <label htmlFor='password'>Contraseña</label>
            <input type='password' id='password' placeholder='Ingresa tu contraseña' className='h-14 rounded-[0.3rem] px-3'/>
        </div>
        
        <label className='text-center'>Olvidé mi contraseña</label>

        <button className='bg-cyan-800 h-12 rounded-full text-white font-semibold'>Ingresar</button>

        <div className='flex gap-2 justify-center'><p>¿No tienes cuenta?</p><p className='text-blue-900'><Link href={'/register'}>Regístrate</Link></p></div>
     </form>
      
    </main>
  )
}