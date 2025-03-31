
import AllProjects from './components/AllProjects'
import BodyHeader from './components/BodyHeader'
import Navegador from './components/Navegador'
import WhereIStudy from './components/WhereIStudy'
import Typewriter from 'typewriter-effect';
import DomainTecnologies from './components/DomainTecnologies';
import ExperienceWork from './components/ExperienceWork';

export default function App() {

  return (
    <>
      <div className='bg-gray-950 pb-20'>
        <div className=' container py-6 border mx-auto  flex items-center justify-between'>
          <Navegador></Navegador>
        </div>
        <p className=' text-center text-6xl  fontRobotoSlab font-bold p-6 text-white'>!Hola me presento, soy
          <span className=' text-purple-600'>
            <Typewriter
              options={{
                loop: true, // Activamos el loop para reiniciar automáticamente
                delay: 75, // Ajustamos la velocidad del tipo
                deleteSpeed: 50, // Ajustamos la velocidad de borrado
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('Programador FullStack!')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('Analista de Sistemas!')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('Anderson Andres!')
                  .pauseFor(1000)
                  .deleteAll()
                  .start(); // Vuelve a empezar automáticamente por el loop
              }}
            />
          </span></p>
        <div className=' container py-6 border mx-auto  grid grid-cols-3 justify-between'>
          <BodyHeader></BodyHeader>
        </div>

        <p className=' figma-green text-4xl text-center fontRobotoSlab'>Mis Proyectos</p>
        <p className=' text-white text-center fontRobotoSlab'>Realice el analisis y la implementacion de estos sistemas</p>
        <div className=' max-w-7xl mt-10 border-amber-50  py-6 border mx-auto'>

          <AllProjects></AllProjects>
          <AllProjects></AllProjects>
          <AllProjects></AllProjects>
        </div>

        <p className=' figma-green text-4xl text-center fontRobotoSlab mt-5'>Mis Experiencia Laboral</p>
        <p className=' text-white text-center fontRobotoSlab'>Les comparto mi experiencia laboral y los retos que tuve</p>

        {/* En esta parte vamos a Exponer Mi experiencia en Desarrollo */}
        <div className=' max-w-7xl mt-10 border-amber-50  py-6 border mx-auto'>
          <ExperienceWork></ExperienceWork>
        </div>

        <p className=' figma-green text-4xl text-center fontRobotoSlab mt-5'>Mis Habilidades</p>
        <p className=' text-white text-center fontRobotoSlab'>Me desenvuelvo muy bien en estas tecnologias</p>

        {/* Domain Tecnologies */}
        <div className='mx- max-w-7xl mt-2   py-6 border mx-auto flex justify-between gap-3'>
          <DomainTecnologies></DomainTecnologies>

        </div>

        <p className=' figma-green text-4xl text-center fontRobotoSlab mt-5'>Mis Estudios</p>
        <p className=' text-white text-center fontRobotoSlab'>Soy egresado de la Universidad Nacional de Ingenieria</p>

        <div className='mx- max-w-7xl mt-10   py-6 border mx-auto flex flex-col items-center'>
          <WhereIStudy></WhereIStudy>
        </div>



      </div>

      <footer className='bg-gray-950 border-t-1 border-gray-600 shadow shadow-black'>
        <p className=' text-center py-10 text-white text-xl fontRobotoSlab'>
          © Salazar Pizarro, Anderson Andres - Portafolio2025. Todos los derechos reservados.
        </p>
      </footer>
    </>
  )
}
