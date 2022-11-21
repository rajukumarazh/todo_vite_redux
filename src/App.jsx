import React from 'react';

function App() {
	return (
		<div className="bg-gray-100 border-2 border-collapse w-72 m-5 ">
			{/* <h1 className="text-red-600 text-center text-lg font-medium">
				{' '}
				React TO-DO With Vite
			</h1> */}
			<div className="flex justify-between p-2">
				<input
					className="px-2 py-2 text-center bg-gray-100 border-2 rounded-md"
					placeholder="your plan ?..."
				></input>
				<button className="bg-blue-400 px-2 py-1 text-white rounded-lg w-full ml-5">
					Add
				</button>
			</div>
		</div>
	);
}

export default App;
