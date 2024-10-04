function Btn({handleOnClick}) {
  return (
    <div 
    className="flex items-center justify-center p-2 w-full"
    >
        <button onClick={handleOnClick} className="hover:bg-green-400 transition-colors ease-linear bg-blue-500 p-4 text-lg md:text-2xl rounded-lg uppercase w-1/3 tracking-wider  font-bold">Pay Bill</button>
    </div>
  )
}

export default Btn