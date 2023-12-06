import {Link} from 'react-router-dom'

export default function Registro(){
	return (
		<>
			<div>
				<div className="text-center">
					<h1 className="text-2xl font-bold text-gray-800 mt-2">
						¡Bienvenido a Tejiendo Sueños!
					</h1>
					<h1 className="font-medium text-gray-600 mb-4 text-xl">¡Crea tu cuenta!
					</h1>		
				</div>

				<div className="flex gap-4">
					<div>
						<h1 className="text-gray-600 font-medium">Nombre:</h1>
						<input type="text" className="p-2 rounded-[5px] outline-none"/>
					</div>
		
					<div>
						<h1 className="text-gray-600 font-medium">Apellido:</h1>
						<input type="text" className="p-2 rounded-[5px] outline-none" />
					</div>
				</div>

				<div className="flex gap-4 my-4">
					<div>
						<h1 className="text-gray-600 font-medium">Cedula:</h1>
						<input type="number" className="p-2 rounded-[5px] outline-none"/>
					</div>

					<div>
						<h1 className="text-gray-600 font-medium">Telefono:</h1>
						<input type="number" className="p-2 rounded-[5px] outline-none" />
					</div>
				</div>

				<div className="flex gap-4">
					<div>
						<h1 className="text-gray-600 font-medium">Correo:</h1>
						<input type="email" className="p-2 rounded-[5px] outline-none"/>
					</div>

					<div>
						<h1 className="text-gray-600 font-medium">Direccion:</h1>
						<input type="text" className="p-2 rounded-[5px] outline-none" />
					</div>
				</div>

				<div className="mt-4 mb-2">
					<h1 className="text-gray-600 font-medium">Contraseña:</h1>
					<input type="password" className="p-2 rounded-[5px] outline-none w-full"/>
				</div>

				<div>
					<h1 className="text-gray-600 font-medium">Repetir Contraseña:</h1>
					<input type="password" className="p-2 rounded-[5px] outline-none w-full" />
				</div>

				<div className="flex justify-center mt-6 mb-4">

					<input type="submit" value="Crear Cuenta" className="p-2 w-full rounded-lg border-blue-500 border-2 cursor-pointer text-white font-medium bg-blue-500 hover:bg-white hover:text-blue-500 duration-300" />
				</div>
						
				<Link to={'/auth/login'} className="text-gray-700 font-semibold">¿Ya tienes cuenta? ¡Inicia Sesion!</Link>
			</div>
		</>
	)
}