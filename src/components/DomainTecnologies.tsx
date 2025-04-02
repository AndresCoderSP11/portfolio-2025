import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"

export default function DomainTecnologies() {

    const tecnologiasBackend = [
        {
            nombre: 'Express',
            imagen: '/proyectos/express-figma.png'
        },
        {
            nombre: 'Node JS',
            imagen: '/proyectos/node-figma.png'
        },
        {
            nombre: 'Laravel',
            imagen: '/proyectos/laravel-figma.png'
        },
        {
            nombre: 'PHP',
            imagen: '/proyectos/php-figma.png'
        },
        {
            nombre: 'Sequelize',
            imagen: '/proyectos/sequelize-figma.png'
        },
        {
            nombre: 'AWS',
            imagen: '/proyectos/aws-figma.png'
        },
        {
            nombre: 'PostgreSQL',
            imagen: '/proyectos/postgre-figma.png'
        },
        {
            nombre: 'MongoDB',
            imagen: '/proyectos/mongo-figma.png'
        },
        {
            nombre: 'NestJS',
            imagen: '/proyectos/nest-figma.png'
        }
    ]

    const tecnologiasFrontend = [
        {
            nombre: 'HTML',
            imagen: '/proyectos/html-figma.png'
        },
        {
            nombre: 'CSS',
            imagen: '/proyectos/css-figma.png'
        },
        {
            nombre: 'JavaScript',
            imagen: '/proyectos/javascript-figma.png'
        },
        {
            nombre: 'TypeScript',
            imagen: '/proyectos/typescript-figma.png'
        },
        {
            nombre: 'TailwindCSS',
            imagen: '/proyectos/tailwind-figma.png'
        },
        {
            nombre: 'React',
            imagen: '/proyectos/react-figma.png'
        },
        {
            nombre: 'React Query',
            imagen: '/proyectos/rquery-figma.png'
        }
    ]

    return (
        <>
            <div className='border  w-1/2'>
                <p className=' text-center text-white font-bold fontRobotoSlab text-2xl'>Frontend</p>
                <div className=' grid grid-cols-3 grid-rows-3 gap-24 p-10'>
                    {tecnologiasFrontend.map((tecnologia,count) => (
                        <>
                            
                            <div className=''>
                                <motion.div 
                                variants={fadeIn("left", "tween", 0.2+(count*0.1), 1)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{once:false,amount:0.25}}
                                className='shine-container-programa bg-gray-800 flex justify-center rounded-4xl shadow-xl py-7 shadow-amber-100/25 mb-4 '>
                                    <img className='h-10' src={tecnologia.imagen} alt="Imagen de Tecnologia" />
                                </motion.div>
                                <p className='text-center text-white mt-4 font-bold fontRobotoSlab text-xl'>{tecnologia.nombre}</p>
                            </div>
                        </>
                    ))}
                </div>
            </div>
            <div className='border border-amber-50 w-0.5 bg-white '></div>
            <div className='w-1/2 border '>
                <p className=' text-center text-white font-bold fontRobotoSlab text-2xl'>Backend</p>
                <div className=' grid grid-cols-3 grid-rows-3 p-10 gap-24'>
                    {tecnologiasBackend.map((tecnologia,count) => (
                        <>
                            <div className=''>
                                <motion.div 
                                variants={fadeIn("left", "tween", 0.2+(count*0.1), 1)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{once:false,amount:0.25}}
                                className='shine-container-programa bg-gray-800 flex justify-center rounded-4xl shadow-xl py-7 shadow-amber-100/25 mb-4 '>
                                    <img className='h-10' src={tecnologia.imagen} alt="Imagen de Tecnologia" />
                                </motion.div>
                                <p className='text-center text-white mt-4 font-bold fontRobotoSlab text-xl'>{tecnologia.nombre}</p>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>

    )
}
