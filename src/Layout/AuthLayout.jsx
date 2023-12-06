import {Outlet} from 'react-router-dom'

export default function AuthLayout(){
	return (
		<div className="h-screen flex justify-center items-center">

			<main className="rounded-lg flex w-[1000px] bg-white h-[600px] shadow-xl">
				<div className="hidden md:block md:w-1/2 flex justify-center bg-rose-300 mx-2 my-2 rounded-lg shadow-xl">
					imagen
				</div>

				<div className="w-full md:w-1/2 flex justify-center bg-rose-200 mx-2 my-2 rounded-lg shadow-xl">
					<Outlet />
				</div>
			</main>
		</div>
	)
}