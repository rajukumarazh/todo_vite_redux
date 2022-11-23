import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
	addtodo,
	deltodo,
	changeStatus,
	completed,
	uncompleted,
} from './Redux/Action/action';
import { BsFillTrashFill } from 'react-icons/bs';
import { FiCheck } from 'react-icons/fi';
function App() {
	const states = useSelector((state) => state);
	console.log('state', states);
	let dispatch = useDispatch(
		addtodo,
		deltodo,
		changeStatus,
		uncompleted,
		completed
	);
	const [input, setInput] = useState('');
	console.log('input', input);

	return (
		<div>
			<h1 className="text-center text-xl text-gray-700 font-semibold underline border-dotted">
				React Todo
			</h1>
			<div className="flex justify-center gap-12 ">
				<div>
					<div className=" flex gap-2 mt-8">
						<button
							onClick={() => dispatch(completed('done'))}
							className="bg-red-400 px-2 py-1 text-white rounded-lg w-20 h-8 "
						>
							Coml..
						</button>
						<button
							onClick={() => dispatch(uncompleted(''))}
							className="bg-blue-400 px-2 py-1 text-white rounded-lg w-20 h-8 "
						>
							Pend..
						</button>
						{/* <button className="bg-blue-400 px-2 py-1 text-white rounded-lg w-12 h-8 ">
						{' '}
						All
					</button> */}
					</div>
					<ul>
						<h2 className="text-lg font font-semibold text-black">
							{' '}
							Filtered task
						</h2>
						{states.changeble.map((c, i, ar) => {
							return (
								<div className="w-md bg-green-100 rounded-lg shadow-md ">
									<li className="text-red p-2 mt-2">{c.task}</li>
								</div>
							);
						})}
					</ul>
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

					{states.alltask?.map((curr, i, arr) => {
						return (
							<div className="flex justify-between mt-2" index={curr?.id}>
								<ul className="p-2">
									<li>{curr.task}</li>
								</ul>
								<div className="flex justify-end gap-5 p-2">
									<FiCheck
										onClick={() => dispatch(changeStatus(i))}
										// className="bg-green-300 text-white"
										className={
											curr.status === 'done'
												? 'bg-green-500 text-white'
												: 'bg-red-500 text-white'
										}
									/>
									<BsFillTrashFill onClick={() => dispatch(deltodo(i))} />
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
