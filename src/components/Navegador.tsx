
export default function Navegador() {
    return (
        <>
            <div className=' text-purple-500'>
                <p className=' font-extrabold fontRobotoSlab text-xl'>AndersonSP</p>
            </div>
            <div className=' text-white flex gap-5 items-center'>
                <p className=' font-semibold fontRobotoSlab'>HOME</p>
                <p className=' font-semibold fontRobotoSlab'>PROYECTOS</p>
                <p className=' font-semibold fontRobotoSlab'>TRABAJO</p>
                <p className=' font-semibold fontRobotoSlab'>HABILIDADES</p>
                <p className=' font-semibold fontRobotoSlab'>MIS ESTUDIOS</p>
                <p className=' font-semibold fontRobotoSlab'>+51 923876397</p>
                <div className=' bg-white rounded-2xl hover:shadow-2xl shadow hover:shadow-amber-100 p-1 '>
                    <img src="/phone-header.png" alt="" />
                </div>
            </div>
        </>
    )
}
