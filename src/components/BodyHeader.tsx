import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"




export default function BodyHeader() {
    return (
        <>
            <div className='  columns-xl'>
                <div
                >
                    <motion.p
                        variants={fadeIn("right", "tween", 0.3, 1)}
                        initial="hidden"
                        whileInView="show"
                    className=' text-white text-xl'>Egresado de Ingeniero de <br></br>
                        Sistemas especializado en el <br></br>
                        desarrollo de Software, amo <br />
                        hacer esto.
                    </motion.p>
                </div>
                <motion.div
                    variants={fadeIn("right", "tween", 0.3, 1)}
                    initial="hidden"
                whileInView="show"
                    className='mt-5 ml-10'>
                    <img
                        src="/escudo-uni.png" alt="Escudo de la UNI" />
                </motion.div>
                <div >
                    <motion.p
                    variants={fadeIn("right", "tween", 0.3, 1)}
                    initial="hidden"
                whileInView="show"
                    className='text-purple-500 text-3xl fontRobotoSlab mt-5'>
                        Tengo 2 años de <br></br>
                        experiencia en <br />
                        desarrollo FullStack
                    </motion.p>
                </div>
            </div>
            <div className=' border columns-xl  '>
                {/* FOTO DE ANNDRES */}
                <motion.div
                    variants={fadeIn("down", "tween", 0.2, 1)}
                    initial="hidden"
                whileInView="show"
                    className=' pinturaBackground flex justify-center items-end mt-14 '>
                    <motion.img 
                    variants={fadeIn("up", "tween", 0.5, 1)}
                    initial="hidden"
                whileInView="show"
                    src="/andres-verde.jpg" className=" items-end ml-20 mt-11" alt="" />
                </motion.div>
            </div>
            <div className=' border  columns-xl flex-col items-end'>
                <motion.p
                variants={fadeIn("left", "tween", 0.3, 1)}
                initial="hidden"
                whileInView="show"
                className=' text-white text-right text-xl'>Soy una persona especializada <br></br>
                    en programación que asume <br></br>
                    retos en el trabajo. <br></br>
                    Me encanta demasiado <br />
                    trabajar en equipo ademas <br />
                    de ello siempre estoy muy <br />
                    interesado
                    en aprender nuevas <br />
                    tecnologias que optimizen el <br /> perfomance del software.
                </motion.p>
                <motion.p
                variants={fadeIn("left", "tween", 0.3, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{once:false,amount:0.25}}
                className=' figma-green text-2xl mt-5 text-right font-semibold'>
                    andres.salazar.p@uni.pe
                </motion.p>

                <motion.div 
                variants={fadeIn("left", "tween", 0.4, 1)}
                initial="hidden"
                whileInView="show"
                className='border flex flex-col justify-end gap-6 mt-14 ml-40'>
                    <button className=' px-6 py-2 bg-purple-500 uppercase text-xl fontRobotoSlab rounded-xl  text-white shadow-2xL  cursor-pointer shadow-purple'> Descargar CV </button>
                    <button className=' px-6 py-2 bg-purple-500 uppercase text-xl fontRobotoSlab rounded-xl  text-white shadow-2xL  cursor-pointer shadow-purple'> Visitar GIT HUB </button>

                </motion.div>

            </div>
        </>
    )
}
