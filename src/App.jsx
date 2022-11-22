import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addtodo, deltodo } from './Redux/Action/action';
import { BsFillTrashFill } from 'react-icons/bs';
function App() {
	const states = useSelector((state) => state);
	console.log('state', states);
	let dispatch = useDispatch(addtodo, deltodo);
	const [input, setInput] = useState('');
	console.log('input', input);
	return (
		<div className="flex justify-center gap-12">
			<div>
				<h1>filter</h1>
			</div>
			<div className="bg-gray-100 border-2 border-collapse w-72 m-5 ">
				{/* <h1 className="text-red-600 text-center text-lg font-medium">
				{' '}
				React TO-DO With Vite
			</h1> */}
				<div className="flex justify-between p-2">
					<input
						onChange={(e) => setInput(e.target.value)}
						className="px-2 py-2 text-center bg-gray-100 border-2 rounded-md"
						placeholder="your plan ?..."
					></input>
					<button
						onClick={() => dispatch(addtodo(input))}
						className="bg-blue-400 px-2 py-1 text-white rounded-lg w-full ml-5"
					>
						Add
					</button>
				</div>

				{states.map((curr, i, arr) => {
					return (
						<div className="flex justify-between">
							<ul>
								<li>{curr}</li>
							</ul>
							<BsFillTrashFill onClick={() => dispatch(deltodo(curr))} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
