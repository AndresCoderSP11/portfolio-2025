import React from 'react'
import '../styles/style-for-div.css';

export default function AllProjects() {
  return (
    <>
        <div className='grid grid-cols-2 gap-20 mb-10'>

            <div className='rounded-3xl border shine-container w-full h-92'>
                <img className='rounded-2xl w-full' src="/public/proyectos/proyecto-uptask.png" alt="" />
            </div>
            
            <div>
                <button className='px-6 py-4 bg-purple-500 font-bold text-xl fontRobotoSlab rounded-xl  text-white shadow-2xL  cursor-pointer shadow-purple'>Proyecto FullStack</button>
                <h3 className=' my-5 text-white font-bold'>Proyecto FullStack-Uptask</h3>
                <p className=' text-white text-justify'>Plataforma interactiva diseñada para la gestión de tareas, permitiendo a los usuarios registrarse, 
                    iniciar sesión y cerrar sesión de manera segura. Con una interfaz intuitiva y moderna,
                     los usuarios pueden crear proyectos y organizar sus tareas dentro de cada uno, facilitando la planificación 
                     y el seguimiento de sus actividades. Construida con React, TypeScript y Tailwind CSS en el frontend, y 
                     respaldada por Node.js, Express y MongoDB en el backend, la aplicación garantiza una experiencia ágil, 
                     dinámica y eficiente en la administración de proyectos. 🚀</p>
                <div className=' py-6 border mt-2 flex justify-around px-30'>
                    <img className=' h-10' src="/proyectos/react-figma.png" alt="" />
                    <img className=' h-10' src="/proyectos/typescript-figma.png" alt="" />
                    <img className=' h-10' src="/proyectos/mongo-figma.png" alt="" />
                    <img className=' h-10' src="/proyectos/typeodm-figma.png" alt="" />
                    <img className=' h-10' src="/proyectos/node-figma.png" alt="" />
                </div>
                <div className=' flex gap-5  justify-end'>
                    <img className='' src="/proyectos/github-figma.png" alt="Foto dde GitHub" />
                    <button className='background-green-figma  px-6 py-2  uppercase text-xl fontRobotoSlab rounded-xl  text-white shadow-2xL  cursor-pointer shadow-green'>Ver Demo</button>
                </div>
            </div>

        </div>
    </>
  )
}
