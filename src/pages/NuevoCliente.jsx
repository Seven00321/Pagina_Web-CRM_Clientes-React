import { useNavigate, Form, useActionData } from 'react-router-dom'

// Components
import Formulario from '../components/Formulario';
import Error from '../components/Error';

// Funcion Action
export async function action({request}) {
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);
    const email = formData.get('email');

    // Arreglo de errores
    const errores = []

    // Validacion
    if(Object.values(datos).includes('')){
        errores.push('Todos los campos son obligatorios')
        //return { ok: true};
    }

    // Validacion de email
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if(!regex.test(email)){
        errores.push('El email no es valido')
    }

    // Retornar datos si hay errores
    if(Object.keys(errores).length){
        return { ok: true}, errores;
    }

    //return { ok: true};
}

function NuevoCliente() {

    const errores = useActionData();
    const navigate = useNavigate();

    return (
        <>
            <h1 className="text-4xl font-black text-blue-900">Nuevo Cliente</h1>
            <p className='mt-3'>Llena todos los Campos para registrar un nuevo cliente</p>

            <div className='flex justify-end'>
                <button
                    className='bg-blue-800 text-white px-3 py-1 font-bold uppercase hover:text-blue-300 pointer'
                    onClick={() => navigate(-1)}
                >
                    Volver
                </button>
            </div>


            <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
                
                {errores?.length && errores.map( (error, i ) => <Error key={i}>{error}</Error> )}

                <Form 
                    method='post'
                    noValidate
                >
                    <Formulario
                    />

                    <input
                        type="submit"
                        className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg hover:text-blue-300 pointer'
                        value="Registrar Cliente"
                    />
                </Form>
            </div>
        </>
    )
}

export default NuevoCliente