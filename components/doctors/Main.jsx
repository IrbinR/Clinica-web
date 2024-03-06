import Image from "next/image"
import previus from '../../assets/previus.svg'
import next from '../../assets/next.svg'
import Footer from "../home/Footer"
export default function DoctorsMain() {
  return (
    <main className="flex flex-col justify-around bg-cyan-600">
      <h1 className='text-center text-3xl w-[40rem] mx-auto font-medium mb-8'>Encuentra al especialista que necesitas</h1>
       <div className="grid grid-cols-3 justify-items-center gap-5 h-screen">
         <div className="border border-transparent w-56 h-72 rounded overflow-hidden">
          <section className="rounded"><Image src="https://cms-img.auna.org/47075658_f90ce42c3b.png" width={650} height={650} alt="" className="w-full"/></section>
          <section className="flex flex-col gap-2 pl-3 py-4 bg-slate-300 h-full">
            <span className="uppercase text-xs">reumatología</span>
            <span className="font-semibold">Dra. Reátegui Sokolova Cristina</span>
            <span className="uppercase text-xs">cmp: 066856</span>
          </section>
         </div>
         
        <div className="border border-transparent w-56 h-72 rounded overflow-hidden">
        <section className="rounded"><Image src="https://cms-img.auna.org/25748287_c3289224c1.png" width={650} height={650} alt="" className="w-full"/></section>
        <section className="flex flex-col gap-2 pl-3 py-4 bg-slate-300 h-full">
          <span className="uppercase text-xs">medicina intensiva</span>
          <span className="font-semibold">Dr. Castillo Hidalgo Luis Ivan</span>
          <span className="uppercase text-xs">cmp: 070715</span>
        </section>
        </div>
        <div className="border border-transparent w-56 h-72 rounded overflow-hidden">
        <section className="rounded"><Image src="https://cms-img.auna.org/10610216_cdc090d4c3.png" width={650} height={650} alt="" className="w-full"/></section>
        <section className="flex flex-col gap-2 pl-3 py-4 bg-slate-300 h-full">
          <span className="uppercase text-xs">neumología</span>
          <span className="font-semibold">Dr. Daly Turcke Alejandro</span>
          <span className="uppercase text-xs">cmp: 046410</span>
        </section>
        </div>
        <div className="border border-transparent w-56 h-72 rounded overflow-hidden">
        <section className="rounded"><Image src="https://cms-img.auna.org/18210107_e906d5134f.png" width={650} height={650} alt="" className="w-full"/></section>
        <section className="flex flex-col gap-2 pl-3 py-4 bg-slate-300 h-full">
          <span className="uppercase text-xs">pediatría</span>
          <span className="font-semibold">Dr. Alayo Miranda Erasmo</span>
          <span className="uppercase text-xs">cmp: 040151</span>
        </section>
        </div>
        <div className="border border-transparent w-56 h-72 rounded overflow-hidden">
        <section className="rounded"><Image src="https://cms-img.auna.org/10218838_90911c9881.png" width={650} height={650} alt="" className="w-full"/></section>
        <section className="flex flex-col gap-2 pl-3 py-4 bg-slate-300 h-full">
          <span className="uppercase text-xs">ginecología y obstetricia</span>
          <span className="font-semibold">Dr. Ascenzo Battistini Alberto Germán</span>
          <span className="uppercase text-xs">cmp: 028444</span>
        </section>
        </div>
        <div className="border border-transparent w-56 h-72 rounded overflow-hidden">
        <section className="rounded"><Image src="https://cms-img.auna.org/40672471_cc1d9222fa.png" width={650} height={650} alt="" className="w-full"/></section>
        <section className="flex flex-col gap-2 pl-3 py-4 bg-slate-300 h-full">
          <span className="uppercase text-xs">radioterapia</span>
          <span className="font-semibold">Dr. Rau Vargas Cristihan Max</span>
          <span className="uppercase text-xs">cmp: 050368</span>
        </section>
        </div>
       </div>

       <div className='flex justify-center items-center gap-5 border border-blue-700 h-10 my-5'>
        <button><Image src={previus} className='w-5'/></button>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <button><Image src={next} className='w-5'/></button>
      </div> 

      
    </main>
  )
}
