import Link from 'next/link'
import React from 'react'

export default function LoginMain() {
  return (
    <main className="flex flex-col justify-center items-center bg-cyan-600s h-screen gap-5">
     <h1 className='text-5xl font-semibold'>Inicia sesión</h1>
     <form className='flex flex-col w-96 gap-8 text-xl'>
        <div className='flex flex-col gap-2'>
            <label htmlFor="email">Correo electrónico</label>
            <input type='email' id='email' placeholder='Ingresa tu correo electrónico' className='h-14 rounded-[0.3rem]'/>
        </div>

        <div className='flex flex-col gap-2'>
            <label htmlFor='password'>Contraseña</label>
            <input type='password' id='password' placeholder='Ingresa tu contraseña' className='h-14 rounded-[0.3rem]'/>
        </div>
        
        <label className='text-center'>Olvidé mi contraseña</label>

        <button className='bg-cyan-800 h-12 rounded-full'>Ingresar</button>

        <div className='flex gap-2 justify-center'><p>¿No tienes cuenta?</p><p className='text-blue-900'>Regístrate</p></div>
     </form>
      
    </main>
  )
}