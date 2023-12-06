import {Link} from 'react-router-dom'

export default function Login(){
	return (
		<>
			<div>
				<div className="text-center mb-8">
					<h1 className="text-2xl font-bold text-gray-800 mt-2">
						¡Bienvenido a Tejiendo Sueños!
					</h1>
					<h1 className="font-medium text-gray-600 mb-4 text-xl">Inicia Sesion
					</h1>
					<div className="flex justify-center">
						<img src="/login_icon.png" alt="Icono login" className="w-[120px] h-[120px] rounded-full " />
					</div>
				</div>

				<div className="w-full justify-items-start ">

					<div className="mt-4 mb-2">
						<h1 className="text-gray-600 font-medium">Correo:</h1>
						<input type="email" className="p-2 rounded-[5px] outline-none w-full block" placeholder="example@explample.com" />
					</div>

					<div className="mt-4 mb-2">
						<h1 className="text-gray-600 font-medium">Contraseña:</h1>
						<input type="password" className="p-2 rounded-[5px] outline-none w-full block"/>
					</div>

					<div className="flex justify-center mt-6 mb-4">
						<input type="submit" value="Iniciar Sesion" className="p-2 w-full rounded-lg border-blue-500 border-2 cursor-pointer text-white font-medium bg-blue-500 hover:bg-white hover:text-blue-500 duration-300" />
					</div>
							
					<Link to={'/auth/registro'} className="text-gray-700 font-semibold">¿No tienes cuenta? ¡Crea una!</Link>

				</div>
			</div>

		</>
	)
}