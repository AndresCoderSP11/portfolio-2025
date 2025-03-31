import React from 'react'

export default function WhereIStudy() {


    return (
        <>
            <div className=''>
                <img src="/UNI-figma.png" alt="Imagen de la universidad nacional de Ingenieria" />
            </div>

            <div className=' grid grid-cols-2 mt-10 gap-20'>
                <div className=' flex flex-col gap-10 text-center fontRobotoSlab font-bold'>
                    <div>
                        <h1 className=' text-white'>CARRERA</h1>
                        <p className=' text-white'>Ingenieria de Sistemas</p>
                    </div>
                    <div>
                        <h1 className=' text-white'>SITUACION</h1>
                        <p className=' text-white'>Egresado</p>
                    </div>
                </div>
                <div className=' flex flex-col gap-10  text-center fontRobotoSlab font-bold'>
                    <div>
                        <h1 className=' text-white'>ORDEN DE MERITO</h1>
                        <p className=' text-white'>Decimo Superior</p>
                    </div>
                    <div>
                        <h1 className=' text-white'>TIEMPO</h1>
                        <p className=' text-white'>2020-2025</p>
                    </div>
                </div>
            </div>

            <button className=' mx-auto shadow-purple mt-10 bg-purple-600 uppercase px-6 py-2 rounded-2xl text-white font-bold fontRobotoSlab'> Descagar Constancia de Estudios</button>

        </>
    )
}
