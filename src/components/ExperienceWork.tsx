import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"



export default function ExperienceWork() {
    return (
        <>
            <motion.div
            variants={fadeIn("down", "tween", 0.4, 1)}
            initial="hidden"
            whileInView="show"
            className=' border py-5 flex'>
                <div className='border  p-10 flex flex-col justify-center items-center'>
                    <img src="/proyectos/ctic-figma.png" className="h-18 w-18 border z-10" alt="" />
                    {/* <div className=' w-2 h-full py-20 bg-purple-500 pb-50'></div> */}
                </div>
                <div className=' w-full border h-full'>
                    <h1 className=' fontRobotoSlab text-gray-400 text-xl'>OTI UNI</h1>
                    <h3 className=" text-gray-100 fontRobotoSlab">Analista Programador FullStack</h3>
                    <p className=" fontRobotoSlab text-gray-200">
                        OTI UNI Analista Programador Full Stack
                        OTI UNI ofrece cursos gratuitos en diversas áreas tecnológicas y creativas, brindando aprendizaje práctico y experiencias únicas a estudiantes universitarios y egresados.
                    </p>
                    <ul className=' text-white fontRobotoSlab ml-8 flex flex-col gap-2 text-lg'>
                        <li>* Desarrollo de interfaces de usuario con HTML y CSS responsivos, priorizando la experiencia web.</li>
                        <li>* Desarrollo del sistema del Centro Médico utilizando Angular, incorporando autenticación, gestión de citas médicas y otros módulos esenciales.</li>
                        <li>* Participación en el desarrollo backend de estos proyectos, optimizando la lógica del servidor y la gestión de datos.</li>
                        <li>* Despliegue y configuración de los proyectos en el servidor, asegurando su correcto funcionamiento en producción.</li>
                        
                    </ul>
                    <div className=" flex mt-5">
                        <div className=" mt-5"><p className="fontRobotoSlab text-gray-400 text-xl">Tecnologias</p></div>
                        <div className=" ml-20 flex gap-5">
                            <img src="/proyectos/php-figma.png" alt="" />
                            <img src="/proyectos/javascript-figma.png" alt="" />
                            <img src="/proyectos/postgre-figma.png" alt="" />
                            <img src="/proyectos/html-figma.png" alt="" />
                            <img src="/proyectos/css-figma.png" alt="" />
                            <img src="/proyectos/aws-figma.png" alt="" />
                        </div>
                    </div>
                </div>
            </motion.div>

            

            
            
        </>
    )
}
