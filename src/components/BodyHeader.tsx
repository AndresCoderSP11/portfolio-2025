import React from 'react'
import TypewriterComponent from 'typewriter-effect'

export default function BodyHeader() {
    return (
        <>
            <div className='  columns-xl'>
                <div>
                    <p className=' text-white text-xl'>Egresado de Ingeniero de <br></br>
                        Sistemas especializado en el <br></br>
                        desarrollo de Software, amo <br />
                        hacer esto.</p>
                </div>
                <div className='mt-5 ml-10'>
                    <img src="/escudo-uni.png" alt="Escudo de la UNI" />
                </div>
                <div >
                    <p className='text-purple-500 text-3xl fontRobotoSlab mt-5'>
                        Tengo 2 años de <br></br>
                        experiencia en <br />
                        desarrollo FullStack
                    </p>
                </div>
            </div>
            <div className=' border columns-xl  '>
                <div className=' pinturaBackground flex justify-center items-end mt-14 '>
                    <img src="/andres-verde.jpg" className=" items-end ml-20 mt-11" alt="" />
                </div>
            </div>
            <div className=' border  columns-xl flex-col items-end'>
                <p className=' text-white text-right text-xl'>Soy una persona especializada <br></br>
                    en programación que asume <br></br>
                    retos en el trabajo. <br></br>
                    Me encanta demasiado <br />
                    trabajar en equipo ademas <br />
                    de ello siempre estoy muy <br />
                    interesado
                    en aprender nuevas <br />
                    tecnologias que optimizen el <br /> perfomance del software.
                </p>
                <p className=' figma-green text-2xl mt-5 text-right font-semibold'>
                    andres.salazar.p@uni.pe
                </p>

                <div className='border flex flex-col justify-end gap-6 mt-14 ml-40'>
                    <button className=' px-6 py-2 bg-purple-500 uppercase text-xl fontRobotoSlab rounded-xl  text-white shadow-2xL  cursor-pointer shadow-purple'> Descargar CV </button>
                    <button className=' px-6 py-2 bg-purple-500 uppercase text-xl fontRobotoSlab rounded-xl  text-white shadow-2xL  cursor-pointer shadow-purple'> Visitar GIT HUB </button>

                </div>

            </div>
        </>
    )
}
